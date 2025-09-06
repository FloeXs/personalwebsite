import React from 'react'
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaNodeJs, FaPython, FaReact, FaDocker, FaFigma, FaGitAlt, FaWhatsapp } from "react-icons/fa";
import { SiExpress, SiGraphql, SiApollographql, SiPrisma, SiTailwindcss, SiPostgresql, SiNestjs, SiMongodb } from "react-icons/si";




const Section = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-12 pb-12'>
        <section className='flex gap-10 flex-col min-h-[80vh] justify-center '>
            <div className="flex flex-col max-w-full gap-6 text-center sm:max-w-3xl md:max-w-4xl">
                <h5 className='text-3xl font-bold dark:text-white sm:text-3xl md:text-4xl'>Hi, I'm Efe 👋</h5>
                <h3 className='text-5xl font-extrabold dark:text-white sm:text-6xl md:text-7xl'>I have been trying to be a good <span className='underline decoration-blue-400 '>developer</span> for {new Date().getFullYear()-2020} years.</h3>
            </div>
            <div className='flex justify-center gap-5'>
                <a rel='noreferrer' target='_blank' href='https://wa.me/+905550114185' className='cursor-pointer p-2 border transition rounded-md hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black border-black dark:border-white text-black dark:text-white flex gap-2 items-center'><FaWhatsapp className='text-lg' /> WhatsApp</a>
                <a rel='noreferrer' target='_blank' href='mailto:efeturkerr0@gmail.com' className='cursor-pointer p-2 border transition rounded-md hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black border-black dark:border-white text-black dark:text-white flex gap-2 items-center'><MdOutlineMail className='text-lg' />Mail</a>
            </div>
        </section>
        <section className='flex flex-col gap-5 items-center justify-center'>
            <h5 className='text-3xl font-bold dark:text-white sm:text-3xl md:text-4xl underline decoration-blue-400'>💻 Technologies</h5>
            <ul className='grid grid-cols-3 gap-4 sm:grid-cols-4 dark:text-white'>
                <li className='flex space-x-1 items-center'><DiJavascript1 className='text-2xl'/> <span>JavaScript</span></li>
                <li className='flex space-x-2 items-center'><BiLogoTypescript className='text-2xl'/> <span>TypeScript</span></li>
                <li className='flex space-x-2 items-center'><FaPython className='text-2xl'/> <span>Python</span></li>
                <li className='flex space-x-2 items-center'><FaNodeJs className='text-2xl'/> <span>NodeJs</span></li>
                <li className='flex space-x-2 items-center'><FaReact className='text-2xl'/> <span>ReactJs</span></li>
                <li className='flex space-x-2 items-center'><SiNestjs className='text-2xl'/> <span>NestJs</span></li>
                <li className='flex space-x-2 items-center'><SiExpress className='text-2xl'/> <span>ExpressJs</span></li>
                <li className='flex space-x-2 items-center'><SiGraphql className='text-2xl'/> <span>Graphql</span></li>
                <li className='flex space-x-2 items-center'><SiApollographql className='text-2xl'/> <span>Apollo Graphql</span></li>
                <li className='flex space-x-2 items-center'><SiPrisma className='text-2xl'/> <span>Prisma</span></li>
                <li className='flex space-x-2 items-center'><SiPostgresql className='text-2xl'/> <span>PostgreSql</span></li>
                <li className='flex space-x-2 items-center'><SiMongodb className='text-2xl'/> <span>MongoDb</span></li>
                <li className='flex space-x-2 items-center'><FaDocker className='text-2xl'/> <span>Docker</span></li>
                <li className='flex space-x-2 items-center'><SiTailwindcss className='text-2xl'/> <span>TailwindCss</span></li>
                <li className='flex space-x-2 items-center'><BsBootstrapFill className='text-2xl'/> <span>Bootstrap</span></li>
                <li className='flex space-x-2 items-center'><FaFigma className='text-2xl'/> <span>Figma</span></li>
                <li className='flex space-x-2 items-center'><FaGitAlt className='text-2xl'/> <span>Git</span></li>
            </ul>
        </section>
    </div>
  )
}

export default Section