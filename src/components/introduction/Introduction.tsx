"use client";

import { fadeIn } from "@/utils/motionTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="bg-[#131424]/60 w-full z-10">
      <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
        <div className="container flex justify-center items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
          <motion.div
            className="hidden w-auto h-auto mx-auto md:block"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              src="/assets/profile_image.png"
              priority
              width="800"
              height="600"
              alt="Avatar"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="mb-5 text-4xl leading-tight md:mb-10 font-medium">
              If you can think it, <br />
              <span className="text-secondary">you can code it</span>
            </h1>
            <p className="max-w-sm text-xl md:max-w-2xl md:mx-0 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              veniam animi sit ea itaque, esse ab voluptate magnam officia
              atque.
            </p>

            <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row mt-10">
              <a
                href="/projects"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
              >
                Projects
              </a>
              <a
                href="/contacts"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
              >
                Contacts
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;