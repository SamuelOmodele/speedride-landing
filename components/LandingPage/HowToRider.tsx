'use client'

import { Smartphone, MapPin, Car, Hourglass, Activity } from 'lucide-react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import speedMobile from '@/public/speed-mobile.png'

const steps = [
    {
        title: 'Open the Speed app',
        description: 'Download and sign in to get started.',
        icon: Smartphone,
    },
    {
        title: 'Enter your pickup & destination',
        description: 'Just type in where you are and where you want to go.',
        icon: MapPin,
    },
    {
        title: 'Choose a ride category',
        description: 'Select the type of ride that best suits your needs.',
        icon: Car,
    },
    {
        title: 'Confirm and wait for your driver',
        description: "Confirm your ride, and we'll find a driver for you.",
        icon: Hourglass,
    },
    {
        title: 'Track in real-time & enjoy your ride',
        description: 'Follow your driver\'s progress and relax as you ride.',
        icon: Activity,
    },
]

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
}

const stepVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const imageVariants: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const HowToRider = () => {
    return (
        <div className="bg-white py-16 sm:py-20 px-6 sm:px-10 lg:px-15 font-plus-jarkata-sans">
            <div className='max-w-334 mx-auto'>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-center"
                >
                    HOW TO ORDER A RIDE
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="w-full text-lg sm:text-xl lg:text-[22px] max-w-225 mx-auto mt-3 text-center"
                >
                    Quick & Easy Steps to Book Your Ride
                </motion.p>

                <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 sm:mt-15'>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full lg:w-1/2 space-y-4 shrink-0"
                    >

                        {steps.map((step, index) => {
                            const Icon = step.icon

                            return (
                                <motion.div
                                    key={index}
                                    variants={stepVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center justify-between bg-[#39B54A] rounded-2xl px-4 py-3 sm:py-2.5 gap-3"
                                >
                                    {/* Text */}
                                    <div>
                                        <h3 className="text-black font-semibold text-base sm:text-lg">
                                            {step.title}
                                        </h3>
                                        <p className="text-black/80 text-xs sm:text-sm mt-1">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#8BE28B] flex items-center justify-center shrink-0">
                                        <Icon className="text-black" size={24} />
                                    </div>
                                </motion.div>
                            )
                        })}

                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-1/2 sm:w-2/5 lg:w-[40%]"
                    >
                        <Image src={speedMobile} alt='' className='w-full h-auto' />
                    </motion.div>
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-10 sm:px-20 lg:px-30 py-2.5 mt-8 mx-auto block font-plus-jarkata-sans font-medium text-[#1A202C] text-lg sm:text-xl lg:text-[24px] rounded-[10px] bg-[#FFC909] cursor-pointer w-fit"
                >
                    Download the App
                </motion.button>

            </div>
        </div>
    )
}

export default HowToRider