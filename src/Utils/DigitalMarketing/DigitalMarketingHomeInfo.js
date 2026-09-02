const RoboImg = "/assets/DigitalMarketing/DigitalMarketing2.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const DigitalMarkDesk = "/assets/DigitalMarketing/DigitalMarketingDesktop.svg";
const DigitalMarkMobile = "/assets/DigitalMarketing/DigitalMarketingMobile.svg";
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

export const DigitalMarketingHomeInfo = [
  {
    // title: "Digital Marketing Internship",
    badge: "Most Demanding Course",
    title: "Best Online Digital Marketing Course in India",
    subtitle:
      "Digital Marketing is reshaping careers worldwide. Enroll in the top-rated course in ",
    description:
      "We provide flexible classes, 100% practical training, and dedicated doubt sessions. You’ll start with foundational topics and advance to SEO (on-page, off-page, local), website planning, keyword research, search engine marketing (PPC and PPM), social media marketing (SMM), Google Analytics, and affiliate marketing and AI tools, gaining theoretical  and practical experience. We offer you placement guidance, a government-approved certification, and connections with over 150 hiring partners, all at an affordable price, with the potential for salaries up to ₹21 Lakhs and a 175% highest hike. Join us to kick-start your career.",
    trustMetrics: {
      customerCount: "30k+",
      rating: 4.5,
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
      title: "Digital Marketing Mastery Course",
      alt: "Best Digital Marketing Online Course in India with Placement",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/digital-marketing-enroll",
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

export const DigitalMarketingRoadMaps = [
  {
    image: DigitalMarkDesk,
    alt: "Digital Marketing Course In India Roadmap",
  },
  {
    image: DigitalMarkMobile,
    alt: "Digital Marketing Course In India Roadmap",
  },
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Engage in discussions to ensure your digital marketing strategy aligns with your business goals and target audience.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Develop a comprehensive digital marketing plan, including a content calendar and campaign goals.Gather data and insights to inform your strategy.",
    icon: Edit3,
    color: "green",
  },
  {
    id: 3,
    title: "Market Research",
    description:
      "Conduct market research to understand your audience, competitors, and industry trends.This will guide your messaging and positioning.",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Content Creation",
    description:
      "Create engaging, high-quality content tailored to your audience.This includes blog posts, social media updates, videos, and infographics.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Campaign Development",
    description:
      "Develop and run marketing campaigns across various channels (social media, email, PPC, SEO). Use analytics to track performance and make data-driven decisions.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "SEO and SEM Optimization",
    description:
      "Optimize your website and content for search engines to improve visibility and drive organic traffic.Use SEM strategies to complement your SEO efforts.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Analytics and Reporting",
    description:
      "Use analytics tools to monitor the performance of your campaigns.Generate reports to understand what's working and identify areas for improvement",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Launch",
    description:
      "Launch your digital marketing campaigns to reach your audience. Continuously monitor and adjust your strategy to maximize results.",
    icon: Rocket,
    color: "slate",
  },
];
