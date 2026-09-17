import { Handshake, Lock, ShieldCheck, Wallet } from 'lucide-react'
import React from 'react'

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
        <div className="bg-[#A8FF9E] py-20 px-15 font-plus-jarkata-sans">
            <h2 className="text-[44px] font-medium text-center">SPEED CORE VALUES</h2>
            <p className="w-full text-[22px] max-w-225 mx-auto mt-3 text-center">
                We respect your time, while you move in peace
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">

                {features.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 flex gap-4 items-start"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-200 text-green-600">
                                <Icon size={24} />
                            </div>

                            {/* Text */}
                            <div className='flex-1 text-left'>
                                <h3 className="text-[22px] font-medium text-black">
                                    {item.title}
                                </h3>
                                <p className="text-base text-[#1A202C] mt-1 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>

            <button className="px-30 py-2.5 mt-8 mx-auto block font-plus-jarkata-sans font-medium text-[#1A202C] text-[24px] rounded-[10px] bg-[#FFC909]">
                Order a Ride
            </button>
        </div>
    )
}

export default CoreValues