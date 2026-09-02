const WebGif = "/assets/WebDev/WebHome.gif";
const WebCard = "/assets/WebDev/WebCard2.png";
const WebRoadMap = "/assets/WebDev/WebRoadmap2.gif";
const Icon1 = "/assets/WebDev/Road1.png";
const Icon2 = "/assets/WebDev/Road2.png";
const Icon3 = "/assets/WebDev/Road3.png";
const Icon4 = "/assets/WebDev/Road4.png";
const Icon5 = "/assets/WebDev/Road5.png";
const Icon6 = "/assets/WebDev/Road6.png";
const Icon7 = "/assets/WebDev/Road7.png";
const Icon8 = "/assets/WebDev/Road8.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebDevDeskImage = "/assets/WebDev/WebDevelopmentRoadmapDesktop%20(2).svg";
const WebDevDeskMobile = "/assets/WebDev/WebDevelopmentRoadmapMobile%20(2).svg";
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

export const WebDevHomeInfo = [
  {
    // title: "Full Stack Development Internship",
    badge: "Most Popular Course",
    title: "Best Online Web Development Course in India",
    subtitle:
      "Web Development is one of the most in-demand and fast-growing tech fields today. Are you looking for the best Web Development course in India",
    description:
      "The subject of web development is fast expanding, and new tools and technologies are constantly being developed. Our Web Development Course covers HTML, CSS, responsive design, JavaScript, frameworks like React and Vue.js, web performance optimization, Git version control, cross-browser compatibility, UX/UI principles, practical projects, as well as Backend Development, Web Security, and Deployment and Hosting. This comprehensive curriculum ensures you gain a strong foundation in web development and design principles. The Web Development Course from Kre8ly opens the door to a wide range of job options, including working for web development companies, contributing to digital startups, or even going freelancing.",
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
    card: {
      image: WebCard,
      title: "Web Development",
      alt: "Web Development course In India",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/web-development-enroll",
    },
    Gifs: {
      description:
        "Cartoon robot in top right corner, Web Development Course In India",
      url: WebGif,
    },
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

export const WebDevRoadMap = [
  {
    image: WebDevDeskImage,
    alt: "Web Development Course In India Roadmap",
  },
  {
    image: WebDevDeskMobile,
    alt: "Web Development Course In India Roadmap",
  },
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
