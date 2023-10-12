"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ModeSwitcher from "./ModeSwitcher";

export default function Navbar () {

    const path = usePathname();
    const [mounted, setMounted] = useState(true)
    const [debugLoggedIn, setDebugLoggedIn] = useState(false)

    const links = {
        primary: [
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: "News", href: "/news" },
            { label: "Support", href: "/support" },
            { label: "Contact", href: "/contact" },
        ],
        secondary: [
            { label: "Login", href: "/login" },
            { label: "Dashboard", href: "/dashboard" },
            { label: "Logout", href: "/logout" },
            { label: "Register", href: "/register" },
        ]
    }

    const navBkg = `bg-purple-800`
    const navMobileBkg = `bg-gray-900 md:bg-purple-800`
    const linkStyles = `w-full text-center hover:bg-purple-800 hover:md:bg-purple-700 px-4 py-2 transition-colors duration-200 ease-in`
    const activeLinkStyle = `bg-purple-950 md:bg-purple-950`

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            const navToggle = document.getElementById('navToggle')

            document.body.addEventListener("click", (evt) => {
                if (evt?.target?.id === 'navToggle' || evt?.target?.id === 'navLabel') {
                    evt.stopPropagation();
                    return;
                }

                navToggle.checked = false;
            })
        }
    }, [mounted])

    return (
        <nav className={`flex items-center justify-between text-white ${navBkg}`}>
            {/* Brand */}
            <div className="text-lg font-bold text-white mx-4 text-center">
                <Link href="/">Bandlify</Link>
            </div>

            {/* Hamburger */}
            <ModeSwitcher />
            <input type="checkbox" id="navToggle" className="hidden peer" />
            <label htmlFor="navToggle" id="navLabel" className="md:hidden text-2xl font-bold text-white text-center hover:cursor-pointer peer-checked:text-yellow-400 px-2 py-1 md:p-0">&#9776;</label>

            {/* Navs */}
            <div className={`${navMobileBkg} hidden peer-checked:block peer-checked:absolute peer-checked:top-8 peer-checked:right-0 peer-checked:w-1/3 md:static md:flex md:flex-row items-center justify-between md:w-full`}>
                {/* Primary Nav */}
                <div className="flex flex-col items-center md:flex-row">
                    { links.primary.map(link => (
                        <Link key={link.href} href={link.href} className={`${linkStyles} ${path === link.href && `${activeLinkStyle}`}`}>{link.label}</Link>
                    )) }
                </div>

                {/* Secondary Nav */}
                <div className="flex flex-col items-center md:flex-row">
                    { links.secondary.map(link => {
                        if (debugLoggedIn) {
                            if (link.href === "/login" || link.href === "/register") return;
                        } else {
                            if (link.href === "/logout" || link.href === "/dashboard") return;
                        }

                        return (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className={`${linkStyles} ${path === link.href && `${activeLinkStyle}`}`}
                            >
                                {link.label}
                            </Link>
                        )
                    }) }
                </div>
            </div>
        </nav>
    )
}