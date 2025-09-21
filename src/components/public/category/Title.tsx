import React from 'react'


interface ICategoryTitleProps {
  title: string;
}


export default function Title({title} : ICategoryTitleProps) {
  return (
    <h2
    className='text-[#6B7074] md:text-2xl text-lg md:pb-2 md:mb-4 md:border-b border-[#ccc] md:px-0 px-2 md:font-normal font-medium'>
      {title}
    </h2>
  )
}
