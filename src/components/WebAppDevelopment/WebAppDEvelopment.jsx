import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import BusinessSolution from "./BusinessSolution";
import ChooseProducts from "./ChooseProducts";
// import ClientSayAboutUs from './ClientSayAboutUs'
import GetCostomizedWeb from "./GetCostomizedWeb";
import Slider from "./Slider";
import SeoTag from "../seo/SeoTag";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function WebAppDEvelopment() {
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
}

export default WebAppDEvelopment;
