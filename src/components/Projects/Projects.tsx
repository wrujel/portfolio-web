"use client";

import { fadeIn } from "@/utils/motionTransition";
import { motion } from "framer-motion";
import { scroll } from "framer-motion/dom";
import { cardContent } from "./Projects.data";
import { useState } from "react";

const Projects = () => {
  const [index, setIndex] = useState<number | null>(0);
  let width: number | null = null;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }

  const isMobile = () => {
    return width ? width < 768 : false;
  };

  if (isMobile()) {
    scroll((progress) => {
      if (progress < 0.2) setIndex(0);
      else if (progress > 0.2 && progress < 0.4) setIndex(1);
      else if (progress > 0.4 && progress < 0.6) setIndex(2);
      else if (progress > 0.6 && progress < 0.8) setIndex(3);
      else if (progress > 0.8) setIndex(4);
    });
  }

  const handleHover = (id: number) => {
    if (!isMobile()) setIndex(id);
  };

  const cardVariants = {
    expanded: {
      width: isMobile() ? "75svw" : "360px",
      opacity: 1,
    },
    collapsed: {
      width: "200px",
      opacity: 0.3,
    },
  };

  return (
    <>
      <div className="relative min-w-min flex flex-col justify-center gap-10 pb-32 md:min-h-screen mt-36 md:mt-0 place-items-center">
        <div className="mx-4 md:mr-48 xl:mx-4">
          <motion.h1
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-5 text-3xl text-center md:text-4xl font-semibold"
          >
            My latest <span className="text-secondary">Projects</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
          >
            {cardContent.map(({ id, title, description, imageUrl, skills }) => (
              <div key={id}>
                <motion.div
                  className={`cursor-pointer h-[75svh] md:h-[600px] lg:h-[750px] bg-cover bg-center bg-no-repeat rounded-[20px] ${
                    index === id && "expanded"
                  } `}
                  initial={{ opacity: 1 }}
                  variants={cardVariants}
                  animate={id === index ? "expanded" : "collapsed"}
                  exit={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => handleHover(id)}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >
                  <div className="flex flex-col justify-end h-full">
                    <div className="rounded-b-[20px] bg-gray-800 bg-opacity-80 min-h-[100px] flex flex-col items-center justify-center px-3 pt-4 pb-5">
                      <h2 className="text-xl font-semibold text-center text-white">
                        {title}
                      </h2>
                      {id === index && (
                        <motion.div
                          initial={{ display: "none", opacity: 0, scale: 0.2 }}
                          animate={{ display: "block", opacity: 1, scale: 0.9 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.2,
                          }}
                        >
                          <p className="text-center">{description}</p>
                          <div className="flex justify-center gap-5 mt-3">
                            {skills.map((data, index) => (
                              <p key={index}>{data.icon}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute right-16 bottom-16 hidden md:inline-block"
      >
        Made with ❤️ by Code
        <span className="text-secondary font-semibold">Dev</span>
      </motion.div>
    </>
  );
};

export default Projects;
