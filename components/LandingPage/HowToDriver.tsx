'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import driver1 from '@/public/driver1.svg'
import driver2 from '@/public/driver2.svg'
import driver3 from '@/public/driver3.svg'
import driver4 from '@/public/driver4.svg'
import curvedLine from '@/public/curved-line.svg'

const steps = [
    { image: driver1, label: 'Download the Speed Driver App' },
    { image: driver2, label: 'Sign up and upload required documents' },
    { image: driver3, label: 'Get verified' },
    { image: driver4, label: 'Start accepting rides & earning' },
]

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HowToDriver = () => {
    return (
        <div className="bg-[#A8FF9E] py-16 sm:py-20 px-6 sm:px-10 lg:px-15 font-plus-jarkata-sans overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-center"
            >
                HOW TO BECOME A DRIVER
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="w-full text-lg sm:text-xl lg:text-[22px] max-w-225 mx-auto mt-3 text-center"
            >
                Start Earning with Speed in a Few Simple Steps
            </motion.p>

            {/* Mobile / tablet: stacked layout */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:hidden flex flex-col items-center gap-8 mt-12 max-w-xs sm:max-w-sm mx-auto"
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center gap-3"
                    >
                        <div className="bg-white rounded-full p-4 shadow-md">
                            <Image src={step.image} alt='' className="w-14 h-14" />
                        </div>
                        <p className="text-base sm:text-lg text-[#1A202C] font-semibold">
                            {step.label}
                        </p>
                        {index < steps.length - 1 && (
                            <div className="w-0.5 h-8 bg-[#1A202C]/20 rounded-full" />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Desktop: original horizontal flow with curved connectors */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="hidden lg:flex items-start justify-center gap-4 mt-15"
            >
                {steps.map((step, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex items-start gap-4">
                        <div className="relative flex flex-col items-center">
                            <Image src={step.image} alt="" />
                            <p className="w-40 mt-3 text-lg text-[#1A202C] font-semibold text-center leading-snug wrap-break-word">
                                {step.label}
                            </p>
                        </div>
                        {index < steps.length - 1 && (
                            <Image src={curvedLine} alt="" className="w-50 mt-6" />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 sm:px-20 lg:px-30 py-2.5 mt-16 sm:mt-24 lg:mt-30 mx-auto block font-plus-jarkata-sans font-semibold text-[#1A202C] text-lg sm:text-xl lg:text-[24px] rounded-[10px] bg-[#FFC909] cursor-pointer w-fit"
            >
                Become a Driver
            </motion.button>
        </div>
    )
}

export default HowToDriver