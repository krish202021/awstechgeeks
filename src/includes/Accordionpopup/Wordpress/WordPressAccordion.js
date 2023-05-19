import React from 'react';
import Accordion from './Accordion';

const WordPressAccordion = () => {
  const accordionData = [
    {
      title: 'Suitable for simple business, personal or e-commerce websites',
      content: `	Wordpress is an Open-source CMS which is used to create blogs, business websites, personal websites, simple e-commerce stores.
								`
    },
    {
      title: 'Wordpress is highly SEO-Friendly',
      content: `	Wordpress supports SEO to a great extent with the help of some of it's free and premiuym plugins. It's very easy for an SEO professional to manage the Organic SEO on Wordpress websites.	`
    },
    {
      title: 'Highly Flexible',
      content: `Wordpress websites can be very simple or it can be developed to a complex website. The wordpress extensions like plugins and widgets gives it a great flexibility to build any type of website.
									`
    },
        {
      title: 'Affordable',
      content: `Wordpress is free to download and get started without paying anything. But if you are looking to extend the features, then by spending a little price on development cost, you will get the added benefits that worth the price.
							
								`
    },
        {
      title: 'Multi-lingual',
      content: `Although 71% of the Websites are built in English language, Wordpress supports more than 160 languages world-wide.
						
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

export default WordPressAccordion;