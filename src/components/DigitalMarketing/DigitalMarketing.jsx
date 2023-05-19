import React from "react";
import Header from "../../includes/Header";
import Footer from "../../includes/Footer";
import Slider from "../DigitalMarketing/Slider";
import SeoTag from "../seo/SeoTag";
import GetCostomizedWeb from "../DigitalMarketing/GetCostomizedWeb";
import BusinessSolution from "../DigitalMarketing/BusinessSolution ";
import PromoBlock from "../DigitalMarketing/PromoBlock";

const DigitslMarketing = () => {
  return (
    <div>
      <Header />
      <SeoTag page_id={15} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <GetCostomizedWeb />
        <BusinessSolution />
        <PromoBlock />
      </div>
      <Footer />
    </div>
  );
};

export default DigitslMarketing;
