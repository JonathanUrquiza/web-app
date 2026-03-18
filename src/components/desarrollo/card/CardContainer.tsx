'use client'
import React from 'react'
import CardPicture from './cardPicture/CardPicture'
import Card from '@/components/ui/Card/Card'

export default function CardContainer({CardLink, CardTitle, CardImage}: any) {

  return (
    <div className="col-10 col-md-3 offset-1 my-3">
      <Card href={CardLink} target="_blank" borderVariant="info" title={CardTitle}>
        <CardPicture cardImage={CardImage} />
      </Card>
    </div>
  )

}
