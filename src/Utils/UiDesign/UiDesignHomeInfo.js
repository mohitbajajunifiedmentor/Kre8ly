const ComputerGif = "/assets/UiDesign/HomeIcon.gif";
const RoboImg = "/assets/UiDesign/UXUIDesigner2.png";
const UIRoadMap = "/assets/UiDesign/Roadmap.gif";
const Icon1 = "/assets/UiDesign/Road1.png";
const Icon2 = "/assets/UiDesign/Road2.png";
const Icon3 = "/assets/UiDesign/Road3.png";
const Icon4 = "/assets/UiDesign/Road4.png";
const Icon5 = "/assets/UiDesign/Road5.png";
const Icon6 = "/assets/UiDesign/Road6.png";
const Icon7 = "/assets/UiDesign/Road7.png";
const Icon8 = "/assets/UiDesign/Road8.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const UIDesignRoadmapdesk = "/assets/UiDesign/UIDesignRoadmapDesktop.svg";
const UIDesignRoadMapMob = "/assets/UiDesign/UIDesignRoadmapMobile.svg";
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

export const UiDesignHomeInfo = [
  {
    badge: "High Salary Skills",
    title: "Best Online UI UX Course in India",
    subtitle:
      "UI/UX Design is one of the most in-demand skills. Are you looking for the best UI/UX design course in India",
    description:
      "This course is more than just learning UX/UI design; it's about equipping you with the essential skills, confidence, and connections to excel in the fast-evolving world of user experience and interface design. You’ll gain a comprehensive understanding of vital tools and methodologies such as user research, wireframing, prototyping, usability testing, and design thinking, essential for every modern designer. Additionally, our program offers personalized mentorship with expert faculty who will guide you through your design projects, provide valuable feedback, and help refine your resume and portfolio. You’ll also receive interview preparation and career support to ensure you enter the job market with confidence and stand out in the competitive field of UX/UI design.",
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
      image: RoboImg,
      title: "UI/UX Designer",
      alt: "Best UI/UX Design Course in India with Placement & Practical Training - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/ui-ux-designer-enroll",
    },
    Gifs: {
      description:
        "Cartoon robot in top right corner, UI/UX Designer Course In India",
      url: ComputerGif,
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

export const UiRoadMaps = [
  {
    image: UIDesignRoadmapdesk,
    alt: "Ui Design Course In India Roadmap",
  },
  {
    image: UIDesignRoadMapMob,
    alt: "Ui Design Course In India Roadmap",
  },
];

export const RoadmapIconList = [
  {
    Icon: Icon1,
    headText: "Discussion",
    text: "Engage in discussions to ensure that your UX/UI design aligns with user needs and business goals.",
  },
  {
    Icon: Icon2,
    headText: "Planning",
    text: "Create user personas and user journeys. Develop a sitemap and wireframes based on the information collected.",
  },
  {
    Icon: Icon3,
    headText: "Research",
    text: "Conduct user research and usability studies to understand the target audience and gather insights for informed design decisions.",
  },
  {
    Icon: Icon4,
    headText: "Visual Design",
    text: "Develop the visual design of your interface, ensuring it aligns with the target audience and branding guidelines.",
  },
  {
    Icon: Icon5,
    headText: "Prototyping",
    text: "Create interactive prototypes to simulate the user experience and gather feedback on design elements and user flows.",
  },
  {
    Icon: Icon6,
    headText: "Usability Testing",
    text: "Perform usability testing to identify and fix issues, ensuring a seamless user experience before full development.",
  },
  {
    Icon: Icon7,
    headText: "Development Collaboration",
    text: "Work closely with developers to ensure the design is accurately implemented, addressing any issues that arise during the development phase.",
  },
  {
    Icon: Icon8,
    headText: "Launch",
    text: "Launch your UX/UI design, making it live for users. Continuously monitor and gather user feedback to make iterative improvements.",
  },
];

export const roadmapSteps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "Engage in discussions to ensure that your UX/UI design aligns with user needs and business goals.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Create user personas and user journeys. Develop a sitemap and wireframes based on the information collected.",
    icon: Edit3,
    color: "green",
  },
  {
    id: 3,
    title: "Research",
    description:
      "Conduct user research & usability studies to understand the target audience and gather insights for informed design decisions.",
    icon: Palette,
    color: "purple",
  },
  {
    id: 4,
    title: "Visual Design",
    description:
      "Develop the visual design of your interface, ensuring it aligns with the target audience and branding guidelines.",
    icon: Code,
    color: "orange",
  },
  {
    id: 5,
    title: "Prototyping",
    description:
      "Create interactive prototypes to simulate the user experience and gather feedback on design elements and user flows.",
    icon: Layout,
    color: "indigo",
  },
  {
    id: 6,
    title: "Usability Testing",
    description:
      "Perform usability testing to identify and fix issues, ensuring a seamless user experience before full development.",
    icon: Building,
    color: "teal",
  },
  {
    id: 7,
    title: "Development Collaboration",
    description:
      "Work closely with developers to ensure the design is accurately implemented, addressing any issues that arise during the development phase.",
    icon: CheckCircle,
    color: "red",
  },
  {
    id: 8,
    title: "Launch",
    description:
      "Launch your UX/UI design, making it live for users. Continuously monitor and gather user feedback to make iterative improvements.",
    icon: Rocket,
    color: "slate",
  },
];
