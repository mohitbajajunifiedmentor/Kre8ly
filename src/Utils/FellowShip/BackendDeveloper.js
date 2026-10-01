const WebCard = "/assets/fellowship/BackendDeveloper/HeroCard.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebGif = "/assets/WebDev/WebHome.gif";

const TechIcon1 = "/assets/fellowship/BackendDeveloper/Icon1.png";
const TechIcon2 = "/assets/fellowship/BackendDeveloper/Icon2.png";
const TechIcon3 = "/assets/fellowship/BackendDeveloper/Icon3.png";
const TechIcon4 = "/assets/fellowship/BackendDeveloper/Icon4.png";
const TechIcon5 = "/assets/fellowship/BackendDeveloper/Icon5.png";
const TechIcon6 = "/assets/fellowship/BackendDeveloper/Icon6.png";
const TechIcon7 = "/assets/fellowship/BackendDeveloper/Icon7.png";
const TechIcon8 = "/assets/fellowship/BackendDeveloper/Icon8.png";
const TechIcon9 = "/assets/fellowship/BackendDeveloper/Icon9.png";

const P1 = "/assets/fellowship/FullStack/P1.png";
const P2 = "/assets/fellowship/FullStack/P2.png";
const P3 = "/assets/fellowship/FullStack/P3.png";
const P4 = "/assets/fellowship/FullStack/P4.png";
const P5 = "/assets/fellowship/FullStack/P5.png";
const P6 = "/assets/fellowship/FullStack/P6.png";
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

export const BackendDeveloperHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Back-End Development Fellowship`,

      subtitle:
        "Learn web development with expert guidance, hands-on projects, and a curriculum designed for success.",
      description:
        "Join our Back-End Development Fellowship to master server-side programming, databases, and APIs. Build robust web applications with expert mentorship and real-world projects.",
    },
    card: {
      image: WebCard,
      title: "Back-end Development Fellowship",
      alt: "Back-end Development Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Back-end Development Fellowship course In India",
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

export const BackendDeveloperTechstack = [
  {
    name: "API",
    img: TechIcon1,
    icon_alt:
      "APIs - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "APIs connect applications, enabling seamless integration and functionality.",
  },
  {
    name: "Node Js",
    img: TechIcon2,
    icon_alt:
      "Node Js - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "Node.js powers scalable, fast, and efficient server-side applications.",
  },
  {
    name: "Json",
    img: TechIcon3,
    icon_alt:
      "Json - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "JSON is a lightweight format for storing and exchanging data.",
  },
  {
    name: "NPM",
    img: TechIcon4,
    icon_alt:
      "NPM - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description: "NPM is a package manager for JavaScript projects.",
  },
  {
    name: "JSON Web Tokens",
    img: TechIcon5,
    icon_alt:
      "JSON Web Tokens  - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "JSON Web Tokens (JWT) are used for authentication and Authorization.",
  },
  {
    name: "Sql",
    img: TechIcon6,
    icon_alt:
      "Sql  - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "SQL is a structured query language for accessing and manipulating databases.",
  },
  {
    name: "Mongo DB",
    img: TechIcon7,
    icon_alt:
      "Mongo DB  - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "MongoDB stores data flexibly, enabling scalable and efficient applications.",
  },
  {
    name: "Express.js",
    img: TechIcon8,
    icon_alt:
      "Express.js  - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "Express.js is a web framework for building web applications in Node.js.",
  },
  {
    name: "Redis",
    img: TechIcon9,
    icon_alt:
      "Redis - Technologies & Tools You Will Learn in Back-End Web Development Fellowship at Kre8ly",
    description:
      "Redis is a key-value store used for caching and session management.",
  },
];

export const BackendDeveloperProjects = [
  {
    imgs: P1,
    title: "To Do List App",
    alt: "To-Do List App  - Kre8ly Back-End Development Fellowship Project",
    description: "HTML, CSS, JavaScript, Express.js, Node.js, and MongoDB",
  },
  {
    imgs: P2,
    title: "Portfolio Website",
    alt: "Portfolio Website  - Kre8ly Back-End Development Fellowship Project",
    description:
      "Programming languages, database management systems, servers, etc.",
  },
  {
    imgs: P3,
    title: "Social Media Platforms",
    alt: "Social Media Platforms  - Kre8ly Back-End Development Fellowship Project",
    description:
      "Programming languages, React, Angular, and database management systems.",
  },
  {
    imgs: P4,
    title: "Project Management Tool",
    alt: "Project Management Tool  - Kre8ly Back-End Development Fellowship Project",
    description: "data management, API interactions, geo-mapping, etc.",
  },
  {
    imgs: P5,
    title: "Content Management System",
    alt: "Content Management System  - Kre8ly Back-End Development Fellowship Project",
    description: "Databases, Frameworks, and Programming Languages.",
  },
  {
    imgs: P6,
    title: "Gaming App",
    alt: "Gaming App  - Kre8ly Back-End Development Fellowship Project",
    description:
      "Creating the back-end technology and creating the game’s flow",
  },
];

// export const BackendDeveloperFaq = [
//   {
//     question: "Can I learn the front end in 2 months?",
//     answer: `Focusing on HTML, CSS, and simple JavaScript, it is possible to learn the
//         fundamentals of front-end development in two months. But mastery necessitates
//         constant learning and practice.`,
//   },
//   {
//     question: "What course should I do for a front-end developer?",
//     answer: `Choose HTML, CSS, JavaScript, and responsive design classes from online
//         education providers like Kre8ly’s top-rated Front-End Web Development
//         Course.`,
//   },
//   {
//     question: "What's the best way to learn front end web development?",
//     answer: `Combining online classes, interactive coding environments, and practical
//         projects is the most effective approach to learn front-end web development. For
//         efficient skill building, practice constructing websites and ask for advice from
//         internet forums.`,
//   },
//   {
//     question: "Can I learn front end web development in 3 months?",
//     answer: `Yes, learning the basics of front-end web development in 3 months is achievable,
//         focusing on foundational HTML, CSS, and introductory JavaScript. Continued
//         practice and work on projects can enhance proficiency.`,
//   },
//   {
//     question: "What is the salary of a front-end developer in India?",
//     answer: `Front-end developer salaries in India vary based on experience and location.
//         Junior developers might earn around ₹3-5 lakh per annum, while experienced
//         professionals can earn ₹8-15 lakh or more, depending on the company, experience,
//         and skill level.`,
//   },
// ];

export const BackendDeveloperFaq = [
  {
    question: "What is the duration of the Backend Development Fellowship?",
    answer: `The Backend Development Fellowship by Kre8ly is a 3-month intensive program. It’s structured to provide a comprehensive learning experience, starting from backend fundamentals to advanced concepts. The timeline includes weekly mentorship sessions, regular assessments, and real-world projects that help reinforce your skills and prepare you for job roles in backend development.`,
  },
  {
    question: "Do I need prior coding experience to join this fellowship?",
    answer: ` No prior experience is required. This fellowship is designed for beginners as well as those looking to switch to backend development. The curriculum starts with the basics and gradually progresses to more complex topics. Even if you're completely new to programming, our step-by-step modules, hands-on exercises, and expert mentorship will help you build a strong foundation in backend technologies.`,
  },
  {
    question: "Will I get a certificate after completing the program?",
    answer: ` Yes, you'll receive an industry-recognized certificate upon successful completion of the fellowship. This certificate validates your skills in backend development and can be shared on platforms like LinkedIn or included in your resume. It acts as a solid proof of your practical training and project experience to potential employers or clients.`,
  },
  {
    question: "Is placement support included in the fellowship?",
    answer: ` Absolutely! Kre8ly provides full placement support as part of the fellowship. This includes personalized career guidance, resume and LinkedIn optimization, mock interviews with technical experts, and job referrals to hiring partners. Our goal is to help you land your first job or internship in backend development right after the program.`,
  },
  {
    question: "What technologies will I learn during the fellowship?",
    answer: `You’ll gain hands-on experience in key backend technologies such as Node.js, Express.js, MongoDB, RESTful APIs, Git & GitHub, and server deployment. You'll also learn how to build scalable web applications and understand backend architecture, security best practices, and integration with frontend systems. The curriculum is updated regularly to match industry standards and employer demands.`,
  },
];

export const BackendAnimationText = [
  "Backend Developer",
  "Database Administrator",
  "API Developer",
];
