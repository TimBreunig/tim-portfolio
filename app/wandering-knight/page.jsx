import Link from "next/Link";
import { Button } from "@/components/ui/button";

const WanderingKnight = () => {
    return (
        <section className="h-full">
            <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
                <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-[2%]">
				    <div className="w-[39%] mt-12 text-center xl:text-left text-primary-800">
					    <h1 className="h1 text-primary-900">
						    The Wandering Knight
					    </h1>
                        <p className="text-base xl:max-w-[600px] mb-4 text-primary-700">
                            Game | Independent | 2024
					    </p>
                        <p className="text-lg xl:max-w-[600px] mb-7">
                            The Wandering Knight is a game.
					    </p>
                        <Link href="" target="_blank">
							<Button>
								<span>View on Steam</span>
							</Button>
						</Link>
                    </div>
                    <div className="w-[59%] mt-12 text-center xl:text-left text-primary-800">
                        <img
                            alt="The Wandering Knight Teaser Image"
                            src="/images/IntroCutscene2_LowRes.gif"
                            className="rounded-xl aspect-video object-cover"
                        />
                    </div>
				</div>
            </div>
        </section>
    );
};
  
export default WanderingKnight;