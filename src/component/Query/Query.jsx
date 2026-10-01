const QueryIcon = "/assets/QueryIcon.png";
import { Link } from "@/lib/router-compat";
const QueryMaam = "/assets/QueryMaam2.webp";
const Whatsapp = "/assets/Whatsapp.png";
const whatsapplight = "/assets/whatspplight.svg";
import { IoMdCall } from "react-icons/io";
const Query = ({ darkMode }) => {
  return (
    <div className="relative hidden md:block">
      {/* The bottom-right query launcher is fully commented out, but the empty
          wrapper was still rendering — a 16px `cursor-pointer` box with a
          tooltip title, sitting underneath the chat launcher and eating clicks
          in that corner. Removed; restore the whole block together if the
          launcher comes back. See src/component/ui/floating-stack.js for the
          slots that corner is divided into. */}
      <div
        className="fixed bottom-24 left-2 md:left-5 p-2 cursor-pointer z-50"
        title="Have a query? Click here!"
      >
        <Link
          // to="https://api.whatsapp.com/send?phone=9108645322947"
          to="https://api.whatsapp.com/send?phone=09518856261"

          target="_blank"
          className="group relative"
        >
          <figure className="w-full h-full bg-surface rounded-full flex items-center justify-end hover:bg-surface-sunken hover:scale-110   transition-all relative">

            <img
              src={Whatsapp}
              alt="Whatsapp Icon"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
          </figure>
          <div className="absolute bottom-full left-8 mb-2 w-[10rem] md:w-[15rem] text-sm md:text-base text-content bg-surface p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ">
            Have a Query? Lets Talk!
          </div>
        </Link>
      </div>
      <div
        className="fixed bottom-5 left-2 md:left-5 p-2 cursor-pointer z-50"
        title="Wanna Talk? Click here!"
      >
        {/* <Link to="tel:08645322947" className="group relative"> */}
        <Link to="tel:09518856261" className="group relative">
          <figure className="w-full h-full bg-gradient-to-t from-[#1D2B45] to-[#486BAB] dark:bg-custom-gradient rounded-full flex items-center justify-end hover:bg-surface-sunken hover:scale-110   transition-all relative p-2">
            {darkMode ? <IoMdCall className="text-[1.5rem] md:text-[2rem] text-white" /> : <IoMdCall className="text-[1.5rem] md:text-[2rem] text-white" />}
            {/* Green dot */}
            <span className="absolute top-0 left-0 w-3 h-3 bg-success rounded-full"></span>
          </figure>

          {/* Tooltip */}
          <div className="absolute bottom-full left-10 mb-2 w-[15rem] text-base text-content bg-surface p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-left">
            Have doubts? Our support team will be happy to assist you!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Query;