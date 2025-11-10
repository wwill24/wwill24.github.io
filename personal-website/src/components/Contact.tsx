import { Button } from "./ui/button";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";
import Link from "next/link";
import Section from "./Section";

export default function Contact() {
  return (
    <Section className="gap-6 justify-center">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-lg text-center max-w-2xl">
        Feel free to reach out to me! I'm always open to discussing new opportunities, 
        interesting projects, or just having a chat.
      </p>
      <div className="flex items-center justify-center gap-6 mt-4">
        <Button 
          asChild 
          size="icon" 
          className="transition-transform duration-300 hover:scale-110 h-12 w-12"
        >
          <Link href="https://github.com/wwill24" className="!m-0">
            <GithubIcon />
          </Link>
        </Button>
        <Button
          asChild
          size="icon"
          className="transition-transform duration-300 hover:scale-110 h-12 w-12"
        >
          <Link href="https://www.linkedin.com/in/williamjunwu" className="!m-0">
            <LinkedInIcon />
          </Link>
        </Button>
      </div>
    </Section>
  );
}