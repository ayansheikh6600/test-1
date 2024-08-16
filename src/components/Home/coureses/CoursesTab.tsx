import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import { ENUM_SORT_ORDER, ENUM_STATUS, ENUM_YN } from "@/constants/globalEnums";
import TopBarLoading from "@/components/ui/Loading/TopBarLoading";
import { Error_model_hook } from "@/utils/modalHook";
import { useGetAllCategoryQuery } from "@/redux/api/adminApi/categoryApi";

interface Category {
  _id: string;
  title: string;
}

const CoursesTab: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("all");

  const handleTabClick = (key: string) => {
    setActiveTabKey(key);
  };

  const query: Record<string, any> = {
    status: ENUM_STATUS.ACTIVE,
    limit: 99999,
    sortOrder: ENUM_SORT_ORDER.ASC,
    sortBy: "serial_number",
    isDelete: ENUM_YN.NO,
  };

  const { data, isLoading, error }: any = useGetAllCategoryQuery(query);
  const categoryData: Category[] = data?.data || [];

  useEffect(() => {
    if (error || (data && data.data?.success === false)) {
      const errorType: any = error;
      Error_model_hook(errorType?.message || data?.data?.message);
    }
  }, [error, data]);

  return (
    <div className="bg-white py-[30px]">
      <h2 className="text-center text-4xl font-bold leading-normal mb-6">
        Enroll Now To Access Iblossom Courses
      </h2>
      <div className="sm:container mx-auto flex overflow-x-auto space-x-2 mb-4 scrollbar-thin">
        <div
          className={`cursor-pointer p-2 rounded-t-lg transition duration-300 whitespace-nowrap ${
            activeTabKey === "all"
              ? "bg-black text-white"
              : "text-black bg-gray-300 font-bold"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All
        </div>
        {categoryData.map((category) => (
          <div
            key={category._id}
            className={`cursor-pointer p-2 rounded-t-lg transition duration-300 whitespace-nowrap ${
              activeTabKey === category._id
                ? "bg-black text-white"
                : "text-black bg-[#c9c8c8bd] font-bold"
            }`}
            onClick={() => handleTabClick(category._id)}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {isLoading ? (
          <TopBarLoading />
        ) : (
          <Courses
            query={{
              status: "active",
              ...(activeTabKey !== "all" && { category: activeTabKey }),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CoursesTab;
