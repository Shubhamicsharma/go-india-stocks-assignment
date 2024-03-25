import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye , faComment, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React from 'react'

const Discussion = () => {
  return (
    <div className='p-10'>
        <div className='w-full bg-white rounded-md grid grid-cols-12 text-black p-5 gap-4'>
            <Image
                src = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                height = {25}
                width = {25}
                className = 'h-10 w-10 rounded-full col-span-1 mx-auto'
            />
            <div className='col-span-11 flex flex-col justify-between gap-5'>
                <div className='flex gap-5'>
                    <h1>Lorem Ipsum</h1>
                    <div className='bg-blue-600 rounded-full px-5 text-white'>Sector 2</div>
                    <p className='text-blue-500 ms-auto'>2 min ago</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is</p>
                <div className='flex justify-between'>
                    <div><FontAwesomeIcon className='me-2' icon={faHeart} />2K</div>
                    <div><FontAwesomeIcon className='me-2' icon={faEye} />2K</div>
                    <div><FontAwesomeIcon className='me-2' icon={faComment} />2K Comments</div>
                    <div><FontAwesomeIcon className='me-2' icon={faShareNodes} />Share</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discussion