import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "HOME", href: "\\#hero" },
  { label: "About", href: "\\#about" },
  { label: "Events", href: "\\#story" },
  { label: "Team", href: "\\#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/think-iot/",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/thinkIoT?mibextid=kFxxJD",
    icon: FaFacebook,
  },
  {
    href: "https://github.com/ThinkIoT",
    icon: FaGithub,
  },
] as const;
