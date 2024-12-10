import React from 'react'
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

function Header() {
  return (
    <>
        {/*NavBar*/}
        <div className="max-w-7xl w-full">
            <FloatingNav navItems={[
            {name: 'Home', link: '/', icon: <FaHome />},
            ]} />
        </div>
        {/*ThemeSwitch*/}
        <div className="fixed top-4 right-4 z-[9999] bg-transparent rounded-full">
            <ThemeSwitch />
        </div>
    </>
  )
}

export default Header