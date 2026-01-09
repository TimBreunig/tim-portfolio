import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WanderingKnight = () => {
    return (
        <section className="h-full">
            <div className="mx-auto xl:pb-24 bg-radial-gradient text-primary-900">
                <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-[2%]">
				    <div className="w-[39%] mt-8 text-center xl:text-left text-primary-800">
					    <h1 className="h1 text-primary-900">
						    The Wander&shy;ing Knight
					    </h1>
                        <p className="text-base xl:max-w-150 mb-4 text-primary-700">
                            Game | Independent | 2024
					    </p>
                        <p className="text-lg xl:max-w-150 mb-7">
                            <span className="italic">The Wandering Knight</span> is a game.
					    </p>
                        <Link href="" target="_blank">
							<Button>
								<span>View on Steam</span>
							</Button>
						</Link>
                    </div>
                    <div className="relative w-[59%] mt-6 text-center xl:text-left text-primary-800 z-10">
                        <Image
                            src="/images/IntroCutscene2_LowRes.gif"
                            alt="The Wandering Knight Teaser Image"
                            className="aspect-[15.2/9] rounded-xl object-cover pointer-events-none"
                            fill
                        />
                        <div className="absolute -top-[7%] right-[25%] w-[85%] h-[105%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
				</div>
            </div>
            <div className="mx-auto xl:pb-24 bg-primary-100 text-primary-800">
                <div className="container flex flex-col xl:flex-row items-top justify-between gap-12">
				    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        <Image
                            src="/images/ProjectMothershipTrailer.png"
                            alt="Project Mothership Trailer"
                            className="absolute top-12 left-0 rounded-lg aspect-video object-cover"
                            fill
                        />
                        <div className="absolute top-[28%] left-[15%] w-[55%] h-[35%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
                    <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                        <p className="font-secondary tracking-wider inline-block text-lg mb-3 text-primary-700 uppercase">
                            Creating Personality
					    </p>
                        <h2 className="h2 text-primary-900">
						    Dialogue Writing
					    </h2>
                        <p className="mb-7">
                            Finding a fitting camera concept for <span className="italic">Project Mothership</span> was quite a challenging task. Together with the Game Design
                            Department, we came up with a top-down system that dynamically changes the camera's height between a minimum and maximum value, depending on the
                            distance between the players. This way, we ensure a smooth appearence throughout various different scenarios.
					    </p>
                        <p className="mb-7">
                            Additionally, instead of using the players as reference objects, we committed to the oxygen tank as focus for the camera. When it is not picked up
                            and thus stationary, the camera stays in place, keeping both players equally in view. However, once the tank is picked up, the focus shifts to the
                            player that carries it, stressing its importance and providing additional visual feedback for the players.
                        </p>
                    </div>
				</div>
            </div>
            <div className="mx-auto xl:pb-24 bg-primary-100 text-primary-800">
                <div className="container flex flex-col xl:flex-row items-top justify-between gap-12">
                    <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                        <p className="font-secondary tracking-wider inline-block text-lg mb-3 text-primary-700 uppercase">
                            Handling player inputs
					    </p>
                        <h2 className="h2 text-primary-900">
						    State Machine
					    </h2>
                        <p className="mb-7">
                            To ensure no large objects are blocking the view, rays are casted from the camera's position to both players' and the oxygen tank's positions.
                            In case one of them hits a target that features a mesh, it is added to an array that contains all objects which are currently in the camera's fov.
                            Each of those objects' opacity is then lerped smoothly over a fraction of a second so it appears visible but transparent.
					    </p>
                        <p className="mb-7">
                            Once an object is not detected by a raycast anymore and thus not potentially blocking the view, it is removed from the array and its mesh
                            regains full opacity. With this implementation, the opacity effect does not last any longer than required, providing the player with immediate
                            visual feedback and maintaining the game's flow.
					    </p>
                    </div>
                    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        <Image
                            src="/images/ProjectMothershipRaycasting2.png"
                            alt="Project Mothership Trailer"
                            className="absolute top-12 left-0 rounded-lg aspect-video object-cover"
                            fill
                        />
                        <div className="absolute top-[28%] right-[20%] w-[60%] h-[45%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
				</div>
            </div>
            <div className="mx-auto xl:pb-24 bg-primary-100 text-primary-800">
                <div className="container flex flex-col xl:flex-row items-top justify-between gap-12">
				    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        <Image
                            src="/images/ProjectMothershipVFX.png"
                            alt="Project Mothership VFX"
                            className="absolute top-12 left-0 rounded-lg aspect-video object-cover"
                            fill
                        />
                        <div className="absolute top-[28%] left-[15%] w-[55%] h-[35%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
                    <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                        <p className="font-secondary tracking-wider inline-block text-lg mb-3 text-primary-700 uppercase">
                            Making things happen
					    </p>
                        <h2 className="h2 text-primary-900">
                            Interaction Implementation
					    </h2>
                        <p className="mb-7">
                            Finding a fitting camera concept for <span className="italic">Project Mothership</span> was quite a challenging task. Together with the Game Design
                            Department, we came up with a top-down system that dynamically changes the camera's height between a minimum and maximum value, depending on the
                            distance between the players. This way, we ensure a smooth appearence throughout various different scenarios.
					    </p>
                        <p className="mb-7">
                            Additionally, instead of using the players as reference objects, we committed to the oxygen tank as focus for the camera. When it is not picked up
                            and thus stationary, the camera stays in place, keeping both players equally in view. However, once the tank is picked up, the focus shifts to the
                            player that carries it, stressing its importance and providing additional visual feedback for the players.
                        </p>
                    </div>
				</div>
            </div>
        </section>
    );
};
  
export default WanderingKnight;