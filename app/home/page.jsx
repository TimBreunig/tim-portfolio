import About from "@/components/About";
import CardGrid from "@/components/CardGrid";
import HeadingFullPage from "@/components/HeadingFullPage";
import MotionHeading from "@/components/MotionHeading";
import TabGrid from "@/components/TabGrid";
import TechStack from "@/components/TechStack";


const Home = () => {
  return (
	<div>
		<section className="container-wide h-screen -pt-4 xl:pt-4 flex flex-col items-center justify-center">
			<div className="flex flex-col justify-center items-center gap-2 xl:gap-6">
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
			className="container-wide pb-12 pt-16 xl:pt-36 text-center z-10">
			<MotionHeading as="h2" className="text-primary-100 text-left">Featured Work<span className="accent-dot">.</span></MotionHeading>
    		<CardGrid showCompact={true} />
		</section>
		<section className="h-[50vh] xl:h-screen box-content xl:pb-60">
			<HeadingFullPage />
		</section>
		<section
			className="relative xl:h-screen box-content py-24 xl:py-10 flex items-center bg-primary-100 z-10">
			<TechStack />
		</section>
		<section 
			id ="services"
			className="relative box-content py-16 xl:py-24 flex flex-col justify-center bg-primary-900"
		>
			<div className="container-wide">
				<MotionHeading as="h2" className="text-primary-100 text-left xl:text-right">Services<span className="accent-dot">.</span></MotionHeading>
				<TabGrid />
			</div>
		</section>
	</div>
  );
};

export default Home;