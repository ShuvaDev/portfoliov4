// Packages
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

// Components
import { experiencesData } from "@/data/experiencesData";
const GlowCard = dynamic(() => import("@/components/cards/glow-card"));

const Experiences = () => {
  return (
    <div id="education" className="relative z-50  my-12 lg:my-24 lg:mt-40 ">
      <div className="flex justify-center flex-col items-center">
        <h2 className="h2 leading-tight font-aldrich text-accent text-center">
          Experiences
        </h2>
        <p className="max-w-sm mb-0 text-[14px] text-center w-full text-white/90">
          Crafting Seamless Digital Experiences Through Expertise in Frontend
          and Backend Technologies
        </p>
      </div>
      <div id="skills" className="relative z-50 border-t mt-6 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-2 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-full">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center items-center">
            <div className="w-3/4 h-3/4">
              <Image
                src="/images/working.svg"
                width={500}
                height={300}
                alt="education"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex flex-col gap-6">
              {experiencesData.map(
                ({ id, company, duration, position, website }) => (
                  <GlowCard key={id} identifier={`education-${id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/images/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {duration}
                        </p>
                      </div>
                      <section className="flex justify-between pr-3">
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {position}
                            </p>
                            <p className="text-sm sm:text-base">{company}</p>
                          </div>
                        </div>
                        <a
                          href={website}
                          target="_website"
                          className="text-gradient z-50"
                        >
                          Website
                        </a>
                      </section>
                    </div>
                  </GlowCard>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
