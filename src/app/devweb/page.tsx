'use client'
import HeroDevContainer from '@/components/desarrollo/HrroDev/HeroDevContainer'
import React from 'react'


export default function DevwebLayout() {;
  
  const ClassRow = "row",
  VisiblyHidden = "visually-hidden",
  articleBox = "hero col-12 px-4 py-5 my-5 text-center",
  titleTwo = "hero_title display-5 lead",
  modified = "hero_title--modified",
  division = "hero_body col-lg-6 mx-auto",
  paragraph = "hero_text lead mb-4",
  danger = "text-danger",
  info = "text-info",
  btnSuccess = "btn btn-success";
  
  
  return (
    <HeroDevContainer 
      ClassRow={ClassRow}
      VisiblyHidden={VisiblyHidden}
      articleBox={articleBox}
      titleTwo={titleTwo}
      modified={modified}
      division={division}
      paragraph={paragraph}
      danger={danger}
      info={info} 
      btnSuccess={btnSuccess}
    />
  )
}