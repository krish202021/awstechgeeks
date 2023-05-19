import React from "react";
import Header from "../../includes/Header";
import Slider from "../WebAppDevelopment/Slider";
import GetCostomizedWeb from "../WebAppDevelopment/GetCostomizedWeb";
import BusinessSolution from "../WebAppDevelopment/BusinessSolution";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import ChooseProducts from "../WebAppDevelopment/ChooseProducts";
import Footer from "../../includes/Footer";
import SeoTag from "../seo/SeoTag";

const GraphicsDesign = () => {
  return (
    <div>
      <Header />
      <SeoTag page_id={15} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <GetCostomizedWeb />
        <BusinessSolution />
        <ClientAboutUs />
        <ChooseProducts />
      </div>
      <Footer />
    </div>
  );
};

export default GraphicsDesign;
