"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuFries} from 'react-icons/ci';

const links = [
    { href: "/", name: "Home" },
    { href: "/services", name: "services" },
    { href: "/resume", name: "resume" },
    { href: "/work", name: "work" },
    { href: "/contact", name: "Contact" },
]
const MobileNav = () => {
    const currentPath = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">{"${K"}<span className="text-accent">{"Digit}"}</span></Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}
                            className={`${currentPath === link.href && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
