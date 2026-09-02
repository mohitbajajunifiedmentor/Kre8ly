import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const HeaderImg = "/assets/Subscription/Header.png";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";

const Subscription = () => {
  return (
    <>
      <Helmet>
        <title>Kre8ly | Subscription</title>
        <meta name="description" content="Kre8ly | Subscription" />
        <meta name="keywords" content="Kre8ly | Subscription" />
        <meta name="author" content="Kre8ly | Subscription" />
      </Helmet>
      
      <div className="h-full flex items-center justify-center font-Poppins flex-col">
        <header className="w-full h-full flex items-center justify-center mx-auto">
          <figure className="relative w-full h-full">
            <img
              src={HeaderImg}
              alt="Header Image"
              className="w-full h-auto object-cover"
            />
            <figcaption className="absolute inset-0 flex items-center justify-center flex-col gap-2 md:gap-10 top-1/2 transform -translate-y-1/2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center">
                Start Here, Succeed Anywhere!
              </h1>
              <h2 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white text-center">
                Affordable Pricing for Quality Courses
              </h2>
            </figcaption>
          </figure>
        </header>
        <main className="w-full h-full container mx-auto flex flex-col items-center justify-center text-center gap-20  p-4">
          <section className="w-full h-full">
            <h2 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-primary text-center">
              Compare our Web development Course and <br /> find the right one
              for you
            </h2>
          </section>
          <Query />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
