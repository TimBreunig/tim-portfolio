import CardGrid from "@/components/CardGrid";

const Work = () => {
  return (
    <section className="h-full">
      <div className="mx-auto xl:pb-24 bg-radial-gradient">
        <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-12">
				  <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
            <div className="absolute top-0 -left-[20%] w-[120%] h-[120%] bg-black-gradient blur-[150px] -z-10"></div>
					  <h1 className="h1 text-primary-900">
						  Project Overview
					  </h1>
            <p className="text-lg mb-7">
              In the rogue-like cooperative action-adventure game <span className="italic">Project Mothership</span>, players slip into the role of two astronauts to
              prove their skills in teamwork, exploration and puzzle-solving while navigating their way back to the mothership before they run out of oxygen.
					  </p>
          </div>
          <div className="relative w-[59%] h-screen text-center xl:text-left text-primary-800 z-10">
            <img
              alt="Project Mothership VFX"
              src="/images/IntroCutscene2_LowRes.gif"
              className="absolute top-[25%] right-0 w-[80%] aspect-video rounded-lg object-cover"
            />
             <img
              alt="Project Mothership VFX"
              src="/images/ProjectMothershipVFX.png"
              className="absolute bottom-[20%] w-[70%] aspect-video rounded-lg object-cover"
            />
            <div className="absolute top-[23%] right-[20%] w-[85%] h-[55%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
				  </div>
        </div>
		  </div>
      <div className="mx-auto h-auto xl:py-24 bg-primary-100">
			  <div className="container flex flex-col items-center justify-center">
    			  <CardGrid />
			  </div>
		  </div>
    </section>
  );
};

export default Work;