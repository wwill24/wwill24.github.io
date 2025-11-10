"use client";

import { useEffect, useState } from "react";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";
import EmailIcon from "./icons/Email";
import ResumeIcon from "./icons/Resume";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null;
    const initial = stored ?? (getSystemPrefersDark() ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-island">
        <nav className="nav">
          <ul className="nav-links">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/wwill24"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/williamjunwu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:williamjunw@gmail.com"
                className="nav-icon-link"
                aria-label="Email"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
              <a
                href="https://drive.google.com/file/d/12lCji89GOEJCVW_U1KCwv-KrR2c0SReO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="Resume"
              >
                <ResumeIcon className="w-5 h-5" />
              </a>
            </div>
            {mounted && (
              <button
                aria-label="Toggle theme"
                title="Toggle light/dark"
                className="theme-toggle"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  // Sun icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.636 5.636l-1.414 1.414M19.778 19.778l-1.414-1.414M18.364 5.636l1.414 1.414M4.222 19.778l1.414-1.414" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  // Moon icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                )}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}


