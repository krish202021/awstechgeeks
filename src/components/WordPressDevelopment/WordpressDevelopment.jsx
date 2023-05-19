import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import CustomizedWeb from "../WordPressDevelopment/CustomizedWeb";
import BusinessSolution from "./BusinessSolution";
// import ClientSayAboutUs from './ClientSayAboutUs'
import Pricing from "./Pricing";
import Slider from "./Slider";
import SeoTag from "../seo/SeoTag";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function WordpressDevelopment() {
  return (
    <div>
      <Header />
      <SeoTag page_id={22} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <CustomizedWeb />
        <BusinessSolution />
        {/* <ClientSayAboutUs /> */}
        <ClientAboutUs />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default WordpressDevelopment;
