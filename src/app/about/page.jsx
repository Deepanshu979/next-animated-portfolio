"use client";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONATINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa non cum voluptates doloribus dolor iure rerum
              eveniet quisquam quod quasi ratione, sit sapiente reiciendis,
              temporibus, repellendus saepe nostrum perferendis?
            </p>
            <span>Happy faces Good Times</span>
            <div className="">
                <svg></svg>
            </div>
          </div>
          {/* SKILLS CONATINER */}
          <div className="">SKILLS</div>
          {/* EXPERIENCE CONATINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONATINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
