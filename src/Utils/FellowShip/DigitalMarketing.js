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
      title: `Digital Marketing Internship Program & Fellowship`,
      subtitle: `Learn to plan, run and measure campaigns with expert mentors`,
      description:
        "Learn how to run digital marketing campaigns, from SEO and Google Ads to social media and email. You'll work on real projects with mentors, and because the program is online, you can join from home in Ludhiana, Jabalpur, Madurai or any other town.",
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
    name: "Yoast SEO",
    img: TechIcon1,
    alt: "Yoast SEO - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "On-page SEO for websites and blogs.",
  },
  {
    name: "Blogger",
    img: TechIcon2,
    alt: "Blogger - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Publishing and managing content easily.",
  },
  {
    name: "Similarweb",
    img: TechIcon3,
    alt: "Similarweb - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Checking and analyzing competitor traffic.",
  },
  {
    name: "Pinterest",
    img: TechIcon4,
    alt: "Pinterest - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Reaching visual discovery audiences on social platforms.",
  },
  {
    name: "Facebook",
    img: TechIcon5,
    alt: "Facebook - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Reaching target audiences and running social ad campaigns.",
  },
  {
    name: "WordPress",
    img: TechIcon6,
    alt: "WordPress - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Publishing, building, and managing full-fledged websites.",
  },
  {
    name: "Google Keyword Planner",
    img: TechIcon7,
    alt: "Google Keyword Planner - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Finding what people search for to drive keyword strategies.",
  },
  {
    name: "YouTube",
    img: TechIcon8,
    alt: "YouTube - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Reaching video audiences and optimizing video content.",
  },
  {
    name: "Canva",
    img: TechIcon9,
    alt: "Canva - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description: "Designing engaging posts, ads, and marketing graphics.",
  },
  {
    name: "Google Analytics",
    img: TechIcon10,
    alt: "Google Analytics - Technologies & Tools You Will Learn in Digital Marketing Fellowship at Kre8ly",
    description:
      "Measuring what your campaigns achieve and tracking user actions.",
  },
];

export const DigitalMarketingProjects = [
  {
    imgs: P1,
    title: "Search Engine Marketing Case Study",
    alt: "Search Engine Marketing Case Study – Kre8ly Digital Marketing Fellowship Project",
    description: "Plan and analyse a paid search campaign for a business.",
  },
  {
    imgs: P2,
    title: "Blogging Website",
    alt: "Blogging Website – Kre8ly Digital Marketing Fellowship Project",
    description: "Build a blog and grow it with SEO-friendly content.",
  },
  {
    imgs: P3,
    title: "Analytics Tools Report",
    alt: "Analytics Tools Report – Kre8ly Digital Marketing Fellowship Project",
    description: "Compare analytics tools and report what each one shows you.",
  },
  {
    imgs: P4,
    title: "Marketing Analytics Dashboard",
    alt: "Marketing Analytics Dashboard – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Bring campaign numbers into one dashboard that's easy to read.",
  },
  {
    imgs: P5,
    title: "Google Ads Campaign Management",
    alt: "Google Ads Campaign Management – Kre8ly Digital Marketing Fellowship Project",
    description:
      "Set up and manage a Google Ads campaign, then improve it using results.",
  },
  {
    imgs: P6,
    title: "Email Marketing Automation",
    alt: "Email Marketing Automation – Kre8ly Digital Marketing Fellowship Project",
    description: "Create an automated email flow that nurtures leads.",
  },
];

export const DigitalMarketingFaq = [
  {
    question: "What is the Digital Marketing Fellowship at Kre8ly?",
    answer: `It's a mentor-led online program where you learn SEO, paid ads, social media, email marketing and analytics by working on real projects. It's set up like an internship, so you finish with a portfolio and a certificate.`,
  },
  {
    question: "Is the Digital Marketing Fellowship suitable for beginners?",
    answer: `Yes. It's beginner friendly and starts from the basics of marketing, so you don't need prior experience.`,
  },
  {
    question:
      "What career opportunities can I pursue after completing the Digital Marketing Fellowship?",
    answer: `Roles such as SEO executive, social media executive, content marketer, performance marketing executive and email marketer, or you can freelance. What you land depends on your skills and projects.`,
  },
  {
    question:
      "Will I receive any certification upon completion of the fellowship?",
    answer: `Yes. You receive a Kre8ly certificate you can add to your resume and LinkedIn profile.`,
  },
  {
    question:
      "How is the mentorship provided in the Digital Marketing Fellowship?",
    answer: `Through live mentor sessions, weekly doubt sessions and feedback on your projects.`,
  },
  {
    question: "Can I learn digital marketing online through this fellowship?",
    answer: `Yes. Everything runs online with live and recorded sessions, so you can join from any city or town.`,
  },
  {
    question:
      "Is this a work-from-home internship?",
    answer: `The program runs online, so you can complete it from home. It's an internship-style learning program with project work. It's not a paid job, though we help with your job search afterwards.`,
  },
  {
    question:
      "Can I get an Amazon or Facebook internship through this program?",
    answer: `We can't promise a place at any specific company, since they run their own hiring. What we offer is training, projects, a certificate and job support that make your application stronger.`,
  },
  {
    question: "How much does the fellowship cost?",
    answer: `Pricing starts at ₹399. Check the enrolment page for the current fee and the next batch date.`,
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
