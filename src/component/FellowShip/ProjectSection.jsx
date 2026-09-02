import React from "react";
import { Tilt } from "react-tilt";
const ProjectFrame = "/assets/machineLearning/ProjectFrame.png";
const ProjectSection = ({ Project }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative w-full ">
      {Project.map((item, index) => (
        <Tilt
          key={index}
          options={defaultOptions}
          className="flex flex-col items-center justify-start w-full "
        >
          <figure className="relative w-full max-w-xs">
            <img
              src={ProjectFrame}
              alt={item?.alt + " " + "Frame Image"}
              className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-black"
            />
            <img
              src={item?.imgs}
              alt={item?.alt}
              className="w-4/5 object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 rounded-tl-2xl rounded-tr-2xl"
            />
          </figure>
          <div className="w-full max-w-xs flex flex-col items-start">
            <h3 className="text-lg font-bold text-content mt-4 mb-4  w-full">
              {item?.title}
            </h3>
            <p className="text-sm text-content-secondary">{item?.description}</p>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default ProjectSection;
