const WebCard = "/assets/fellowship/DataScience/HeroCard.png";
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
const TechIcon11 = "/assets/fellowship/DataAnalyst/Icon11.png";

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

export const DataScienceHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Data Science Fellowship`,
      subtitle: "Become a Job-Ready Data Science Engineer in 6 Months",
      description:
        "Master Data Science with expert mentoring, real-world projects, and a success-driven curriculum. Gain practical skills, solve real-world problems, and unlock career opportunities in the dynamic field of data science.",
    },
    card: {
      image: WebCard,
      title: "Data Science Fellowship",
      alt: "Data Science Fellowship Proggram In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Data Science Fellowship course In India",
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

export const DataScienceTechstack = [
  {
    name: "Excel",
    img: TechIcon1,
    alt: "Excel icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Excel is a popular spreadsheet software for data analysis and data management.",
  },
  {
    name: "Github",
    img: TechIcon2,
    alt: "Github icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "GitHub is a code hosting platform for version control and collaboration.",
  },
  {
    name: "Pandas",
    img: TechIcon3,
    alt: "Pandas icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Pandas is a popular Python library for data manipulation and analysis.",
  },
  {
    name: "Jupyter",
    img: TechIcon4,
    alt: "Jupyter icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Jupyter is an open-source interactive development environment for Python.",
  },
  {
    name: "Python",
    img: TechIcon5,
    alt: "Python icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Python is a popular programming language for data analysis and machine learning.",
  },
  {
    name: "Tableau",
    img: TechIcon6,
    alt: "Tableau icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Tableau is a data visualization software for creating interactive dashboards.",
  },
  {
    name: "Sql",
    img: TechIcon7,
    alt: "SQL icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "SQL is a standard language for querying and manipulating relational databases.",
  },
  {
    name: "Firebase",
    img: TechIcon8,
    alt: "Firebase icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Firebase is a cloud-based platform for building and deploying applications.",
  },
  {
    name: "Power BI",
    img: TechIcon9,
    alt: "Power BI icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description:
      "Power BI is a data visualization software for creating interactive dashboards.",
  },
  {
    name: "MatPlot",
    img: TechIcon11,
    description:
      "MatPlot is a data visualization software for creating interactive dashboards.",
  },
];

export const DataScienceProjects = [
  {
    imgs: P1,
    title: "Zomato Data Analysis",
    alt: "Zomato Data Analysis - Kre8ly Data Science Fellowship Project",
    description:
      "Analyze Zomato data to uncover insights on restaurants and customer trends.",
  },
  {
    imgs: P2,
    title: "Roadsy",
    alt: "Roadsy: Automated Traffic Sign Detection and Classification- Kre8ly Data Science Fellowship Project",
    description: "Optimize road management and transportation efficiency.",
  },
  {
    imgs: P3,
    title: "Fake News Detection",
    alt: "Fake News Detection- Kre8ly Data Science Fellowship Project",
    description:
      "Detect fake news using machine learning algorithms for accurate classification.",
  },
  {
    imgs: P4,
    title: "Smart Vision",
    alt: "SmartVision: Intelligent Face Mask Monitoring System - Kre8ly Data Science Fellowship Project",
    description: "Develop a enhanced image recognition and real-time analysis.",
  },
  {
    imgs: P5,
    title: "Fire & Smoke Detection via CNN",
    alt: "Fire and Smoke Detection using CNN - Kre8ly Data Science Fellowship Project",
    description:
      "Detect fire and smoke using CNN for real-time hazard identification.",
  },
  {
    imgs: P6,
    title: "OpenAI API: Customizable Chatbot",
    alt: "Building a customisable chatbot using OpenAI API - Kre8ly Data Science Fellowship Project",
    description:
      "Build a customizable chatbot using OpenAI API for dynamic interactions.",
  },
];

// export const DataScienceFaq = [
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

export const DataScienceFaq = [
  {
    question: "What is the Data Science Fellowship Program at Kre8ly?",
    answer: `This program offers a combination of mentorship, real-world projects, and training to build a strong foundation in data science, preparing you for a successful career.`,
  },
  {
    question: "How long is the Data Science Fellowship program?",
    answer: `The fellowship lasts for 6 months, providing comprehensive training and hands-on experience in data science concepts and tools.`,
  },
  {
    question: "What will I learn during the Data Science Fellowship?",
    answer: `You will learn data analysis, machine learning, statistical modeling, and how to use tools like Python, R, and SQL to solve real business problems.`,
  },
  {
    question: "Is the Data Science Fellowship suitable for beginners?",
    answer: `Yes, the program is designed to cater to beginners as well as professionals, with a focus on practical skills and real-world problem-solving.`,
  },
  {
    question: "Do I receive a certificate after completing the fellowship?",
    answer: `Yes, upon successful completion, you will receive a certificate from Kre8ly that validates your expertise in data science.`,
  },
  {
    question: "How does the mentorship work during the fellowship?",
    answer: `You’ll be paired with an experienced mentor who will guide you throughout the program, provide feedback on your work, and help you with career development.`,
  },
];

export const DataScienceAnimationText = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Researcher",
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
