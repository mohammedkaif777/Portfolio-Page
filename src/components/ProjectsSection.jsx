import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "IoT-Based Food Spoilage Detection System",
    description: "Developed an IoT system using ESP32 and sensors to monitor food quality and predict spoilage with real-time data displayed on a web dashboard.",
    image: "/projects/project1.jpg",
    tags: ["Arduino", "C++", "PHP"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohammedkaif777/Iot-based-food-spoilage-detection",
  },
  {
    id: 2,
    title: "Pankhudi: Flower E-Commerce Web Application",
    description:
      "Built a full-featured online flower store with a seamless shopping cart, detailed product listings, and an admin dashboard for inventory and order management.",
    image: "/projects/project2.jpg",
    tags: ["Html/CSS", "JavaScript", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohammedkaif777/Pankhudi--Flowers-E-commerce-Website",
  },
  {
    id: 3,
    title: "Music Genre Classification Application",
    description:
      "A Music Genre Classification Application A project based on convolutional neural network to classify music genre.",
    image: "/projects/project3.jpg",
    tags: ["Python", "Flask", "Tensorflow"],
    demoUrl: "#",
    githubUrl: "A Music Genre Classification Application A project based on convolutional neural network to classify music genre.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark: text-black">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 dark:text-black"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className=" bottom text-foreground/80 hover:text-primary transition-colors duration-300 dark:text-black"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mohammedkaif777"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};