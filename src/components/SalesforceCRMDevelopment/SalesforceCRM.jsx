import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import BusinessSolution from "./BusinessSolution";
import GetCostomizedWeb from "./GetCostomizedWeb";
import Slider from "./Slider";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function SalesforceCRM() {
  return (
    <div className="content-wrapper">
      <Header />
      <div class="content-wrapper website-service-page">
        <Slider />
        <GetCostomizedWeb />
        <BusinessSolution />
        <ClientAboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default SalesforceCRM;