"use client";

import Link from "next/Link";
import { usePathname } from "next/navigation";


const links = [
	{
		name: "home",
		path: "/home",
	},
	{
		name: "about",
		path: "/home#about",
	},
	{
		name: "services",
		path: "/home#services",
	},
	{
		name: "work",
		path: "/home#work",
	},
];


const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex gap-12 2xl:gap-14">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`font-semibold text-xl text-primary-100 hover:text-accent-500 capitalize tracking-wide transition-all duration-300 ${
							pathname.includes(link.path) ? "active" : ""
						}`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;