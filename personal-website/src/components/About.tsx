import Section from "./Section";
import SkillBadge from "./SkillBadge";

export default function About() {
  return (
    <Section className="gap-6 justify-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="flex flex-col gap-4 text-lg leading-relaxed">
        <p className="text-center">
          Hi! I’m Will. I am a software engineer with prior experience at Amazon Web Services. 
          I&apos;m passionate about building products that make a real impact on people&apos;s lives. 
          With a strong foundation in computer science and hands-on experience in full-stack development, 
          contributing and building large scalable systems backend systems, and API integrations, I 
          bring a versatility and adaptability to any engineering culture. I have a strong interest in 
          backend services, system design, developer tools, and anything else that makes our lives easier. 
        </p>
        <p className="text-center">
          When I&apos;m not working, you can find me working on personal projects that challenge me to grow as a developer.
          I also enjoy developing fun games using Three js or on Roblox!
        </p>
        <div className="mt-4">
          <h2 className="flex flex-wrap items-center justify-center text-2xl font-semibold mb-3">Most Used Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SkillBadge skill="C++" />
            <SkillBadge skill="Java" />
            <SkillBadge skill="TypeScript" />
            <SkillBadge skill="React.js/Next.js" />
            <SkillBadge skill="PostgreSQL" />
          </div>
        </div>
      </div>
    </Section>
  );
}