import React from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import Infobox from "./Infobox";
import PricingTable from "./PricingTable";
import PromoBlock from "./PromoBlock";
import PromoEZshopit from "./PromoEZshopit";
import Slider from "./Slider";
// import Testimonial from './Testimonial'
import SeoTag from "../seo/SeoTag";
import ClientAboutUs from "../WebAppService/ClientAboutUs";

function MobileApp() {
  return (
    <div className="content-wrapper">
      <Header />
      <SeoTag page_id={17} />
      <Slider />
      <Infobox />
      {/* <PromoBlock /> */}
      <ClientAboutUs />
      <PricingTable />
      <PromoEZshopit />
      <Footer />
    </div>
  );
}

export default MobileApp;
