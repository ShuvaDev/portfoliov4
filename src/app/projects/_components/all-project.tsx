"use client";
// Package
import { project } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Components
const ProjectCard = dynamic(() => import("@/components/cards/ProjectCard"));
const TabFilter = dynamic(() => import("./tab-filter"), { ssr: false });

interface AllProjectProps {
  projects: project[];
}

export interface filterOptions {
  id: number;
  label: string;
  value: string;
}

const AllProject: React.FC<AllProjectProps> = ({ projects }) => {
  const [current, setCurrent] = useState<string>("All");

  const filterOptions: filterOptions[] = [
    {
      id: 1,
      label: "All",
      value: "All",
    },
    {
      id: 2,
      label: "Full Stack Website",
      value: "Full Stack Website",
    },
    {
      id: 3,
      label: "Front End Website",
      value: "Front End Website",
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page with smooth animation on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pb-[50px] md:pt-[20px] ">
      <div className="mb-[50px]">
        <TabFilter
          filterOptions={filterOptions}
          defaultFilterActive="All"
          setValue={(value: string) => setCurrent(value)}
        />
      </div>
      <motion.div
        layout
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[50px] w-full bg-transparent"
      >
        <AnimatePresence>
          {projects
            ?.filter((project) => {
              if (current === "All") {
                return project;
              } else if (current === "Full Stack Website") {
                return project.project_type === "Full Stack Website";
              } else if (current === "Front End Website") {
                return project.project_type === "Front End Website";
              } else {
                return project;
              }
            })
            .map((project) => (
              <ProjectCard
                key={project.id}
                {...{ project }}
                height="h-[234px] md:h-[225px] lg:h-[230px]"
              />
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AllProject;
