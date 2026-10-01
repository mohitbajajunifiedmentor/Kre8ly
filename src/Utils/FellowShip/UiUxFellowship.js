const WebCard = "/assets/fellowship/UiUx/HeroCard.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const WebGif = "/assets/WebDev/WebHome.gif";

const TechIcon1 = "/assets/fellowship/UiUx/Icon1.png";
const TechIcon2 = "/assets/fellowship/UiUx/Icon2.png";
const TechIcon3 = "/assets/fellowship/UiUx/Icon3.png";
const TechIcon4 = "/assets/fellowship/UiUx/Icon4.png";
const TechIcon5 = "/assets/fellowship/UiUx/Icon5.png";

const P1 = "/assets/UiDesign/UIP1.png";
const P2 = "/assets/UiDesign/UIP2.png";
const P3 = "/assets/UiDesign/UIP3.png";
const P4 = "/assets/UiDesign/UIP4.png";
const P5 = "/assets/UiDesign/UIP5.png";
const P6 = "/assets/UiDesign/UIP6.png";
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

export const UiUxHeroSection = [
  {
    badge: "Most Popular Course",
    headings: {
      title: `UI/UX Design Fellowship`,
      subtitle: "Become a Job-Ready UI/UX Designer",
      description:
        "Learn UI/UX design through expert mentoring, real-world projects, and a success-driven curriculum. Build practical skills, enhance creativity, and create designs that stand out. Unlock your potential and grow your career!",
    },
    card: {
      image: WebCard,
      title: "UI/UX Fellowship",
      alt: "UI/UX Fellowship Program In India - Kre8ly",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Join Fellowship Now",
      ApplyLink: "https://pages.razorpay.com/umweb2026",
    },
    gifs: {
      icons: WebGif,
      alt: "UI/UX Fellowship course In India",
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

export const UiUxTechstack = {
  left: [
    {
      title: "Figma",
      icon: TechIcon1,
      icon_alt:
        "Figma - Technologies & Tools You Will Learn in UI/UX Design Fellowship at Kre8ly",
      description:
        "Figma is a collaborative design tool for creating user interfaces and prototypes.",
    },
    {
      title: "Sketch",
      icon: TechIcon2,
      icon_alt:
        "Sketch - Technologies & Tools You Will Learn in UI/UX Design Fellowship at Kre8ly",
      description:
        "Sketch is a design tool for creating user interfaces and prototypes.",
    },
  ],
  center: [
    {
      title: "Photopea",
      icon: TechIcon3,
      description:
        "Photopea  - Technologies & Tools You Will Learn in UI/UX Design Fellowship at Kre8ly",
    },
  ],
  right: [
    {
      title: "Behance",
      icon: TechIcon4,
      description:
        "Behance - Technologies & Tools You Will Learn in UI/UX Design Fellowship at Kre8ly",
    },
    {
      title: "Adobe XD",
      icon: TechIcon5,
      description:
        "Adobe XD - Technologies & Tools You Will Learn in UI/UX Design Fellowship at Kre8ly",
    },
  ],
  all: [
    {
      title: "Figma",
      icon: TechIcon1,
      description:
        "Figma is a collaborative design tool for creating user interfaces and prototypes.",
    },
    {
      title: "Sketch",
      icon: TechIcon2,
      description:
        "Sketch is a design tool for creating user interfaces and prototypes.",
    },
    {
      title: "Photopea",
      icon: TechIcon3,
      description:
        "Photopea is a powerful image editing tool with a user-friendly interface.",
    },
    {
      title: "Behance",
      icon: TechIcon4,
      description:
        "Behance is a platform for showcasing and sharing design projects.",
    },
    {
      title: "Adobe XD",
      icon: TechIcon5,
      description:
        "Adobe XD is a design tool for creating user interfaces and prototypes.",
    },
  ],
};

export const UiUxProjects = [
  {
    imgs: P1,
    title: "Recreate Netflix Landing Page",
    alt: "Recreate Netflix Landing Page – Kre8ly UI/UX Design Fellowship Project",
  },
  {
    imgs: P2,
    title: "Create your own crypto trading app",
    alt: "Create your own crypto trading app – Kre8ly UI/UX Design Fellowship Project",
  },
  {
    imgs: P3,
    title: "Heuristics Analysis report for a travel website",
    alt: "Heuristics Analysis report for a travel website – Kre8ly UI/UX Design Fellowship Project",
  },
  {
    imgs: P4,
    title: "Create a Website UI for a Digital Marketing Company",
    alt: "Create a Website UI for a Digital Marketing Company – Kre8ly UI/UX Design Fellowship Project",
  },
  {
    imgs: P5,
    title: "Competative Analysis report for an Plant App",
    alt: "Competative Analysis report for a Plant App – Kre8ly UI/UX Design Fellowship Project",
  },
  {
    imgs: P6,
    title: "Create UI for an Ecommerce App",
    alt: "Create UI for an Ecommerce App – Kre8ly UI/UX Design Fellowship Project",
  },
];

// export const UiUxFaq = [
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

export const UiUxFaq = [
  {
    question:
      "What is the duration of the UI/UX Design Fellowship at Kre8ly?",
    answer: `The UI/UX Design Fellowship is a 3-month intensive program designed to equip you with practical skills, real-world project experience, and mentorship from industry experts. It’s perfect for beginners as well as those looking to transition into a design career.`,
  },
  {
    question:
      "Do I need any prior experience in design to join this fellowship?",
    answer: ` No prior experience is required. The fellowship is beginner-friendly and starts with foundational concepts before moving on to advanced UI/UX tools and techniques. You’ll receive step-by-step guidance throughout the program.`,
  },
  {
    question: "What tools and software will I learn during the program?",
    answer: `You’ll get hands-on training in industry-standard tools like Figma, Adobe XD, Sketch, and Miro, along with exposure to wireframing, prototyping, user flows, and user research methodologies.`,
  },
  {
    question:
      "Will I get a certificate and placement support after the program?",
    answer: ` Yes, upon successful completion, you will receive a certificate of completion and access to placement assistance, including resume reviews, mock interviews, and portfolio-building support to help you land a job in the UI/UX field.`,
  },
  {
    question:
      " How is this program different from regular online UI/UX courses?",
    answer: ` Unlike generic courses, this fellowship offers 1:1 mentorship, real-world projects, peer reviews, and a structured curriculum that focuses on career outcomes. You also get lifetime access to the learning materials and a dedicated support team.`,
  },
];

export const UiUxAnimationText = [
  "UI/UX Designer",
  "Interaction Designer",
  "UX Researcher",
];
