"use client";

// Packages
import dynamic from "next/dynamic";
import Link from "next/link";

//Components
const PageTransition = dynamic(
  () => import("@/components/animation/page-transition"),
  { ssr: false }
);

interface ErrorType {}

const Error: React.FC<ErrorType> = () => {
  return (
    <PageTransition>
      <div className=" min-h-[calc(100vh-160px)] w-full flex flex-col gap-y-[30px] justify-center  items-center text-[25px]  ">
        <h1 className="text-[40px] lg:text-[60px]">Something</h1>
        <h1 className="text-[40px] lg:text-[60px]">
          Went <span className="text-gradient animate-pulse">Wrong</span>
        </h1>
        <Link
          href="/contact"
          className="btn w-full max-w-fit px-[20px] py-[5px]"
        >
          Contact Me
        </Link>
      </div>
    </PageTransition>
  );
};

export default Error;
