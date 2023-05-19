import React from 'react';
import Accordion from './Accordion';

const UiUxAccordion = () => {
  const accordionData = [
    {
      title: 'Seamless, Consistent, Easy to Understand',
      content: `	A good UI/UX should be consistent and easy to understand, it's all about user experience in the most seamless manner.
										`
    },
    {
      title: 'UI vs UX Confusion, What is it?',
      content: `	UI is basically the screens, buttons, icons, toggles and other visual elements that we interact with when using a website or a mobile app. 
         UX refers to the entire interaction and the user experience that we get while using a website, app or the product(Slow speed, too many clicks and navigations etc.).
								`
    },
    {
      title: 'Desirable User Experience',
      content: `Images, identity, brand, and other design elements should be used in such a way that evoke emotion and appreciation.
								`
    },
        {
      title: 'Light-weight, Fast rendering, Follow Standards, Aesthetic and minimalist design',
      content: `A good UX means fast rendering website or mobile app with an easy to navigate user experience. The website/app should use the minimal design pattern by following the standard design format.
							
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

export default UiUxAccordion;