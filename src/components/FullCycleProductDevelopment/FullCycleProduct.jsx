import React from "react";
import Header from "../../includes/Header";
import SeoTag from "../seo/SeoTag";
import Slider from "../FullCycleProductDevelopment/Slider";
import GetCostomizedWeb from "../FullCycleProductDevelopment/GetCostomizedWeb";
import BusinessSolution from "../FullCycleProductDevelopment/BusinessSolution";
import ClientAboutUs from "../WebAppService/ClientAboutUs";
import ChooseProducts from "../FullCycleProductDevelopment/ChooseProducts";
import Footer from "../../includes/Footer";

const FullCycleProduct = () => {
  return (
    <div>
      <Header />
      {/* <SeoTag page_id={15} /> */}
      <div class="content-wrapper website-service-page full_cycle_dvl_page">
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

export default FullCycleProduct;
