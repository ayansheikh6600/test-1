import React, { useRef, useEffect } from "react";
import Player from "@vimeo/player";

function VimeoPlayer({
  link,
  autoplay = true,
  width,
  height
}: {
  link: string;
  autoplay?: boolean;
  width?:any
  height?:any
}) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!link || !playerRef.current) {
      return;
    }

    const player = new Player(playerRef.current, {
      url: link,
      width : width,
      height: height,
      autopause: true,
      autoplay,
    });

    return () => {
      player.unload();
    };
  }, [link, autoplay]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div ref={playerRef} className="mx-auto bg-black text-white">

      </div>
    </div>
  );
}

export default VimeoPlayer;
