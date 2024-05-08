"use client";
import { cn } from "@/lib/utils";
import { project } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdOutlineDocumentScanner } from "react-icons/md";

interface ProjectCardProps {
  project: project;
  height: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, height }) => {
  // distructure

  const { thumbnail_url, project_type, project_name, id, live_link } =
    project || {};

  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      initial={{ opacity: 0 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      }}
      layout
      className={cn(
        height,
        "group relative overflow-hidden aspect-w-16 aspect-h-9 border-2 border-white/40 rounded-xl w-full "
      )}
    >
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <Image
        className="group-hover:scale-125 transition-all  duration-500 overflow-hidden outline-none"
        sizes="(max-width: 768px) 100vw, 700px"
        fill
        src={thumbnail_url}
        alt="img1"
        priority
      />
      {/* pretitle */}
      <div className="absolute -bottom-full left-8  transition-all duration-500 group-hover:bottom-28 lg:group-hover:bottom-24 z-50">
        <span className="text-gradient">{project_type}</span>
      </div>
      {/* title */}
      <div className="absolute -bottom-full left-8  transition-all duration-700 group-hover:bottom-16 lg:group-hover:bottom-16 z-50">
        <span className="text-3xl text-white">{project_name}</span>
      </div>
      <div className="absolute -bottom-full left-8 transition-all duration-700 group-hover:bottom-8 lg:group-hover:bottom-8 z-50">
        <div className="flex items-center gap-x-[20px]">
          <Link href={`/projects/${id}`}>
            <MdOutlineDocumentScanner className="text-[20px] lg:text-[22px] cursor-pointer hover:scale-110 transition-all duration-700 text-white/90" />
          </Link>
          <a href={live_link} target="_live">
            <BsFillArrowUpRightCircleFill className="text-[20px] lg:text-[22px] cursor-pointer hover:scale-110 transition-all duration-700 text-white/90" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
