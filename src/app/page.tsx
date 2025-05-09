"use client";
import HeroContainer from "@/components/hero/HeroContainer";
import HeroSliderServices from "@/components/hero/HeroSliderServices";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const classMain =
      "container-fluid d-flex flex-column justify-content-center align-items-center",
    btnSuccess = "btn btn-success",
    ClassRow = "row aos-init",
    VisiblyHidden = "visually-hidden",
    articleBox = "hero col-12 px-4 py-5 my-5 text-center",
    titleTwo = "hero_title display-5 lead",
    modified = "hero_title--modified",
    division = "hero_body col-lg-6 mx-auto",
    paragraph = "hero_text lead mb-4",
    danger = "text-danger",
    info = "text-info",
    dataAos = "zoom-in",
    dataDuratioin = "1000";

  return (
    <>
      <main className={classMain}>
        <HeroContainer
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
          dataAos={dataAos}
          dataDuration={dataDuratioin}
        />
        <HeroSliderServices />
      </main>
    </>
  );
}
