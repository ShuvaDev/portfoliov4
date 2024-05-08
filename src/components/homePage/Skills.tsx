// Packages
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Data
import { skillsData } from "@/data/skillData";

const Skill = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 className="h2 leading-tight font-aldrich text-accent text-center">
            Skill
          </h2>
          <p className="max-w-sm mb-0 text-[14px] text-center w-full text-white/90">
            Technology Expertise: Empowering Web Development with Versatile
            Tools and Frameworks
          </p>
        </div>
        <div
          id="skills"
          className="relative z-50 border-t mt-6 border-[#25213b]"
        >
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-2 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
            </div>
          </div>

          <div className="w-full my-6">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map(({ id, image, name }) => (
                <div
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.10] cursor-pointer"
                  key={id.toString()}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-black/10 shadow-none shadow-gray-50 group-hover:border-accent transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <Image
                          src={image}
                          alt={name}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">{name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
