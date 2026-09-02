import { getDynamicFutureDate } from "../CourseCardInfos";
const WebCard = "/assets/fellowship/FrontendDeveloper/HeroCard.png";
const WebGif = "/assets/WebDev/WebHome.gif";

const TechIcon1 = "/assets/fellowship/MachineLearning/Icon1.png";
const TechIcon2 = "/assets/fellowship/MachineLearning/Icon2.png";
const TechIcon3 = "/assets/fellowship/MachineLearning/Icon3.png";
const TechIcon4 = "/assets/fellowship/MachineLearning/Icon4.png";
const TechIcon5 = "/assets/fellowship/MachineLearning/Icon5.png";
const TechIcon6 = "/assets/fellowship/MachineLearning/Icon6.png";
const TechIcon7 = "/assets/fellowship/MachineLearning/Icon7.png";
const TechIcon8 = "/assets/fellowship/MachineLearning/Icon8.png";
const TechIcon9 = "/assets/fellowship/MachineLearning/Icon9.png";
const TechIcon10 = "/assets/fellowship/MachineLearning/Icon10.png";

const P1 = "/assets/fellowship/MachineLearning/P1.png";
const P2 = "/assets/fellowship/MachineLearning/P2.png";
const P3 = "/assets/fellowship/MachineLearning/P3.png";
const P4 = "/assets/fellowship/MachineLearning/P4.png";
const P5 = "/assets/fellowship/MachineLearning/P5.png";
const P6 = "/assets/fellowship/MachineLearning/P6.png";

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

export const MachineLearningHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `Machine Learning Fellowship`,
      subtitle: "Become a Job-Ready Machine Learning Engineer",

      description:
        "Learn Machine Learning  with expert guidance, hands-on projects, and a curriculum designed for success.",
    },
    card: {
      image: WebCard,
      title: "Machine Learning Fellowship",
      alt: "Machine Learning Fellowship course In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "Machine Learning Fellowship course In India",
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

export const MachineLearningTechstack = {
  left: [
    {
      title: "Azure",
      icon: TechIcon1,
      icon_alt:
        "Azure - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Azure: Empowering innovation with cloud solutions for modern businesses.",
    },
    {
      title: "Pytorch",
      icon: TechIcon2,
      icon_alt:
        "Pytorch - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "PyTorch: Accelerating AI research and deployment with flexible deep learning tools.",
    },
    {
      title: "Tensor flow",
      icon: TechIcon3,
      icon_alt:
        "Tensor flow - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "TensorFlow: Empowering scalable machine learning and AI solutions for everyone.",
    },
    {
      title: "Vector AI",
      icon: TechIcon4,
      icon_alt:
        "Vector AI - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Vector AI: Simplifying vector search for modern machine learning applications.",
    },
    {
      title: "Tableau",
      icon: TechIcon5,
      icon_alt:
        "Tableau - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Tableau: Transforming data into actionable insights through interactive visualizations.",
    },
  ],

  right: [
    {
      title: "Keras",
      icon: TechIcon6,
      icon_alt:
        "Keras - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Keras: Simplifying deep learning with an intuitive and powerful neural network API.",
    },
    {
      title: "Chat GPT",
      icon: TechIcon7,
      icon_alt:
        "Chat GPT - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "ChatGPT: Transforming conversations with AI-powered language understanding.",
    },
    {
      title: "H2O.ai",
      icon: TechIcon8,
      icon_alt:
        "H2O.ai - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "H2O.ai: Accelerating machine learning with automated, scalable AI solutions.",
    },
    {
      title: "Big ML",
      icon: TechIcon9,
      icon_alt:
        "Big ML - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "BigML: Simplifying machine learning with automated, scalable predictive modeling tools.",
    },
    {
      title: "Amazon Sagmaker",
      icon: TechIcon10,
      icon_alt:
        "Amazon Sagmaker - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Amazon SageMaker: Scalable platform for machine learning models.",
    },
  ],
  all: [
    {
      title: "Azure",
      icon: TechIcon1,
      icon_alt:
        "Azure - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Azure: Empowering innovation with cloud solutions for modern businesses.",
    },
    {
      title: "Pytorch",
      icon: TechIcon2,
      icon_alt:
        "Pytorch - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "PyTorch: Accelerating AI research and deployment with flexible deep learning tools.",
    },
    {
      title: "Tensor flow",
      icon: TechIcon3,
      icon_alt:
        "Tensor flow - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "TensorFlow: Empowering scalable machine learning and AI solutions for everyone.",
    },
    {
      title: "Vector AI",
      icon: TechIcon4,
      icon_alt:
        "Vector AI - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Vector AI: Simplifying vector search for modern machine learning applications.",
    },
    {
      title: "Tableau",
      icon: TechIcon5,
      icon_alt:
        "Tableau - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Tableau: Transforming data into actionable insights through interactive visualizations.",
    },
    {
      title: "Keras",
      icon: TechIcon6,
      icon_alt:
        "Keras - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Keras: Simplifying deep learning with an intuitive and powerful neural network API.",
    },
    {
      title: "Chat GPT",
      icon: TechIcon7,
      icon_alt:
        "Chat GPT - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "ChatGPT: Transforming conversations with AI-powered language understanding.",
    },
    {
      title: "H2O.ai",
      icon: TechIcon8,
      icon_alt:
        "H2O.ai - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "H2O.ai: Accelerating machine learning with automated, scalable AI solutions.",
    },
    {
      title: "Big ML",
      icon: TechIcon9,
      icon_alt:
        "Big ML - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "BigML: Simplifying machine learning with automated, scalable predictive modeling tools.",
    },
    {
      title: "Amazon Sagmaker",
      icon: TechIcon10,
      icon_alt:
        "Amazon Sagmaker - Technologies & Tools You Will Learn in Machine Learning Fellowship at Kre8ly",
      description:
        "Amazon SageMaker: Scalable platform for machine learning models.",
    },
  ],
};

export const MachineLearningProjects = [
  {
    imgs: P1,
    title: "IPL Score Prediction Using Deep Learning",
    alt: "IPL Score Prediction Using Deep Learning – Kre8ly Machine Learning Fellowship Project",
    description:
      "Predict IPL scores using deep learning techniques for accurate outcomes.",
  },
  {
    imgs: P2,
    title: "Calories Burnt Prediction using Machine Learning",
    alt: "Calories Burnt Prediction using Machine Learning – Kre8ly Machine Learning Fellowship Project",
    description:
      "Predict calories burned using machine learning for personalized insights.",
  },
  {
    imgs: P3,
    title: "Ukraine vs Russia Twitter Sentiment Analysis",
    alt: "Ukraine vs Russia Twitter Sentiment Analysis – Kre8ly Machine Learning Fellowship Project",
    description:
      "Analyze Twitter sentiment on Ukraine vs Russia conflict using machine learning.",
  },
  {
    imgs: P4,
    title: "Rainfall Prediction using Machine Learning",
    alt: "Rainfall Prediction using Machine Learning – Kre8ly Machine Learning Fellowship Project",
    description:
      "Predict rainfall patterns using machine learning for accurate forecasting.",
  },
  {
    imgs: P5,
    title: "SMS Spam Detection using TensorFlow",
    alt: "SMS Spam Detection using TensorFlow – Kre8ly Machine Learning Fellowship Project",
    description:
      "Detect SMS spam using TensorFlow for accurate classification.",
  },
  {
    imgs: P6,
    title: "Inventory Demand Forecasting using Machine Learning",
    alt: "Inventory Demand Forecasting using Machine Learning – Kre8ly Machine Learning Fellowship Project",
    description: "Forecast inventory demand using machine learning models.",
  },
];

// export const MachineLearningFaq = [
//   {
//     question: "Can I learn the front end in 2 months?",
//     answer: `Focusing on HTML, CSS, and simple JavaScript, it is possible to learn the
//         fundamentals of front-end development in two months. But mastery necessitates
//         constant learning and practice.`,
//   },
//   {
//     question: "What course should I do for a front-end developer?",
//     answer: `Choose HTML, CSS, JavaScript, and responsive design classes from online
//         education providers like Kre8ly’s top-rated Front-End Web Development
//         Course.`,
//   },
//   {
//     question: "What's the best way to learn front end web development?",
//     answer: `Combining online classes, interactive coding environments, and practical
//         projects is the most effective approach to learn front-end web development. For
//         efficient skill building, practice constructing websites and ask for advice from
//         internet forums.`,
//   },
//   {
//     question: "Can I learn front end web development in 3 months?",
//     answer: `Yes, learning the basics of front-end web development in 3 months is achievable,
//         focusing on foundational HTML, CSS, and introductory JavaScript. Continued
//         practice and work on projects can enhance proficiency.`,
//   },
//   {
//     question: "What is the salary of a front-end developer in India?",
//     answer: `Front-end developer salaries in India vary based on experience and location.
//         Junior developers might earn around ₹3-5 lakh per annum, while experienced
//         professionals can earn ₹8-15 lakh or more, depending on the company, experience,
//         and skill level.`,
//   },
// ];

export const MachineLearningFaq = [
  {
    question:
      "What is the duration of the Machine Learning Fellowship, and what does it cover?",
    answer: `The Machine Learning Fellowship typically lasts between 4 to 6 months, depending on your pace. 
    It includes structured modules covering foundational to advanced ML concepts such as supervised and unsupervised learning, neural networks, natural language processing (NLP), and deep learning. Additionally, students gain hands-on experience by working on real-world projects and case studies to strengthen their practical understanding.`,
  },
  {
    question:
      "Is prior programming knowledge required to enroll in this fellowship?",
    answer: `While the program is designed to be beginner-friendly, having a basic understanding of 
    programming—especially in Python—will help you grasp concepts more easily. Familiarity with statistics, linear algebra, and data structures will also provide a 
    strong foundation for the more advanced topics covered in the program.`,
  },
  {
    question:
      "Does the fellowship include placement assistance or job support?",
    answer: `Yes, Kre8ly offers end-to-end placement support. This includes resume building, LinkedIn optimization, mock technical interviews, and 1:1 mentorship sessions with industry experts. You’ll also get access to hiring networks, job referrals, 
    and career guidance to help you land roles in data science, AI, and ML`,
  },
  {
    question:
      "What types of hands-on projects will I work on during the program?",
    answer: `Learners will work on multiple industry-relevant projects such as fraud detection systems, movie recommendation engines, customer churn prediction, image classification using CNNs, and sentiment analysis using NLP. 
    These projects are carefully curated to build a strong portfolio that demonstrates your applied skills to employers.`,
  },
  {
    question:
      "Is this Machine Learning Fellowship suitable for working professionals?",
    answer: `Yes, the fellowship is ideal for working professionals looking to transition into ML roles or upskill in their current domain. The course is offered in a flexible, fully online format with weekend live classes, recorded lectures, and mentorship support. 
    This setup allows learners to balance their job commitments while progressing through the curriculum at their own pace.`,
  },
  {
    question:
      "Will I receive a certificate after completing the fellowship? Is it industry-recognized?",
    answer: `Upon successful completion of the fellowship, you will receive a certificate from Kre8ly, which is recognized across the tech industry. The certificate can be added to your resume, 
    LinkedIn profile, and job applications to showcase your proficiency in machine learning and related tools and techniques.`,
  },
];

export const MachineLearningAnimationText = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Researcher",
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
