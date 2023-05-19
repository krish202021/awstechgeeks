import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import BusinessSolution from "./BusinessSolution";
// import ClientSayAboutUs from "./ClientSayAboutUs";
import CustomizedWeb from "./CustomizedWeb";
import OurPlans from "./OurPlans";
import Slider from "./Slider";
import SeoTag from "../seo/SeoTag";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function WebsiteMaintanence() {
  return (
    <div>
      <Header />
      <SeoTag page_id={21} />
      <div className="content-wrapper website-service-page">
        <Slider />
        <CustomizedWeb />
        <BusinessSolution />
        <ClientAboutUs />
        <OurPlans />
      </div>
      <Footer />
    </div>
  );
}

export default WebsiteMaintanence;
