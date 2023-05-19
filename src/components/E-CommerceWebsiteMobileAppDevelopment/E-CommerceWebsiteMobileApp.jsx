import React from "react";
import Header from "../../includes/Header";
import SeoTag from "../seo/SeoTag";
import Slider from "../E-CommerceWebsiteMobileAppDevelopment/Slider";
import GetCostomizedWeb from "../E-CommerceWebsiteMobileAppDevelopment/GetCostomizedWeb";
import BusinessSolution from "../E-CommerceWebsiteMobileAppDevelopment/BusinessSolution";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import ChooseProducts from "../E-CommerceWebsiteMobileAppDevelopment/ChooseProducts";
import Footer from "../../includes/Footer";

const ECommerceWebsiteMobileApp = () => {
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

export default ECommerceWebsiteMobileApp;
