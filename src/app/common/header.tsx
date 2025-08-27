"use client";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export function Header() {
    const [isHamOpen, setIsHamOpen] = useState(false);

    const navLinksData = [
        { title: "Home", path: "/" },
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contribute", path: "#contribute" },
        { title: "Contact", path: "/contactus" },
    ];

    return (
        <>
            <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    DXKit
                </div>

                <div className="hidden sm:flex gap-6">
                    {navLinksData.map((link, i) => (
                        <Link
                            key={i}
                            href={link.path}
                            className="font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <button
                    className="sm:hidden text-2xl"
                    onClick={() => setIsHamOpen(true)}
                >
                    <FaBars />
                </button>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col items-start p-8 gap-4 text-xl z-50 transition-transform duration-300 ease-in-out ${isHamOpen ? "translate-y-0" : "-translate-y-full "
                    }`}
            >
                <IoMdClose
                    className="self-end p-1 text-[35px] bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    onClick={() => setIsHamOpen(false)}
                />

                {navLinksData.map((link, i) => (
                    <Link
                        key={i}
                        href={link.path}
                        className="font-semibold transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={() => setIsHamOpen(false)}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </>
    );
}
