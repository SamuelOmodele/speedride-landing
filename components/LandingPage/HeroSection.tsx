import Image from "next/image"
import Contact from "../Shared/Contact"
import Navbar from "../Shared/Navbar"
import heroImage from "@/public/hero-image.png"

const HeroSection = () => {
  return (
    <div className="relative bg-[url(@/public/hero-bg.jpg)] overflow-hidden bg-no-repeat bg-cover pt-4 z-10">
      <Contact />
      <Navbar />
      
      <div className="px-15 h-125 flex items-center">
        <div className="w-[47%]">
          <h1 className="text-[48px] text-[#1A202C] font-bold leading-tight uppercase font-plus-jarkata-sans">
            Move Faster, Ride Smarter with speed
          </h1>
          <p className="text-[#1A202C] font-plus-jarkata-sans mt-4">Book rides instantly or earn by driving, all in one easy app.</p>
          <div className="mt-7">
            <button className="px-10 py-2.5 font-plus-jarkata-sans font-medium text-[#1A202C] text-sm rounded-[5px] bg-[#FFC909]">
              Order a Ride
            </button>
            <button className="px-10 py-2.5 font-plus-jarkata-sans font-medium text-[#1A202C] text-sm rounded-[5px] bg-transparent">
              Become a Driver
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-2/5 -bottom-10 right-0">
        <Image src={heroImage} alt="" />
      </div>
      
    </div>
  )
}

export default HeroSection