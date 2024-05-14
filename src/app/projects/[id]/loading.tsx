import React from "react";

interface LoadingType {}

const Loading: React.FC<LoadingType> = () => {
  return (
    <div className="container py-[50px]">
      <div className=" h-[200px] md:h-[370px] lg:h-[500px] md:w-[80%] w-full mx-auto bg-white/10 rounded-sm animate-pulse"></div>
      <div className="md:w-[80%] mx-auto mt-[50px]">
        <div className="h-[20px] w-[220px] bg-white/10 rounded-md animate-pulse"></div>
        <div className="mt-[40px] space-y-3">
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
          <div className="w-full h-[10px] bg-white/10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
