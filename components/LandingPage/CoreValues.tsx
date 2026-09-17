'use client'

import { Handshake, Lock, ShieldCheck, Wallet } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const CoreValues = () => {

    const features = [
        {
            title: 'Safety First',
            description:
                'Safety is central to every ride. We do this by verifying all our drivers, real-time tracking, and secure communication.',
            icon: ShieldCheck,
        },
        {
            title: 'Fair Pricing',
            description:
                'No hidden charges. No surprises. Speed offers transparent pricing that is fair to riders and rewarding for drivers.',
            icon: Wallet,
        },
        {
            title: 'Respect & Community',
            description:
                'Respect shapes how our community interacts. Speed encourages professionalism, courtesy, and mutual respect between riders and drivers.',
            icon: Handshake,
        },
        {
            title: 'Trust & Transparency',
            description:
                'Trust is built through transparency. From clear ride details to secure payments and honest reviews, Speed ensures users always know what to expect.',
            icon: Lock,
        },
    ]


    return (
        <div className="bg-[#A8FF9E] py-16 sm:py-20 px-6 sm:px-10 lg:px-15 font-plus-jarkata-sans">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-center"
            >
                SPEED CORE VALUES
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="w-full text-lg sm:text-xl lg:text-[22px] max-w-225 mx-auto mt-3 text-center"
            >
                We respect your time, while you move in peace
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-12"
            >

                {features.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
                            className="bg-white rounded-2xl p-5 sm:p-6 flex gap-4 items-start"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-200 text-green-600 shrink-0">
                                <Icon size={24} />
                            </div>

                            {/* Text */}
                            <div className='flex-1 text-left'>
                                <h3 className="text-lg sm:text-[22px] font-medium text-black">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-[#1A202C] mt-1 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}

            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 sm:px-20 lg:px-30 py-2.5 mt-8 mx-auto block font-plus-jarkata-sans font-medium text-[#1A202C] text-lg sm:text-xl lg:text-[24px] rounded-[10px] bg-[#FFC909] cursor-pointer w-fit"
            >
                Order a Ride
            </motion.button>
        </div>
    )
}

export default CoreValues