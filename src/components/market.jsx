import Image from 'next/image'
import React from 'react'

const Market = () => {
    const randomNo = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  return (
    <div className='bg-white mx-10 mt-10'>
        <Image
            src={`https://picsum.photos/id/${randomNo}/600/400`}
            height={100}
            width={100}
            className='w-full'
        />
        <p className='text-black p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga modi ratione neque sint quidem, ullam sapiente provident non odio delectus, veniam veritatis fugiat ad. Consectetur modi nobis expedita itaque!</p>
    </div>
  )
}

export default Market