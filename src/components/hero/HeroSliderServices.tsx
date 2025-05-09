import React from 'react'
import Slider from '../slider/Slider'
import Style from '@/components/slider/Slider.module.css';

export default function HeroSliderServices() {
  const ClassTitleTwo = "display-5 lead " + Style.efect, 
  ClassSection  = "aos-init",
  ClassSectionTwo = "glide",
  ClassDivision = "glide__track",
  ClassUnorderList = "w-100 glide__slides mb-5",
  ClassArticleTwoOnList = "col-md-7 text-center my-4",
  Danger = "text-danger",
  ClassPictureDiv = "col-md-5 order-md-1",
  ClassImg = "img-fluid mx-auto border rounded border-grey-light",
  ClassDivFlex = "d-flex justify-content-around",
  ClassButton = "btn btn-info border rounded-2 my-3 col-7",
  ClassGlideSection = "row text-center",
  ClassGlideArticleTwo = "col-md-7 order-md-2",
  ClassGlideTitle = "featurette-heading fw-normal lh-1",
  ClassGlideTextInfo = "text-info",
  ClassGlideList = "lead list-unstyled"
  return (
    <Slider 
    ClassTitleTow={ClassTitleTwo}
    ClassSection={ClassSection}
    ClassSectionTwo={ClassSectionTwo}
    ClassDivision={ClassDivision}
    ClassUnordeList={ClassUnorderList}
    ClassArticleTwoOnList={ClassArticleTwoOnList}
    danger={Danger}
    ClassPictureDiv={ClassPictureDiv}
    ClassImg={ClassImg}
    ClassDivFlex={ClassDivFlex}
    ClassButton={ClassButton}
    ClassGlideSection={ClassGlideSection}
    ClassGlideArticleTwo={ClassGlideArticleTwo}
    ClassGlideTitle={ClassGlideTitle}
    ClassGlideTextInfo={ClassGlideTextInfo}
    ClassGlideList={ClassGlideList}
    />
)
}
