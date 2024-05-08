"use client";
import { useRouter } from "next/navigation";

const ProjectBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="  border hover:opacity-75 duration-500 border-white/20 rounded-md px-5 md:px-8  h-[50px] md:h-[80px] flex flex-col items-center justify-center text-white"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default ProjectBackButton;
