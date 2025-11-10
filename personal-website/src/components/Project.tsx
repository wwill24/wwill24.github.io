import Section from "./Section";
import Link from "next/link";
import { Button } from "./ui/button";
import GithubIcon from "./icons/GitHub";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Bruin Hot Take",
    description: "Social media platform to debate hot topics around UCLA campus",
    technologies: ["React", "TypeScript", "Next.js", "Express", "Tailwind CSS", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/wwill24/bruin-hot-take",
    liveUrl: "https://drive.google.com/file/d/1HE_cg4ClTabrOg8uVzFbSUkFNojS-1no/view?usp=sharing",
  },
  {
    title: "Shelter Connect",
    description: "Disaster relief platform to connect users to local shelters using interactive maps, volunteer services, and donation opportunities",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB", "Stripe", "Google API"],
    githubUrl: "https://github.com/wwill24/shelterconnect",
  },
  {
    title: "Bruin Food Review",
    description: "Food review platform for all dining options around UCLA campus",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/wwill24/uclafoodreview",
  },
];

export default function Project() {
  return (
    <Section className="gap-8 justify-start max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center w-full">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow flex flex-col"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}