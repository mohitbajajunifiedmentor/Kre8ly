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

import {
  BarChart3,
  Database,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

export const DataAnalystHomeInfo = [
  {
    badge: "Most Popular Live Course",
    title: "Best Online Data Analyst Live Classes in India",
    subtitle:
      "Master Data Analytics through live interactive classes starting from 3rd November. Get trained by top industry experts and land your dream job.",
    description:
      "Join our comprehensive Data Analyst Live Classes to gain hands-on experience in Excel, SQL, Power BI, Tableau, and Python. This course is designed for beginners and professionals who want to build or switch to a data-driven career. Learn data cleaning, visualization, business intelligence, and statistical analysis through live mentor-led sessions, real projects, and case studies. By the end, you’ll have both technical expertise and practical experience to excel in any analytics role.",
    trustMetrics: {
      customerCount: "35k+",
      rating: 4.8,
      totalReviews: "3k+",
    },
    features: [
      {
        title: "Live Learning",
        description: "Interactive mentor-led sessions",
      },
      {
        title: "4 months",
        description: "Program Duration",
      },
      {
        title: "1-on-1 Mentorship",
        description: "Personalized guidance and feedback",
      },
      {
        title: "Job Assistance",
        description: "Exclusive access to hiring partners",
      },
    ],
    card: {
      image: WebCard,
      title: "Data Analyst Live Classes",
      alt: "Data Analyst Course In India",
      batchStartDate: "Nov 3, 2025",
      ctaText: "Enroll Now",
      ApplyLink: "/data-analyst-live-enroll",
    },
    Gifs: {
      description:
        "Animated graph showing growth — Data Analyst Live Classes",
      url: WebGif,
    },
    stats: [
      {
        value: "12+",
        label: "Real-Time Projects",
        color: "text-sky-600",
        bgColor: "bg-sky-50",
      },
      {
        value: "98%",
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
        value: "₹9L",
        label: "Avg. Salary",
        color: "text-orange-600",
        bgColor: "bg-yellow-50",
      },
    ],
    batchInfo: {
      nextBatch: "Nov 3, 2025",
      seatsLeft: 10,
    },
    highlights: [
      "Advanced Excel & SQL",
      "Power BI, Tableau & Visualization",
      "Python, Pandas & NumPy",
      "Statistical Analysis & Business Insights",
    ],
    roadmapSteps: [
      {
        id: 1,
        title: "Introduction & Tools Setup",
        description:
          "Understand the role of a data analyst, install tools like Excel, Python, and Power BI.",
        icon: MessageCircle,
        color: "blue",
      },
      {
        id: 2,
        title: "Excel & Data Cleaning",
        description:
          "Learn advanced Excel, data formatting, cleaning, and visualization.",
        icon: FileSpreadsheet,
        color: "green",
      },
      {
        id: 3,
        title: "SQL & Databases",
        description:
          "Master querying, joins, subqueries, and database management using SQL.",
        icon: Database,
        color: "purple",
      },
      {
        id: 4,
        title: "Python for Data Analysis",
        description:
          "Use Python with Pandas and NumPy to clean and analyze large datasets.",
        icon: BarChart3,
        color: "orange",
      },
      {
        id: 5,
        title: "Data Visualization",
        description:
          "Build dashboards and visual reports using Power BI and Tableau.",
        icon: PieChart,
        color: "indigo",
      },
      {
        id: 6,
        title: "Statistics & Insights",
        description:
          "Understand correlation, regression, hypothesis testing, and business interpretation.",
        icon: Edit3,
        color: "teal",
      },
      {
        id: 7,
        title: "Capstone Project",
        description:
          "Work on a live project to demonstrate data analysis skills on real datasets.",
        icon: CheckCircle,
        color: "red",
      },
      {
        id: 8,
        title: "Job Preparation & Placement",
        description:
          "Mock interviews, resume building, and guaranteed job assistance through Kre8ly.",
        icon: Rocket,
        color: "slate",
      },
    ],
  },
];

export const DataAnalystRoadMap = [
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
