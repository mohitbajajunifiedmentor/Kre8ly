const DataAnalystCard = "/assets/DataAnalyst/DataAnalyst2.png";
const DataAnalystRoadMap = "/assets/DataAnalyst/DataAnalystRoadmap1.gif";
import { getDynamicFutureDate } from "../CourseCardInfos";
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
export const DataAnalystHomeInfo = [
  {
    title: "Data Analytics Course in India",
    subtitle:
      "Get Job-Ready in 3 Months – Comprehensive Data Analytics Certification Training ",
    description:
      "The Data Analytics Course in India by Kre8ly is designed for professionals from various backgrounds, helping you develop key skills such as Excel, SQL, Python, R programming, ETL, Tableau for data visualization, Generative AI, and ethical data practices. Kre8ly has successfully trained over 8,000 students, with a remarkable 95% satisfaction rate. We are proud to be the top choice for data analytics course in India, providing practical, real-world experience that helps you stand out in the job market.",
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
      image: DataAnalystCard,
      alt: "Data Analyst Course In India",
      title: "Data Analyst",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/data-analyst-enroll",
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

export const DataAnalystRoadMaps = [
  { image: DataAnalystRoadMap, alt: "Data Analyst Course In India Roadmap" },
];
export const CourseName = "Data Analyst";
export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Engage in discussions to clarify project goals and ensure your data science approach aligns with business objectives.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Data Collection",
    description:
      "Gather and organize data from various sources, ensuring it is comprehensive and relevant for your analysis.",
    icon: Edit3,
    color: "green",
  },
  {
    id: 3,
    title: "Data Cleaning",
    description:
      "Clean and preprocess the data to handle missing values, outliers, and ensure it is a useable format for analysis.",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis (EDA)",
    description:
      "Conduct exploratory data analysis to understand data distributions, identify patterns, and generate insights.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Modeling",
    description:
      "Develop and train machine learning models using appropriate algorithms to predict, classify, or cluster the data.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "Validation",
    description:
      "Validate the performance of your models using techniques like cross-validation and adjust parameters to improve accuracy.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Deployment",
    description:
      "Deploy the models into a production environment where they can be used to make real-time predictions or decisions.",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Monitoring and Maintenance",
    description:
      "Continuously monitor the performance of deployed models and update them as necessary to maintain accuracy and relevance.",
    icon: Rocket,
    color: "slate",
  },
];