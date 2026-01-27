import Link from "next/link";


const Footer = () => {
	return (
		<div className="relative w-full pt-8 lg:pt-12 pb-6 lg:pb-8 bg-primary-0 text-primary-700 z-50">
			<div className="container-wide">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:gap-16 my-8 lg:mt-12 lg:mb-16">
					<div className="lg:w-[50%]">
						<h2 className="h2 text-primary-900 text-center lg:text-left">Get in touch<span className="accent-dot">.</span></h2>
					</div>
					<div className="w-full lg:w-[50%] text-center lg:text-right footer-links">
						<ul>
							<li>
								<a
									href="https://de.linkedin.com/in/tim-breunig-a82250252" target="_blank">
									Linkedin
								</a>
							</li>
							<li>
								<a
									href="mailto:breunig.tim@web.de" target="_blank">
									Email
								</a>
							</li>
							<li>
								<a
									href="https://de.linkedin.com/in/tim-breunig-a82250252" target="_blank">
									Github
								</a>
							</li>
							<li>
								<a
									href="https://de.linkedin.com/in/tim-breunig-a82250252" target="_blank">
									Pinterest
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row text-center justify-between text-base gap-1 md:gap-0">
					<span className="text-primary-600">
						© 2025 Tim Breunig. All rights reserved.
					</span>
					<span>
						<Link
							className="mr-3 lg:mr-5 font-secondary uppercase text-primary-800 hover:text-primary-700 transition-colors duration-300"
							href="/imprint"
						>
							&#91;Imprint&#93;
						</Link>
						<Link
							className="font-secondary uppercase text-primary-800 hover:text-primary-700 transition-colors duration-300"
							href="/privacy-policy"
						>
							&#91;Privacy Policy&#93;
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;