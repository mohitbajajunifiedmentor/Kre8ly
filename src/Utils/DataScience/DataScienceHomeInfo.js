const RoboImg = "/assets/DataScience/DataScience2.webp";
import { getDynamicFutureDate } from "../CourseCardInfos";
const DataScience = "/assets/DataScience/DataScienceDesktop.svg";
const DataScienceMobile = "/assets/DataScience/DataScienceCourseMobile.svg";
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
