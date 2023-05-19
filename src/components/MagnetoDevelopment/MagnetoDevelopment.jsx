import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import ChooseProducts from "./ChooseProducts";
// import ClientSayAboutUs from './ClientSayAboutUs'
import CustomizedWebSolution from "./CustomizedWebSolution";
import OurBusinessSolution from "./OurBusinessSolution";
import Slider from "./Slider";
import SeoTag from "../seo/SeoTag";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function MagnetoDevelopment() {
  return (
    <div>
      <Header />
      <SeoTag page_id={20} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <CustomizedWebSolution />
        <OurBusinessSolution />

        <ClientAboutUs />
        <ChooseProducts />
      </div>
      <Footer />
    </div>
  );
}

export default MagnetoDevelopment;
