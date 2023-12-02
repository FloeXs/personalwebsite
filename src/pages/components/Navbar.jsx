import React, { useState } from 'react'
import { LuMail } from "react-icons/lu"
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
    const [isDarkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"))

    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        isDarkMode ? setDarkMode(false) : setDarkMode(true)
    }

    function isDarkModeActive() {
        return document.documentElement.classList.contains("dark");
    }

    return (
        <header className='py-8 px-8 md:px-36'>
            <nav className='flex w-full items-center justify-between'>
                <div className="flex items-center gap-3">
                    <div className="flex rounded-full border border-zinc-600 p-1.5"><LuMail className='dark:text-white' /></div>
                    <h3 className='text-sm tracking-wide font-bold dark:text-white'>efeturkerr1@gmail.com</h3>
                </div>
                <div className="flex gap-x-8">
                    <button onClick={toggleTheme} className='p-2 outline-none text-black border-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black border transition-all ease-in duration-300 rounded-full flex items-center justify-center'>
                        {isDarkModeActive() ? <MdLightMode /> : <CiDark />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar