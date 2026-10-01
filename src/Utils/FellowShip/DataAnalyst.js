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

const P1 = "/assets/fellowship/DataAnalyst/P1.png";
const P2 = "/assets/fellowship/DataAnalyst/P2.png";
const P3 = "/assets/fellowship/DataAnalyst/P3.png";
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

export const DataAnalystHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Data Analyst Fellowship`,
      subtitle: "Become a Job-Ready Data Analyst in 6 Months",
      description:
        "Launch your career in data analytics with our <b> Data Analyst Fellowship Programs </b>. This fellowship is designed for beginners and professionals who want to build real-world data skills, gain mentorship from industry experts, and secure a strong position in the data-driven world. Learn tools like Excel, SQL, Python, Power BI, and more with practical case studies and live projects.",
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
    description:
      "Excel is a popular spreadsheet software for data analysis and data management.",
  },
  {
    name: "Github",
    img: TechIcon2,
    alt: "Github icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "GitHub is a code hosting platform for version control and collaboration.",
  },
  {
    name: "Pandas",
    img: TechIcon3,
    alt: "Pandas icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Pandas is a popular Python library for data manipulation and analysis.",
  },
  {
    name: "Jupyter",
    img: TechIcon4,
    alt: "Jupyter icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Jupyter is an open-source interactive development environment for Python.",
  },
  {
    name: "Python",
    img: TechIcon5,
    alt: "Python icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Python is a popular programming language for data analysis and machine learning.",
  },

  {
    name: "Tableau",
    img: TechIcon6,
    alt: "Tableau icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Tableau is a data visualization software for creating interactive dashboards.",
  },
  {
    name: "Sql",
    img: TechIcon7,
    alt: "SQL icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "SQL is a standard language for querying and manipulating relational databases.",
  },
  {
    name: "Firebase",
    img: TechIcon8,
    alt: "Firebase icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Firebase is a cloud-based platform for building and deploying applications.",
  },
  {
    name: "Power BI",
    img: TechIcon9,
    alt: "Power BI icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Power BI is a data visualization software for creating interactive dashboards.",
  },
  {
    name: "Seaborn",
    img: TechIcon10,
    alt: "Seaborn icon - Technologies & Tools You Will Learn in Data Analyst Fellowship at Kre8ly",
    description:
      "Seaborn is a Python data visualization library based on matplotlib.",
  },
];

export const DataAnalystProjects = [
  {
    imgs: P1,
    title: "Capstone Project",
    alt: "Capstone Project - Kre8ly Machine Learning Fellowship Project",
    description:
      "Showcase your skills with a capstone project analyzing data insights.",
  },
  {
    imgs: P2,
    title: "End-to-End Analysis",
    alt: "End-to-End Analysis  - Kre8ly Machine Learning Fellowship Project",
    description:
      "Gain real-world experience through data collection, analysis, and reporting.",
  },
  {
    imgs: P3,
    title: "Portfolio-Ready",
    alt: "Portfolio-Ready  - Kre8ly Machine Learning Fellowship Project",
    description:
      "Showcase expertise with a capstone project to impress employers.",
  },
];

// export const DataAnalystFaq = [
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

export const DataAnalystFaq = [
  {
    question: "What is the Data Analyst Fellowship at Kre8ly?",
    answer: `The Data Analyst Fellowship is a comprehensive program designed to provide in-depth knowledge and hands-on experience in data analysis, preparing you for real-world challenges.`,
  },
  {
    question: "How long is the Data Analyst Fellowship program?",
    answer: `The fellowship program typically lasts 6 months, with flexible learning schedules to accommodate working professionals. During this period, you will gain practical experience through projects and mentorship.`,
  },
  {
    question: "Do I need prior experience to join the Data Analyst Fellowship?",
    answer: `While prior experience is helpful, it is not mandatory. The program is designed to cater to beginners as well as those with some background in data analysis or related fields.`,
  },
  {
    question:
      "What career opportunities can I expect after completing the fellowship?",
    answer: `Graduates of the fellowship often secure roles such as Data Analyst, Data Scientist, Business Analyst, and similar positions at top tech companies or in various industries that rely on data-driven decision-making.`,
  },
  {
    question: "Is there any job assistance after completing the fellowship?",
    answer: `Yes, Kre8ly offers career support through job placement assistance, resume building, and interview preparation to help you land a job in the data analysis field.`,
  },
  {
    question: "Can I access the Data Analyst Fellowship online?",
    answer: `Yes, the fellowship is available as an online program, allowing you to learn at your own pace while receiving mentorship and guidance from industry experts`,
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