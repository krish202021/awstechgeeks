import React from "react";
import Header from "../../includes/Header";
import SeoTag from "../seo/SeoTag";
import Slider from "../CustomizedCRMDevelopment/Slider";
import GetCostomizedWeb from "../CustomizedCRMDevelopment/GetCostomizedWeb";
import BusinessSolution from "../CustomizedCRMDevelopment/BusinessSolution";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import ChooseProducts from "../CustomizedCRMDevelopment/ChooseProducts";
import Footer from "../../includes/Footer";

const CustomizedCRMDevelopment = () => {
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

export default CustomizedCRMDevelopment;
