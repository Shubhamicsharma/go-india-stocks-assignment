'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep, faBackwardStep, faBell, faMessage, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

const sidebar = () => {
    const [activeButton, setactiveButton] = useState('discussion')
    const [expanded, setexpanded] = useState(true);

    const handleOptionClick = (option) => {
        setactiveButton(option);
        // Handle changes in your page based on the selected option
        // For demonstration, I'm just logging the selected option
        console.log("Selected Option:", option);
      };
  return (
    <>
        <div className = 'flex flex-col justify-center h-screen'>
        <div className={`h-screen relative left-0 top-0 ${expanded ? "w-[50%] sm:w-64" : 'w-0'}`} ></div>
            <div className = {`bg-blue-950 top-0 overflow-hidden transition-all h-screen ease-in lg:ease-custom-bezier duration-1000 fixed ${expanded ? "w-[50%] sm:w-64 " : 'left-[-100%]'}`}>
                <div className = 'text-white '>
                    <div className = 'flex flex-row justify-between items-center py-5 px-5 border-b-[2px] border-gray-500'>
                        <div className = 'flex items-center'>
                            <Image
                                src = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                height = {25}
                                width = {25}
                                className = 'rounded-full h-9 w-9 mr-3'
                            />
                            <h3>Hello, User</h3>
                        </div>
                        <FontAwesomeIcon icon={faBell} className='h-7'/>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <li className='mb-4'>
                                <button className={ activeButton === 'discussion' ? 'w-full text-left bg-black text-white px-2 py-1 rounded-md' : 'hover:bg-gray-700 px-2 py-1 rounded-md w-full text-left'} onClick={() => handleOptionClick('discussion')}>
                                    <FontAwesomeIcon className='mr-3' icon={faMessage} /> Discussion Forum
                                </button>
                            </li>
                            <li>
                                <button className = {activeButton === 'market' ? 'w-full text-left bg-black text-white px-2 py-1 rounded-md' : 'w-full text-left hover:bg-gray-700 px-2 py-1 rounded-md'} onClick={() => handleOptionClick('market')}>
                                    <FontAwesomeIcon className='mr-3'    icon={faCommentsDollar} /> Market Stories
                                </button>
                                <ul className='ml-9 mt-4'>
                                    <li>Sentiments</li>
                                    <li>Markets</li>
                                    <li>Sector</li>
                                    <li>Watchlist</li>
                                    <li>Events</li>
                                    <li>News/Interview</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={`fixed h-screen ${expanded ? "left-1/2 sm:left-64": ""}`}>
            <button onClick = {() => setexpanded(curr => !curr)} className = 'bg-blue-950 h-16 text-black flex flex-col justify-center px-2 fixed top-[50%] translate-y-[-50%]' >
                {expanded ? <FontAwesomeIcon icon={faBackwardStep} className='text-white' /> : <FontAwesomeIcon icon={faForwardStep} className='text-white' />}
            </button>
        </div>
    </>
  )
}

export default sidebar