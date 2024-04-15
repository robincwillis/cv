import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";

import Avatar from '@/images/avatar.jpg';

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Robin Willis",
  initials: "RCW",
  location: "Santa Barbara, CA",
  locationLink: "https://www.google.com/maps/place/Santa+Barbara,+CA",
   about:
     "Product army of one and full stack developer advancing and challenging the boundaries of both disciplines",
  summary:
    "2x founder, seasoned technology and design leader with over 14 years of experience, I excel at transforming complex problems into successful products at intersection of design and engineering.",
  avatarUrl: Avatar,
  personalWebsiteUrl: "https://robincwillis.com",
  contact: {
    email: "robincwillis@gmail.com",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/robincwillis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robincwillis/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter (X)",
        url: "https://x.com/robincwillis",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Massachusetts Institute of Technology",
      degree: "MARCH, Architecture",
      start: "2007",
      end: "2011",
    },
    {
      school: "The Cooper Union for the Advancement of Science and Art",
      degree: "BFA, Fine Arts, Graphic Design",
      start: "2003",
      end: "2007",
    },
  ],
  work: [
    {
      company: "Tender",
      link: "https://tenderco.co",
      badges: ["founder", "design", "engineering", "leadership"],
      title: "Head of Product Design",
      start: "2017",
      end: "2022",
      description:
      `Leading the charge in revolutionizing caregiving through innovative technology. My role involves crafting a forward-thinking product vision, guiding the roadmap, and orchestrating all facets of product design and development. Key achievements include spearheading transformative features, cultivating a culture of innovation, and building a cohesive, efficient product team. I prioritize a user-centric approach, resulting in increased engagement, satisfaction, and retention, contributing to Tender's mission of creating a seamless caregiving platform.`
      //`Orchestrated caregiving innovation through a forward-thinking product vision. Led transformative features and built an efficient product team.`
    },
    {
      company: "Gordils & Willis",
      link: "https://gordilsandwillis.com",
      badges: ["founder", "design", "engineering", "leadership"],
      title: "Partner",
      start: "2017",
      end: "2022",
      description:
        `Led company-wide strategic vision, management, and day-to-day operations to ensure high-quality work delivery. Took a hands-on approach in both design and engineering, contributing to client projects and staying current with the latest industry techniques. Conducted regular design and engineering reviews for quality assurance, while managing and mentoring team members. Cultivated strong client relationships, understanding their needs to deliver exceptional service and results.`
        //`Directed company vision, ensuring high-quality work. Maintained hands-on design and engineering oversight, fostering client relationships for exceptional service and results.`
    },
    {
      company: "CompStak",
      link: "https://compstak.com/",
      badges: ['design', 'engineering', 'management'],
      title: "Product Designer / Software Engineer",
      start: "2014",
      end: "2017",
      description:
        `Led UI/UX design and research. Spearheaded redesign and front-end overhaul– enhancing usability and improving sales and user retention.`
    },
    {
      company: "Sunglass",
      link: undefined,
      badges: ['design', 'engineering', 'management'],
      title: "Software Engineer",
      start: "2012",
      end: "2013",
      description:
       `Designed and developed multiple 3D design application plug-ins, seamlessly interacting with a web API through various languages and interfaces. Additionally, I created the companion iOS App, enabling users to download, navigate, and add annotations, photos, and comments onto 3D models. Managed external development through contractors and effectively coordinated efforts with the internal development team for seamless integration.`
       // `Designed and developed 3D design application plug-ins, managing external contractors. Created a companion iOS App.`
    }
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "React Native",
    "Swift",
    "Python",
    "CSS/SCSS/Tailwind",
    "WebGL/Three.js",
    "Figma/Adobe",
    "User Interface Design",
    "Data Visualization",
    "3D Modeling",
    "User Experience Research",
    "Project Management/Agile"
  ],
  projects: [
    // {
    //   title: "Milton Textiles",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description: "",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Sailing Collective",
    //   techStack: ["Web App", "Next.js"],
    //   description:
    //     "",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "JAJA",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
    // {
    //   title: "Easyset",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
    // {
    //   title: "Remissary",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
    // {
    //   title: "Tender",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
    // {
    //   title: "Arbor",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
    // {
    //   title: "Arbor",
    //   techStack: ["Web App", "Next.js", "MDX"],
    //   description: "",
    // },
  ],
} as const;
