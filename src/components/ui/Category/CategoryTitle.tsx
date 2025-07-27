import React from 'react'


interface ICategoryTitleProps {
  title: string;
}


export default function CategoryTitle({title} : ICategoryTitleProps) {
  return (
    <h2
    className='text-[#6B7074] text-2xl font-medium pb-2 mb-4 border-b border-[#ccc] md:px-0 px-2'>
      {title}
    </h2>
  )
}
