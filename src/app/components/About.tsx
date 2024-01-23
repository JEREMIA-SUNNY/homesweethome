"use client";
import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div>
      <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
              <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
                <img
                  src="/home2.jpg"
                  className="w-36 z-0  h-full    object-fill fill-y text-y   "
                />
              </div>
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
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
                  className="flex font-mono text-sm uppercase   "
                >
                  About Us
                </motion.div>
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
                  className="mb-6 max-w-lg text-5xl font-light font-mono leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug"
                >
                  We make you look
                  <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                    different
                  </span>
                </motion.div>
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
                  className="text-base text-gray-700"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </motion.div>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <button className="group mr-8 relative h-12 w-fit px-8 overflow-hidden rounded-lg border-black border-2 bg-white text-lg shadow">
                    <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms]  ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Learn More
                    </span>
                  </button>
                  <a
                    href="/"
                    aria-label=""
                    className="group inline-flex items-center font-semibold text-g1"
                  >
                    Watch how it works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
              <motion.div
                initial={{
                  x: 200,
                  y: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeIn",
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none"
              >
                <img src="/home2.jpg" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
          About Us
        </div>
        <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
          {/* <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
            ></path>
          </svg> */}
        </div>
      </div>
    </div>
  );
}

export default About;
