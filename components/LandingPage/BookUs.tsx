'use client'

import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.8, staggerChildren: 0.12 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const BookUs = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="absolute left-1/2 -translate-x-1/2 max-w-200 mx-auto -mt-10 sm:-mt-17 z-100 w-[92%] sm:w-full bg-[#F3F3F3] rounded-[7px] px-2 py-4 flex items-center flex-col gap-2 shadow-lg sm:shadow-none"
        >
            <motion.h3
                variants={itemVariants}
                className="font-medium text-base sm:text-lg font-plus-jarkata-sans text-center"
            >
                Book In Seconds with Our App
            </motion.h3>

            {/* Store Badges */}
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center items-center gap-3 mt-1"
            >
                <a
                    href=""
                    aria-label="Get it on Google Play"
                    className="flex items-center gap-2 bg-black text-white rounded-[7px] px-4 py-2 hover:opacity-90 hover:scale-105 transition-all"
                >
                    <svg width="20" height="20" viewBox="0 0 512 512" fill="none" className="shrink-0">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00A0FF" />
                        <path d="M47 0c-6.7 3.5-11 10.2-11 19v474c0 8.8 4.3 15.5 11 19l248.7-256L47 0z" fill="#00A0FF" />
                        <path d="M325.3 277.7l60.1 60.1L104.6 499 325.3 277.7z" fill="#00A0FF" />
                        <path d="M325.3 234.3L295.7 256l29.6 21.7 79.3-45.6c22.6-13 22.6-34.1 0-47.1l-79.3-45.6z" fill="#FFD700" />
                    </svg>
                    <div className="text-left leading-tight">
                        <p className="text-[10px] font-plus-jarkata-sans">GET IT ON</p>
                        <p className="text-sm font-semibold font-plus-jarkata-sans -mt-0.5">Google Play</p>
                    </div>
                </a>

                <a
                    href=""
                    aria-label="Download on the App Store"
                    className="flex items-center gap-2 bg-black text-white rounded-[7px] px-4 py-2 hover:opacity-90 hover:scale-105 transition-all"
                >
                    <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor" className="shrink-0">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <div className="text-left leading-tight">
                        <p className="text-[10px] font-plus-jarkata-sans">Download on the</p>
                        <p className="text-sm font-semibold font-plus-jarkata-sans -mt-0.5">App Store</p>
                    </div>
                </a>
            </motion.div>

            <motion.p
                variants={itemVariants}
                className="hidden sm:block font-plus-jarkata-sans my-1 text-xs sm:text-sm text-center px-2"
            >
                Available on Google Play Store and Apple store
            </motion.p>
        </motion.div>
    )
}

export default BookUs