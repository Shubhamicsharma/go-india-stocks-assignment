'use client'

import Discussion from '@/components/discussion';
import Market from '@/components/market';
import React, { useState } from 'react';

const Page = () => {
    const [activeButton, setactiveButton] = useState('discussion')

    const handleOptionClick = (option) => {
        setactiveButton(option);
        // Handle changes in your page based on the selected option
        // For demonstration, I'm just logging the selected option
        console.log("Selected Option:", option);
      };

  const val = 15;
  const marketVal = 8;
  // Array to hold the Discussion components
  const discussionComponents = Array.from({ length: val }, (_, index) => (
    <Discussion key={index} />
  ));
  const marketComponents = Array.from({ length: marketVal }, (_, index) => (
    <Market key={index} />
  ));

  return (
    <>
      <div className='flex lg:hidden border-x-4 border-gray-500 py-2'>
        <button className={ activeButton === 'discussion' ? 'w-1/2 text-center p-5 bg-blue-950 text-white' : 'hover:bg-gray-700 w-1/2 text-center p-5 text-white'} onClick={() => handleOptionClick('discussion')}>DISCUSSION FORUM</button>
        <button className={ activeButton === 'market' ? 'w-1/2 text-center p-5 bg-blue-950 text-white' : 'hover:bg-gray-700 w-1/2 text-center p-5 text-white'} onClick={() => handleOptionClick('market')}>MARKET STORIES</button>
      </div>
      <div className='grid grid-cols-3 '>
        <div className={activeButton === 'discussion' ? 'col-span-3 lg:col-span-2 block' : 'hidden lg:block'}>
          <h1 className='px-10 py-5 font-mono text-3xl hidden lg:block'>DISCUSSION FORUM</h1>
          {/* Render the Discussion components */}
          {discussionComponents}
        </div>
        <div className={activeButton === 'market' ? 'col-span-3 lg:col-span-1 block' : 'hidden lg:block'}>
        <h1 className='px-10 py-5 font-mono text-3xl hidden lg:block'>MARKET STORIES</h1>
          {/* Render the Discussion components */}
          {marketComponents}
        </div>
      </div>
    </>
  );
};

export default Page;
