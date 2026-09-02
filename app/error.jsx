"use client";

import { useEffect } from "react";
import ErrorPage from "@/views/ErrorPage";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <ErrorPage />
      <div className="flex justify-center pb-10">
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-full bg-[#3D207E] text-white text-sm font-medium hover:opacity-90 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
