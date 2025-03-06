"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{ href: "/", name: "Accueil" },
	{ href: "/prestations", name: "Prestations" },
	{ href: "/a-propos", name: "A propos" },
	{ href: "/realisations", name: "Réalisations" },
	{ href: "/blog", name: "Le Blog" },
	{ href: "/contact", name: "Contact" },
];

const MobileNav = () => {
	const currentPath = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<Sheet open={isMenuOpen} onOpenChange={handleMenuToggle}>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						{"${K"}
						<span className="text-accent">{"Digit}"}</span>
					</Link>
				</div>
				<nav className="flex flex-col justify-center items-center gap-8">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`${
								currentPath === link.href &&
								"text-accent border-b-2 border-accent"
							} capitalize text-xl hover:text-accent transition-all`}
							onClick={handleMenuClose}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
