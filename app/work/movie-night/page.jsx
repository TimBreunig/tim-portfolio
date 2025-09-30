import Link from "next/Link";
import { Button } from "@/components/ui/button";

const ProjectMothership = () => {
    return (
        <section className="h-full">
            <div className="mx-auto xl:pb-24 bg-radial-gradient text-primary-900">
                <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-12">
				    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        <div className="absolute top-0 -left-[20%] w-[120%] h-[120%] bg-black-gradient blur-[150px] -z-10"></div>
					    <h1 className="h1 text-primary-900">
						    Movie Night
					    </h1>
                        <p className="text-base xl:max-w-[600px] mb-4 text-primary-700">
                            Web-Application | Stuttgart Media University | 2024
					    </p>
                        <p className="text-lg mb-7">
                            Movie Night is a React-based Web Application that aims to simplify the decision process for movie nights with friends.
                            The app allows you to create and manage polls where every participant has the opportunity to propose one movie for the voting.
                            The movie that has the most votes at the set deadline is declared the winner.
					    </p>
                    </div>
                    <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                        <video className="aspect-[15.2/9] rounded-xl object-cover pointer-events-none" autoPlay muted loop>
                            <source
                                src="/videos/ProjectMothershipTrailer.mp4"
                                type="video/mp4"
                            ></source>
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute -top-[7%] right-[25%] w-[85%] h-[105%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
				</div>
            </div>
            <div className="mx-auto xl:pb-24 bg-primary-100 text-primary-800">
                <div className="container flex flex-col xl:flex-row items-top justify-between gap-12">
				    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        <img
                            alt="Project Mothership Trailer"
                            src="/images/ProjectMothershipTrailer.png"
                            className="absolute top-12 left-0 rounded-lg aspect-video object-cover"
                        />
                        <div className="absolute top-[28%] left-[15%] w-[55%] h-[35%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
                    <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                        <p className="font-secondary tracking-widest inline-block text-lg mb-3 text-primary-700 uppercase">
                            Mobile-first approach
					    </p>
                        <h2 className="h2 text-primary-900">
						    Design and Prototyping
					    </h2>
                        {/*
                        <p className="mb-7">
                            The camera is an essential part of Game Design and Development. Not only does it determine key aspects like the perspective or the field of view that
                            influence the players' perception of the game but also critically shapes their experience and interaction with the virtual world. Due to its deciding
                            role, it is essential to attach great importance to it in the development process.
					    </p>
                        */}
                        <p className="mb-7">
                            Finding a fitting camera concept for <span className="italic">Project Mothership</span> was quite a challenging task. In the end, we came up with a
                            top-down system that dynamically changes the camera's height between a minimum and maximum value, depending on the distance between the players.
                            This way, we ensure a smooth appearence throughout various different scenarios.
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
                        <p className="font-secondary tracking-widest inline-block text-lg mb-3 text-primary-700 uppercase">
                            High Quality and Functionality
					    </p>
                        <h2 className="h2 text-primary-900">
						    Frontend Development
					    </h2>
                        <p className="mb-7">
                            To ensure no large objects are blocking the view, rays are casted from the camera's position to both players' and the oxygen tank's positions.
                            In case a target with a mesh is hit, it is added to an array that contains all objects which are currently in the camera's fov.
                            Each of those objects' opacity is then lerped smoothly over a fraction of a second so it appears visible but transparent.
					    </p>
                        <p className="mb-7">
                            Once an object is not detected by a raycast anymore and thus not potentially blocking the view, it is removed from the array and its mesh
                            regains full opacity. With this implementation, the opacity effect does not last any longer than required, providing the player with immediate
                            visual feedback and maintaining the game's flow.
					    </p>
                    </div>
                    <div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                        {/*
                        <img
                            alt="Project Mothership Trailer"
                            src="/images/ProjectMothershipRaycasting1.png"
                            className="absolute w-[80%] top-12 left-0 rounded-lg aspect-video object-cover -rotate-2"
                        />
                        */}
                        <img
                            alt="Project Mothership Raycasting"
                            src="/images/ProjectMothershipRaycasting2.png"
                            className="absolute top-12 left-0 rounded-lg aspect-video object-cover"
                        />
                        <div className="absolute top-[28%] right-[20%] w-[60%] h-[45%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                    </div>
				</div>
            </div>
        </section>
    );
};
  
export default ProjectMothership;