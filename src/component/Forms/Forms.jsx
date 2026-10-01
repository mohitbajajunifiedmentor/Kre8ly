import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import ApiRequest from "../../Utils/Axios/Axios";
import { useLocation } from "@/lib/router-compat";
import { useSelector } from "react-redux";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Compass, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Send,
  Loader2
} from "lucide-react";

const EmailImage = "/assets/Email-Popup.png";

const Forms = ({ setCloseForm, setShowCurriculum }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    domain: "",
    feedback: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    contact: "",
    domain: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [thanksPopUp, setThanksPopUp] = useState(false);
  const { pathname } = useLocation();

  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const curriculamUrls = [
    {
      name: "web-development",
      url: "https://drive.google.com/file/d/1a_nTxLmQpxU0rfrwkdQDP-ueo94hXCHZ/view?usp=sharing",
    },
    {
      name: "digital-marketing",
      url: "https://drive.google.com/file/d/1SGrE8FH6VqXf2r-59Z6eo6xKmXDDgAHT/view?usp=sharing",
    },
    {
      name: "data-science",
      url: "https://drive.google.com/file/d/1Z6zlU_ZVlxqDkKX2Gl-MIeqoDzBwdTNV/view?usp=sharing",
    },
    {
      name: "machine-learning",
      url: "https://drive.google.com/file/d/1mH2e_P7Wvb7-b7V026V13TiQMZT23Xzn/view?usp=sharing",
    },
  ];

  const validatePhone = (contact) => {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return regex.test(contact.trim());
  };

  const validateName = (name) => name.trim().length >= 3;
  const validateFeedback = (feedback) => feedback.trim().length >= 10;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "contact") {
      if (value && !validatePhone(value)) {
        setError((prev) => ({ ...prev, contact: "Please enter a valid phone number" }));
      } else {
        setError((prev) => ({ ...prev, contact: "" }));
      }
    }

    if (name === "name") {
      if (value && !validateName(value)) {
        setError((prev) => ({ ...prev, name: "Name must be at least 3 characters long" }));
      } else {
        setError((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "feedback") {
      if (value && !validateFeedback(value)) {
        setError((prev) => ({ ...prev, feedback: "Message must be at least 10 characters long" }));
      } else {
        setError((prev) => ({ ...prev, feedback: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      setError((prev) => ({ ...prev, name: "Name must be at least 3 characters long" }));
      return;
    }

    if (!validatePhone(formData.contact)) {
      setError((prev) => ({ ...prev, contact: "Please enter a valid phone number" }));
      return;
    }

    if (!formData.domain) {
      toast.error("Please select a domain track.");
      return;
    }

    if (!validateFeedback(formData.feedback)) {
      setError((prev) => ({ ...prev, feedback: "Message must be at least 10 characters long" }));
      return;
    }

    if (!consent) {
      toast.error("Kindly agree to receive communication to proceed.");
      return;
    }

    try {
      setLoading(true);
      const response = await ApiRequest.post("/user/create", formData, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Application submitted successfully!");
        if (setShowCurriculum) setShowCurriculum(true);

        if (pathname !== "/") {
          const selectedDomain = formData?.domain;
          const selectedLink = curriculamUrls.find((url) => url.name === selectedDomain)?.url;
          if (selectedLink) {
            const link = document.createElement("a");
            link.href = selectedLink;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.click();
          }
        }

        setFormData({
          name: "",
          email: "",
          contact: "",
          domain: "",
          feedback: "",
        });

        setThanksPopUp(true);
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(err?.response?.data?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {thanksPopUp ? (
          /* --- Success Screen --- */
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl w-full mx-auto p-6 sm:p-8 bg-surface rounded-3xl shadow-2xl border border-line relative text-center flex flex-col items-center justify-center min-h-[420px]"
          >
            <button
              onClick={() => {
                setThanksPopUp(false);
                setCloseForm(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-content-muted hover:text-content hover:bg-surface-variant/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-content tracking-tight mb-2">
              Application Received!
            </h2>

            <p className="text-sm sm:text-base text-content-secondary max-w-md mx-auto leading-relaxed mb-6">
              Thank you for showing interest in Kre8ly. Our career admissions team will review your profile and reach out within 24 business hours.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-bold shadow-md shadow-brand/25 transition-all"
              onClick={() => {
                setThanksPopUp(false);
                setCloseForm(false);
              }}
            >
              Back to Programs
            </motion.button>
          </motion.div>
        ) : (
          /* --- Application Form Modal --- */
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col md:flex-row bg-surface w-full max-w-4xl mx-auto rounded-3xl shadow-2xl border border-line overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setCloseForm(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full text-content-muted hover:text-content hover:bg-surface-variant/50 transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Modern Program Value Card */}
            <div className="hidden md:flex flex-col justify-between w-5/12 bg-gradient-to-br from-brand/10 via-brand/5 to-surface p-8 border-r border-line relative overflow-hidden">
              {/* Background ambient orbs */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/10 text-brand text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions Open</span>
                </div>

                <h3 className="text-2xl font-black text-content tracking-tight leading-snug">
                  Fast-Track Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                    Tech Career
                  </span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
                  Join our project-based training programs and build industry-grade projects under dedicated mentorship.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-content">1-on-1 Guidance</h4>
                      <p className="text-[11px] text-content-muted">Personalized feedback from real tech leads.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-brand/10 text-brand mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-content">LMS Curriculum Access</h4>
                      <p className="text-[11px] text-content-muted">Instant roadmap and assignment workspace.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-content">Placement Support</h4>
                      <p className="text-[11px] text-content-muted">Resume audits, portfolio prep & referrals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-line/60">
                <span className="block text-[11px] text-content-muted font-medium">
                  Trusted by 10,000+ ambitious learners across top universities.
                </span>
              </div>
            </div>

            {/* Right Side: Form Inputs */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-center bg-surface relative z-10"
            >
              <div className="mb-5 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-content tracking-tight">
                  Apply for a Program
                </h2>
                <p className="text-xs sm:text-sm text-content-secondary mt-1">
                  Fill in your details below to request a callback & curriculum preview.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Full Name */}
                <div>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 absolute left-3.5 text-content-muted" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-line bg-surface/50 text-xs sm:text-sm text-content placeholder:text-content-muted focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all"
                    />
                  </div>
                  {error.name && <p className="text-[11px] text-error mt-1 pl-1">{error.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 absolute left-3.5 text-content-muted" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address (e.g. name@domain.com)"
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-line bg-surface/50 text-xs sm:text-sm text-content placeholder:text-content-muted focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all"
                    />
                  </div>
                  {error.email && <p className="text-[11px] text-error mt-1 pl-1">{error.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <div className="relative flex items-center">
                    <Phone className="w-4 h-4 absolute left-3.5 text-content-muted" />
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact number (with country code)"
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-line bg-surface/50 text-xs sm:text-sm text-content placeholder:text-content-muted focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all"
                    />
                  </div>
                  {error.contact && <p className="text-[11px] text-error mt-1 pl-1">{error.contact}</p>}
                </div>

                {/* Track Selection */}
                <div className="relative flex items-center">
                  <Compass className="w-4 h-4 absolute left-3.5 text-content-muted pointer-events-none" />
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-line bg-surface/50 text-xs sm:text-sm text-content focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-content-muted">
                      Select Target Domain
                    </option>
                    <option value="web-development">Full Stack Web Development</option>
                    <option value="data-science">Data Science & AI</option>
                    <option value="digital-marketing">Digital Marketing & Growth</option>
                    <option value="machine-learning">Machine Learning & Neural Nets</option>
                    <option value="ui-ux-design">UI/UX Product Design</option>
                    <option value="graphic-design">Graphic & Brand Design</option>
                  </select>
                </div>

                {/* Query / Feedback Message */}
                <div>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3.5 top-3 text-content-muted" />
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share your goals or any questions you have..."
                      required
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-line bg-surface/50 text-xs sm:text-sm text-content placeholder:text-content-muted focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all resize-none"
                    />
                  </div>
                  {error.feedback && <p className="text-[11px] text-error mt-1 pl-1">{error.feedback}</p>}
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={() => setConsent(!consent)}
                    className="h-4 w-4 mt-0.5 rounded border-line text-brand focus:ring-brand cursor-pointer"
                    required
                  />
                  <label htmlFor="consent" className="text-[11px] text-content-secondary leading-snug cursor-pointer select-none">
                    I agree to receive communications regarding program admissions and scheduling via WhatsApp, SMS, and email.
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-brand/20 transition-all disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Callback & Syllabus</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Forms;