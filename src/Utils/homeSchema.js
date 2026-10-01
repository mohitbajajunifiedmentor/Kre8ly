// Utils/homeSchema.js
//
// The three JSON-LD blocks that used to sit inside src/views/Home.jsx — about
// 150 lines of data declared in the middle of a component, which made the
// render hard to read and re-created the objects on every render.
//
// Content is unchanged.

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kre8ly",
  image: "https://www.unifiedmentor.com/assets/logo-gCk1l8fB.png",
  url: "https://www.unifiedmentor.com/",
  telephone: "062838 00330",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Cyber City, WeWork DLF Forum, DLF Phase 3, Gurugram, Haryana 122002",
    addressLocality: "Gurugram",
    postalCode: "122002",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/Unifiedmentor",
    "https://www.youtube.com/@_Unifiedmentor",
    "https://twitter.com/unifiedmentor",
  ],
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "What is Kre8ly?",
      "Kre8ly is an online education platform that offers a wide range of Courses to help individuals enhance their skills and knowledge in various fields. Our platform provides a convenient and flexible way to access high-quality educational content from anywhere.",
    ],
    [
      "How do I sign up for Courses on Kre8ly?",
      "Signing up for Courses on Kre8ly is easy. Simply purchase a Course and we will handle the rest. You will be given access to our LMS portal before the batch starts, by email.",
    ],
    [
      "Are the Courses on Kre8ly self-paced?",
      "Yes, most of the Courses on Kre8ly are self-paced. This means you can learn at your own convenience and set your own study schedule. You can access the Course materials and lectures whenever it suits you best.",
    ],
    [
      "Do Kre8ly Courses come with a certificate?",
      "Yes, many of our Courses offer certificates of completion that you can showcase on your resume or share on your professional profiles. Certificates demonstrate your dedication to continuous learning and can enhance your career prospects.",
    ],
    [
      "How can I interact with instructors and other learners?",
      "Kre8ly provides a platform for interaction between instructors and learners. You can participate in discussion forums, ask questions, and engage in conversations with both the instructors and fellow learners to enhance your understanding of the Course material.",
    ],
    [
      "Is technical support available if I encounter any issues?",
      "Absolutely. Our dedicated support team is available to assist you with any technical issues or queries you may have. You can reach out to us via email at info@kre8ly.com or through our customer support portal.",
    ],
    [
      "Can I access the Course materials on mobile devices?",
      "Yes, our platform is designed to be mobile-responsive. You can access your Courses and learning materials on various devices, including smartphones and tablets, making it convenient to learn on the go.",
    ],
    [
      "What happens if I need to pause my studies or take a break?",
      "Kre8ly understands that life can get busy. You can pause your studies and pick up where you left off whenever you're ready. Your progress will be saved, and you can resume learning at your own pace.",
    ],
    [
      "Is there a refund policy in case I'm not satisfied with a Course?",
      "Kre8ly's refund policy varies based on the specific Course and circumstances. Please refer to our Cancellation and Refund Policy for detailed information. If you have concerns about a Course, you can reach out to our support team to discuss your options.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const courseRating = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Kre8ly - Top Online Courses Platform & Training",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "2573",
    bestRating: "5",
    worstRating: "1",
  },
};

export const HOME_SCHEMA = [professionalService, faqPage, courseRating];