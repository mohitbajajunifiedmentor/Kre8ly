const WebCard = "/assets/fellowship/DataAnalyst/HeroCard.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebGif = "/assets/WebDev/WebHome.gif";
const TechIcon1 = "/assets/fellowship/DataAnalyst/Icon1.png";
const TechIcon2 = "/assets/fellowship/DataAnalyst/Icon2.png";
const TechIcon3 = "/assets/fellowship/DataAnalyst/Icon3.png";
const TechIcon4 = "/assets/fellowship/DataAnalyst/Icon4.png";
const TechIcon5 = "/assets/fellowship/DataAnalyst/Icon5.png";
const TechIcon6 = "/assets/fellowship/DataAnalyst/Icon6.png";
const TechIcon7 = "/assets/fellowship/DataAnalyst/Icon7.png";
const TechIcon8 = "/assets/fellowship/DataAnalyst/Icon8.png";
const TechIcon9 = "/assets/fellowship/DataAnalyst/Icon9.png";
const TechIcon10 = "/assets/fellowship/DataAnalyst/Icon10.png";

import {
  MessageSquare, // 1. Discussion
  Database, // 2. Data Collection (spreadsheets, databases)
  Filter, // 3. Data Cleaning (missing values, duplicates)
  SearchCheck, // 4. EDA (distributions, trends, outliers)
  LineChart, // 5. Statistical Analysis (stats, testing)
  LayoutDashboard, // 6. Validation (Power BI, Tableau dashboards)
  Presentation, // 7. Data Storytelling (plain language, presenting)
  Rocket, // 8. Review and Feedback (mentor comments, review)
} from "lucide-react";

const P1 = "/assets/fellowship/DataAnalyst/P1.png";
const P2 = "/assets/fellowship/DataAnalyst/P2.png";
const P3 = "/assets/fellowship/DataAnalyst/P3.png";

export const DataAnalystHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Data Analyst Internship Program & Fellowship`,
      subtitle: "Become a Job-Ready Data Analyst in 6 Months",
      description:
        "Our data analyst internship programs are built for beginners and for working people who want to move into analytics. You'll learn Excel, SQL, Python and Power BI through case studies and live projects, guided by mentors who work with data every day. It works whether you're in a metro or in a smaller city like Bhopal, Kochi or Ranchi.",
    },
    card: {
      image: WebCard,
      title: "Data Analyst Fellowship",
      alt: "Data Analyst Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Data Analyst Fellowship course In India",
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

export const DataAnalystTechstack = [
  {
    name: "Excel",
    img: TechIcon1,
    alt: "Excel icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Cleaning data, pivot tables and quick analysis",
  },
  {
    name: "Sql",
    img: TechIcon7,
    alt: "SQL icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Pulling the right data out of databases",
  },
  {
    name: "Python",
    img: TechIcon5,
    alt: "Python icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Analysing larger datasets",
  },
  {
    name: "Pandas",
    img: TechIcon3,
    alt: "Pandas icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Analysing larger datasets",
  },
  {
    name: "Jupyter",
    img: TechIcon4,
    alt: "Jupyter icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Writing and sharing your analysis step by step",
  },
  {
    name: "Seaborn",
    img: TechIcon10,
    alt: "Seaborn icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Charts that show patterns clearly",
  },
  {
    name: "Power BI",
    img: TechIcon9,
    alt: "Power BI icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Dashboards for non-technical readers",
  },
  {
    name: "Tableau",
    img: TechIcon6,
    alt: "Tableau icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Dashboards for non-technical readers",
  },
  {
    name: "Github",
    img: TechIcon2,
    alt: "Github icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Storing your projects so recruiters can find them",
  },
  {
    name: "Firebase",
    img: TechIcon8,
    alt: "Firebase icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description: "Working with data from a live app backend",
  },
];

export const DataAnalystProjects = [
  {
    imgs: P1,
    title: "Capstone Project",
    alt: "Capstone Project - Kre8ly Machine Learning Fellowship Project",
    description:
      " A full analysis of a business problem, from raw data to final presentation.",
  },
  {
    imgs: P2,
    title: "End-to-End Analysis",
    alt: "End-to-End Analysis  - Kre8ly Machine Learning Fellowship Project",
    description:
      " Take a dataset through cleaning, analysis, a dashboard and written insights.",
  },
  {
    imgs: P3,
    title: "Portfolio-Ready",
    alt: "Portfolio-Ready  - Kre8ly Machine Learning Fellowship Project",
    description:
      "Projects packaged with clear write-ups, so a recruiter can understand them in a few minutes.",
  },
];

export const DataAnalystFaq = [
  {
    question: "What is the Data Analyst Fellowship at Kre8ly?",
    answer: `It's a mentor-led program where you learn Excel, SQL, Python and Power BI by working on real projects. It's set up like an internship, so you finish with a portfolio and a certificate.`,
  },
  {
    question: "How long is the Data Analyst Fellowship program?",
    answer: `The program runs for about six months. Each week combines self-paced sessions with mentor doubt sessions.`,
  },
  {
    question: "Do I need prior experience to join?",
    answer: `No. The fellowship is beginner friendly. If you're comfortable with a computer and curious about numbers, you can start. Working professionals are welcome too.`,
  },
  {
    question:
      "What career opportunities can I expect after completing the fellowship?",
    answer: `Roles such as data analyst, business analyst, reporting analyst and BI analyst. What you land depends on your skills, your projects and how you do in interviews.`,
  },
  {
    question: "Is there any job assistance after completing the fellowship?",
    answer: `Yes. You get resume reviews, interview preparation, access to our job portal and interview opportunities with hiring partners. We support your search, but we can't promise a specific job.`,
  },
  {
    question: "Can I access the Data Analyst Fellowship online?",
    answer: `Yes. It runs through live mentor sessions and recorded lessons, so you can join from any city or town.`,
  },
  {
    question: "How much does the fellowship cost?",
    answer: `Pricing starts at ₹399. Check the enrolment page for the current fee and the next batch date.`,
  },
  {
    question: "Which tools will I learn?",
    answer: `Excel, SQL, Python, Pandas, Jupyter, Power BI, Tableau, Seaborn and GitHub.`,
  },
  {
    question: "Can I join from a smaller city?",
    answer: ` Yes. Everything runs online, so you can learn from Jaipur, Patna, Kochi or any other town with a stable internet connection. Recorded sessions help if you miss a live class.`,
  },
];

export const DataAnalystAnimationText = [
  "Data Analyst",
  "Business Intelligence Analyst",
  "Data Scientist",
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Start with the business question. What does the team want to find out, and what would a useful answer look like?",
    icon: MessageSquare,
    color: "blue",
  },
  {
    id: 2,
    title: "Data Collection",
    description:
      "Pull data from spreadsheets, databases and files, and check that it covers what you need.",
    icon: Database,
    color: "green",
  },
  {
    id: 3,
    title: "Data Cleaning",
    description:
      "Fix missing values, duplicates and odd entries so the numbers can be trusted. Analysts spend a lot of their time here.",
    icon: Filter,
    color: "purple",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis (EDA)",
    description:
      "Look at distributions, trends and outliers to see what the data is hinting at.",
    icon: SearchCheck,
    color: "orange",
  },
  {
    id: 5,
    title: "Statistical Analysis",
    description:
      "Test your ideas with statistics instead of relying on a hunch.",
    icon: LineChart,
    color: "indigo",
  },
  {
    id: 6,
    title: "Validation",
    description:
      "Turn your findings into charts and dashboards in Power BI or Tableau.",
    icon: LayoutDashboard,
    color: "teal",
  },
  {
    id: 7,
    title: "Data Storytelling",
    description:
      "Explain what you found, in plain language, to someone who doesn't work with data.",
    icon: Presentation,
    color: "red",
  },
  {
    id: 8,
    title: "Review and Feedback",
    description:
      "Present your work to mentors, take their comments and improve it.",
    icon: Rocket,
    color: "slate",
  },
];
