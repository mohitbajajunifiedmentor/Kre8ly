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
      title: `Data Science Internship Program & Fellowship`,
      subtitle: "Become job-ready in data science in 6 months",
      description:
        "Learn Python, statistics and machine learning by building real projects with mentors who work in data. The program runs online, so students and freshers in Kanpur, Nashik, Vijayawada or Siliguri can join without moving to a metro.",
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
    name: "Python",
    img: TechIcon5,
    alt: "Python icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "The main language for analysis and machine learning.",
  },
  {
    name: "Pandas",
    img: TechIcon3,
    alt: "Pandas icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Cleaning and reshaping data.",
  },
  {
    name: "Jupyter",
    img: TechIcon4,
    alt: "Jupyter icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Running and sharing your analysis step by step.",
  },
  {
    name: "MatPlot",
    img: TechIcon11,
    alt: "MatPlot icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Plotting charts and statistical visualizations.",
  },
  {
    name: "SQL",
    img: TechIcon7,
    alt: "SQL icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Pulling data from databases.",
  },
  {
    name: "Excel",
    img: TechIcon1,
    alt: "Excel icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Quick checks and simple analysis.",
  },
  {
    name: "Tableau",
    img: TechIcon6,
    alt: "Tableau icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Dashboards for non-technical readers.",
  },
  {
    name: "Power BI",
    img: TechIcon9,
    alt: "Power BI icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Dashboards and business intelligence reports.",
  },
  {
    name: "GitHub",
    img: TechIcon2,
    alt: "GitHub icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Storing your projects so recruiters can find them.",
  },
  {
    name: "Firebase",
    img: TechIcon8,
    alt: "Firebase icon - Technologies & Tools You Will Learn in Data Science Fellowship at Kre8ly",
    description: "Working with data from a live app backend.",
  },
];

export const DataScienceProjects = [
  {
    imgs: P1,
    title: "Zomato Data Analysis",
    alt: "Zomato Data Analysis - Kre8ly Data Science Fellowship Project",
    description:
      "Analyse restaurant data from a food delivery platform to find patterns.",
  },
  {
    imgs: P2,
    title: "Roadsy",
    alt: "Roadsy: Automated Traffic Sign Detection and Classification - Kre8ly Data Science Fellowship Project",
    description: "Detect and classify traffic signs from images.",
  },
  {
    imgs: P3,
    title: "Fake News Detection",
    alt: "Fake News Detection - Kre8ly Data Science Fellowship Project",
    description: "Train a model that flags misleading news articles.",
  },
  {
    imgs: P4,
    title: "Smart Vision",
    alt: "Smart Vision: Intelligent Face Mask Monitoring System - Kre8ly Data Science Fellowship Project",
    description:
      "Build a system that monitors face mask use with computer vision.",
  },
  {
    imgs: P5,
    title: "Fire & Smoke Detection via CNN",
    alt: "Fire and Smoke Detection using CNN - Kre8ly Data Science Fellowship Project",
    description:
      "Use a convolutional neural network to spot fire and smoke in images.",
  },
  {
    imgs: P6,
    title: "OpenAI API: Customizable Chatbot",
    alt: "Building a customisable chatbot using OpenAI API - Kre8ly Data Science Fellowship Project",
    description: "Build a chatbot that you can tailor using the OpenAI API.",
  },
];

export const DataScienceFaq = [
  {
    question: "What is the Data Science Fellowship Program at Kre8ly?",
    answer: `It's a mentor-led online program where you learn Python, statistics and machine learning by building real projects. It's set up like an internship, so you finish with a portfolio and a certificate.`,
  },
  {
    question: "How long is the Data Science Fellowship program?",
    answer: `The program runs for about six months, with weekly self-paced sessions and mentor doubt sessions.`,
  },
  {
    question: "What will I learn during the Data Science Fellowship?",
    answer: `You'll learn Python, statistics and probability, data cleaning, exploratory analysis and machine learning, plus tools like SQL, Pandas, Tableau and Power BI. You'll also work through projects that cover modeling, validation and deployment.`,
  },
  {
    question: "Is the Data Science Fellowship suitable for beginners?",
    answer: `Yes. It's beginner friendly and starts with the foundations of data science, statistics and Python.`,
  },
  {
    question: "Do I receive a certificate after completing the fellowship?",
    answer: `Yes. You receive a Kre8ly certificate that you can add to your resume and LinkedIn profile.`,
  },
  {
    question: "How does the mentorship work during the fellowship?",
    answer: `Through live mentor sessions, weekly doubt sessions and feedback on your projects.`,
  },
  {
    question: "Do I need coding experience or a maths background?",
    answer: `No. The program starts from the basics of Python and statistics. Being curious about numbers and patient with practice will help more than a maths degree.`,
  },
  {
    question: "Can undergraduates or people from smaller cities join?",
    answer: `Yes. Undergraduates can start while still in college. Everything is online, so you can learn from Kanpur, Nashik or any other town with a stable internet connection. Recordings are there if you miss a live session.`,
  },
  {
    question: "Is there job assistance after the fellowship?",
    answer: `Yes. You get resume reviews, interview preparation, access to our job portal and interview opportunities with hiring partners. We support your search, but we can't promise a specific job.`,
  },
  {
    question: "How much does the fellowship cost?",
    answer: `Pricing starts at ₹399. Check the enrolment page for the current fee and the next batch date.`,
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
