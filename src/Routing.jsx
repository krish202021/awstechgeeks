import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Index from "./components/About/Index";
import LetsConnect from "./components/EcommercePortfolio/LetsConnect";
import Contact from "./components/ContactUs/Contact"
import Home from "./components/Home/Home";
import { WhyUs } from "./components/WhyUs";
import HireReact from "./components/Hire/HireReactjs/HireReact";
import MobileApp from "./components/MobileAppService/MobileApp";
import mobleappportfolio from "./components/MobileAppPortfolio";
import WebPortfolio from "./components/WebsitePortfolio/WebPortfolio";
import DigitalMarketing from "./components/DigitalMarketingPortfolio/DigitalMarketing";
import EcommerceSolution from "./components/EcommerceSolution/EcommerceSolution";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import CaseDetail from "./components/CaseDetail/CaseDetail";
import HireLaravel from "./components/Hire/HireLaravel/HireLaravel";
import HireNode from "./components/Hire/HireNode/HireNode";
import HirePhp from "./components/Hire/HirePhp/HirePhp";
import HireReactNative from "./components/Hire/HireReactNative/HireReactNative";
import HireUiUXDesigner from "./components/Hire/HireUiUxDesigner/HireUiUxDesigner";
import HireWordPress from "./components/Hire/HireWordPress/HireWordPress";
import MagnetoDevelopment from "./components/MagnetoDevelopment/MagnetoDevelopment";
import WebAppDEvelopment from "./components/WebAppDevelopment/WebAppDEvelopment";
import WebAppPortfolio from "./components/WebAppPortfolio/WebAppPortfolio";
import WebAppService from "./components/WebAppService/WebAppService";
import WebsiteMaintanence from "./components/WebsiteMaintainence&sequrity/WebsiteMaintanence";
import WordpressDevelopment from "./components/WordPressDevelopment/WordpressDevelopment";
import DigitalArtClub from "./components/SuccesStory/DIGITAL ART CLUB/DigitalArtClub";
import EcommerceCompleteSolution from "./components/SuccesStory/E-COMMERCE COMPLETE SOLUTION/EcommerceCompleteSolution";
import ServedMore from "./components/SuccesStory/SERVED MORE/ServedMore";
import ServiceProviderApp from "./components/SuccesStory/SERVICE PROVIDER APP/ServiceProviderApp";

import Popup from "./components/Popup/Popup";
import Ourachievment from "./components/Ourachievment";
import SalesforceCRM from "./components/SalesforceCRMDevelopment/SalesforceCRM";

function Routing() {
  return (
    <>
      <BrowserRouter basename='/'>

        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/company' exact component={Index} />
          <Route path='/lets-connect' exact component={LetsConnect} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/why-us' exact component={WhyUs} />
          <Route path='/hire-react' exact component={HireReact} />
          <Route path='/website-portfolio' exact component={WebPortfolio} />
          <Route path='/mobile-app' exact component={MobileApp} />
          <Route path='/digital-marketing' exact component={DigitalMarketing} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/ecommerce-solution' exact component={EcommerceSolution} />
          <Route path='/blog-detail' component={BlogDetail} />
          <Route path='/mobile-app-portfolio' exact component={mobleappportfolio} />
          <Route path='/case-detail' exact component={CaseDetail} />
          <Route path='/hire-laravel' exact component={HireLaravel} />
          <Route path='/hire-node' exact component={HireNode} />
          <Route path='/hire-php' exact component={HirePhp} />
          <Route path='/hire-reactnative' exact component={HireReactNative} />
          <Route path='/hire-ui-ux-designer' exact component={HireUiUXDesigner} />
          <Route path='/hire-wordPress' exact component={HireWordPress} />
          <Route path='/magneto-development' exact component={MagnetoDevelopment} />
          <Route path='/web-app-portfolio' exact component={WebAppPortfolio} />
          <Route path='/web-app-service' exact component={WebAppService} />
          <Route path='/web-app-development' exact component={WebAppDEvelopment} />
          <Route path='/website-maintanence' exact component={WebsiteMaintanence} />
          <Route path='/wordpress-development' exact component={WordpressDevelopment} />
          <Route path='/popup' exact component={Popup} />
          <Route path='/digital-art-club' component={DigitalArtClub} />
          <Route path='/ecommerce-complete-solution' component={EcommerceCompleteSolution} />
          <Route path='/served-more' component={ServedMore} />
          <Route path='/service-provider-app' component={ServiceProviderApp} />

          <Route path='/our-achievment' exact component={Ourachievment} />
          <Route path='/sale-force-crm' exact component={SalesforceCRM} />


        </switch>
      </BrowserRouter>
    </>
  );
}

export default Routing;
