import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { WhyUs } from "./components/WhyUs";
const Index = React.lazy(()=> import("./components/About/Index"));
const LetsConnect = React.lazy(()=> import("./components/EcommercePortfolio/LetsConnect"));
const Contact = React.lazy(()=> import("./components/ContactUs/Contact"))
const Home = React.lazy(()=> import("./components/Home/Home"));
// const WhyUs  = React.lazy(()=> import("./components/WhyUs"));
const HireReact = React.lazy(()=> import("./components/Hire/HireReactjs/HireReact"));
const MobileApp = React.lazy(()=> import("./components/MobileAppService/MobileApp"));
const mobleappportfolio = React.lazy(()=> import("./components/MobileAppPortfolio"));
const WebPortfolio = React.lazy(()=> import("./components/WebsitePortfolio/WebPortfolio"));
const DigitalMarketing = React.lazy(()=> import("./components/DigitalMarketingPortfolio/DigitalMarketing"));
const EcommerceSolution = React.lazy(()=> import("./components/EcommerceSolution/EcommerceSolution"));
const Blog = React.lazy(()=> import("./components/Blog/Blog"));
const BlogDetail = React.lazy(()=> import("./components/BlogDetail/BlogDetail"));
const CaseDetail = React.lazy(()=> import("./components/CaseDetail/CaseDetail"));
const HireLaravel = React.lazy(()=> import("./components/Hire/HireLaravel/HireLaravel"));
const HireNode = React.lazy(()=> import("./components/Hire/HireNode/HireNode"));
const HirePhp = React.lazy(()=> import("./components/Hire/HirePhp/HirePhp"));
const HireReactNative = React.lazy(()=> import("./components/Hire/HireReactNative/HireReactNative"));
const HireUiUXDesigner = React.lazy(()=> import("./components/Hire/HireUiUxDesigner/HireUiUxDesigner"));
const HireWordPress = React.lazy(()=> import("./components/Hire/HireWordPress/HireWordPress"));
const MagnetoDevelopment = React.lazy(()=> import("./components/MagnetoDevelopment/MagnetoDevelopment"));
const WebAppDEvelopment = React.lazy(()=> import("./components/WebAppDevelopment/WebAppDEvelopment"));
const WebAppPortfolio = React.lazy(()=> import("./components/WebAppPortfolio/WebAppPortfolio"));
const WebAppService = React.lazy(()=> import("./components/WebAppService/WebAppService"));
const WebsiteMaintanence = React.lazy(()=> import("./components/WebsiteMaintainence&sequrity/WebsiteMaintanence"));
const WordpressDevelopment = React.lazy(()=> import("./components/WordPressDevelopment/WordpressDevelopment"));

const Popup = React.lazy(()=> import("./components/Popup/Popup"));
const Ourachievment = React.lazy(()=> import("./components/Ourachievment"));


function Routing1() {
  return (
    <>
      <BrowserRouter>
       
        <switch>

          <React.Suspense fallback={<p>Loading</p>}>
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
          <Route path='/blog-detail' exact component={BlogDetail} />
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
 
             <Route path='/our-achievment' exact component={Ourachievment} />

           </React.Suspense>
        </switch>
      </BrowserRouter>
    </>
  );
}

export default Routing1;
