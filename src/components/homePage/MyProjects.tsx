"use client";

// Packages
import { fadeIn } from "@/components/animation/varient";
import { project } from "@prisma/client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Components
const ProjectCard = dynamic(() => import("@/components/cards/ProjectCard"));

interface MyProjectsProps {
  projects: project[];
}

const MyProjects: React.FC<MyProjectsProps> = ({ projects }) => {
  const router = useRouter();

  // make desicion that direction will be right or left when animate
  const animateDirectionDisicionMaker = (index: number) => {
    if (index === 0 || index === 2) {
      return "left";
    } else {
      return "right";
    }
  };
  return (
    <section className="section min-h-screen" id="work">
      <div className="container mx-auto h-auto">
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="flex-1 grid grid-cols-1 gap-y-12 md:grid-cols-2 gap-12 mb-10 lg:mb-0 space-y-2">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-[28px] lg:h2 leading-tight font-aldrich text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-6 lg:mb-20 text-[13px] lg:text-[14px] text-white/90">
                Crafting Dynamic Websites with Next.js, MongoDB, Express JS and
                React Packages for an Enhanced User Experience
              </p>
              <Link href="/projects" className="flex items-center">
                <div className="btn btn-sm flex items-center">
                  {" "}
                  View all projects
                </div>
              </Link>
            </motion.div>
            {projects?.slice(0, 3).map((project, index) => (
              <motion.div
                variants={fadeIn(animateDirectionDisicionMaker(index), 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={project.id}
              >
                <ProjectCard
                  height="h-[234px] md:h-[230px] lg:h-[313px]"
                  project={project}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
