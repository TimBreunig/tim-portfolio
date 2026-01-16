import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faPinterestP, faGithub } from '@fortawesome/free-brands-svg-icons'


const socialLinks = [
	{
		path: "https://de.linkedin.com/in/tim-breunig-a82250252",
		Icon: faLinkedinIn,
	},
	{
		path: "mailto:breunig.tim@web.de",
		Icon: faEnvelope,
	},
	{
		path: "https://github.com/TimBreunig",
		Icon: faGithub,
	},
	{
		path: "https://www.pinterest.de/tiracin16/",
		Icon: faPinterestP,
	},
];


const Socials = () => {
	return (
        <div className="flex flex-col gap-1 pointer-events-auto">
            {socialLinks.map(({ Icon, path }, index) => {
				return (
					<a href={path}
                        key={index}
                        target="_blank"
                        className="block group relative w-12 h-12 p-3 rounded-full overflow-hidden hover:scale-110 transition-all duration-500"
                    >
                        <span className="absolute inset-0 w-full h-full bg-primary-100 transform scale-x-0 origin-left rounded-tr-full rounded-br-full z-0 group-hover:scale-x-100 transition-transform duration-500 delay-75 ease-in-out"></span>
                        <span className="absolute inset-0 w-full h-full bg-primary-100 transform scale-x-0 origin-right rounded-tl-full rounded-bl-full z-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                        <FontAwesomeIcon icon={Icon} className="relative w-full h-full text-2xl text-primary-100 z-10 group-hover:border-primary-100 group-hover:text-primary-900 transition-colors duration-500" />
                    </a>
				);
			})}
        </div>
	);
};

export default Socials;