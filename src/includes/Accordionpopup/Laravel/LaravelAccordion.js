import React from 'react';
import Accordion from './Accordion';

const LaravelAccordion = () => {
  const accordionData = [
    {
      title: 'REST API Development',
      content: `		A Mobile App has 2 components i.e the UI part and the Back-end section. 
									Laravel Framework is used to develop the Back-end(API's) section of the Mobile Apps.
							`
    },
    {
      title: 'Achieve Business Automation through Customized Development as per your Business Needs',
      content: `Laravel Framework can be used to develop "A Customized Business Solution for all your Business Needs". Make your Business automated so that you dont have to involve much in your day-today operations.
								`
    },
    {
      title: 'E-Commerce Website Development',
      content: `E-Commerce websites with all set of features like Multi-language, multi-vendor, shopping cart, payment gateways, warehouse management,
									admin/delivery boy management etc. can be developed using Laravel Framework.
									`
    },
        {
      title: 'Web Portal Development',
      content: `Laravel Framework is also used to create Web Portals like Marriage portals, Educational portals, Job Portals etc.
												
								`
    },
        {
      title: 'Invoice Management',
      content: `System for sending Quotations, Invoices and managing Leads, Sales can be created using Laravel framework.
									This not only makes the work automated but also saves you a lot of time.
												
								`
    },
  ];

  return (
    <div>
   
        
      <div className="accordion">
        
        {accordionData.map(({ title, content }) => (
          
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default LaravelAccordion;