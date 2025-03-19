import { Button } from "./ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faPinterestP, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<div className="bg-primary-0 w-full py-8 xl:py-12 text-primary-700">
			<div className="container mx-auto my-12 flex flex-col xl:flex-row justify-between items-start gap-16">
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
				<div className="xl:w-[50%]">
					<h2 className="h2 text-primary-900">&nbsp;</h2>
					<form action="#" method="POST" className="relative">
						<textarea
                			id="message"
                			name="message"
							placeholder="Enter your message..."
                			rows={4}
                			className="h-36 block w-full rounded-md bg-primary-200 px-6 py-4 -mt-4 text-base font-base text-primary-700 box-border border border-primary-200 placeholder:text-primary-500 focus:outline-0 focus:border focus:border-primary-600 resize-none"
                			defaultValue={''}
              			/>
						<button type="submit" className="absolute block right-6 bottom-4 w-10 h-10 p-2 rounded-lg group">
							<FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Footer;