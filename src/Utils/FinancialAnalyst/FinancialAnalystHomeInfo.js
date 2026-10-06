const WebCard = "/assets/fellowship/FinancialAnalyst/HeroCard.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebGif = "/assets/WebDev/WebHome.gif";

const TechIcon1 = "/assets/fellowship/FinancialAnalyst/TechIcon1.png";
const TechIcon2 = "/assets/fellowship/FinancialAnalyst/TechIcon2.png";
const TechIcon3 = "/assets/fellowship/FinancialAnalyst/TechIcon3.png";
const TechIcon4 = "/assets/fellowship/FinancialAnalyst/TechIcon4.png";
const TechIcon5 = "/assets/fellowship/FinancialAnalyst/TechIcon5.png";
const TechIcon6 = "/assets/fellowship/FinancialAnalyst/TechIcon6.png";
const TechIcon7 = "/assets/fellowship/FinancialAnalyst/TechIcon7.png";
const TechIcon8 = "/assets/fellowship/FinancialAnalyst/TechIcon8.png";
const TechIcon9 = "/assets/fellowship/FinancialAnalyst/TechIcon9.png";
const TechIcon10 = "/assets/fellowship/FinancialAnalyst/TechIcon10.png";
const TechIcon11 = "/assets/fellowship/FinancialAnalyst/TechIcon11.png";
const TechIcon12 = "/assets/fellowship/FinancialAnalyst/TechIcon12.png";
const TechIcon13 = "/assets/fellowship/FinancialAnalyst/TechIcon13.png";

const P1 = "/assets/fellowship/DataScience/P1.png";
const P2 = "/assets/fellowship/DataScience/P2.png";
const P3 = "/assets/fellowship/DataScience/P3.png";
const P4 = "/assets/fellowship/DataScience/P4.png";
const P5 = "/assets/fellowship/DataScience/P5.png";
const P6 = "/assets/fellowship/DataScience/P6.png";

import {
  HelpCircle, // 1. Understand the Question (business question)
  FileSpreadsheet, // 2. Collect Financial Data (reports & statements)
  Filter, // 3. Clean and Organise (tidy numbers in Excel)
  BarChart3, // 4. Analyse the Statements (ratios, balance sheet)
  TrendingUp, // 5. Build the Model (forecast revenue, cash flow)
  Sliders, // 6. Test Scenarios (adjusting variables & what-ifs)
  Presentation, // 7. Present Your Findings (report/dashboard presentation)
  Users, // 8. Review with Mentors (mentor feedback & review)
} from "lucide-react";

export const FinancialAnalystHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Online Financial Analyst Internship Program`,
      subtitle:
        "Learn financial analysis with expert mentors and hands-on projects",
      description:
        "Learn how companies earn, spend and grow, then turn that into analysis a hiring manager can read in five minutes. Mentors guide you through live projects, and everything runs online, so students and working people in Indore, Surat, Jaipur or Coimbatore can join without relocating.",
    },
    card: {
      image: WebCard,
      title: "Financial Analyst Fellowship",
      alt: "Financial Analyst Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Financial Analyst Fellowship course In India",
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
export const FinancialAnalystTechStack = [
  {
    name: "Excel",
    img: TechIcon1,
    alt: "Excel - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Master Excel’s features to boost productivity and streamline data analysis.",
  },
  {
    name: "Soft Skills",
    img: TechIcon2,
    alt: "Soft Skills - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Enhance communication, teamwork, and problem-solving with essential soft skills for success.",
  },
  {
    name: "Pandas",
    img: TechIcon3,
    alt: "Pandas - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Analyze and manipulate data effortlessly with Pandas in Python.",
  },
  {
    name: "Statistics",
    img: TechIcon4,
    alt: "Statistics - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Analyze and interpret data effectively with key statistical methods and techniques.",
  },
  {
    name: "Python",
    img: TechIcon5,
    alt: "Python - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Unlock powerful programming capabilities with Python for data science and automation.",
  },
  {
    name: "Machine Learning",
    img: TechIcon6,
    alt: "Machine Learning - Technologies & Tools You Will Learn in Financial Analyst Fellowship at Kre8ly",
    description:
      "Build intelligent systems with machine learning algorithms and data-driven insights.",
  },
];

export const FinancialAnalystProjects = [
  {
    imgs: P1,
    title: "Zomato Data Analysis",
    alt: "Zomato Data Analysis – Kre8ly Financial Analyst Fellowship Project",
    description:
      "Analyze Zomato data to uncover insights on restaurants and customer trends.",
  },
  {
    imgs: P2,
    title: "Roadsy",
    alt: "Roadsy: Automated Traffic Sign Detection and Classification – Kre8ly Financial Analyst Fellowship Project",
    description: "Optimize road management and transportation efficiency.",
  },
  {
    imgs: P3,
    title: "Fake News Detection",
    alt: "Fake News Detection – Kre8ly Financial Analyst Fellowship Project",
    description:
      "Detect fake news using machine learning algorithms for accurate classification.",
  },
  {
    imgs: P4,
    title: "Smart Vision",
    alt: "SmartVision: Intelligent Face Mask Monitoring System – Kre8ly Financial Analyst Fellowship Project",
    description: "Develop a enhanced image recognition and real-time analysis.",
  },
  {
    imgs: P5,
    title: "Fire & Smoke Detection via CNN",
    alt: "Fire and Smoke Detection using CNN – Kre8ly Financial Analyst Fellowship Project",
    description:
      "Detect fire and smoke using CNN for real-time hazard identification.",
  },
  {
    imgs: P6,
    title: "OpenAI API: Customizable Chatbot",
    alt: "Building a Customisable Chatbot using OpenAI API – Kre8ly Financial Analyst Fellowship Project",
    description:
      "Build a customizable chatbot using OpenAI API for dynamic interactions.",
  },
];

export const FinancialAnalystFaq = [
  {
    question: "What is the Financial Analyst Fellowship at Kre8ly?",
    answer: `It's a mentor-led online program where you learn to read financial statements, analyse companies and build models using Excel and Python. It's set up like an internship, so you finish with projects and a certificate.`,
  },
  {
    question: "How does the fellowship help in career growth?",
    answer: `You build a portfolio of projects, earn a certificate, get resume reviews and interview preparation, and gain access to our job portal and hiring partners. Which roles you land depends on your skills and how you do in interviews.`,
  },
  {
    question: "Is the Financial Analyst Fellowship program online?",
    answer: `Yes. It uses live mentor sessions and recorded lessons, so you can join from any city or town.`,
  },
  {
    question: "What skills will I gain from the Financial Analyst Fellowship?",
    answer: `You'll learn to read financial statements, work with the time value of money and risk against return, use Excel and statistics, and work with data in Python. You'll also practise presenting your findings.`,
  },
  {
    question: "Who can benefit from the Financial Analyst Fellowship?",
    answer: `Commerce, management, economics and engineering students, fresh graduates, and working professionals who want to move into finance. The program is beginner friendly.`,
  },
  {
    question:
      "Is there a certification upon completion of the Financial Analyst Fellowship?",
    answer: ` Yes. You receive a Kre8ly certificate that you can add to your resume and LinkedIn profile.`,
  },
  {
    question: "How much does the fellowship cost?",
    answer: `Pricing starts at ₹399. Check the enrolment page for the current fee and the next batch date.`,
  },
  {
    question: "Can I join from a smaller city?",
    answer: `Yes. Everything is online, so you can learn from Indore, Surat, Jaipur or any other town with a stable internet connection. Recordings are there if you miss a live session.`,
  },
  {
    question:
      "Will this help me get an investment banking internship?",
    answer: `It helps you build skills that banks look for, such as financial statement analysis and Excel modelling, and gives you projects to show. We can't promise a banking internship, since each bank sets its own hiring process.`,
  },
];

export const FinancialAnalystAnimationText = [
  "Financial Analyst",
  "Investment Analyst",
  "Risk Analyst",
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Understand the Question",
    description:
      "Work out what the business wants to know. Is it profit, cash flow, risk or a possible investment?",
    icon: HelpCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Collect Financial Data",
    description:
      "Gather annual reports, statements and market data from reliable sources.",
    icon: FileSpreadsheet,
    color: "green",
  },
  {
    id: 3,
    title: "Clean and Organise",
    description:
      "Tidy the numbers in Excel so they're consistent and easy to compare.",
    icon: Filter,
    color: "purple",
  },
  {
    id: 4,
    title: "Analyse the Statements",
    description:
      "Read the balance sheet, income statement and cash flow statement, and calculate the ratios that matter.",
    icon: BarChart3,
    color: "orange",
  },
  {
    id: 5,
    title: "Build the Model",
    description:
      "Forecast revenue, costs and cash flow in a spreadsheet model.",
    icon: TrendingUp,
    color: "indigo",
  },
  {
    id: 6,
    title: "Test Scenarios",
    description: "See what happens to the numbers if sales fall or costs rise.",
    icon: Sliders,
    color: "teal",
  },
  {
    id: 7,
    title: "Present Your Findings",
    description:
      "Put your conclusions into a short report or dashboard that a manager can act on.",
    icon: Presentation,
    color: "red",
  },
  {
    id: 8,
    title: "Review with Mentors",
    description:
      "Take feedback, fix weak spots and finalise the work for your portfolio.",
    icon: Users,
    color: "slate",
  },
];
