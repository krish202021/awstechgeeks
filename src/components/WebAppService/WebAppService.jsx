import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import ClientAboutUs from "./ClientAboutUs";
import CustomizedWeb from "./CustomizedWeb";
import OurPlan from "./OurPlan";
import ServicePrice from "./ServicePrice";
import Slider from "./Slider";
import SeoTag from "../seo/SeoTag";

function WebAppService() {
  return (
    <div>
      <Header />
      <SeoTag page_id={16} />
      <div class="content-wrapper website-service-page">
        <Slider />
        <CustomizedWeb />
        <ServicePrice />
        <ClientAboutUs />
        <OurPlan />
      </div>
      <Footer />
    </div>
  );
}

export default WebAppService;
