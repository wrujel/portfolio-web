"use client";

import { motion } from "framer-motion";
import AvatarWithTablet from "../Avatar/AvatarWithTablet";
import { fadeIn } from "@/utils/motionTransition";
import Slider from "./Slider/Slider";

const Customers = () => {
  return (
    <div className="h-screen">
      <AvatarWithTablet />
      <div className="flex flex-col justify-center min-h-screen">
        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-5 text-4xl text-center md:my-10"
        >
          Reviews from <br />{" "}
          <span className="text-secondary">our customers</span>
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.5)}
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

export default Customers;
