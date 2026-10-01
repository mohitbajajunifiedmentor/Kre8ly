import React, { useState } from "react";

const ToggleComponent = ({ toggleComponent, toggle }) => {
  return (
    <div className="flex justify-between items-center w-72 bg-cardColor px-2 py-1.5 rounded-full gap-4">
      <button
        onClick={toggleComponent}
        className={`${
          toggle ? "bg-progressBarColor" : "bg-transparent"
        } px-4 py-1 text-sm rounded-full text-white`}
      >
        Show Analysis
      </button>
      <button
        onClick={toggleComponent}
        className={`${
          !toggle ? "bg-progressBarColor" : "bg-transparent"
        } px-4 py-1 text-sm rounded-full text-white`}
      >
        Hide Analysis
      </button>
    </div>
  );
};

export default ToggleComponent;
