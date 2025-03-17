import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/HasanPaneProfile.jpg";
import { motion } from "framer-motion";
import { RiArrowRightBoxLine } from "react-icons/ri";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl front-thin tracking-tingt lg:mt-10 lg:text-4xl"
            >
              Hasan Pane Muhammad
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.a
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             href="../public/resume.pdf" target="_blank" rel="noopener noreferrer" download className="hero-btn mb-6 flex gap-1 rounded-full border border-purple-200/50 px-3 py-2 tracking-tighter">
              <span>
                Download Resume CV 
              </span>
              <RiArrowRightBoxLine/>
            </motion.a>
          
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x:100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1, delay: 1.2}}
            src={profilePic}
            className="rounded-2xl" 
            loading="lazy" 
            width="600" 
            height="500" 
            objectFit="cover"
             alt="Hasan Pane Muhammad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
