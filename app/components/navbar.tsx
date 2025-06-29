"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';


export default function Navbar()  {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

const isActive = (path: string) => {
    const base = "transition-all duration-200 ease-in-out";

    return pathname === path
    ? `${base} text-green-400 border-b-2 border-gray-400` 
    : `${base} text-gray-600 hover:text-gray-400`
};


    return (
        <nav className="w-full mt-5">
        <div className="fixed w-full flex justify-center gap-9 py-4 font-mono text-lg border-b">

        
        {/*Desktop Navigation */}
        <div className="flex-1 flex justify-center space-x-6 sm:space-x-8 font-mono sm:ml-5 text-xs sm:text-sm font-medium">
            <Link href="/" className="`inline-flex items-center px-1 hover:underline duration-200 ${isActive(
            )}`">Home</Link>
            <Link href="/projects" className="`inline-flex items-center px-1 hover:underline duration-200 ${isActive(
            )}`">Projects</Link>
            <Link href="/about" className="`inline-flex items-center px-1 hover:underline duration-200 ${isActive(
            )}`">About</Link>      
        </div>

        {/*Mobile Support */}
        <div className="md:hidden">
            <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
            >
                {isOpen ? "x" : "☰"}
            </button>
        </div>
        </div>
        
        {/*Mobile Navigation... fix transitions */}
        {isOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          <Link href="/" className={isActive(pathname, "/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className={isActive(pathname, "/projects")} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className={isActive(pathname, "/about")} onClick={() => setIsOpen(false)}>About</Link>    
            </div>

        )}

        </nav>
    );
}

//position: fixed w-full flex justify-center gap-9 py-4 font-mono text-lg border-b
//"max-w-[85rem] mx-auto px-8 flex justify-between items-center h-16"