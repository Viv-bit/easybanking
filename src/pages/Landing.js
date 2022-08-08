import React from "react";
import Article from "../components/Article";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>
      <Header />

      <Hero />

      <Reason />

      <Article />

      <Footer />
    </div>
  );
}
