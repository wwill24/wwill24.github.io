import Section from "./Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Engineer",
    company: "Smartnosis",
    location: "Los Angeles, CA",
    period: "December 2025 - Present",
    description: [
      "Architected automated concussion monitoring pipeline with 5-period SMS follow-up scheduling, eliminating manual tracking gaps and ensuring 100% post-injury patient coverage",
      "Engineered real-time red-flag escalation engine analyzing 11+ symptom inputs with severity scoring to instantly triage high-risk athletes, reducing clinical response time",
      "Implemented secure JWT token rotation with refresh deduplication and role-based access control across 3 user types, hardening PHI protection for HIPAA-readiness",
      "Built multi-tenant organization linking system with invitation-based onboarding, enabling platform scalability from single clinics to district-wide deployments",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "Sunnyvale, CA",
    period: "June 2025 - September 2025",
    description: [
      "Reduced 100% packet loss by implementing new bootstrap logic to allow data plane to process all security policies",
      "Resolved ongoing memory leak in core security service to improve system stability and eliminate service failures",
      "Orchestrated end-to-end testing framework in CI/CD pipeline with stress testing to ensure reliability",
      "Deployed phased production using canary deployments with real-time metric validations",
    ],
  },
  {
    title: "Software Engineer",
    company: "MyOxytocin",
    location: "Remote",
    period: "October 2024 - January 2025",
    description: [
      "Engineered a web app using Vue.js for responsive UI design and state management to optimize for user engagement",
      "Utilize Firebase authentication for secure user login and Firestore database for order tracking and management",
      "Manage payment processing to ensure secure and efficient transactions exceeding $100 by leveraging Stripe API",
      "Collaborate with cross-functional teams for search optimization features to improve visibility by 50%",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "eFreight International LLC",
    location: "Remote",
    period: "March 2024 - September 2024",
    description: [
      "Integrated with over 3 external shipping carrier systems by engineering an API using Node JS",
      "Provided real-time shipping quotes based on user-specified shipment details for 100+ users by creating format conversion to specified XML format",
      "Migrated from self-hosted server to AWS Lambda and API Gateway, reducing infrastructure costs by 95%",
      "Optimized to 50% increase in request handling capacity and 30% reduction in response time after migration",
      "Ensured reliable and accurate pricing information for thousands of estimates through data validation scripts",
    ],
  },
];

export default function Experience() {
  return (
    <Section className="gap-8 justify-start max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center w-full">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <CardDescription className="space-y-1">
                <div className="text-lg font-medium text-primary">{exp.company}</div>
                <div className="text-sm">{exp.location}</div>
                <div className="text-xs">{exp.period}</div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc space-y-2 text-sm text-muted-foreground list-inside">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}