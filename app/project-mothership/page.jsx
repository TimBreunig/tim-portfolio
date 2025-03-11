import Link from "next/Link";
import { Button } from "@/components/ui/button";

const ProjectMothership = () => {
    return (
        <section className="h-full">
            <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
                <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-[2%]">
				    <div className="w-[39%] mt-12 text-center xl:text-left text-primary-800 z-10">
					    <h1 className="h1 text-primary-900">
						    Project Mothership
					    </h1>
                        <p className="text-base xl:max-w-[600px] mb-4 text-primary-700">
                            Game | Stuttgart Media University | 2024
					    </p>
                        <p className="text-lg xl:max-w-[600px] mb-7">
                            Project Mothership is a rogue-like cooperative action-adventure game. Controlling two astronauts, players are challenged to prove their skills in
                            teamwork, exploration and puzzle-solving to navigate their way back to their mothership before they run out of oxygen.
					    </p>
                        <Link href="https://projectmothershipgame.com/" target="_blank">
							<Button>
								<span>Visit Website</span>
							</Button>
						</Link>
                    </div>
                    <div className="w-[59%] mt-12 text-center xl:text-left text-primary-800">
                        <img
                            alt="Project Mothership Teaser Image"
                            src="/images/ProjectMothershipTeaser.png"
                            className="relative rounded-xl aspect-video object-cover z-10"
                        />
                        <div className="absolute top-[30%] right-[25%] w-[30%] h-[30%] bg-pink-gradient blur-[150px] opacity-50"></div>
                        <div className="absolute top-[50%] right-[35%] w-[20%] h-[35%] bg-blue-gradient blur-[150px] opacity-30"></div>
                    </div>
				</div>
            </div>
        </section>
    );
};
  
export default ProjectMothership;