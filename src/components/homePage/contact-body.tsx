// Packages
import {
  AiOutlineCode,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const ContactBody = () => {
  return (
    <div className="min-h-screen lg:min-h-[80vh]  flex flex-col justify-center gap-y-[30px]  px-[20px]">
      <div className="flex justify-center items-center">
        <p className="bg-[#E5E7EB]/10 text-white/90 px-[20px] py-[4px] rounded-[50px] ">
          Get in touch
        </p>
      </div>
      <p className="md:max-w-[576px] mx-auto text-center text-white/90 text-[14px] md:text-[20px]">
        What&apos;s next? Feel free to reach out to me if you&apos;re looking
        for a developer, have a query, or simply want to connect.
      </p>
      <div className="flex- flex-col items-center mx-auto">
        <div className="flex items-center gap-[10px] md:gap-x-[20px] text-[20px] md:text-[24px] font-rajdhani text-white/90">
          <AiOutlineMail />
          <p>monirhrabby.personal@gmail.com</p>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-[10px] justify-center 
            items-center"
      >
        <p className="text-white/80 text-[14px] md:text-[20px]">
          You may also find me on these platforms
        </p>
        <div className="flex items-center gap-[20px]">
          <a href="https://github.com/monirhabderabby" target="_github">
            <FiGithub className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
          <a
            href="https://www.linkedin.com/in/monirhabderabby/"
            target="_linkedIN"
          >
            <AiOutlineLinkedin className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>

          <a
            href="https://www.facebook.com/monirhabderabby/"
            target="_facebook"
          >
            <AiOutlineFacebook className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
          <a href="https://leetcode.com/u/monirhrabby" target="_leetcode">
            <AiOutlineCode className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
