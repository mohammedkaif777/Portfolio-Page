import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaJava , FaMicrosoft} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Programming Languages
  { name: "Java", icon: FaJava, category: "ProgrammingLanguages" },
  { name: "HTML", icon: SiHtml5, category: "ProgrammingLanguages" },
  { name: "CSS", icon: SiCss3, category: "ProgrammingLanguages" },
  { name: "JavaScript", icon: SiJavascript, category: "ProgrammingLanguages" },
  { name: "Python", icon: SiPython, category: "ProgrammingLanguages" },

  // Databases
  { name: "MySQL", icon: SiMysql, category: "DataBase" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "DataBase" },

  // Frameworks
  { name: "React JS", icon: SiReact, category: "framework" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "framework" },
  { name: "Spring Boot", icon: SiSpringboot, category: "framework" },

  // Tools
  { name: "Git / GitHub", icon: SiGit, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "MS Office", icon:FaMicrosoft, category: "tools" },
  { name: "VS Code", icon: VscVscode, category: "tools" },
];

const categories = ["all", "ProgrammingLanguages", "DataBase", "framework", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 dark:text-black">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "ProgrammingLanguages"
                ? "Languages"
                : category === "DataBase"
                ? "Databases"
                : category === "framework"
                ? "Frameworks"
                : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center dark:text-black">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="text-5xl text-primary" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
