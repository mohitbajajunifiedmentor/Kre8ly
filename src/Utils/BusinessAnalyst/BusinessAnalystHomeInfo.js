const WebCard = "/assets/fellowship/BusinessAnalyst/HeroCard.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebGif = "/assets/WebDev/WebHome.gif";

const TechIcon1 = "/assets/fellowship/BusinessAnalyst/TechIcon1.png";
const TechIcon2 = "/assets/fellowship/BusinessAnalyst/TechIcon2.png";
const TechIcon3 = "/assets/fellowship/BusinessAnalyst/TechIcon3.png";
const TechIcon4 = "/assets/fellowship/BusinessAnalyst/TechIcon4.png";
const TechIcon5 = "/assets/fellowship/BusinessAnalyst/TechIcon5.png";
const TechIcon6 = "/assets/fellowship/BusinessAnalyst/TechIcon6.png";
const TechIcon7 = "/assets/fellowship/BusinessAnalyst/TechIcon7.png";
const TechIcon8 = "/assets/fellowship/BusinessAnalyst/TechIcon8.png";
const TechIcon9 = "/assets/fellowship/BusinessAnalyst/TechIcon9.png";
const TechIcon10 = "/assets/fellowship/BusinessAnalyst/TechIcon10.png";

const P1 = "/assets/fellowship/BusinessAnalyst/P1.png";
const P2 = "/assets/fellowship/BusinessAnalyst/P2.png";
const P3 = "/assets/fellowship/BusinessAnalyst/P3.png";
const P4 = "/assets/fellowship/BusinessAnalyst/P4.png";
const P5 = "/assets/fellowship/BusinessAnalyst/P5.png";
const P6 = "/assets/fellowship/BusinessAnalyst/P6.png";

import {
  HelpCircle, // 1. Understand the Problem
  Users, // 2. Identify Stakeholders (people, decision makers)
  ClipboardList, // 3. Gather Requirements (interviews, surveys, lists)
  Workflow, // 4. Analyse Data and Processes (process flows, SQL)
  FileText, // 5. Document Requirements (PRD, user stories)
  Sliders, // 6. Propose and Prioritise Solutions (compare cost/impact)
  Presentation, // 7. Present to Stakeholders (deck/dashboards)
  Kanban, // 8. Track and Review (Trello board delivery tracking)
} from "lucide-react";

export const BusinessAnalystHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Business Analyst Internship Program & Fellowship`,
      subtitle: "Learn business analysis with expert mentors and live projects",
      description:
        "Business analysts sit between the people who run a company and the people who build things for it. This program teaches you to gather requirements, read the data behind a problem and present a clear recommendation. Mentors guide you through live projects online, so you can join from Nagpur, Bhopal, Kochi or any town with a stable internet connection.",
    },
    card: {
      image: WebCard,
      title: "Business Analyst Fellowship",
      alt: "Business Analyst Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Business Analyst Fellowship course In India",
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

export const BusinessAnalystTechStack = [
  {
    name: "Sql",
    img: TechIcon1,
    alt: "Sql - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Pulling and checking data",
  },
  {
    name: "Excel",
    img: TechIcon2,
    alt: "Excel - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Analysis and quick models",
  },
  {
    name: "Trello",
    img: TechIcon3,
    alt: "Trello - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Tracking tasks and requirements",
  },
  {
    name: "Microsoft PowerPoint",
    img: TechIcon4,
    alt: "Microsoft PowerPoint - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Presenting recommendations",
  },
  {
    name: "Tableau",
    img: TechIcon5,
    alt: "Tableau - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Dashboards for non-technical readers",
  },
  {
    name: "Power BI",
    img: TechIcon6,
    alt: "Power BI - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Dashboards for non-technical readers",
  },
  {
    name: "Google Analytics",
    img: TechIcon7,
    alt: "Google Analytics - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Understanding how people use a website or app",
  },
  {
    name: "R Lang",
    img: TechIcon8,
    alt: "R Lang - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Statistical analysis",
  },
  {
    name: "Lucidchart",
    img: TechIcon9,
    alt: "Lucidchart - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Drawing process flows and diagrams",
  },
  {
    name: "QlikView",
    img: TechIcon10,
    alt: "QlikView - Technologies & Tools You Will Learn in Business Analyst Fellowship at Kre8ly",
    description: "Interactive business reports",
  },
];

export const BusinessAnalystProjects = [
  {
    imgs: P1,
    title: "Requirements Document",
    alt: "Requirements Document – Kre8ly Business Analyst Fellowship Project",
    description:
      "Write a full requirements document for an e-commerce checkout feature.",
  },
  {
    imgs: P2,
    title: "Process Improvement Map",
    alt: "Process Improvement Map – Kre8ly Business Analyst Fellowship Project",
    description:
      "Map an order fulfilment process, find the delays and propose fixes.",
  },
  {
    imgs: P3,
    title: "Sales Dashboard",
    alt: "Sales Dashboard – Kre8ly Business Analyst Fellowship Project",
    description:
      "Build a Power BI or Tableau dashboard that tracks sales by region and product.",
  },
  {
    imgs: P4,
    title: "Customer Churn Analysis",
    alt: "Customer Churn Analysis – Kre8ly Business Analyst Fellowship Project",
    description: "Use SQL to find out why customers leave.",
  },
  {
    imgs: P5,
    title: "Website Traffic Report",
    alt: "Website Traffic Report – Kre8ly Business Analyst Fellowship Project",
    description: "Read Google Analytics data and recommend changes.",
  },
  {
    imgs: P6,
    title: "Stakeholder Presentation",
    alt: "Stakeholder Presentation – Kre8ly Business Analyst Fellowship Project",
    description: "Present your recommendations to a mock leadership team.",
  },
];

export const BusinessAnalystFaq = [
  {
    question: "What is the Business Analyst Fellowship Program?",
    answer: `It's a mentor-led online program where you learn to gather requirements, analyse data and processes, and present recommendations. It's set up like an internship, so you finish with projects and a certificate.`,
  },
  {
    question: "How long is the Business Analyst Fellowship program?",
    answer: `The program runs for four months, with weekly self-paced sessions and mentor doubt sessions.`,
  },
  {
    question: "Will I receive certification after completing the program?",
    answer: ` Yes. You receive a Kre8ly certificate that you can add to your resume and LinkedIn profile.`,
  },
  {
    question: "Can this program help me switch careers into business analysis?",
    answer: `Yes, especially if you already work in sales, support, operations or a similar role, because you know how businesses run. The fellowship adds the frameworks, tools and project work you need to move into a business analyst role.`,
  },
  {
    question:
      "Is there any job placement assistance after completing the fellowship?",
    answer: `Yes. You get resume reviews, interview preparation, access to our job portal and interview opportunities with hiring partners. We support your search, but we can't promise a specific job.`,
  },
  {
    question:
      "What types of projects will I work on during the Business Analyst Fellowship Program?",
    answer: `Projects such as requirements documents, process maps, dashboards, SQL-based analysis and stakeholder presentations.`,
  },
  {
    question: "Do I need a technical background to join?",
    answer: `No. The program is beginner friendly and starts with the fundamentals. Being comfortable with Excel will help.`,
  },
  {
    question:
      "Which tools will I learn?",
    answer: `SQL, Excel, Trello, PowerPoint, Tableau, Power BI, Google Analytics, R, Lucidchart and QlikView.`,
  },
  {
    question:
      "Can I join from a smaller city?",
    answer: `Yes. The program is online, so you can learn from Nagpur, Raipur, Kochi or any other town with a stable internet connection. Recordings help if you miss a live session.`,
  },
];

export const BusinessAnalystAnimationText = [
  "Business Analyst",
  "Data Analyst",
  "Product Manager",
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Understand the Problem",
    description:
      "Work out what the business is struggling with and what success would look like",
    icon: HelpCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Identify Stakeholders",
    description:
      "List who is affected and who decides, since they all want different things.",
    icon: Users,
    color: "green",
  },
  {
    id: 3,
    title: "Gather Requirements",
    description:
      "Use interviews, surveys and workshops to find out what people actually need.",
    icon: ClipboardList,
    color: "purple",
  },
  {
    id: 4,
    title: "Analyse Data and Processes",
    description:
      "Check the numbers with SQL and Excel, and map how the work currently flows.",
    icon: Workflow,
    color: "orange",
  },
  {
    id: 5,
    title: "Document Requirements",
    description:
      "Write them up as clear requirement documents and user stories that a development team can follow.",
    icon: FileText,
    color: "indigo",
  },
  {
    id: 6,
    title: "Propose and Prioritise Solutions",
    description:
      "Compare options by cost, effort and impact, and recommend one.",
    icon: Sliders,
    color: "teal",
  },
  {
    id: 7,
    title: "Present to Stakeholders",
    description:
      "Explain your recommendation in a short presentation or dashboard.",
    icon: Presentation,
    color: "red",
  },
  {
    id: 8,
    title: "Track and Review",
    description:
      "Follow the work through delivery in a tool like Trello, and check whether the problem was solved.",
    icon: Kanban,
    color: "slate",
  },
];
