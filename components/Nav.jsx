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


const Nav = ({ onNavigate }) => {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-4 lg:gap-1 text-center lg:text-right">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					onClick={onNavigate}
					className={`text-xl hover:text-purple-500 uppercase tracking-wide transition-all duration-300 ${
							pathname.includes(link.path) ? "font-semibold text-primary-400" : "font-medium text-primary-700"
						}`}
					>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;