// import React, { useMemo, useState } from "react";
// import { Link } from "@/lib/router-compat";
// import {
//   FaSearch,
//   FaFilter,
//   FaTimes,
//   FaGraduationCap,
//   FaClock,
//   FaUsers,
//   FaStar,
// } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";

// const Financial = "/assets/fellowship/Financial%20Analyst.jpg";
// const Business = "/assets/fellowship/Business%20Analyst.jpg";
// const FrontEnd = "/assets/fellowship/Front-End%20Development.jpg";
// const BackEnd = "/assets/fellowship/Back-End%20Development.jpg";
// const Research = "/assets/fellowship/Research%20Analyst.jpg";

// const MachineLearnFellow = "/assets/fellowship/Machine%20Learning%20(1).jpg";
// const DigitalMarketingFellow = "/assets/fellowship/Digital%20Marketing%20(1).jpg";
// const UIFellow = "/assets/fellowship/UI%20Designing%20Fellow.jpg";

// const FellowshipOverviewPage = ({ darkMode, setDarkMode }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = [
//     "All",
//     "Development",
//     "Data",
//     "Design",
//     "Marketing",
//     "Analytics",
//     "AI/ML",
//   ];

//   const fellowshipData = [
//     {
//       id: 1,
//       title: "Full Stack Web Development",
//       path: "/fellowship/full-stack-web-development",
//       category: "Development",
//       duration: "6 months",
//       seats: "25",
//       level: "Advanced",
//       description:
//         "Master both frontend and backend development with modern technologies",
//       skills: [
//         "React",
//         "Node.js",
//         "MongoDB",
//         "Express",
//         "JavaScript",
//         "HTML/CSS",
//       ],
//       image: FrontEnd,
//       featured: true,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 2,
//       title: "Frontend Development",
//       path: "/fellowship/frontend-development",
//       category: "Development",
//       duration: "4 months",
//       seats: "20",
//       level: "Intermediate",
//       description:
//         "Build modern, responsive user interfaces with cutting-edge frontend technologies",
//       skills: [
//         "React",
//         "Vue.js",
//         "TypeScript",
//         "CSS3",
//         "JavaScript",
//         "Webpack",
//       ],
//       image: FrontEnd,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 3,
//       title: "Backend Development",
//       path: "/fellowship/backend-development",
//       category: "Development",
//       duration: "5 months",
//       seats: "18",
//       level: "Advanced",
//       description: "Develop robust server-side applications and APIs",
//       skills: ["Node.js", "Python", "Java", "PostgreSQL", "Docker", "AWS"],
//       image: BackEnd,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 4,
//       title: "UI/UX Designer",
//       path: "/fellowship/ui-ux-designer",
//       category: "Design",
//       duration: "4 months",
//       seats: "22",
//       level: "Intermediate",
//       description: "Create intuitive and beautiful user experiences",
//       skills: [
//         "Figma",
//         "Adobe XD",
//         "Sketch",
//         "Prototyping",
//         "User Research",
//         "Wireframing",
//       ],
//       image: UIFellow,
//       featured: true,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 5,
//       title: "Data Analyst",
//       path: "/fellowship/data-analyst",
//       category: "Analytics",
//       duration: "5 months",
//       seats: "20",
//       level: "Intermediate",
//       description:
//         "Transform data into actionable insights for business decisions",
//       skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "Statistics"],
//       image: Business,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 6,
//       title: "Data Science",
//       path: "/fellowship/data-science",
//       category: "Data",
//       duration: "6 months",
//       seats: "18",
//       level: "Advanced",
//       description: "Master machine learning and statistical analysis",
//       skills: ["Python", "R", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
//       image: Business,
//       featured: true,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 7,
//       title: "Digital Marketing",
//       path: "/fellowship/digital-marketing",
//       category: "Marketing",
//       duration: "4 months",
//       seats: "25",
//       level: "Intermediate",
//       description: "Master digital marketing strategies and tools",
//       skills: [
//         "SEO",
//         "Google Ads",
//         "Social Media",
//         "Email Marketing",
//         "Analytics",
//         "Content Strategy",
//       ],
//       image: DigitalMarketingFellow,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 8,
//       title: "Financial Analyst",
//       path: "/fellowship/financial-analyst",
//       category: "Analytics",
//       duration: "5 months",
//       seats: "20",
//       level: "Advanced",
//       description: "Analyze financial data and create investment strategies",
//       skills: [
//         "Excel",
//         "Financial Modeling",
//         "Valuation",
//         "Risk Analysis",
//         "SQL",
//         "Python",
//       ],
//       image: Financial,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 9,
//       title: "Business Analyst",
//       path: "/fellowship/business-analyst",
//       category: "Analytics",
//       duration: "4 months",
//       seats: "22",
//       level: "Intermediate",
//       description:
//         "Bridge the gap between business needs and technical solutions",
//       skills: [
//         "Requirements Gathering",
//         "Process Modeling",
//         "Data Analysis",
//         "Stakeholder Management",
//         "Agile",
//         "SQL",
//       ],
//       image: Business,
//       featured: false,
//       price: "Pricing start from ₹399/-",
//     },
//     {
//       id: 10,
//       title: "Machine Learning",
//       path: "/fellowship/machine-learning",
//       category: "AI/ML",
//       duration: "6 months",
//       seats: "15",
//       level: "Advanced",
//       description: "Build intelligent systems and predictive models",
//       skills: [
//         "Python",
//         "TensorFlow",
//         "PyTorch",
//         "Deep Learning",
//         "NLP",
//         "Computer Vision",
//       ],
//       image: MachineLearnFellow,
//       featured: true,
//       price: "Pricing start from ₹399/-",
//     },
//   ];

//   // Was `useState([])` + `useEffect` mirroring the source array into state.
//   // Two consequences: the list rendered empty on the very first paint (the
//   // initial state was `[]`, so the page briefly said "0 fellowships available"
//   // before the effect ran), and every keystroke cost two renders. The filtered
//   // list is derived from its inputs, so useMemo is the right tool.
//   const filteredFellowships = useMemo(() => {
//     const q = searchQuery.trim().toLowerCase();

//     return fellowshipData.filter((fellowship) => {
//       const matchesQuery =
//         !q ||
//         fellowship.title.toLowerCase().includes(q) ||
//         fellowship.description.toLowerCase().includes(q) ||
//         fellowship.skills.some((skill) => skill.toLowerCase().includes(q));

//       const matchesCategory =
//         selectedCategory === "All" || fellowship.category === selectedCategory;

//       return matchesQuery && matchesCategory;
//     });
//   }, [searchQuery, selectedCategory]);

//   const hasFilters = Boolean(searchQuery) || selectedCategory !== "All";

//   const clearFilters = () => {
//     setSearchQuery("");
//     setSelectedCategory("All");
//   };

//   return (
//     <main className="min-h-screen bg-canvas text-content">
//       {/* ---------------- hero ---------------- */}
//       <section id="hero" className="relative isolate overflow-hidden border-b border-line">
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(ellipse 60% 60% at 50% -10%, hsl(var(--k-brand) / 0.14), transparent 70%)",
//             }}
//           />
//         </div>

//         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
//               <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
//               {fellowshipData.length} fellowship tracks
//             </span>

//             <h1 className="mt-6 text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
//               Fellowship <span className="text-brand">programs</span>
//             </h1>

//             <p className="mx-auto mt-4 max-w-2xl text-base text-content-secondary md:text-lg">
//               Work on real projects with industry mentors, and finish with something you
//               can actually show an employer.
//             </p>

//             <div className="mx-auto mt-8 max-w-2xl">
//               {/* The search input previously had no label of any kind. */}
//               <label htmlFor="fellowship-search" className="sr-only">
//                 Search fellowships, skills or technologies
//               </label>
//               <div className="relative">
//                 <FaSearch
//                   aria-hidden="true"
//                   className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-content-muted"
//                 />
//                 <input
//                   id="fellowship-search"
//                   type="search"
//                   placeholder="Search fellowships, skills, or technologies..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full rounded-control border border-line bg-surface py-3.5 pl-12 pr-4 text-base text-content shadow-xs transition-colors placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- filters ---------------- */}
//       {/* `top-0` tucked this bar under the sticky 4rem navbar; `top-16` parks it
//           directly below instead. */}
//       <div className="sticky top-16 z-20 border-b border-line bg-surface/90 backdrop-blur-md">
//         <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap items-center justify-between gap-3">
//             <div className="flex items-center gap-2 text-content-secondary">
//               <FaFilter aria-hidden="true" className="text-sm" />
//               <span className="text-sm font-medium">Filter by</span>
//             </div>

//             <div
//               role="group"
//               aria-label="Filter fellowships by category"
//               className="flex flex-wrap gap-2"
//             >
//               {categories.map((category) => {
//                 const active = selectedCategory === category;
//                 return (
//                   <button
//                     key={category}
//                     type="button"
//                     onClick={() => setSelectedCategory(category)}
//                     aria-pressed={active}
//                     className={[
//                       "rounded-control px-3.5 py-2 text-sm font-medium transition-colors duration-150",
//                       "focus-visible:outline-none focus-visible:shadow-focus",
//                       active
//                         ? "bg-brand text-brand-fg shadow-xs"
//                         : "bg-surface-sunken text-content-secondary hover:bg-brand-subtle hover:text-brand",
//                     ].join(" ")}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>

//             {hasFilters && (
//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="inline-flex items-center gap-2 rounded-control px-3 py-2 text-sm text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus"
//               >
//                 <FaTimes aria-hidden="true" />
//                 Clear filters
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ---------------- grid ---------------- */}
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <p aria-live="polite" className="sr-only">
//           {filteredFellowships.length} fellowships found
//         </p>

//         {filteredFellowships.length === 0 ? (
//           <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface-raised px-6 py-16 text-center">
//             <div
//               aria-hidden="true"
//               className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-subtle text-brand"
//             >
//               <FaSearch className="h-5 w-5" />
//             </div>
//             <h3 className="text-base font-semibold text-content">No fellowships found</h3>
//             <p className="mt-1.5 max-w-sm text-sm text-content-secondary">
//               Try a different search term, or clear the filters to see all{" "}
//               {fellowshipData.length} tracks.
//             </p>
//             {/* The old empty state offered no way back to the full list. */}
//             <button
//               type="button"
//               onClick={clearFilters}
//               className="mt-5 inline-flex h-10 items-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold tracking-tight">
//                 {filteredFellowships.length} fellowship
//                 {filteredFellowships.length !== 1 ? "s" : ""} available
//               </h2>
//               <p className="mt-1 text-content-secondary">
//                 Pick a track and start building real work.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {filteredFellowships.map((fellowship) => (
//                 <article
//                   key={fellowship.id}
//                   className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-md"
//                 >
//                   <div className="relative h-44 overflow-hidden bg-surface-sunken">
//                     <img
//                       src={fellowship.image}
//                       alt={fellowship.title}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />

//                     {fellowship.featured && (
//                       <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-fg">
//                         <FaStar aria-hidden="true" className="h-3 w-3" />
//                         Featured
//                       </span>
//                     )}

//                     {fellowship.level && (
//                       <span className="absolute right-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-semibold text-content backdrop-blur-sm">
//                         {fellowship.level}
//                       </span>
//                     )}
//                   </div>

//                   <div className="flex flex-1 flex-col p-5">
//                     <p className="text-xs font-semibold uppercase tracking-wider text-brand">
//                       {fellowship.category}
//                     </p>
//                     <h3 className="mt-1.5 text-lg font-semibold text-content">
//                       {fellowship.title}
//                     </h3>
//                     <p className="mt-2 text-sm text-content-secondary">
//                       {fellowship.description}
//                     </p>

//                     {/* Duration and seats were plain grey text; as a definition
//                         list a screen reader reads them as label/value pairs. */}
//                     <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-content-secondary">
//                       {fellowship.duration && (
//                         <div className="flex items-center gap-1.5">
//                           <FaClock aria-hidden="true" className="h-3.5 w-3.5 text-content-muted" />
//                           <dt className="sr-only">Duration</dt>
//                           <dd>{fellowship.duration}</dd>
//                         </div>
//                       )}
//                       {fellowship.seats && (
//                         <div className="flex items-center gap-1.5">
//                           <FaUsers aria-hidden="true" className="h-3.5 w-3.5 text-content-muted" />
//                           <dt className="sr-only">Seats</dt>
//                           <dd>{fellowship.seats} seats</dd>
//                         </div>
//                       )}
//                     </dl>

//                     <div className="mt-4">
//                       <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-content-muted">
//                         Skills you&apos;ll build
//                       </h4>
//                       <ul className="flex flex-wrap gap-1.5">
//                         {fellowship.skills.slice(0, 4).map((skill, idx) => (
//                           <li
//                             key={idx}
//                             className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs text-content-secondary"
//                           >
//                             {skill}
//                           </li>
//                         ))}
//                         {fellowship.skills.length > 4 && (
//                           <li className="rounded-full bg-brand-subtle px-2.5 py-1 text-xs font-medium text-brand">
//                             +{fellowship.skills.length - 4} more
//                           </li>
//                         )}
//                       </ul>
//                     </div>

//                     {fellowship.price && (
//                       <p className="mt-4 text-sm font-semibold text-content">
//                         {fellowship.price}
//                       </p>
//                     )}

//                     <Link
//                       to={fellowship.path}
//                       // Every card's CTA had identical text, so a screen-reader
//                       // link list read as ten identical "View Details" entries.
//                       aria-label={`View details for ${fellowship.title}`}
//                       className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//                     >
//                       View details
//                       <IoIosArrowForward
//                         aria-hidden="true"
//                         className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
//                       />
//                     </Link>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* ---------------- closing CTA ---------------- */}
//       <section className="border-t border-line bg-surface-sunken py-16 md:py-20">
//         <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//             Not sure which track fits you?
//           </h2>
//           <p className="mx-auto mt-3 max-w-xl text-content-secondary">
//             Tell us where you are and what you want next — we will point you at the
//             right programme.
//           </p>
//           <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//             <Link
//               to="/contact-us"
//               className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//             >
//               Talk to a counsellor
//               <IoIosArrowForward aria-hidden="true" className="ml-1.5" />
//             </Link>
//             <Link
//               to="/courses"
//               className="inline-flex h-12 items-center justify-center rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
//             >
//               Browse courses
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default FellowshipOverviewPage;














import React, { useMemo, useState } from "react";
import { Link } from "@/lib/router-compat";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaGraduationCap,
  FaClock,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Reveal from "@/component/ui/Reveal";
import { Eyebrow } from "@/component/ui/Section";

const Financial = "/assets/fellowship/Financial%20Analyst.jpg";
const Business = "/assets/fellowship/Business%20Analyst.jpg";
const FrontEnd = "/assets/fellowship/Front-End%20Development.jpg";
const BackEnd = "/assets/fellowship/Back-End%20Development.jpg";
const Research = "/assets/fellowship/Research%20Analyst.jpg";

const MachineLearnFellow = "/assets/fellowship/Machine%20Learning%20(1).jpg";
const DigitalMarketingFellow = "/assets/fellowship/Digital%20Marketing%20(1).jpg";
const UIFellow = "/assets/fellowship/UI%20Designing%20Fellow.jpg";

const FellowshipOverviewPage = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Development",
    "Data",
    "Design",
    "Marketing",
    "Analytics",
    "AI/ML",
  ];

  const fellowshipData = [
    {
      id: 1,
      title: "Full Stack Web Development",
      path: "/fellowship/full-stack-web-development",
      category: "Development",
      duration: "6 months",
      seats: "25",
      level: "Advanced",
      description:
        "Master both frontend and backend development with modern technologies",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "HTML/CSS",
      ],
      image: FrontEnd,
      featured: true,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 2,
      title: "Frontend Development",
      path: "/fellowship/frontend-development",
      category: "Development",
      duration: "4 months",
      seats: "20",
      level: "Intermediate",
      description:
        "Build modern, responsive user interfaces with cutting-edge frontend technologies",
      skills: [
        "React",
        "Vue.js",
        "TypeScript",
        "CSS3",
        "JavaScript",
        "Webpack",
      ],
      image: FrontEnd,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 3,
      title: "Backend Development",
      path: "/fellowship/backend-development",
      category: "Development",
      duration: "5 months",
      seats: "18",
      level: "Advanced",
      description: "Develop robust server-side applications and APIs",
      skills: ["Node.js", "Python", "Java", "PostgreSQL", "Docker", "AWS"],
      image: BackEnd,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      path: "/fellowship/ui-ux-designer",
      category: "Design",
      duration: "4 months",
      seats: "22",
      level: "Intermediate",
      description: "Create intuitive and beautiful user experiences",
      skills: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Prototyping",
        "User Research",
        "Wireframing",
      ],
      image: UIFellow,
      featured: true,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 5,
      title: "Data Analyst",
      path: "/fellowship/data-analyst",
      category: "Analytics",
      duration: "5 months",
      seats: "20",
      level: "Intermediate",
      description:
        "Transform data into actionable insights for business decisions",
      skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "Statistics"],
      image: Business,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 6,
      title: "Data Science",
      path: "/fellowship/data-science",
      category: "Data",
      duration: "6 months",
      seats: "18",
      level: "Advanced",
      description: "Master machine learning and statistical analysis",
      skills: ["Python", "R", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      image: Business,
      featured: true,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 7,
      title: "Digital Marketing",
      path: "/fellowship/digital-marketing",
      category: "Marketing",
      duration: "4 months",
      seats: "25",
      level: "Intermediate",
      description: "Master digital marketing strategies and tools",
      skills: [
        "SEO",
        "Google Ads",
        "Social Media",
        "Email Marketing",
        "Analytics",
        "Content Strategy",
      ],
      image: DigitalMarketingFellow,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 8,
      title: "Financial Analyst",
      path: "/fellowship/financial-analyst",
      category: "Analytics",
      duration: "5 months",
      seats: "20",
      level: "Advanced",
      description: "Analyze financial data and create investment strategies",
      skills: [
        "Excel",
        "Financial Modeling",
        "Valuation",
        "Risk Analysis",
        "SQL",
        "Python",
      ],
      image: Financial,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 9,
      title: "Business Analyst",
      path: "/fellowship/business-analyst",
      category: "Analytics",
      duration: "4 months",
      seats: "22",
      level: "Intermediate",
      description:
        "Bridge the gap between business needs and technical solutions",
      skills: [
        "Requirements Gathering",
        "Process Modeling",
        "Data Analysis",
        "Stakeholder Management",
        "Agile",
        "SQL",
      ],
      image: Business,
      featured: false,
      price: "Pricing start from ₹399/-",
    },
    {
      id: 10,
      title: "Machine Learning",
      path: "/fellowship/machine-learning",
      category: "AI/ML",
      duration: "6 months",
      seats: "15",
      level: "Advanced",
      description: "Build intelligent systems and predictive models",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Deep Learning",
        "NLP",
        "Computer Vision",
      ],
      image: MachineLearnFellow,
      featured: true,
      price: "Pricing start from ₹399/-",
    },
  ];

  // Was `useState([])` + `useEffect` mirroring the source array into state.
  // Two consequences: the list rendered empty on the very first paint (the
  // initial state was `[]`, so the page briefly said "0 fellowships available"
  // before the effect ran), and every keystroke cost two renders. The filtered
  // list is derived from its inputs, so useMemo is the right tool.
  const filteredFellowships = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return fellowshipData.filter((fellowship) => {
      const matchesQuery =
        !q ||
        fellowship.title.toLowerCase().includes(q) ||
        fellowship.description.toLowerCase().includes(q) ||
        fellowship.skills.some((skill) => skill.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "All" || fellowship.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const hasFilters = Boolean(searchQuery) || selectedCategory !== "All";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-canvas text-content">
      {/* ---------------- hero ---------------- */}
      <section id="hero" className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% -10%, hsl(var(--k-brand) / 0.14), transparent 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal direction="up">
              <Eyebrow className="justify-center">
                {fellowshipData.length} fellowship tracks
              </Eyebrow>
            </Reveal>

            {/* Was `text-3xl sm:text-5xl` — the same size as the section
                headings below it, so the page had no clear opening. */}
            <Reveal direction="up" delay={70}>
              <h1 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Build real work with a{" "}
                <span className="text-brand">mentor beside you</span>
              </h1>
            </Reveal>

            <p className="mx-auto mt-5 max-w-2xl text-base text-content-secondary md:text-lg">
              Work on real projects with industry mentors, and finish with something you
              can actually show an employer.
            </p>

            <div className="mx-auto mt-9 max-w-2xl">
              {/* The search input previously had no label of any kind. */}
              <label htmlFor="fellowship-search" className="sr-only">
                Search fellowships, skills or technologies
              </label>
              <div className="relative">
                <FaSearch
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-content-muted"
                />
                <input
                  id="fellowship-search"
                  type="search"
                  placeholder="Search fellowships, skills, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-control border border-line bg-surface py-3.5 pl-12 pr-4 text-base text-content shadow-xs transition-colors placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- filters ---------------- */}
      {/* `top-0` tucked this bar under the sticky 4rem navbar; `top-16` parks it
          directly below instead. */}
      <div className="sticky top-16 z-20 border-b border-line bg-surface/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-content-secondary">
              <FaFilter aria-hidden="true" className="text-sm" />
              <span className="text-sm font-medium">Filter by</span>
            </div>

            <div
              role="group"
              aria-label="Filter fellowships by category"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={active}
                    className={[
                      "rounded-control px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:shadow-focus",
                      active
                        ? "bg-brand text-brand-fg shadow-xs"
                        : "bg-surface-sunken text-content-secondary hover:bg-brand-subtle hover:text-brand",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-control px-3 py-2 text-sm text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus"
              >
                <FaTimes aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------------- grid ---------------- */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p aria-live="polite" className="sr-only">
          {filteredFellowships.length} fellowships found
        </p>

        {filteredFellowships.length === 0 ? (
          <Reveal direction="up">
          <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface-raised px-6 py-16 text-center">
            <div
              aria-hidden="true"
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-subtle text-brand"
            >
              <FaSearch className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-content">No fellowships found</h3>
            <p className="mt-1.5 max-w-sm text-sm text-content-secondary">
              Try a different search term, or clear the filters to see all{" "}
              {fellowshipData.length} tracks.
            </p>
            {/* The old empty state offered no way back to the full list. */}
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex h-10 items-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              Clear filters
            </button>
          </div>
          </Reveal>
        ) : (
          <>
            <Reveal direction="up">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                {filteredFellowships.length} fellowship
                {filteredFellowships.length !== 1 ? "s" : ""} available
              </h2>
              <p className="mt-1 text-content-secondary">
                Pick a track and start building real work.
              </p>
            </div>
            </Reveal>

            {/* Keyed on the category so changing it replays the stagger.
                Deliberately not keyed on the search text — re-animating on
                every keystroke makes typing feel like a page reload. */}
            <div
              key={selectedCategory}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredFellowships.map((fellowship, i) => (
                <Reveal
                  key={fellowship.id}
                  direction="up"
                  delay={Math.min(i, 5) * 70}
                  className="h-full"
                >
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-md"
                >
                  <div className="relative h-44 overflow-hidden bg-surface-sunken">
                    <img
                      src={fellowship.image}
                      alt={fellowship.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {fellowship.featured && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-fg">
                        <FaStar aria-hidden="true" className="h-3 w-3" />
                        Featured
                      </span>
                    )}

                    {fellowship.level && (
                      <span className="absolute right-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-semibold text-content backdrop-blur-sm">
                        {fellowship.level}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {fellowship.category}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-content">
                      {fellowship.title}
                    </h3>
                    <p className="mt-2 text-sm text-content-secondary">
                      {fellowship.description}
                    </p>

                    {/* Duration and seats were plain grey text; as a definition
                        list a screen reader reads them as label/value pairs. */}
                    <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-content-secondary">
                      {fellowship.duration && (
                        <div className="flex items-center gap-1.5">
                          <FaClock aria-hidden="true" className="h-3.5 w-3.5 text-content-muted" />
                          <dt className="sr-only">Duration</dt>
                          <dd>{fellowship.duration}</dd>
                        </div>
                      )}
                      {fellowship.seats && (
                        <div className="flex items-center gap-1.5">
                          <FaUsers aria-hidden="true" className="h-3.5 w-3.5 text-content-muted" />
                          <dt className="sr-only">Seats</dt>
                          <dd>{fellowship.seats} seats</dd>
                        </div>
                      )}
                    </dl>

                    <div className="mt-4">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-content-muted">
                        Skills you&apos;ll build
                      </h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {fellowship.skills.slice(0, 4).map((skill, idx) => (
                          <li
                            key={idx}
                            className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs text-content-secondary"
                          >
                            {skill}
                          </li>
                        ))}
                        {fellowship.skills.length > 4 && (
                          <li className="rounded-full bg-brand-subtle px-2.5 py-1 text-xs font-medium text-brand">
                            +{fellowship.skills.length - 4} more
                          </li>
                        )}
                      </ul>
                    </div>

                    {fellowship.price && (
                      <p className="mt-4 text-sm font-semibold text-content">
                        {fellowship.price}
                      </p>
                    )}

                    <Link
                      to={fellowship.path}
                      // Every card's CTA had identical text, so a screen-reader
                      // link list read as ten identical "View Details" entries.
                      aria-label={`View details for ${fellowship.title}`}
                      className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                    >
                      View details
                      <IoIosArrowForward
                        aria-hidden="true"
                        className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ---------------- closing CTA ---------------- */}
      <section className="border-t border-line bg-surface-sunken py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Not sure which track fits you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-content-secondary">
            Tell us where you are and what you want next — we will point you at the
            right programme.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              Talk to a counsellor
              <IoIosArrowForward aria-hidden="true" className="ml-1.5" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex h-12 items-center justify-center rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
            >
              Browse courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FellowshipOverviewPage;