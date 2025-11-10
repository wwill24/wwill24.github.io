const EmailIconDark = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="#ededed"
        strokeWidth="2"
        fill="none"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="#ededed"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

const EmailIconLight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="#171717"
        strokeWidth="2"
        fill="none"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="#171717"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default function EmailIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <EmailIconDark
        className={`theme-dark-only ${className}`}
        {...props}
      />
      <EmailIconLight className={`theme-light-only ${className}`} {...props} />
    </>
  );
}

