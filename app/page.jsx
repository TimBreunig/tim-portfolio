import Link from "next/Link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import Carousel from "@/components/Carousel";
import CardGrid from "@/components/CardGrid";

const Home = () => {
  return (
	<section className="h-full">
		<div className="mx-auto h-screen xl:pb-24 bg-radial-gradient">
			<div className="container h-screen flex flex-col xl:flex-row items-center justify-between">
				<div className="mt-12 text-center xl:text-left text-primary-800">
					<span className="font-secondary tracking-wider inline-block text-xl mb-3 text-primary-700">UI DESIGN & FRONTEND DEVELOPMENT</span>
					<h1 className="h1 font-light text-primary-900">
						Hi there! I'm <br /><span className="text-[56px] xl:text-[92px] font-black bg-gradient-to-br from-accent-700 to-accent-300 inline-block text-transparent bg-clip-text">Tim Breunig</span>
					</h1>
					<p className="text-lg xl:max-w-[600px] mb-7">
						I'm passionate about creating appealing and user-friendly digital experiences in various media formats &ndash;
						from designing and building websites to developing video games.
					</p>
					<div>
						<Link href="/resume">
							<Button>
								<span>Open Resume</span>
							</Button>
						</Link>
					</div>
				</div>
				<div className="xl:max-w-[50%] xl:self-end"><img className="h-[360px] pt-8 xl:h-[850px] xl:bottom-0 object-cover mix-blend-darken"
							src="https://www.firstmedica.de/fileadmin/_processed_/e/6/csm_vampir-lifting-ergebnis_e538809ee0.jpg" />
				</div>
			</div>
		</div>

		<div className="mx-auto h-screen xl:pb-24 bg-primary-0 text-primary-800">
			<div className="container h-screen flex flex-col xl:flex-row items-center justify-between">
				<div className="mt-12 text-center xl:text-left">
					<h2 className="h2 bg-gradient-to-br from-accent-700 to-accent-300 inline-block text-transparent bg-clip-text">
						About Me
					</h2>
					<p className="max-w-[530px] mb-6">
						I'm passionate about creating appealing and user-friendly digital experiences in various media formats &ndash;
						from designing and building websites to developing video games.
					</p>
					<div>
						<Link href="/resume">
							<Button>
								<span>Open Resume</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>

		<div className="mx-auto h-auto xl:py-24 bg-primary-0 text-primary-800">
			<div className="container flex flex-col items-center justify-center">
				<h2 className="h2 mb-14 bg-gradient-to-br from-accent-700 to-accent-300 inline-block text-transparent bg-clip-text">Recent Work</h2>
    			<CardGrid />
			</div>
		</div>
	</section>
  );
};

export default Home;