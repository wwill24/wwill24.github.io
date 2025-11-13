import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Now() {
  const hobbies = [
    {
      title: "Personal Projects",
      description: "Working on side projects that challenge me to learn new technologies and solve problems that interest me. Currently working on a full stack financial app that allows more freedom than current subscription based apps.",
    },
    {
      title: "Learning",
      description: "Continuously learning about system design, backend architecture, and exploring new programming languages as I progress to the next step past entry level development.",
    },
    {
      title: "Health and Fitness",
      description: "Playing a lot of basketball. Currently in a rec league and occasionally playing pickup at Irvine Great Park! I also try to cook healthy meals at home, experimenting with new recipes.",
    },
    {
      title: "Gaming",
      description: "I frequently play Valorant (ranked Diamond 1) and a lot of other Steam games. Some of my favorite are Overcooked, Castle Crashers, and R.E.P.O! Contact me if you want to play!",
    },
  ];

  return (
    <Section className="gap-6 justify-start max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center w-full">What I&apos;m Doing Now</h1>
      <p className="text-center text-lg text-muted-foreground">
        Here is what I do outside of work!  <span className="italic">Last updated: November 12, 2025</span>
      </p>
      <p className="text-center text-lg text-muted-foreground mb-4">I hope to be more personable here as I share more of who I am outside a professional setting.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {hobbies.map((hobby, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{hobby.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

