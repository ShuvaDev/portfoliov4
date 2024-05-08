import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-full h-screen ">
      <Image
        src="/images/smoke.png"
        fill
        alt="smoke"
        className=" opacity-30 smoke-image"
        priority
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white/40 text-[80px] lg:text-[140px] font-bold animate-pulse">
          404
        </h1>
        <h3 className="mt-[40px] text-[30px] font-semibold text-white/30">
          Page not found
        </h3>
        <p className="text-white/30">I tried to catch some fog, but I mist</p>
      </div>
    </div>
  );
};

export default NotFound;
