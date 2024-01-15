"use client";

import { fadeIn } from "@/utils/motionTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full justify-center items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0 gap-6">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:w-[40vw] flex justify-center items-center"
      >
        <h1 className="mb-6 text-4xl font-medium text-center md:text-left">
          Let&apos;s chat. <br />
          <span className="text-secondary">Tell me about your</span> <br />
          <span className="text-secondary">project.</span>
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:w-[40vw] flex justify-center items-center"
      >
        <div className="w-full max-w-md bg-[rgba(0,0,0,0.2)] p-4 rounded-lg shadow sm:p-6 md:p-8 ">
          <form className="space-y-6">
            <h5 className="text-2xl font-medium text-white-900">
              Send us a message
            </h5>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <p className="text-sm">Tell us more about your project*</p>
              <textarea
                name="message"
                className="h-[150px] m-0 bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-400"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
