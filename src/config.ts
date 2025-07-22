import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://unfiltered-blond.vercel.app/", // replace this with your deployed domain
  author: "Nexus Hue",
  desc: "NEXUS★HUE's UNFILTERED BLOG",
  title: "NEXUS Unfiltered",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. empty default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false, // force PNG usage
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/Nexus_Hue/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nexushue/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },

  {
    name: "Mail",
    href: "mailto:kevin@nexushue.com",
    linkTitle: `Send an email to kevin@nexushue.com via ${SITE.title}`,
    active: false,
  },

  {
    name: "YouTube",
    href: "https://www.youtube.com/@nexus_hue",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },

  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nexus.hue/",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },

  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
];
