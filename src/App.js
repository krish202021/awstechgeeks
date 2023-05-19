import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "./components/About/Index";
import EcommercePortfolio from "./components/EcommercePortfolio/EcommercePortfolio";
import Contact from "./components/ContactUs/Contact";
import Home from "./components/Home/Home";
import { WhyUs } from "./components/WhyUs";
import HireReact from "./components/Hire/HireReactjs/HireReact";
import MobileApp from "./components/MobileAppService/MobileApp";
import mobleappportfolio from "./components/MobileAppPortfolio";
import WebPortfolio from "./components/WebsitePortfolio/WebPortfolio";
import DigitalMarketing from "./components/DigitalMarketingPortfolio/DigitalMarketing";
import GraphicsDesign from "./components/GraphicsDesignService/GraphicsDesign";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import CaseDetail from "./components/CaseDetail/CaseDetail";
import HireLaravel from "./components/Hire/HireLaravel/HireLaravel";
import HireNode from "./components/Hire/HireNode/HireNode";
import HirePhp from "./components/Hire/HirePhp/HirePhp";
import HireReactNative from "./components/Hire/HireReactNative/HireReactNative";
import HireUiUXDesigner from "./components/Hire/HireUiUxDesigner/HireUiUxDesigner";
import HireWordPress from "./components/Hire/HireWordPress/HireWordPress";
// import MagnetoDevelopment from "./components/MagnetoDevelopment/MagnetoDevelopment";
import WebAppDEvelopment from "./components/WebAppDevelopment/WebAppDEvelopment";
import WebAppPortfolio from "./components/WebAppPortfolio/WebAppPortfolio";
// import WebAppService from "./components/WebAppService/WebAppService";
// import WebsiteMaintanence from "./components/WebsiteMaintainence&sequrity/WebsiteMaintanence";
// import WordpressDevelopment from "./components/WordPressDevelopment/WordpressDevelopment";
import DigitalArtClub from "./components/SuccesStory/DIGITAL ART CLUB/DigitalArtClub";
import EcommerceCompleteSolution from "./components/SuccesStory/E-COMMERCE COMPLETE SOLUTION/EcommerceCompleteSolution";
import ServedMore from "./components/SuccesStory/SERVED MORE/ServedMore";
import ServiceProviderApp from "./components/SuccesStory/SERVICE PROVIDER APP/ServiceProviderApp";

import Popup from "./components/Popup/Popup";
import Ourachievment from "./components/Ourachievment";
import CategoryBlog from "./components/Blog/CategoryBlog";
import Career from "./components/Career";
import ImagePop from "./components/ImagePop";
import WorkPortfolio from "./components/WorkPortfolio";
import NoPageFound from "./components/404_page";
import PravicyPolicy from "./components/pravicy/PravicyPolicy";
//import SalesforceCRM from "./components/SalesForceCRMDevelopment/SalesforceCRM";
import SalesforceCRM from "./components/SalesforceCRMDevelopment/SalesforceCRM"
import CustomizedCRMDevelopment from "./components/CustomizedCRMDevelopment/CustomizedCRMDevelopment";
import BusinessReporting from "./components/BusinessIntelligenceReporting/BusinessReporting";
import FullCycleProduct from "./components/FullCycleProductDevelopment/FullCycleProduct";
import ECommerceWebsiteMobileApp from "./components/E-CommerceWebsiteMobileAppDevelopment/E-CommerceWebsiteMobileApp";
import ProgressiveWebApp from "./components/ProgressiveWebAppDevelopment/ProgressiveWebApp";
import DigitslMarketing from "./components/DigitalMarketing/DigitalMarketing";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/company" exact component={Index} />
          <Route
            path="/ecommerce-portfolio"
            exact
            component={EcommercePortfolio}
          />
          <Route path="/contact" exact component={Contact} />
          <Route path="/why-us" exact component={WhyUs} />
          <Route path="/hire-react" exact component={HireReact} />
          <Route path="/website-portfolio" exact component={WebPortfolio} />
          <Route path="/mobile-app" exact component={MobileApp} />
          {/* <Route path="/digital-marketing" exact component={DigitalMarketing} /> */}
          <Route path="/blog" exact component={Blog} />

          <Route path="/blog-detail/:id" component={BlogDetail} />
          <Route path="/category-blog/:id" component={CategoryBlog} />
          <Route
            path="/mobile-app-portfolio"
            exact
            component={mobleappportfolio}
          />
          <Route path="/case-detail" exact component={CaseDetail} />
          <Route path="/hire-laravel" exact component={HireLaravel} />
          <Route path="/hire-node" exact component={HireNode} />
          <Route path="/hire-php" exact component={HirePhp} />
          <Route path="/hire-reactnative" exact component={HireReactNative} />
          <Route
            path="/hire-ui-ux-designer"
            exact
            component={HireUiUXDesigner}
          />
          <Route path="/hire-wordPress" exact component={HireWordPress} />
          {/* <Route
            path="/magneto-development"
            exact
            component={MagnetoDevelopment}
          /> */}
          <Route path="/web-app-portfolio" exact component={WebAppPortfolio} />
          {/* <Route path="/web-app-service" exact component={WebAppService} /> */}
          <Route
            path="/web-app-development"
            exact
            component={WebAppDEvelopment}
          />

          <Route path="/digital-marketing" component={DigitslMarketing} />
          {/* <Route
            path="/website-maintanence"
            exact
            component={WebsiteMaintanence}
          /> */}
          {/* <Route
            path="/wordpress-development"
            exact
            component={WordpressDevelopment}
          /> */}
          <Route path="/popup" exact component={Popup} />
          <Route path="/digital-art-club" component={DigitalArtClub} />
          <Route
            path="/ecommerce-complete-solution"
            component={EcommerceCompleteSolution}
          />
          <Route path="/graphic-design" component={GraphicsDesign} />
          <Route path="/served-more" component={ServedMore} />
          <Route path="/service-provider-app" component={ServiceProviderApp} />
          <Route path="/our-achievment" exact component={Ourachievment} />
          <Route path="/career" exact component={Career} />
          <Route path="/imagepop" component={ImagePop} />
          <Route path="/work-portfolio" component={WorkPortfolio} />
          <Route path="/404_page" component={NoPageFound} />
          <Route path="/pravicy-policy" component={PravicyPolicy} />
          <Route path="/sale-force-crm" component={SalesforceCRM} />
          <Route
            path="/customized-crm-development"
            exact
            component={CustomizedCRMDevelopment}
          />

          <Route
            path="/business-intelligence-reporting"
            component={BusinessReporting}
          />
          <Route
            path="/full-cycle-product-development"
            component={FullCycleProduct}
          />
          <Route
            path="/ecommerce-solution"
            component={ECommerceWebsiteMobileApp}
          />
          <Route path="/progressive-web-app" component={ProgressiveWebApp} />
        </switch>
      </BrowserRouter>
    </>
  );
}

export default App;
