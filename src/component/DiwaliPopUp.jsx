import React from "react";
const DiwaliVideo = "/assets/DiwaliVideo.mp4"; // moved to /public

const DiwaliPopUp = ({ setCloseDiwaliPopUp }) => {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-50"
      onClick={() => setCloseDiwaliPopUp(false)}
    >
      <video
        src={DiwaliVideo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover relative" // Ensure video covers full area
      />
    </div>
  );
};

export default DiwaliPopUp;
