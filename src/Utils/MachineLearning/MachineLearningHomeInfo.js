const Robo = "/assets/machineLearning/robo.gif";
const RoboImg = "/assets/machineLearning/MachineLearning2.png";
const Icon1 = "/assets/machineLearning/Road1.png";
const Icon2 = "/assets/machineLearning/Road2.png";
const Icon3 = "/assets/machineLearning/Road3.png";
const Icon4 = "/assets/machineLearning/Road4.png";
const Icon5 = "/assets/machineLearning/Road5.png";
const Icon6 = "/assets/machineLearning/Road6.png";
const Icon7 = "/assets/machineLearning/Road7.png";
const Icon8 = "/assets/machineLearning/Road8.png";
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

export const MachineLearningHomeInfo = [
  {
    badge: "Career Oriented Programs",
    title: "Best Online Machine Learning Course in India",
    subtitle:
      "Join thousands of learners who’ve advanced their careers with the best machine learning course in india ",
    description:
      "Our Machine Learning Course  offers a classroom-like experience online. This 3-month course covers supervised and unsupervised learning, MLOps, and Python programming. You’ll work on practical projects like predicting IPL scores, forecasting rainfall, and detecting spam SMS using tools like TensorFlow, Keras, ChatGPT, and Amazon Sagemaker. We provide placement support via our job portal, helping you find top opportunities with leading companies across India. By the end of the course, you will master machine learning and get certifications recognized by top companies, boosting your career growth. ",
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
      title: "Machine Learning",
      alt: "Best Machine Learning Course in India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/machine-learning-enroll",
    },
    Gifs: {
      description:
        "Cartoon robot in top right corner , Machine Learning Course In India",
      url: Robo,
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
    roadmapSteps: [
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
        description:
          "Build your site by adding in an engaging and SEO content.",
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
    ],
  },
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Engage in discussions to clarify project goals and ensure your data analysis approach aligns with business objectives.",
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
    title: "Data Preprocessing",
    description:
      "Clean and preprocess the data to handle missing values, outliers, and ensure it is in a sutable format for model training",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis (EDA)",
    description:
      "Conduct exploratory data analysis to understand data distributions, identify patterns, and generate initial insights.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Model Selection",
    description:
      "Choose appropriate machine learning algorithms based on the problem type (classification, regression, clustering, etc.) and data characteristics.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "Model Training",
    description:
      "Train the selected models on the preprocessed data, fine-tuning parameters to improve performance.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Model Evaluation",
    description:
      "Evaluate the trained models using validation techniques and metrics to ensure they meet the desired accuracy and performance.",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Deployment and Monitoring",
    description:
      "Deploy the models into a production environment and continuously monitor their performance, making updates as necessary to maintain accuracy and relevance.",
    icon: Rocket,
    color: "slate",
  },
];
