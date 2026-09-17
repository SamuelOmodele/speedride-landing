import React from 'react'
import Image from 'next/image'
import driver1 from '@/public/driver1.svg'
import driver2 from '@/public/driver2.svg'
import driver3 from '@/public/driver3.svg'
import driver4 from '@/public/driver4.svg'
import curvedLine from '@/public/curved-line.svg'


const HowToDriver = () => {
    return (
        <div className="bg-[#A8FF9E] py-20 px-15 font-plus-jarkata-sans">
            <h2 className="text-[44px] font-medium text-center">HOW TO BECOME A DRIVER</h2>
            <p className="w-full text-[22px] max-w-225 mx-auto mt-3 text-center">
                Start Earning with Speed in a Few Simple Steps
            </p>

            <div className='flex items-center justify-center gap-4 mt-15'>
                <div className='relative'>
                    <Image src={driver1} alt='' />
                    <p className='w-fit absolute text-lg text-[#1A202C] font-semibold -left-[40%] mt-2 text-center whitespace-nowrap'>Download the Speed <br /> Driver App</p>
                </div>
                <Image src={curvedLine} alt='' className='w-50' />
                <div className='relative'>
                    <Image src={driver2} alt='' />
                    <p className='w-fit absolute text-lg text-[#1A202C] font-semibold -left-[65%] mt-2 text-center whitespace-nowrap'>Sign up and upload required <br /> documents</p>
                </div>
                <Image src={curvedLine} alt='' className='w-50' />
                <div className='relative'>
                    <Image src={driver3} alt='' />
                    <p className='w-fit absolute text-lg text-[#1A202C] font-semibold mt-2 text-center whitespace-nowrap'>Get verified</p>
                </div>
                <Image src={curvedLine} alt='' className='w-50' />
                <div className='relative'>
                    <Image src={driver4} alt='' />
                    <p className='w-fit absolute text-lg text-[#1A202C] font-semibold -left-[40%] mt-2 text-center whitespace-nowrap'>Start accepting rides & <br />earning</p>
                </div>

            </div>

            <button className="px-30 py-2.5 mt-30 mx-auto block font-plus-jarkata-sans font-semibold text-[#1A202C] text-[24px] rounded-[10px] bg-[#FFC909]">
                Become a Driver
            </button>
        </div>
    )
}

export default HowToDriver