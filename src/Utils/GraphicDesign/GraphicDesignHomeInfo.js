const Model = "/assets/GraphicDesign/Landing.gif";
const CardImage = "/assets/GraphicDesign/CardImage.png";
import { getDynamicFutureDate } from "../CourseCardInfos";
const GraphicDesignRoadMapsImage = "/assets/GraphicDesign/GraphicDesigningRoadmapDesktop.svg";
const GraphicDesignRoadMapLight = "/assets/GraphicDesign/RoadmapGraphicDesignLight.svg";
const RoadMapMobile = "/assets/GraphicDesign/GraphicDesignRoadmapMobile.svg";

const Icon1 = "/assets/GraphicDesign/Icon1.png";
const Icon2 = "/assets/GraphicDesign/Icon2.png";
const Icon3 = "/assets/GraphicDesign/Icon3.png";
const Icon4 = "/assets/GraphicDesign/Icon4.png";
const Icon5 = "/assets/GraphicDesign/Icon5.png";
const Icon6 = "/assets/GraphicDesign/Icon6.png";
const Icon7 = "/assets/GraphicDesign/Icon7.png";
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

export const GraphicDesignHomeInfo = [
  {
    badge: "Most Popular Course",
    title: "Top Online Graphic Design Course in India",
    subtitle:
      "Master tools like Photoshop and Illustrator with our industry-focused graphic designing course in India",
    description:
      "The field of Graphic Design is rapidly evolving, with new tools and trends emerging constantly. Our Graphic Design Course covers Adobe Photoshop, Illustrator, and InDesign, along with color theory, typography, branding, composition, and layout design. You’ll also learn UI/UX fundamentals, logo and poster design, social media graphics, and digital illustration. Through hands-on projects, you’ll master industry best practices and build a strong portfolio. The Graphic Design Course from Kre8ly prepares you for diverse career opportunities, including working with design studios, marketing agencies, startups, or even freelancing. Start your journey in creative design today!",

    trustMetrics: {
      customerCount: "30k+",
      rating: 4.7,
      totalReviews: 320,
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
      image: CardImage,
      alt: "Best Graphic Design Course in India - Kre8ly",
      title: "Graphic Designing",
      batchStartDate: getDynamicFutureDate(),
      ctaText: "Apply Now",
      ApplyLink: "/graphic-design-enroll",
    },
    Gifs: {
      description:
        "Cartoon robot in top right corner, Graphic Designing Course In India",
      url: Model,
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

export const GraphicDesignRoadMaps = [
  {
    image: GraphicDesignRoadMapsImage,
    lightImage: GraphicDesignRoadMapLight,
    alt: "Graphic Design Course In India Roadmap",
  },
  {
    image: RoadMapMobile,
    lightImage: GraphicDesignRoadMapLight,
    alt: "Graphic Design Course In India Roadmap",
  },
];

export const GraphicDesignRoadmapIcons = [
  {
    Icon: Icon1,
    headText: "Design Fundamentals",
    text: "Balance, contrast, alignment, repetition, proximity, space, color, typography, composition, layout.",
  },
  {
    Icon: Icon2,
    headText: "Learning Design Tools",
    text: "Photoshop (editing, manipulation), Illustrator (vector, logos), InDesign (layout, brochures, magazines).",
  },
  {
    Icon: Icon3,
    headText: "Working with Images & Graphics",
    text: "Image resolution, formats, vector vs raster, photo manipulation, retouching.",
  },
  {
    Icon: Icon4,
    headText: "Creating Basic Design Projects",
    text: "Social media posts, banners, logos, business cards, brochures, posters, flyers.",
  },
  {
    Icon: Icon5,
    headText: "Branding Identity",
    text: "Brand guide: logo, colour, typography, imagery, consistency, identity, design.",
  },
  {
    Icon: Icon6,
    headText: "Building a Portfolio",
    text: "Showcase projects on Behance, Dribbble, website; network, engage online.",
  },
  {
    Icon: Icon7,
    headText: "Learning Industry Best Practices",
    text: "Explore design trends, client feedback, basics of print, digital design.",
  },
];

export const roadmapSteps = [
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
    description: "Build your site by adding in an engaging and SEO content.",
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
];
