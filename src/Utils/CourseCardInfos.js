const WebDev = "/assets/Web%20development.png";
const DataScience = "/assets/Data%20Science.jpg";
const DigitalMarketing = "/assets/Digital%20Marketing.jpg";
const MachineLearning = "/assets/Machine%20Learning.jpg";
const UXUIDesigner = "/assets/UI%20Designer.jpg";
const DataAnalyst = "/assets/Data%20Analysts.jpg";
const GraphicDesign = "/assets/Graphic%20Design.jpg";
const Financial = "/assets/fellowship/Financial%20Analyst.jpg";
const Business = "/assets/fellowship/Business%20Analyst.jpg";
const FrontEnd = "/assets/fellowship/Front-End%20Development.jpg";
const BackEnd = "/assets/fellowship/Back-End%20Development.jpg";
const Research = "/assets/fellowship/Research%20Analyst.jpg";
const CyberSecurityImage = "/assets/UpComingCoursesImage/Cyber%20Security.jpg";
const BlockChainImage = "/assets/UpComingCoursesImage/Block-Chain%20Development.jpg";
const fellowshipWeb = "/assets/Full%20Stack%20Web%20Development.jpg";
const DataScienceFell = "/assets/Data%20Science%20Fellow.jpg";
const MachineLearnFellow = "/assets/fellowship/Machine%20Learning%20(1).jpg";
const DigitalMarketingFellow = "/assets/fellowship/Digital%20Marketing%20(1).jpg";
const UIFellow = "/assets/fellowship/UI%20Designing%20Fellow.jpg";

export const CourseCardInfos = [
  {
    id: 1,
    title: "Web Development",
    alt: "Best Web Development course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: WebDev,
    link: "/web-development",
    live: true,
    tag: "Most Popular",
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Data Science",
    alt: "Data Science Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: DataScience,
    link: "/data-science",
    live: true,
    tag: "Trending",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    alt: "Digital Marketing Course In India",
    batch: `50 Limited Seats Only.`,
    image: DigitalMarketing,
    link: "/digital-marketing",
    live: true,
    tag: "Most Demanded",
    tools: [
      "Google Ads",
      "Facebook Ads",
      "SEO",
      "Analytics",
      "Email Marketing",
      "Social Media",
    ],
  },
  {
    id: 4,
    title: "Machine Learning",
    alt: "Machine Learning Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: MachineLearning,
    link: "/machine-learning",
    live: true,
    tag: "Trending",
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
  },
  {
    id: 5,
    title: "UX/UI Designer",
    alt: "UX/UI Designer Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: UXUIDesigner,
    link: "/ui-ux-designer",
    live: true,
    tag: "Most Popular",
    tools: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Prototyping",
      "User Research",
    ],
  },
  {
    id: 6,
    title: "Graphic Design",
    alt: "Graphic Design Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: GraphicDesign,
    // link: "/data-analyst",
    link: "/graphic-design",
    live: true,
    tag: "Most Demanded",
    tools: [
      "Adobe Photoshop",
      "Illustrator",
      "InDesign",
      "Canva",
      "Typography",
      "Branding",
    ],
  },
  {
    id: 7,
    title: "Cyber Security",
    alt: "Cyber Security Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: CyberSecurityImage,
    // link: "/data-analyst",
    link: "#",
    live: false,
    extraInfo:
      "Learn cybersecurity to protect systems, uncover vulnerabilities, and defend against threats. Gain hands-on skills in network security, ethical hacking, cryptography, and incident response. Understand how to safeguard data, ensure privacy, and comply with industry regulations while staying ahead of evolving cyber threats.",
    // tag: "Trending",
    tools: [
      "Wireshark",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Ethical Hacking",
    ],
  },
  {
    id: 8,
    title: "Block-Chain Development",
    alt: "blockchain development Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: BlockChainImage,
    // link: "/data-analyst",
    link: "#",
    live: false,
    extraInfo:
      "Learn blockchain development to build decentralized applications, create smart contracts, and enhance security and transparency.",
    // tag: "Most Demanded",
    tools: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "Truffle",
      "Smart Contracts",
      "DApps",
    ],
  },
];
export const FellowShipCourseCardInfos = [
  {
    id: 1,
    title: "Data Analysts",
    alt: "Data Analyst Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: DataAnalyst,
    link: "/fellowship/data-analyst",
    live: true,
  },

  {
    id: 2,
    title: "Full Stack Web Development",
    alt: "Full Stack Web Development Fellowship course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: fellowshipWeb,
    live: true,
    link: "/fellowship/full-stack-web-development",
  },
  {
    id: 3,
    title: "Data Science",
    alt: "Data Science Fellowship In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: DataScienceFell,
    link: "/fellowship/data-science",
    live: true,
  },
  {
    id: 4,
    title: "Financial Analyst",
    alt: "Financial Analyst Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: Financial,
    link: "/fellowship/financial-analyst",
    live: true,
  },
  {
    id: 5,
    title: "Front-End Development ",
    alt: "Front-End Development Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: FrontEnd,
    live: true,
    link: "/fellowship/frontend-development",
  },
  {
    id: 6,
    title: "Machine Learning",
    alt: "Machine Learning Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: MachineLearnFellow,
    link: "/fellowship/machine-learning",
    live: true,
  },
  {
    id: 7,
    title: "Digital Marketing",
    alt: "Digital Marketing Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: DigitalMarketingFellow,
    link: "/fellowship/digital-marketing",
    live: true,
  },
  {
    id: 8,
    title: "Research Analyst",
    alt: "Research Analyst Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: Research,
    link: "#",
    live: false,
    extraInfo:
      "The Research Analyst Fellowship is a comprehensive program designed for aspiring professionals seeking to build a career in research and analytics. This course covers fundamental and advanced research methodologies, data interpretation, market and financial analysis, and report writing. Fellows will gain hands-on experience using tools like Excel, SQL, and Python, and will learn how to derive actionable insights from data. Ideal for graduates and early-career professionals aiming to work in consulting, finance, policy, or academic research roles.",
  },
  {
    id: 9,
    title: "Business Analyst ",
    alt: "Business Analyst Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: Business,
    link: "/fellowship/business-analyst",
    live: true,
  },

  {
    id: 10,
    title: "UX/UI Designing",
    alt: "UX/UI Designer Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: UIFellow,
    link: "/fellowship/ui-ux-designer",
    live: true,
  },
  {
    id: 11,
    title: "Back-End Development",
    alt: "Back-End Development Fellowship Course In India",
    batch: `Batch Starts: ${getDynamicFutureDate()}`,
    image: BackEnd,
    link: "/fellowship/backend-development",
    live: true,
  },
];

export function getDynamicFutureDate() {
  const currentDate = new Date();
  // Clone the current date to avoid modifying the original
  const today = new Date(currentDate);
  // console.log("today was:", today);

  // Define the day intervals
  const intervals = [1, 5, 10, 15, 20, 25];

  // Get the current day of the month
  const currentDay = today.getDate();
  // console.log("currentDay", currentDay);

  // Find the next interval
  let nextDay = intervals.find((day) => day > currentDay); // 25 > 24 = 25
  // console.log("nextDay", nextDay);

  // If we're past the 25th or no next interval found, move to next month

  // nextday undefined aaega toh move to next month!
  if (!nextDay) {
    today.setMonth(today.getMonth() + 1, 1);
    // console.log("today is :", today);
    nextDay = 1;
  }
  // console.log(today.setMonth(today.getMonth() + 1));
  // const date = new Date(today.setMonth(today.getMonth() + 1, 1));
  // console.log("date", date);
  // Set the result date
  const resultDate = new Date(today.getFullYear(), today.getMonth(), nextDay);

  // Format the date as a string (e.g., "5 Aug 2023")
  return resultDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// console.log(getDynamicFutureDate());

// Example usage:
// console.log(
//   "date lormeshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//   getDynamicFutureDate("2024-09-05")
// );
// console.log(getNextBatchStartDate(new Date("2024-08-05")));
// console.log(getNextBatchStartDate(new Date("2024-08-10")));
// console.log(getNextBatchStartDate(new Date("2024-08-15")));
// console.log(getNextBatchStartDate(new Date("2024-08-20")));
// console.log(getNextBatchStartDate(new Date("2024-08-24")));
// console.log(getNextBatchStartDate(new Date("2024-08-25")));
// console.log(getNextBatchStartDate(new Date("2024-08-30")));
// console.log(getNextBatchStartDate(new Date("2024-08-31")));
// console.log(getNextBatchStartDate(new Date("2024-09-1")));
// console.log(getNextBatchStartDate(new Date("2024-09-5")));
// console.log(getNextBatchStartDate(new Date("2024-09-10")));
// console.log(getNextBatchStartDate(new Date("2024-09-15")));
// console.log(getNextBatchStartDate(new Date("2024-09-20")));
// console.log(getNextBatchStartDate(new Date("2024-09-25")));
// console.log(getNextBatchStartDate(new Date("2024-09-30")));
// console.log(getNextBatchStartDate(new Date("2024-10-01")));
