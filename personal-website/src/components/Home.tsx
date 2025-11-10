import Section from "./Section";
import Image from "next/image";

export default function Home() {
  return (
    <Section
      className="gap-2 justify-center"
    >
      <div className="relative w-[40%] sm:w-[35%] md:w-[30%] aspect-[3/4] mx-auto mb-4">
        <Image
          src="/self.JPG"
          alt="Photo of William"
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 35vw, 30vw"
        />
      </div>
      <h1 className="text-4xl font-bold">William Wu</h1>
      <p className="text-lg">I am a software engineer with a passion for building products that help people live better lives.</p>
    </Section>
  );
}