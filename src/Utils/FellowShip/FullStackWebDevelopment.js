import { getDynamicFutureDate } from "../CourseCardInfos";
const WebCard = "/assets/WebDev/WebCard2.png";
const TechIcon1 = "/assets/fellowship/FullStack/Icon1.png";
const TechIcon2 = "/assets/fellowship/FullStack/Icon2.png";
const TechIcon3 = "/assets/fellowship/FullStack/Icon3.png";
const TechIcon4 = "/assets/fellowship/FullStack/Icon4.png";
const TechIcon5 = "/assets/fellowship/FullStack/Icon5.png";
const TechIcon6 = "/assets/fellowship/FullStack/Icon6.png";
const TechIcon7 = "/assets/fellowship/FullStack/Icon7.png";
const TechIcon8 = "/assets/fellowship/FullStack/Icon8.png";
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

export const FullStackHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Full Stack Web Development Fellowship`,
      subtitle:
        "Learn web development with expert guidance, hands-on projects, and a curriculum designed for success.",
      description:
        "The Full Stack Web Development Fellowship is a comprehensive, hands-on training program designed to prepare aspiring developers for successful tech careers. Covering both front-end and back-end technologies, the fellowship emphasizes practical learning through real-world projects, code reviews, and collaborative development. Participants gain in-depth knowledge of modern frameworks, tools, and best practices used in the industry. With a focus on writing clean, scalable code and building end-to-end applications, the program ensures graduates are job-ready and equipped to contribute effectively to dynamic development teams.",
    },
    card: {
      image: WebCard,
      title: "Full Stack Web Development Fellowship",
      alt: "Full Stack Web Development Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Full Stack Web Development Fellowship course In India",
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
    roadmapSteps: [
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
        description:
          "Build your site by adding in an engaging and SEO content.",
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
    ],
  },
];

export const TechStacksArray = {
  left: [
    {
      title: "Apis",
      icon: TechIcon1,
      icon_alt:
        "APIs - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "APIs connect applications, enabling seamless integration and functionality.",
    },
    {
      title: "Node Js",
      icon: TechIcon2,
      icon_alt:
        "Node.js - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "Node.js powers scalable, fast, and efficient server-side applications.",
    },
    {
      title: "Html",
      icon: TechIcon3,
      icon_alt:
        "HTML - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "HTML structures web content, creating pages with text, images.",
    },
    {
      title: "Mongo DB",
      icon: TechIcon4,
      icon_alt:
        "MongoDB - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "MongoDB stores data flexibly, enabling scalable and efficient applications.",
    },
    {
      title: "Bootstrap",
      icon: TechIcon5,
      icon_alt:
        "Bootstrap - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "Bootstrap is a framework for responsive, mobile-first web development.",
    },
  ],
  center: [
    {
      title: "Json",
      icon: TechIcon6,
      icon_alt:
        "JSON - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JSON is a lightweight format for storing and exchanging data.",
    },
  ],
  right: [
    {
      title: "JSX",
      icon: TechIcon7,
      icon_alt:
        "JSX - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JSX combines JavaScript and HTML, enabling dynamic UI components.",
    },
    {
      title: "Sql",
      icon: TechIcon8,
      icon_alt:
        "SQL - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "SQL manages and manipulates relational databases using structured query language.",
    },
    {
      title: "React",
      icon: TechIcon9,
      icon_alt:
        "React - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "React is a JavaScript library for building interactive user interfaces efficiently.",
    },
    {
      title: "JavaScript",
      icon: TechIcon10,
      icon_alt:
        "JavaScript - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JavaScript is a programming language for creating interactive web elements.",
    },
    {
      title: "Css",
      icon: TechIcon11,
      icon_alt:
        "CSS - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description: "CSS styles and formats the layout of web pages visually.",
    },
  ],
  all: [
    {
      title: "Apis",
      icon: TechIcon1,
      icon_alt:
        "APIs - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "APIs connect applications, enabling seamless integration and functionality.",
    },
    {
      title: "Node Js",
      icon: TechIcon2,
      icon_alt:
        "Node.js - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "Node.js powers scalable, fast, and efficient server-side applications.",
    },
    {
      title: "Html",
      icon: TechIcon3,
      icon_alt:
        "HTML - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "HTML structures web content, creating pages with text, images.",
    },
    {
      title: "Mongo DB",
      icon: TechIcon4,
      icon_alt:
        "MongoDB - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "MongoDB stores data flexibly, enabling scalable and efficient applications.",
    },
    {
      title: "Bootstrap",
      icon: TechIcon5,
      icon_alt:
        "Bootstrap - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "Bootstrap is a framework for responsive, mobile-first web development.",
    },
    {
      title: "Json",
      icon: TechIcon6,
      icon_alt:
        "JSON - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JSON is a lightweight format for storing and exchanging data.",
    },
    {
      title: "JSX",
      icon: TechIcon7,
      icon_alt:
        "JSX - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JSX combines JavaScript and HTML, enabling dynamic UI components.",
    },
    {
      title: "Sql",
      icon: TechIcon8,
      icon_alt:
        "SQL - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "SQL manages and manipulates relational databases using structured query language.",
    },
    {
      title: "React",
      icon: TechIcon9,
      icon_alt:
        "React - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "React is a JavaScript library for building interactive user interfaces efficiently.",
    },
    {
      title: "JavaScript",
      icon: TechIcon10,
      icon_alt:
        "JavaScript - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description:
        "JavaScript is a programming language for creating interactive web elements.",
    },
    {
      title: "Css",
      icon: TechIcon11,
      icon_alt:
        "CSS - Technologies & Tools You Will Learn in Web Development Fellowship at Kre8ly",
      description: "CSS styles and formats the layout of web pages visually.",
    },
  ],
};

// export const FullStackFellowshipProjects = [
//   {
//     imgs: P1,
//     title: "To Do List App",
//     alt: "To-Do List App  - Kre8ly Web Development Fellowship Project",
//     description: "HTML, CSS, JavaScript, Express.js, Node.js, and MongoDB",
//   },
//   {
//     imgs: P2,
//     title: "Portfolio Website",
//     alt: "Portfolio Website  - Kre8ly Web Development Fellowship Project",
//     description:
//       "Programming languages, database management systems, servers, etc.",
//   },
//   {
//     imgs: P3,
//     title: "Social Media Platforms",
//     alt: "Social Media Platforms - Kre8ly Web Development Fellowship Project",
//     description:
//       "Programming languages, React, Angular, and database management systems.",
//   },
//   {
//     imgs: P4,
//     title: "Project Management Tool",
//     alt: "Project Management Tool - Kre8ly Web Development Fellowship Project",
//     description: "data management, API interactions, geo-mapping, etc.",
//   },
//   {
//     imgs: P5,
//     title: "Content Management System",
//     alt: "Content Management System - Kre8ly Web Development Fellowship Project",
//     description: "Databases, Frameworks, and Programming Languages.",
//   },
//   {
//     imgs: P6,
//     title: "Gaming App",
//     alt: "Gaming App - Kre8ly Web Development Fellowship Project",
//     description:
//       "Creating the back-end technology and creating the game’s flow",
//   },
// ];

export const FullStackFellowshipProjects = [
  {
    imgs: P1,
    title: "To Do List App",
    alt: "To-Do List App  - Kre8ly Web Development Project",
  },
  {
    imgs: P2,
    title: "Portfolio Website",
    alt: "Portfolio Website  - Kre8ly Web Development Project",
  },
  {
    imgs: P3,
    title: "Social Media Platforms",
    alt: "Social Media Platforms - Kre8ly Web Development Project",
  },
  {
    imgs: P4,
    title: "Project Management Tool",
    alt: "Project Management Tool - Kre8ly Web Development Project",
  },
  {
    imgs: P5,
    title: "Content Management System",
    alt: "Content Management System - Kre8ly Web Development Project",
  },
  {
    imgs: P6,
    title: "Gaming App",
    alt: "Gaming App - Kre8ly Web Development Project",
  },
];

// export const FullStackFellowshipFaqs = [
//   {
//     question: "Can I learn the front end in 2 months?",
//     answer: `Focusing on HTML, CSS, and simple JavaScript, it is possible to learn the
//       fundamentals of front-end development in two months. But mastery necessitates
//       constant learning and practice.`,
//   },
//   {
//     question: "What course should I do for a front-end developer?",
//     answer: `Choose HTML, CSS, JavaScript, and responsive design classes from online
//       education providers like Kre8ly’s top-rated Front-End Web Development
//       Course.`,
//   },
//   {
//     question: "What's the best way to learn front end web development?",
//     answer: `Combining online classes, interactive coding environments, and practical
//       projects is the most effective approach to learn front-end web development. For
//       efficient skill building, practice constructing websites and ask for advice from
//       internet forums.`,
//   },
//   {
//     question: "Can I learn front end web development in 3 months?",
//     answer: `Yes, learning the basics of front-end web development in 3 months is achievable,
//       focusing on foundational HTML, CSS, and introductory JavaScript. Continued
//       practice and work on projects can enhance proficiency.`,
//   },
//   {
//     question: "What is the salary of a front-end developer in India?",
//     answer: `Front-end developer salaries in India vary based on experience and location.
//       Junior developers might earn around ₹3-5 lakh per annum, while experienced
//       professionals can earn ₹8-15 lakh or more, depending on the company, experience,
//       and skill level.`,
//   },
// ];

export const FullStackFellowshipFaqs = [
  {
    question: "What is the duration of the Web Development Fellowship Program?",
    answer: `The fellowship program typically runs for 3 to 6 months, depending on your pace and schedule. It includes structured lessons, live sessions, and hands-on projects to ensure you gain both theoretical knowledge and practical experience.`,
  },
  {
    question: "Do I need prior coding experience to join this program?",
    answer: `No, you don’t need any prior coding background. The program is designed for beginners and intermediate learners, starting with the basics and gradually moving to advanced full stack development concepts.`,
  },
  {
    question: "What technologies and tools will I learn during the fellowship?",
    answer: `You’ll gain proficiency in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end tools such as Node.js, Express.js, and MongoDB. You’ll also work with Git, GitHub, APIs, and deployment platforms to build complete, real-world applications.`,
  },
  {
    question: "Will I get a certificate after completing the program?",
    answer: ` Yes, upon successful completion of the fellowship, you’ll receive a certificate from Kre8ly. This certificate highlights your full stack development skills and can be a strong addition to your resume and LinkedIn profile.`,
  },
  {
    question:
      "Does the fellowship include placement assistance or career support?",
    answer: `Absolutely! We provide career support including resume reviews, mock interviews, portfolio building guidance, and job referrals through our hiring partners to help you land your first tech role or career upgrade.`,
  },
];

export const FullStackAnimationText = [
  "Full Stack Developer",
  "Software Engineer",
  "DevOps Engineer",
];
