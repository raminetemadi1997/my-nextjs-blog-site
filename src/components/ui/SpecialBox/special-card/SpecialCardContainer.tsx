import { ISpecialProps } from '@/types/Post/SpecialBox'
import React from 'react'
import SpecialCard from './SpecialCard'
import MySwiper from '@/components/MySwiper'

export default function SpecialCardContainer({items}:Pick<ISpecialProps , "items">) {

    const swiperData = items.map(item=>(
        <SpecialCard key={item.id} {...item} />
    ))

  return (
    <MySwiper
        slides={swiperData}
        gap={15}
        col={4}
    />
  )
}
