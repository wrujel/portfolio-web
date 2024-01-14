"use client";

import { motion } from "framer-motion";

import AvatarWithTablet from "../Avatar/AvatarWithTablet";
import { fadeIn } from "@/utils/motionTransition";
import Slider from "./Slider/Slider";

const Services = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AvatarWithTablet />

      <div className="flex flex-col items-center md:flex-row gap-x-5">
        <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10 md:mb-32">
          <motion.h1
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-3xl font-medium"
          >
            My <span className="text-secondary">services</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md"
          >
            Offering a suite of web development services: bespoke website
            design, responsive development, e-commerce solutions, content
            management systems, SEO optimization, and ongoing website
            maintenance to ensure seamless digital experiences.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Slider />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
