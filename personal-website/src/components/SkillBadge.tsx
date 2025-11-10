import { Badge } from "./ui/badge";

export default function SkillBadge({
  className = "",
  skill,
}: {
  className?: string;
  skill: string;
}) {
  return (
    <Badge
      variant="outline"
      className={`text-sm rounded-full dark:text-stone-400 border-2 sm:py-1 sm:px-3 transition-colors duration-300 ease-in-out ${className}`}
    >
      {skill}
    </Badge>
  );
}