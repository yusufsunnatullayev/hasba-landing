import Ads from "@/components/elements/ads";
import Banner from "@/components/elements/banner";
import Faq from "@/components/elements/faq";
import Footer from "@/components/elements/footer";
import Hero from "@/components/elements/hero";
import ProblemSolution from "@/components/elements/problem-solution";
import Reviews from "@/components/elements/reviews";
import Services from "@/components/elements/services";
import WhyHasba from "@/components/elements/why_hasba";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyHasba />
      {/* <Reviews /> */}
      <Faq />
      <Banner />
      <Ads />
      <Footer />
    </div>
  );
};

export default Home;
