'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import speedLogo from '@/public/Speed.svg'

const navLinksLeft = [
  { href: '', label: 'HOME' },
  { href: '', label: 'ABOUT' },
  { href: '', label: 'VALUES' },
]

const navLinksRight = [
  { href: '', label: 'RIDER' },
  { href: '', label: 'DRIVER' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative bg-white mx-auto w-full max-w-273.75 rounded-[5px] px-4 sm:px-6 lg:px-8'>
      <div className='relative flex items-center justify-between h-13 '>
        {/* Desktop left links */}
        <div className='hidden lg:flex font-semibold font-josefin-sans text-[#232233] items-center gap-9'>
          {navLinksLeft.map(({ href, label }) => (
            <Link key={label} href={href} className={'hover:text-[#34C759] duration-200 -mb-0.5'}>
              {label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className='lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-42 lg:h-17 lg:shadow-md lg:rounded-[5px] flex items-center justify-center bg-white'>
          <Image src={speedLogo} alt='Speed logo' className='w-17 lg:w-auto' />
        </div>

        {/* Desktop right links */}
        <div className='hidden lg:flex font-semibold font-josefin-sans text-[#232233] items-center gap-9'>
          {navLinksRight.map(({ href, label }) => (
            <Link key={label} href={href} className={'hover:text-[#34C759] duration-200 -mb-0.5'}>
              {label}
            </Link>
          ))}
          <button className='bg-[#34C759] text-white font-josefin-sans px-4 pt-2.5 pb-1.75 rounded-[5px] font-semibold cursor-pointer hover:bg-[#14A739] duration-200'>
            DOWNLOAD
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label='Toggle menu'
          className='lg:hidden text-[#232233] p-2'
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='lg:hidden overflow-hidden border-t border-gray-100'
          >
            <div className='flex flex-col gap-4 py-5 font-semibold font-josefin-sans text-[#232233]'>
              {[...navLinksLeft, ...navLinksRight].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={'hover:text-[#34C759] text-[15px] duration-200'}
                >
                  {label}
                </Link>
              ))}
              <button className='bg-[#34C759] text-white font-josefin-sans px-4 pt-2.5 pb-1.75 rounded-[5px] font-semibold w-fit'>
                DOWNLOAD
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar