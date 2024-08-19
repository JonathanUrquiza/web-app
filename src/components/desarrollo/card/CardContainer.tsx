'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardPicture from './cardPicture/CardPicture'

export default function CardContainer({CardLink, CardTitle,CardImage}) {

return (
    <>
    <div className="card col-10 col-md-3 offset-1 my-3">
    <Link href={CardLink} className="card"target="_blank">
      <div className="card-header p-1">
        <h3 className="card-title">{CardTitle}</h3>
      </div>
      <div className="card-body">
        <CardPicture cardImage={CardImage} />
      </div>
    </Link>
  </div>
    </>
  )

}