import React from 'react';
import Accordion from './Accordion';

const ReactjsAccordion = () => {
  const accordionData = [
    {
      title: 'Ensures a fast rendering for high-load applications.',
      content: `		React.js ensures a fast rendering of website and mobile applications by using Virtual Dom. Now, the React developers at first make modifications to the virtual representation of the DOM and then calculate the scope of required DOM operations which is minimal. This gives a gigh performance and a great user experience.
									`
    },
    {
      title: 'React.js boosts productivity.',
      content: `React.js give the developers an ability to reuse the components making it more productive and easy to maintain for them.
								`
    },
    {
      title: 'Excellent Flexibility and Compatibility',
      content: `React.js technology can be used with a number of platforms. It facilitates to create desktop solutions, mobile applications, static websites, handle server rendering, and integrate advanced concepts like VR and 360 views.
							`
    },
        {
      title: 'Vast Communiuty on Github',
      content: `	React.js has one of the top 5 repositories on Github and has a very vast community online. So, any issue that a developer encounters is already resolved by someone before and shared online.  
													
								`
    },
        {
      title: 'The big social-media giants like Instagram, Netflix, Airbnb, Uber Eats etc. are already using React.',
      content: `When you have the backup of Facebook Technology and the Biggies like Instagram, Netflix, Airbnb, Uber Eats, SoundCloud, Khan Academy, 
									Bloomberg are already using React, do you need more reasons to trust?			
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

export default ReactjsAccordion;