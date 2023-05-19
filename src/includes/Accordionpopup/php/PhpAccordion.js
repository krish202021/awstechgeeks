import React from 'react';
import Accordion from './Accordion';

const PhpAccordion = () => {
  const accordionData = [
    {
      title: 'PHP or Codeigniter is free to use Open-Source Language',
      content: `		PHP or any of it's framework is completely free to download and get your project started immediately.
									`
    },
    {
      title: 'PHP is more than 25 years old while Codeigniter is being used for 16 years now!',
      content: `The stability of PHP language can be understood with how long this langauge is being used for developing web applications. Codeigniter is one of the favorite web framework for most of the start-ups and small Businesses.
									`
    },
    {
      title: ' Affordable and Cost-Effective, so it is a favorite langauge of Tech-based Start-ups',
      content: `As a new Business, we don't need everything at once and want to check whether our Business idea has a market feasibility. So, it's better to spend less in the beginning. Getting Projects done in PHP/Codeigniter takes less cost than Java, Dot Net or Node/React.
									`
    },
        {
      title: 'Easy to start a Web application, Less Overheads',
      content: `PHP or Codeigniter Framework doesn't come with a lots of overheads. It's easy to install and configure. 
													
								`
    },
        {
      title: 'Has a Huge Forum Support all over the Internet',
      content: `PHP is no more a new technology. More than 75% websites uses PHP, it's CMS or framework. So, there is also a large pool of people discussing any error, issues or upgrades that is there. 
											
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

export default PhpAccordion;