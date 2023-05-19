import React from 'react';
import Accordion from './Accordion';

const Demoslider = () => {
  const accordionData = [
    {
      title: 'Website Back-end & API Development',
      content: `	Node.js is highly scalable and provides blazing-fast routing with its V8 engine along with a secure authentication. Node.js can be used to develop the Back-end and API's for any web or mobile application. `
    },
    {
      title: 'Node.js can be used to build Chat Bots',
      content: `Node.js makes it extremely easy to execute push notifications and server-side event loops popularly used in IMs and real-time apps.
									Node.js offers exclusive advanced functionalities for real-time chatbots and chat applications.
									The key features such as multi-user applications, intensive data, heavy traffic, across all devices are very popular in chatbots.
									It runs across different devices and covers all paradigms in chat and chatbot apps. 
								`
    },
    {
      title: 'Video Streaming',
      content: `Node.js has a definite edge on streaming as it processes files at a super-fast speed, and feather-light encodes and uploads.
									Giants like Netflix welcomed Node.js to serve 190 countries and 100+ million hours of streaming across 120 million users and counting. 
								`
    },
        {
      title: 'Can be used to make a single page app',
      content: `Just like single page websites, Node.js can be used to build a single-page app, where the look and feel
									are similar to a desktop application. Node.js is a good fit for building social networking platforms, dynamic websites, and mailing solutions. 
								
								`
    },
        {
      title: 'The big names also trust Node.js',
      content: `It's true, Netflix, Uber, LinkedIn, eBay, AliExpress and even NASA also trust and use Node.js as their back-end language.
								
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

export default Demoslider;