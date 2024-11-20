import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                {/* text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span>Full-Stack Software and Web Developer</span>
                    <h1 className="h1">
                        Hi There<span className="text-yellow-200">!</span><br />
                            I'm
                            <span className="hover:text-yellow-200">
                            <span className="text-accent"> K</span>ris
                            <span className="text-accent">C</span>han
                            <span className="text-accent">D</span>ev
                            </span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        I excel at crafting elegant digital experiences and specialization in <strong><em>back-end & front-end development</em></strong>. I have 11+ years of experience in <strong><em>Software and Web Development</em></strong> having strong <strong><em>CRUD Skills</em></strong> and I am proficient in various programming languages and technologies.
                    </p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <Button
                            variant="outline"
                            size="lg"
                            className="uppercase flex items-center gap-2"
                        >
                            <span>Download CV</span>
                            <FiDownload className="text-xl" />
                        </Button>
                        <div className="mb-8 xl:mb-0">
                            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transitionall duration-500"
                            />
                        </div>

                    </div>
                </div>
                {/* photo */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;