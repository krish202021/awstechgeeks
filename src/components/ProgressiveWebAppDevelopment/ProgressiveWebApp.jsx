import React from "react";
import Header from "../../includes/Header";
import SeoTag from "../seo/SeoTag";
import Slider from "../ProgressiveWebAppDevelopment/Slider";
import GetCostomizedWeb from "../ProgressiveWebAppDevelopment/GetCostomizedWeb";
import BusinessSolution from "../ProgressiveWebAppDevelopment/BusinessSolution";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import ChooseProducts from "../ProgressiveWebAppDevelopment/ChooseProducts";
import Footer from "../../includes/Footer";

const ProgressiveWebApp = () => {
  return (
    <div>
      <Header />
      {/* <SeoTag page_id={15} /> */}
      <div class="content-wrapper website-service-page full_cycle_dvl_page e-commerce-website-mobileapp_page">
        <Slider />
        <GetCostomizedWeb />
        <BusinessSolution />
        {/* <ClientAboutUs /> */}
        <ChooseProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProgressiveWebApp;
