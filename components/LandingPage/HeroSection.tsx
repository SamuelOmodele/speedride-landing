'use client'

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import Contact from "../Shared/Contact"
import Navbar from "../Shared/Navbar"
import heroImage from "@/public/hero-image.png"

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
}

const HeroSection = () => {
  return (
    <div className="bg-[url(@/public/hero-bg.jpg)] overflow-hidden bg-no-repeat bg-cover pt-4 z-10">
      <Contact />
      <Navbar />

      <div className="relative max-w-334 mx-auto">


        <div className="relative px-4 sm:px-6 md:px-10 lg:px-15 py-15 sm:py-20 lg:py-0 lg:h-125 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[47%] text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#1A202C] font-bold leading-tight uppercase font-plus-jarkata-sans "
            >
              Move Faster, Ride Smarter with speed
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[#1A202C] font-plus-jarkata-sans mt-4 text-sm sm:text-base"
            >
              Book rides instantly or earn by driving, all in one easy app.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-row items-center max-lg:justify-center gap-3"
            >
              <button className="px-5 sm:px-10 py-2.5 cursor-pointer font-plus-jarkata-sans font-medium text-[#1A202C] text-sm rounded-[5px] bg-[#FFC909] hover:bg-[#FFC909]/80 duration-150 w-full sm:w-auto transition-transform hover:scale-105">
                Order a Ride
              </button>
              <button className="px-5 sm:px-7 py-2.5 cursor-pointer font-plus-jarkata-sans font-medium text-[#1A202C] text-sm rounded-[5px] bg-white/30 hover:bg-white/50 sm:bg-white/20 sm:hover:bg-white/40 duration-150 w-full sm:w-auto transition-transform hover:scale-105">
                Become a Driver
              </button>
            </motion.div>
          </motion.div>

          {/* Mobile/tablet: inline image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="w-4/5 sm:w-3/5 md:w-1/2 lg:hidden"
          >
            <Image src={heroImage} alt="" className="w-full h-auto rounded-[30px]" />
          </motion.div>
        </div>

        {/* Desktop: absolute-positioned image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="hidden lg:block absolute w-2/5 max-h-117.5 -bottom-10 right-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={heroImage} alt="" className="min-[1300px]:rounded-[40px]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection