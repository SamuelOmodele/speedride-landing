'use client'

import { motion } from 'framer-motion'

const WhoAreWe = () => {
    return (
        <div className="bg-white pb-25 pt-35 sm:py-28 lg:py-40 px-6 sm:px-10 lg:px-15 text-center font-plus-jarkata-sans">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium"
            >
                WHO ARE WE
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="text-base sm:text-lg lg:text-[24px] w-full max-w-225 mx-auto mt-5"
            >
                Speed is your everyday ride-hailing platform that connects passengers with drivers quickly, safely, and affordably. Like other modern super apps, Speed makes it easy to get around town by connecting you with nearby drivers anytime you need a ride.
            </motion.p>
        </div>
    )
}

export default WhoAreWe