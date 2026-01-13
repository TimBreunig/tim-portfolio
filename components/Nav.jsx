"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';


const links = [
	{
		name: "About",
		path: "/home",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];


const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-12 2xl:gap-1 text-right">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					className={`text-xl hover:text-purple-500 uppercase tracking-wide transition-all duration-300 ${
							pathname.includes(link.path) ? "font-semibold text-primary-100" : "font-medium text-primary-700"
						}`}
					>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;