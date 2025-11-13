export default function Section({
  children,
  id = "",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center gap-3 p-12 bg-no-repeat bg-center bg-cover ${className}`}
    >
      {children}
    </section>
  );
}