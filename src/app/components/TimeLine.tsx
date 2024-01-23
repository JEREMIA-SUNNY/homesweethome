"use client";

import React from "react";
import { motion } from "framer-motion";
export const TimeLine = () => {
  return (
    <div>
      <div className="text-center text-4xl font-medium leading-normal mb-2  text-black">
        How its Work
      </div>
      <div className="container font-mono  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 left-[50%] border-gray-700 h-full border"></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>

            <motion.div
              initial={{
                x: -180,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="order-1  bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-white text-xl">
                Define Your Niche
              </h3>
              <p className="text-sm leading-snug  text-white text-opacity-100">
                Identify whether you want to focus on residential, commercial,
                or both types of properties. Consider any specific geographic
                areas or property features you want to specialize in.
              </p>
            </motion.div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <motion.div
              initial={{
                y: -180,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="order-1 bg- rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-black text-xl">
                Legal Considerations
              </h3>
              <p className="text-sm font-medium  text-black text-opacity-100">
                Understand the legal requirements and regulations related to
                real estate transactions in your target areas. Ensure compliance
                with property and rental laws.
              </p>
            </motion.div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <motion.div
              initial={{
                x: -180,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-white text-xl">
                Business Model
              </h3>
              <p className="text-sm  text-white text-opacity-100">
                Decide on your business model. Will you charge property owners a
                fee for listings, take a percentage of successful transactions,
                or use a subscription-based mode
              </p>
            </motion.div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="order-1 bg- rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-black text-xl">
                Search and Filters:
              </h3>
              <p className="text-sm font-medium  text-black text-opacity-100">
                Create robust search functionality with filters based on
                location, property type, price range, and other relevant
                criteria.Develop a system for verifying property listings to
                build trust among users. Implement user reviews and ratings to
                help users make informed decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
