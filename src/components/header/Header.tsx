"use client";

import { fadeIn } from "@/utils/motionTransition";
import { motion } from "framer-motion";
import Link from "next/link";
import { socialNetworks } from "./Header.data";

const Header = () => {
  return (
    <div className="absolute z-20 inline-block w-full top-5 md:top-10">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="container justify-between mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl text-center text-white md:text-left font-medium">
              Code<span className="text-secondary">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src }) => (
              <Link
                href={src}
                key={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
