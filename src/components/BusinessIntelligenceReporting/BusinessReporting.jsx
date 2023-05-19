import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import Slider from "../BusinessIntelligenceReporting/Slider";
import SeoTag from "../seo/SeoTag";
import GetCostomized from "../BusinessIntelligenceReporting/GetCustomized";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import BusinessSolution from "../BusinessIntelligenceReporting/BusinessSolution";
import ChooseProducts from "../BusinessIntelligenceReporting/ChooseProducts";

const BusinessReporting = () => {
  return (
    <div>
      <Header />
      <SeoTag page_id={15} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <GetCostomized />
        <BusinessSolution />
        <ClientAboutUs />
        <ChooseProducts />
      </div>
      <Footer />
    </div>
  );
};

export default BusinessReporting;
