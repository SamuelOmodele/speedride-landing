import Link from 'next/link'
import speedLogo from '@/public/Speed.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='relative bg-white mx-auto w-full max-w-273.75 h-13 rounded-[5px] flex items-center justify-between py-2 px-8'>
      <div className='flex font-semibold font-josefin-sans text-[#232233] items-center gap-9'>
        <Link href={''} className='text-[#34C759]'>HOME</Link>
        <Link href={''}>ABOUT</Link>
        <Link href={''}>VALUES</Link>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 w-42 bg-white h-17 rounded-[5px] shadow-md flex items-center justify-center'>
        <Image src={speedLogo} alt='' />
      </div>
      <div className='flex font-semibold font-josefin-sans text-[#232233] items-center gap-9'>
        <Link href={''}>RIDER</Link>
        <Link href={''}>DRIVER</Link>
        <button className='bg-[#34C759] text-white font-josefin-sans px-4 py-2.5 rounded-[5px] font-semibold'>DOWNLOAD</button>
      </div>
    </div>
  )
}

export default Navbar