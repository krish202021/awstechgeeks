import React from 'react';
import Accordion from './Accordion';

const HomeAccordion = () => {
  const accordionData = [
    {
      title: 'Easy To Start, Less Obligations!',
      content: `		We have less obligations, paper-work and believe more in adequate requirement gathering. An unclear requirement is the reason for a later conflicts. We take care of everything whether it is creating scope, timeline, budget, work plan or a successful deployment.
							 `
    },
    {
      title: 'Save More Money without any Compromise in Product Quality',
      content: `We offer the best possible price that is a win-win for both. To sustain and have growth, every business need to make profits but we never over-quote. At the same time, we don't compromise with the quality of work.
									`
    },
    {
      title: 'Our response is fast, direct, and reliable, assuring you of a stress-free process.',
      content: `We have an in-house team of expert developers, designers, leads and managers. We are open to be contacted on Skype, Google Meetings, WhatsApp and through a direct Phone call. So, reaching to us is fast, direct and easy. 
						`
    },
        {
      title: 'Time Zone Difference is more of an Advantage',
      content: `	With more than 10 hours time difference, Our Customers living is USA, Canada discuss their requirement with our team before going to bed and check back the status in their morning time.
							
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

export default HomeAccordion;