const RoboImg = "/assets/DataScience/DataScience2.webp";
import { getDynamicFutureDate } from "../CourseCardInfos";
const DataScience = "/assets/DataScience/DataScienceDesktop.svg";
const DataScienceMobile = "/assets/DataScience/DataScienceCourseMobile.svg";
import {
  MessageSquare,
  Database,
  Eraser, // or Sparkles / Filter
  BarChart2,
  Cpu, // or Brain
  CheckCheck,
  CloudUpload,
  Activity,
} from "lucide-react";

export const DataScienceHomeInfo = [
  {
    badge: "Trending Course",
    title: "Best Online Data Science Course in India",
    subtitle:
      "Data Science is becoming one of the most growing fields. Are you looking for the best data science course in India?",
    description:
      "Our 3-month fully online Best Data Science course is designed for everyone, providing engaging lectures and interactive modules led by industry experts focused on real-world projects. You'll learn essential skills for data-driven decision-making, covering Excel, SQL, Python, statistics, exploratory data analysis, Power BI, and Tableau while practicing widely-used Python libraries like Matplotlib, Pandas, Numpy, and Scikit-learn. With personalized feedback on your submissions, you'll enhance your skills and create an impactful CV with industry expert guidance. Our program includes mock interviews and soft-skills training, helping you build confidence and prepare for the job market. Many students secure job offers within 3-4 months of enrollment by applying to multiple opportunities with our partner companies. Enrol now to gain job-ready skills!",

    trustMetrics: {
      customerCount: "30k+",
      rating: 4.7,
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
      image: RoboImg,
      title: "Data Science",
      alt: "Data Science Course In India",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/data-science-enroll",
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
  },
];

export const DataScienceRoadMaps = [
  {
    image: DataScience,
    alt: "Data Science Course In India Roadmap",
  },
  {
    image: DataScienceMobile,
    alt: "Data Science Course In India Roadmap",
  },
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Pin down the business question first, so the analysis aims at something useful.",
    icon: MessageSquare, // Replaces MessageCircle (conversation & alignment)
    color: "blue",
  },
  {
    id: 2,
    title: "Data Collection",
    description:
      "Pull data from files, databases and other sources, and check that it covers the problem.",
    icon: Database, // Replaces Edit3 (fits databases and data extraction)
    color: "green",
  },
  {
    id: 3,
    title: "Data Cleaning",
    description:
      "Handle missing values, outliers and messy formats so the data is ready to use.",
    icon: Eraser, // Replaces Palette (represents sanitizing & cleaning data)
    color: "purple",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis",
    description:
      "Plot distributions, spot patterns and form your first ideas about what's going on.",
    icon: BarChart2, // Replaces Code (fits statistical plotting and distributions)
    color: "orange",
  },
  {
    id: 5,
    title: "Modeling",
    description:
      "Train machine learning models to predict, classify or group the data.",
    icon: Cpu, // Replaces Layout (represents machine learning models / computation)
    color: "indigo",
  },
  {
    id: 6,
    title: "Validation",
    description:
      "Test your models with methods like cross-validation, then tune them to improve accuracy.",
    icon: CheckCheck, // Replaces Building (fits verification & tuning)
    color: "teal",
  },
  {
    id: 7,
    title: "Deployment",
    description:
      "Put a model where it can be used to make predictions or decisions.",
    icon: CloudUpload, // Replaces CheckCircle (standard production deployment symbol)
    color: "red",
  },
  {
    id: 8,
    title: "Monitoring and Maintenance",
    description:
      "Watch how the model performs over time and update it when it slips.",
    icon: Activity, // Replaces Rocket (represents performance health and uptime tracking)
    color: "slate",
  },
];
