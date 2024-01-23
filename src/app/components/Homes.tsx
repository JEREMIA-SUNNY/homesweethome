"use client";
import { motion } from "framer-motion";

const Homes = () => {
  return (
    <div className="h-[150px] basis-[90%] py-10 flex flex-row justify-between  text">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className=" text-2xl font-extrabold "
      >
        Urbon
      </motion.div>

      <div className="flex pt-2 gap-8 ">
        <motion.div
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
          }}
          className="text-lg cursor-pointer h-fit font-medium"
          whileHover={{
            borderBottom: "2px solid #000",
          }}
          transition={{ duration: 0.5 }}
        >
          Home
        </motion.div>
        <motion.div
          className="text-lg cursor-pointer h-fit font-medium"
          whileHover={{
            borderBottom: "2px solid #000",
          }}
          transition={{ duration: 0.5 }}
        >
          Service
        </motion.div>
        <motion.div
          className="text-lg cursor-pointer h-fit font-medium"
          whileHover={{
            borderBottom: "2px solid #000",
          }}
          transition={{ duration: 0.5 }}
        >
          Property
        </motion.div>
        <motion.div
          initial={{
            x: 170,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{ duration: 0.5 }}
          className="text-lg cursor-pointer h-fit font-medium"
          whileHover={{
            borderBottom: "2px solid #000",
          }}
        >
          Contact
        </motion.div>
      </div>

      <div className="flex gap-8 ">
        <img src="/login.png " className="h-[45px]" alt="" />
      </div>
    </div>
  );
};
export default Homes;
