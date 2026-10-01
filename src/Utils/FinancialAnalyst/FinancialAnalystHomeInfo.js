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
  MessageCircle,
  Edit3,
  Palette,
  Code,
  Layout,
  Building,
  CheckCircle,
  Rocket,
} from "lucide-react";

export const FinancialAnalystHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Financial Analyst Fellowship`,
      subtitle: "Learn Financial Analyst with expert guidance",
      description:
        "Learn Financial Analyst with expert guidance, hands-on projects, and a curriculum designed for success.",
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

// export const FinancialAnalystFaq = [
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

export const FinancialAnalystFaq = [
  {
    question: "What is the Financial Analyst Fellowship at Kre8ly?",
    answer: `The Financial Analyst Fellowship is a comprehensive program designed to equip individuals with the skills and knowledge 
    needed for a successful career in financial analysis, including hands-on training and mentorship from industry experts.`,
  },
  {
    question: "How does the fellowship help in career growth?",
    answer: `This fellowship provides real-world training, exposure to industry best practices, and personalized mentorship. Graduates gain in-depth financial analysis skills and are prepared to take on roles in top companies.`,
  },
  {
    question: "Is the Financial Analyst Fellowship program online?",
    answer: `Yes, the program is designed to be flexible, offering both online training and mentorship, making it accessible to anyone, anywhere, at any time.`,
  },
  {
    question: "What skills will I gain from the Financial Analyst Fellowship?",
    answer: `Participants will gain expertise in financial modeling, data analysis, budgeting, forecasting, and other core financial analysis techniques that are crucial for success in the finance industry.`,
  },
  {
    question: "Who can benefit from the Financial Analyst Fellowship?",
    answer: `This fellowship is ideal for individuals looking to transition into financial analysis, fresh graduates with a background in finance, or professionals seeking to enhance their existing financial knowledge and skills.`,
  },
  {
    question:
      "Is there a certification upon completion of the Financial Analyst Fellowship?",
    answer: `Yes, upon successful completion, participants will receive a certification that can be added to their resume, validating their expertise in financial analysis.`,
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
