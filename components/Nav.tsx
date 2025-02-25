"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", name: "Accueil" },
	{ href: "/prestations", name: "Prestations" },
	{ href: "/a-propos", name: "A propos" },
	{ href: "/realisations", name: "Réalisations" },
	{ href: "/blog", name: "Le Blog" },
	// { href: "/contact", name: "Contact" },
];
const Nav = () => {
	const currentPath = usePathname();
	return (
		<nav className="flex gap-8">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className={`${
						currentPath === link.href && "text-accent border-b-2 border-accent"
					} capitalize font-medium hover:text-accent transition-all`}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
