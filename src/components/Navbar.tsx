import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Icons"

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className="bg-green-700/[.85] relative z-30">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsActive(!isActive)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-green-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isActive ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isActive ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="grow flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-1 flex items-center justify-center hidden sm:flex">
                            <Link href="#" className="uppercase px-2 py-1.5 rounded-md font-display text-amber-200 border-2 border-amber-200 ">
                                Book now
                            </Link>
                        </div>
                        <div className="flex-shrink-0 flex items-center sm:flex-1">
                            <Logo />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {links.map(({ href, label }) => (
                                    <Link key={`${href}${label}`} href={href} className={`${href === "/"
                                        ? "text-green-100"
                                        : "text-green-50"
                                        } uppercase font-display px-3 py-2 rounded-md text-sm hover:text-green-50 hover:bg-green-600 transition duration-500 ease-in-out`}>
                                        {label}
                                    </Link>
                                ))}
                                <Link href="https://instagram.com/" className="uppercase font-display text-green-50 px-3 py-2 rounded-md text-sm hover:text-green-50 hover:bg-green-600 transition duration-500 ease-in-out">
                                        Insta
                                    </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isActive ? "block" : "hidden"} sm:hidden`}
                id="mobile-menu"
            >
                <div className="px-3 pt-2 pb-3 space-y-1">
                    {links.map(({ href, label }) => (
                        <Link key={`${href}${label}`} href={href} className={`${href === "/" ? "text-green-200" : "text-green-50"
                            } block px-3 py-2 rounded-md text-base font-medium hover:text-green-50 hover:bg-green-600 focus:outline-none focus:text-green-50 focus:bg-green-600 transition duration-500 ease-in-out`}>
                            {label}
                        </Link>
                    ))}
                </div>

            </div>
        </nav>

    );
}