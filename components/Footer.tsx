import Link from "next/link";
import {GitHub, LinkedIn, Mail, X} from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHub className="w-5 h-5" />,
      href: "https://github.com/AboveZtars",
      label: "GitHub",
    },
    {
      icon: <LinkedIn className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rafael-molina-6649ab66/",
      label: "LinkedIn",
    },
    {
      icon: <X className="w-5 h-5" />,
      href: "https://x.com/spoonkycat",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:rafael@molina-aquino.com",
      label: "Email",
    },
  ];

  return (
    <footer className="transition-colors duration-1000 bg-sand/50 dark:bg-slate-800 py-8 border-t border-orange/20 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © {currentYear} Rafael Molina. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-orange dark:text-gray-400 dark:hover:text-orange-light transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                tabIndex={0}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
