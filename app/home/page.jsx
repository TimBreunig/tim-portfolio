"use client";

import About from "@/components/About";
import CardGrid from "@/components/CardGrid";
import HeadingFullPage from "@/components/HeadingFullPage";
import TabGrid from "@/components/TabGrid";
import TechStack from "@/components/TechStack";


const Home = () => {
  return (
	<div>
		<section className="container-wide pt-20 xl:pt-4 xl:h-screen flex flex-col items-center justify-center gap-16">
			<div className="flex flex-col justify-center items-center gap-7">
				<span className="h6 inline-block text-primary-100">
					Tim Breunig
				</span>
				<h1 className="h1 inline-flex flex-col gap-2 text-primary-100">
					<span className="text-center">
						Building
					</span>
					<span className="ml-[0.07em] text-left text-purple-500">
						things
					</span>
					<span className="mr-[0.02em] text-right">
						for
					</span>
					<span className="relative ml-[0.07em]">
						the&nbsp;&nbsp;&nbsp;web
						<span className="absolute -right-6 xl:-right-16 bottom-0 accent-dot">
							.
						</span>
					</span>
				</h1>
			</div>
		</section>
        <About />
		<section
			id ="work"
			className="container-wide pb-12 pt-36 z-10">
			<h2 className="h2 text-left text-primary-100">Featured Work<span className="accent-dot">.</span></h2>
    		<CardGrid />
		</section>
		<section className="h-screen box-content pb-60">
			<HeadingFullPage />
		</section>
		<section
			className="relative xl:h-screen box-content py-24 xl:py-12 flex items-center bg-primary-100 z-10">
			<TechStack />
		</section>
		<section 
			id ="services"
			className="relative box-content pb-60 pt-36"
		>
			<div className="container-wide">
				<h2 className="h2 mb-14 text-primary-100 text-right">Services<span className="accent-dot">.</span></h2>
				<TabGrid />
			</div>
		</section>
	</div>
  );
};

export default Home;