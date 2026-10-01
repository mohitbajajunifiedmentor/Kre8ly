import { getDynamicFutureDate } from "../CourseCardInfos";
const WebCard = "/assets/fellowship/DigitalMarketing/HeroCard.png";
const WebGif = "/assets/WebDev/WebHome.gif";
const TechIcon1 = "/assets/fellowship/DigitalMarketing/Icon1.png";
const TechIcon2 = "/assets/fellowship/DigitalMarketing/Icon2.png";
const TechIcon3 = "/assets/fellowship/DigitalMarketing/Icon3.png";
const TechIcon4 = "/assets/fellowship/DigitalMarketing/Icon4.png";
const TechIcon5 = "/assets/fellowship/DigitalMarketing/Icon5.png";
const TechIcon6 = "/assets/fellowship/DigitalMarketing/Icon6.png";
const TechIcon7 = "/assets/fellowship/DigitalMarketing/Icon7.png";
const TechIcon8 = "/assets/fellowship/DigitalMarketing/Icon8.png";
const TechIcon9 = "/assets/fellowship/DigitalMarketing/Icon9.png";
const TechIcon10 = "/assets/fellowship/DigitalMarketing/Icon10.png";

const P1 = "/assets/fellowship/DigitalMarketing/P1.png";
const P2 = "/assets/fellowship/DigitalMarketing/P2.png";
const P3 = "/assets/fellowship/DigitalMarketing/P3.png";
const P4 = "/assets/fellowship/DigitalMarketing/P4.png";
const P5 = "/assets/fellowship/DigitalMarketing/P5.png";
const P6 = "/assets/fellowship/DigitalMarketing/P6.png";

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

export const DigitalMarketingHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Digital Marketing Fellowship`,
      subtitle: `Learn Digital Marketing with expert guidance, hands-on projects, and a curriculum designed for success.`,
      description:
        "Learn Digital Marketing with expert guidance, hands-on projects, and a curriculum designed for success.",
    },
    card: {
      image: WebCard,
      title: "Digital Marketing Fellowship",
      alt: "Digital Marketing Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Digital Marketing Fellowship course In India",
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

export const DigitalMarketingTechstack = [
  {
    name: "Yoast",
    img: TechIcon1,
    alt: "Yoast - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Yoast is a popular SEO plugin for WordPress that helps optimize website content.",
  },
  {
    name: "Blogger",
    img: TechIcon2,
    alt: "Blogger - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Blogger is a popular blogging platform for creating and sharing content.",
  },
  {
    name: "Similar Web",
    img: TechIcon3,
    alt: "Similar Web - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Similar Web is a tool for analyzing and comparing websites.",
  },
  {
    name: "Pinterest",
    img: TechIcon4,
    alt: "Pinterest - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Pinterest is a social media platform for creating and sharing visual content.",
  },
  {
    name: "Facebook",
    img: TechIcon5,
    alt: "Facebook - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Facebook is a social media platform for connecting with friends and sharing content.",
  },

  {
    name: "Wordpress",
    img: TechIcon6,
    alt: "WordPress - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Wordpress is a popular content management system for building websites.",
  },
  {
    name: "Google Key",
    img: TechIcon7,
    alt: "Google Key - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Google Key is a tool for analyzing and comparing websites.",
  },
  {
    name: "Youtube",
    img: TechIcon8,
    alt: "YouTube - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Youtube is a social media platform for creating and sharing video content.",
  },
  {
    name: "Canva",
    img: TechIcon9,
    alt: "Canva - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Canva is a design platform for creating and sharing visual content.",
  },
  {
    name: "Google Analytics",
    img: TechIcon10,
    alt: "Google Analytics - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Google Analytics is a tool for analyzing and comparing websites.",
  },
];

export const DigitalMarketingProjects = [
  {
    imgs: P1,
    title: "Search Engine Marketing Case Study",
    alt: "Search Engine Marketing Case Study – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Effective SEM uses keyword targeting, optimized ads, and performance analysis.",
  },
  {
    imgs: P2,
    title: "Blogging Website",
    alt: "Blogging Website – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Engaging blogs require quality content, SEO, visuals, and consistent updates.",
  },
  {
    imgs: P3,
    title: "Analytics Tools Report",
    alt: "Analytics Tools Report – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Analytics tools track performance, provide insights, and improve decisions.",
  },
  {
    imgs: P4,
    title: "Marketing Analytics Dashboard",
    alt: "Marketing Analytics Dashboard – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Marketing dashboards track metrics, visualize data, and improve strategies.",
  },
  {
    imgs: P5,
    title: "Google Ads Campaign Management",
    alt: "Google Ads Campaign Management – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Google Ads campaigns require keyword research, ad optimization, and analysis.",
  },
  {
    imgs: P6,
    title: "Email Marketing Automation",
    alt: "Email Marketing Automation – Kre8ly Digital Marketing Fellowship Project",
    description: "Email automation boosts engagement and conversions",
  },
];

// export const DigitalMarketingFaq = [
//   {
//     question: "Can I learn the front end in 2 months?",
//     answer: `Focusing on HTML, CSS, and simple JavaScript, it is possible to learn the
//           fundamentals of front-end development in two months. But mastery necessitates
//           constant learning and practice.`,
//   },
//   {
//     question: "What course should I do for a front-end developer?",
//     answer: `Choose HTML, CSS, JavaScript, and responsive design classes from online
//           education providers like Kre8ly’s top-rated Front-End Web Development
//           Course.`,
//   },
//   {
//     question: "What's the best way to learn front end web development?",
//     answer: `Combining online classes, interactive coding environments, and practical
//           projects is the most effective approach to learn front-end web development. For
//           efficient skill building, practice constructing websites and ask for advice from
//           internet forums.`,
//   },
//   {
//     question: "Can I learn front end web development in 3 months?",
//     answer: `Yes, learning the basics of front-end web development in 3 months is achievable,
//           focusing on foundational HTML, CSS, and introductory JavaScript. Continued
//           practice and work on projects can enhance proficiency.`,
//   },
//   {
//     question: "What is the salary of a front-end developer in India?",
//     answer: `Front-end developer salaries in India vary based on experience and location.
//           Junior developers might earn around ₹3-5 lakh per annum, while experienced
//           professionals can earn ₹8-15 lakh or more, depending on the company, experience,
//           and skill level.`,
//   },
// ];

export const DigitalMarketingFaq = [
  {
    question: "What is the Digital Marketing Fellowship at Kre8ly?",
    answer: `The Digital Marketing Fellowship is an advanced program designed to provide practical skills and mentorship in digital marketing. 
    It offers hands-on learning experiences to help you launch a successful career in digital marketing.`,
  },
  {
    question: "Is the Digital Marketing Fellowship suitable for beginners?",
    answer: `Yes, the program is beginner-friendly, but it also provides advanced learning for experienced marketers. It caters to all levels, offering foundational knowledge as well as advanced tactics.`,
  },
  {
    question:
      "What career opportunities can I pursue after completing the Digital Marketing Fellowship?",
    answer: `Graduates can pursue various roles such as Digital Marketing Manager, SEO Specialist, Social Media Manager, Content Strategist, and PPC Specialist in top companies or as freelancers.`,
  },
  {
    question:
      "Will I receive any certification upon completion of the fellowship?",
    answer: `Yes, upon completing the fellowship program, you will receive a certification that highlights your practical knowledge and expertise in digital marketing, enhancing your resume.`,
  },
  {
    question:
      "How is the mentorship provided in the Digital Marketing Fellowship?",
    answer: `The fellowship includes one-on-one mentorship with experienced industry professionals who guide you through the curriculum, help with projects, and offer valuable career insights.`,
  },
  {
    question: "Can I learn digital marketing online through this fellowship?",
    answer: ` Absolutely! The Digital Marketing Fellowship is an online program, providing flexibility to learn at your own pace while still receiving personalized support and guidance from experts.`,
  },
];

export const DigitalMarketingAnimationText = [
  "Digital Marketing Specialist",
  "SEO Specialist",
  "Social Media Manager",
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Engage in discussions to ensure your digital marketing strategy aligns with your business goals and target audience.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Develop a comprehensive digital marketing plan, including a content calendar and campaign goals.Gather data and insights to inform your strategy.",
    icon: Edit3,
    color: "green",
  },
  {
    id: 3,
    title: "Market Research",
    description:
      "Conduct market research to understand your audience, competitors, and industry trends. This will guide your messaging and positioning.",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Content Creation",
    description:
      "Create engaging, high-quality content tailored to your audience.This includes blog posts, social media updates, videos, and infographics.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Campaign Development",
    description:
      "Develop and run marketing campaigns across various channels (social media, email, PPC, SEO). Use analytics to track performance and make data-driven decisions.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "SEO and SEM Optimization",
    description:
      "Optimize your website and content for search engines to improve visibility and drive organic traffic. Use SEM strategies to complement your SEO efforts.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Analytics and Reporting",
    description:
      "Use analytics tools to monitor the performance of your campaigns.Generate reports to understand what's working and identify areas for improvement.",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Launch",
    description:
      "Launch your digital marketing campaigns to reach your audience. Continuously monitor and adjust your strategy to maximize results.",
    icon: Rocket,
    color: "slate",
  },
];
