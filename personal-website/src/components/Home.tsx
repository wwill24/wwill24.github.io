import Link from "next/link";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";
import { Button } from "./ui/button";
import Section from "./Section";

export default function Home() {
  return (
    <Section
      className="gap-2 justify-center"
    >
      <img src="/self.JPG" className="w-[30%] h-[30%] mb-2"/>
      <h1 className="text-4xl font-bold">William Wu</h1>
      <p className="text-lg">I am a software engineer with a passion for building products that help people live better lives.</p>
    </Section>
  );
}