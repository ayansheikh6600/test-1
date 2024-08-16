import VimeoPlayer from '@/utils/vimoPlayer';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import axios from 'axios';
import React, { useEffect,useRef, useState } from 'react';

const HomeVideoCard = ({ title, desc, videoname, videoURl }: any) => {
    const [videoUrlSrc, setVideoUrl] = useState<string | null>(null);
    const screens = useBreakpoint();
    const playerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        if (videoname && !videoURl) {
            const fetchVideo = async () => {
                try {
                    const response = await axios.get(`https://api.iblossomlearn.org/api/v1/paly-video/${videoname}`, {
                        responseType: 'blob', // Ensure the response is a Blob
                    });
                    const videoBlob = new Blob([response.data], { type: 'video/mp4' });
                    const videoObjectUrl = URL.createObjectURL(videoBlob);
                    setVideoUrl(videoObjectUrl);
                } catch (error) {
                    console.error('Error fetching the video:', error);
                }
            };

            fetchVideo();
        }
    }, [videoname, videoURl]);

    // Use provided video URL if available
    const finalVideoUrl = videoURl || videoUrlSrc;

    if (!finalVideoUrl) {
        return <p>Loading video...</p>;
    }

    return (
        <div className='w-full text-center rounded-lg bg-gray-300'>
            {
                (videoURl ?
                    <div className="w-full bg-black p-2">
                        <VimeoPlayer
                            width={365}
                            height={347}
                            autoplay={false}
                            // link={result.data as string}
                            link={
                                videoURl
                            }
                        />
                    </div>
                    : <video controls className="w-full h-[240px]">
                        <source src={finalVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>)
            }

            <div className='w-full h-1 bg-black'></div>
            <div className='flex flex-col gap-3 p-2'>
                <h3>
                    {title || "DR. Sabah"}
                </h3>
                <p>
                    {desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </p>
            </div>
        </div>
    );
};

export default HomeVideoCard;
