"use client";

import Avatar from "../Avatar/Avatar";
import { motion } from "framer-motion";
import { motionTransitionAbout } from "@/utils/motionTransition";
import { categories, about } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="items-center min-h-screen px-6 mx-auto align-middle mt-44 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
      <Avatar />

      <motion.div
        initial={motionTransitionAbout.initial}
        animate={motionTransitionAbout.animate}
        transition={motionTransitionAbout.transition}
      >
        <h1 className="mb-6 text-4xl font-medium">
          Creating webs with <br />
          <span className="text-secondary">awesome designs</span>
        </h1>
        <p>
          Hello! I&apos;m a passionate web developer with a flair for creating
          elegant and efficient websites. My expertise lies in front-end
          development, UX design, and bringing digital concepts to life with
          clean, functional code.
        </p>
        <br />
        <p>
          Dedicated to continuous learning, I stay ahead in technology trends,
          ensuring each project I undertake benefits from the latest
          advancements in web development. My goal is to deliver user-centric,
          responsive designs that make a lasting impact.
        </p>

        <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
          {categories.map(({ id, counter, text, line, mobile }) => (
            <div key={id} className={`${line && "ltr"}`}>
              <div
                className={`${
                  line &&
                  "px-4 border-2 border-transparent md:border-e-gray-100"
                } ${mobile && "border-e-gray-100"}`}
              >
                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                  + <CountUp end={counter} start={0} duration={5} />
                </p>
                <p className="text-xs uppercase max-w-[100px] text-right">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-28 md:mb-5">
          {about.map(({ id, text }) => {
            return (
              <div
                key={id}
                className={`${
                  index === id
                    ? "text-secondary duration-300 transition-all border-secondary"
                    : "border-white"
                } cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                onClick={() => setIndex(id)}
              >
                {index === id ? <BiDownArrow /> : <BiRightArrow />}
                <p className="ml-4 text-md md:text-lg">{text}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl">
          {about[index].items.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-center max-w-md gap-4 mx-auto"
              >
                <span>{items.tittle} </span> - <span>{items.date}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
