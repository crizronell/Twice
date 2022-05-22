import React from "react";
import trailer_video from "../assets/video/trailer.mp4";

function Banner() {
  return (
    <>
      <div className="container mx-auto  ">
        <video
          className="object-fill h-screen xl:object-contain px-4   "
          loop
          muted
          autoPlay
        >
          <source src={trailer_video} />
        </video>
      </div>
    </>
  );
}

export default Banner;
