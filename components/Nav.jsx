"use client";

import Link from "next/Link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/home",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
];

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex gap-12 2xl:gap-16">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${
							pathname.includes(link.path) && "text-primary-800"
						} font-medium text-primary-700 hover:text-accent-500 uppercase tracking-widest transition-all duration-300`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;