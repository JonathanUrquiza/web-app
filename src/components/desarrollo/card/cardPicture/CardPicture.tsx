import Image from 'next/image'
import React from 'react'

export default function CardPicture({CardImage}:any) {
  return (
  <>
  <picture>
    <Image width={20} height={20} src={CardImage} className="w-100" alt=""/>
  </picture>
  </>
  )
}
