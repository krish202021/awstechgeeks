import React from 'react';
import Accordion from './Accordion';

const ReactNativeAccordion = () => {
  const accordionData = [
    {
      title: 'An open-source Facebook library',
      content: `	React Native is an open-source Facebook library. Even Facebook messenger that we use in day today life is built in React Native. 
									So, we have all reasons to trust this framework. `
    },
    {
      title: 'One of the fastest-evolving and trending technology.',
      content: `ReactJS is 5th in Trending on GitHub with over 152,000 stars. There are more than 1400 open-source contributors working with the library.
								`
    },
    {
      title: 'Cost Effective / Affordable',
      content: `Building an Android and IPhone app using Native Technology requires separate programmers.
									However, using just one Technology i.e React Native, we build both Android and IPhone application, saving a 
									lot of money and making the App more affordable by maintaining the efficiency of a Native app.
								`
    },
        {
      title: 'Native controls and native modules in React Native improve performance',
      content: `React Native communicates with specific components for iOS or Android and renders code to native APIs directly and independently. 
									And so, React uses a separate thread from UI, which increases the performance score.
								`
    },
        {
      title: 'The big social-media giants like Instagram, Netflix, Airbnb, Uber Eats etc. are already using React.',
      content: `When you have the backup of Facebook Technology and the Biggies like Instagram, Netflix, Airbnb, Uber Eats, SoundCloud, Khan Academy, 
									Bloomberg are already using React, do you need more reasons to trust!
								
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

export default ReactNativeAccordion;