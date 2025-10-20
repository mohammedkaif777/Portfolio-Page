import { Briefcase, Code2 , User} from "lucide-react";

export const AboutSection = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">🚀 Passionate Developer & Tech Enthusiast</h3>
                        <p className="text-muted-foreground ">
                            I specialize in full-stack development, with strong skills in designing responsive
                             frontends and building efficient, secure backends. I’m passionate about developing scalable 
                             solutions that solve real-world problems and continuously improving my technical and problem-solving 
                             abilities to grow as a well-rounded software engineer.
                        </p>
                        <p className="text-muted-foreground">
                            I’m a results-driven developer with a strong interest in creating efficient, reliable, and user-focused applications. I aim to grow as a versatile software engineer by building AI-powered solutions that make technology smarter and more impactful.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{" "} Get In Touch</a>
                            <a href="/cv.pdf" download="cv.pdf" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download Resume/CV</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code2 className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg dark:text-black">Development</h4>
                                    <p className="text-muted-foreground dark:text-black">
                                        Developing responsive and interactive applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg dark:text-black">User Experience</h4>
                                    <p className="text-muted-foreground dark:text-black">
                                        Designing intuitive user interfaces and seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg dark:text-black">Fresher</h4>
                                    <p className="text-muted-foreground dark:text-black">
                                        Actively looking for opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}