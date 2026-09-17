import React from 'react'
import { Smartphone, MapPin, Car, Hourglass, Activity } from 'lucide-react'
import Image from 'next/image'
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
        description: "Confirm your ride, and we’ll find a driver for you.",
        icon: Hourglass,
    },
    {
        title: 'Track in real-time & enjoy your ride',
        description: 'Follow your driver’s progress and relax as you ride.',
        icon: Activity,
    },
]


const HowToRider = () => {
    return (
        <div className="bg-white py-20 px-15 font-plus-jarkata-sans">
            <h2 className="text-[44px] font-medium text-center">HOW TO ORDER A RIDE</h2>
            <p className="w-full text-[22px] max-w-225 mx-auto mt-3 text-center">
                Quick & Easy Steps to Book Your Ride
            </p>

            <div className='flex items-center justify-center gap-20 mt-15'>
                <div className="w-1/2 space-y-4 shrink-0">

                    {steps.map((step, index) => {
                        const Icon = step.icon

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-[#39B54A] rounded-2xl px-4 py-2.5"
                            >
                                {/* Text */}
                                <div>
                                    <h3 className="text-black font-semibold text-lg">
                                        {step.title}
                                    </h3>
                                    <p className="text-black/80 text-sm mt-1">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-[#8BE28B] flex items-center justify-center">
                                    <Icon className="text-black" size={26} />
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Image src={speedMobile} alt='' className='w-[40%]' />
            </div>

            <button className="px-30 py-2.5 mt-8 mx-auto block font-plus-jarkata-sans font-medium text-[#1A202C] text-[24px] rounded-[10px] bg-[#FFC909]">
                Download the App
            </button>
        </div>
    )
}

export default HowToRider