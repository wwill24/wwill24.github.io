import Section from "./Section";
import Image from "next/image";

export default function Home() {
  return (
    <Section
      className="gap-2 justify-center"
    >
      <Image src="/self.JPG" alt="Photo of William" className="w-[30%] h-[30%] mb-2"/>
      <h1 className="text-4xl font-bold">William Wu</h1>
      <p className="text-lg">I am a software engineer with a passion for building products that help people live better lives.</p>
    </Section>
  );
}