"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <section className="lg:px-20 md:px-14 px-4 lg:pt-0 flex justify-center items-center bg-gradient-to-br from-violet-300 to-white min-h-screen gap-4">
        <div className="w-fit" id="sebelah-kanan-landing">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 500,
              damping: 15,
              duration: 0.5,
            }}
            src="/img/iphone-13-background-landing.webp"
            className="block md:hidden lg:hidden w-24 pb-20 mx-auto drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
            alt=""
          />
          <TypeAnimation
            sequence={["Hai, Kami Tucerr"]}
            wrapper="h1"
            speed={25}
            repeat={0}
            cursor={false}
            className="md:text-5xl lg:text-5xl text-4xl font-bold text-violet-500"
          />
          <TypeAnimation
            sequence={[1500, "Tempatnya orang-orang bercerita."]}
            wrapper="h2"
            speed={20}
            repeat={0}
            cursor={false}
            className="pt-5 md:text-2xl lg:text-2xl text-xl font-semibold"
          />
          <TypeAnimation
            sequence={[
              4500,
              "Rumah untuk banyak orang yang menyukai cerita orisinal, Tucerr memberikan anda kebebasan menulis atau bercerita.",
            ]}
            wrapper="p"
            speed={70}
            repeat={0}
            cursor={false}
            className="max-w-md pt-2 font-semibold md:text-base lg:text-base text-sm text-gray-500"
          />
          <div className="pt-5 flex gap-4">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 9,
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 0.1,
              }}
              className="font-semibold cursor-pointer px-5 bg-violet-500 text-white py-3 rounded-xl hover:bg-violet-600 transition duration-150 hover:scale-105 hover:drop-shadow-2xl active:scale-95 lg:text-base md:text-sm text-sm w-fit"
            >
              Mulai membaca
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 9.5,
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 0.1,
              }}
              className="font-semibold cursor-pointer px-5 bg-violet-500 text-white py-3 rounded-xl hover:bg-violet-600 transition duration-150 hover:scale-105 hover:drop-shadow-2xl active:scale-95 lg:text-base md:text-sm text-sm w-fit"
            >
              Mulai menulis
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.5,
            type: "spring",
            stiffness: 500,
            damping: 15,
            duration: 0.5,
          }}
          className=" w-fit h-64 md:block hidden"
          id="sebelah-kiri-landing"
        >
          <img
            src="/img/macbook-background-landing.webp"
            className="w-[500px] lg:block hidden left-0 top-0 drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
            alt=""
          />
          <img
            src="/img/ipad-11-background-landing.webp"
            className="w-[200px] md:block lg:hidden hidden right-0 -top-20 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
