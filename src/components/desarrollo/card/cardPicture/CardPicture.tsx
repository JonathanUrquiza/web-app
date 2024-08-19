import Image from 'next/image'
import React from 'react'

export default function CardPicture(CardImage) {
  return (
  <>
  <picture>
    <Image width={20} height={20} src={CardImage} className="w-100" alt=""/>
  </picture>
  </>
  )
}
