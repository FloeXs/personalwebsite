import React from 'react'
import { LuMail } from 'react-icons/lu';
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-between p-5 border-zinc-200 dark:border-zinc-600 sm:flex-row sm:gap-y-0 border-t border-white'>
        <ul className='dark:text-white flex gap-4'>
          <li><a target='_blank' href="https://www.instagram.com/efe._turkerr/"><FaInstagram className='text-2xl' /></a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/efe-t%C3%BCrker-137a30228/"><FaLinkedin className='text-2xl' /></a></li>
          <li><a target='_blank' href="https://open.spotify.com/user/x7ysqyt66hp91dazp9mg593tk?si=56332ca1c29649d6"><FaSpotify className='text-2xl' /></a></li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-zinc-600 p-1.5"><LuMail className='dark:text-white' /></div>
          <h3 className='text-sm tracking-wide font-bold dark:text-white'>efeturkerr1@gmail.com</h3>
        </div>
    </div>
  )
}

export default Footer;