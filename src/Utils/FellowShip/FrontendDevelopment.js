import { getDynamicFutureDate } from "../CourseCardInfos";
const WebCard = "/assets/fellowship/FrontendDeveloper/HeroCard.png";
const TechIcon1 = "/assets/fellowship/FrontendDeveloper/Icon2.png";
const TechIcon3 = "/assets/fellowship/FullStack/Icon3.png";
const TechIcon8 = "/assets/fellowship/FrontendDeveloper/Icon8.png";
const TechIcon5 = "/assets/fellowship/FullStack/Icon5.png";
const TechIcon6 = "/assets/fellowship/FullStack/Icon6.png";
const TechIcon7 = "/assets/fellowship/FullStack/Icon7.png";
const TechIcon9 = "/assets/fellowship/FullStack/Icon9.png";
const TechIcon10 = "/assets/fellowship/FullStack/Icon10.png";
const TechIcon11 = "/assets/fellowship/FullStack/Icon11.png";

const P1 = "/assets/fellowship/FullStack/P1.png";
const P2 = "/assets/fellowship/FullStack/P2.png";
const P3 = "/assets/fellowship/FullStack/P3.png";
const P4 = "/assets/fellowship/FullStack/P4.png";
const P5 = "/assets/fellowship/FullStack/P5.png";
const P6 = "/assets/fellowship/FullStack/P6.png";

const WebGif = "/assets/WebDev/WebHome.gif";
import { Subtitles } from "lucide-react";
import {
  MessageCircle,
  Edit3,
  Palette,
  Code,
  Layout,
  Building,
  CheckCircle,
  Rocket,
} from "lucide-react";

export const FrontendDeveloperHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Front-End Development Fellowship`,
      subtitle:
        "Learn web development with expert guidance, hands-on projects, and a curriculum designed for success.",
      description:
        "The Full Stack Web Development Fellowship is a comprehensive, hands-on training program designed to prepare aspiring developers for successful tech careers. Covering both front-end and back-end technologies, the fellowship emphasizes practical learning through real-world projects, code reviews, and collaborative development. Participants gain in-depth knowledge of modern frameworks, tools, and best practices used in the industry. With a focus on writing clean, scalable code and building end-to-end applications, the program ensures graduates are job-ready and equipped to contribute effectively to dynamic development teams.",
    },
    card: {
      image: WebCard,
      title: "Front-end Development Fellowship",
      alt: "Front-End Development Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Front-end Development Fellowship course In India",
    },
    trustMetrics: {
      customerCount: "30k+",
      rating: 4.6,
      totalReviews: "2k+",
    },
    features: [
      {
        title: "Online Learning",
        description: "Sessions on Video module",
      },
      {
        title: "3 months",
        description: "Internship timeline",
      },
      {
        title: "Mentorship",
        description: "With experienced engineers",
      },
      {
        title: "Job Portal",
        description: "Top-Tech Companies",
      },
    ],
    stats: [
      {
        value: "15+",
        label: "Live Projects",
        color: "text-sky-600",
        bgColor: "bg-sky-50",
      },
      {
        value: "95%",
        label: "Placement Rate",
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        value: "24/7",
        label: "Mentor Support",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        value: "₹8L",
        label: "Avg. Salary",
        color: "text-orange-600",
        bgColor: "bg-yellow-50",
      },
    ],
    batchInfo: {
      nextBatch: "Jan 15, 2024",
      seatsLeft: 8,
    },
    highlights: [
      "React.js, Node.js, MongoDB",
      "AWS Cloud & DevOps",
      "System Design & DSA",
    ],
  },
];

export const FrontendDeveloperTechstack = [
  {
    name: "Html",
    img: TechIcon3,
    alt: "HTML - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "HTML structures web content, creating pages with text, images.",
  },
  {
    name: "Bootstrap",
    img: TechIcon5,
    alt: "Bootstrap  - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "Bootstrap is a framework for responsive, mobile-first web development.",
  },
  {
    name: "Json",
    img: TechIcon6,
    alt: "Json  - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "JSON is a lightweight format for storing and exchanging data.",
  },
  {
    name: "Css",
    img: TechIcon11,
    alt: "Css  - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description: "CSS styles and formats the layout of web pages visually.",
  },

  {
    name: "Redux",
    img: TechIcon1,
    alt: "Redux - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "JSON is a lightweight format for storing and exchanging data.",
  },

  {
    name: "JSX",
    img: TechIcon7,
    alt: "JSX - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "JSX combines JavaScript and HTML, enabling dynamic UI components.",
  },
  {
    name: "React",
    img: TechIcon9,
    alt: "React - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "React is a JavaScript library for building interactive user interfaces efficiently.",
  },
  {
    name: "JavaScript",
    img: TechIcon10,
    alt: "JavaScript - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description:
      "JavaScript is a programming language for creating interactive web elements.",
  },
  {
    name: "Tailwind Css",
    img: TechIcon8,
    alt: "Tailwind Css - Technologies & Tools You Will Learn in Front-End Development Fellowship at Kre8ly",
    description: "CSS styles and formats the layout of web pages visually.",
  },
];

export const FrontendDeveloperProjects = [
  {
    imgs: P1,
    title: "To Do List App",
    alt: "To-Do List App  - Kre8ly Front-End Development Fellowship Project",
    description: "HTML, CSS, JavaScript, Express.js, Node.js, and MongoDB",
  },
  {
    imgs: P2,
    title: "Portfolio Website",
    alt: "Portfolio Website  - Kre8ly Front-End Development Fellowship Project",
    description:
      "Programming languages, database management systems, servers, etc.",
  },
  {
    imgs: P3,
    title: "Social Media Platforms",
    alt: "Social Media Platforms  - Kre8ly Front-End Development Fellowship Project",
    description:
      "Programming languages, React, Angular, and database management systems.",
  },
  {
    imgs: P4,
    title: "Project Management Tool",
    alt: "Project Management Tool  - Kre8ly Front-End Development Fellowship Project",
    description: "data management, API interactions, geo-mapping, etc.",
  },
  {
    imgs: P5,
    title: "Content Management System",
    alt: "Content Management System  - Kre8ly Front-End Development Fellowship Project",
    description: "Databases, Frameworks, and Programming Languages.",
  },
  {
    imgs: P6,
    title: "Gaming App",
    alt: "Gaming App  - Kre8ly Front-End Development Fellowship Project",
    description:
      "Creating the back-end technology and creating the game’s flow",
  },
];

export const FrontendDeveloperFaq = [
  {
    question: "Can I learn the front end in 2 months?",
    answer: `Focusing on HTML, CSS, and simple JavaScript, it is possible to learn the 
      fundamentals of front-end development in two months. But mastery necessitates 
      constant learning and practice.`,
  },
  {
    question: "What course should I do for a front-end developer?",
    answer: `Choose HTML, CSS, JavaScript, and responsive design classes from online 
      education providers like Kre8ly’s top-rated Front-End Web Development 
      Course.`,
  },
  {
    question: "What's the best way to learn front end web development?",
    answer: `Combining online classes, interactive coding environments, and practical 
      projects is the most effective approach to learn front-end web development. For 
      efficient skill building, practice constructing websites and ask for advice from 
      internet forums.`,
  },
  {
    question: "Can I learn front end web development in 3 months?",
    answer: `Yes, learning the basics of front-end web development in 3 months is achievable, 
      focusing on foundational HTML, CSS, and introductory JavaScript. Continued 
      practice and work on projects can enhance proficiency.`,
  },
  {
    question: "What is the salary of a front-end developer in India?",
    answer: `Front-end developer salaries in India vary based on experience and location. 
      Junior developers might earn around ₹3-5 lakh per annum, while experienced 
      professionals can earn ₹8-15 lakh or more, depending on the company, experience, 
      and skill level.`,
  },
];

export const FrontendAnimationText = [
  " Frontend Developer",
  "UI/UX Developer",
  "Web Designer",
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Do discussions to ensure that your web design is on the right path.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Create sitemaps and wireframe.A sitemap is made with the information collected. A wireframe provides a visual description of a site.",
    icon: Edit3,
    color: "green",
  },
  {
    id: 3,
    title: "Visual Design",
    description: "Web design should be according to the target audience.",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Development",
    description: "Developers develop and run codes on your site.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Framework",
    description:
      "Create a framework for your site by adding in pages required.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "Site Building",
    description: "Build your site by adding in an engaging and SEO content.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Testing",
    description:
      "Every page and link should be tested before launching the site to make sure nothing is broken.",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Launch",
    description: "Launch your website to attract your audience.",
    icon: Rocket,
    color: "slate",
  },
];
