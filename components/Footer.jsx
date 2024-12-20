import { Button } from "./ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faPinterestP, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<div className="bg-primary-0 w-full py-8 xl:py-12 text-primary-700">
			<div className="container mx-auto my-12 flex flex-col xl:flex-row justify-between items-center gap-16">
				<div className="xl:w-[50%]">
					<h2 className="h2 text-primary-900">Get in touch!</h2>
					<p>Interested in my work? Learn more about my profession and reach out to me via my socials or send me an email.</p>
					<span className="flex justify-left items-center gap-5 mt-4">
						<a
							className="block box-border w-12 h-12 p-2 rounded-lg bg-accent-300 text-primary-900 hover:bg-accent-200 transition-colors duration-200"
							href="https://de.linkedin.com/in/tim-breunig-a82250252" target="_blank">
							<FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8" />
						</a>
						<a
							className="block box-border w-12 h-12 p-2 rounded-lg bg-accent-300 text-primary-900 hover:bg-accent-200 transition-colors duration-200"
							href="https://www.instagram.com/_timbrng_/" target="_blank">
							<FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
						</a>
						<a
							className="block box-border w-12 h-12 p-2 rounded-lg bg-accent-300 text-primary-900 hover:bg-accent-200 transition-colors duration-200"
							href="https://github.com/TimBreunig" target="_blank">
							<FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
						</a>
						<a
							className="block box-border w-12 h-12 pt-3 px-2 rounded-lg bg-accent-300 text-primary-900 hover:bg-accent-200 transition-colors duration-200"
							href="https://www.pinterest.de/tiracin16/" target="_blank">
							<FontAwesomeIcon icon={faPinterestP} className="w-8 h-8" />
						</a>
					</span>
				</div>

				<div className="w-[50%] xl:h-48 flex flex-col xl:flex-row justify-between items-stretch gap-16">
					<a href="mailto:breunig.tim@web.de" className="w-full flex flex-col items-center justify-center shadow-solid rounded-lg bg-primary-200 hover:bg-accent-300 transition-colors duration-200">
						<FontAwesomeIcon icon={faEnvelope} className="w-8 text-primary-900" />
						<span className="mt-3 text-primary-900 font-medium">breunig.tim@web.de</span>
					</a>
					<a href="tel:+491625636484" className="w-full flex flex-col items-center justify-center shadow-solid rounded-lg bg-primary-200 hover:bg-accent-300 transition-colors duration-200">
						<FontAwesomeIcon icon={faPhone} className="w-7 text-primary-900" />
						<span className="mt-4 text-primary-900 font-medium">+49 162 5636484</span>
					</a>
				</div>
				
			</div>
		</div>
	);
};

export default Footer;