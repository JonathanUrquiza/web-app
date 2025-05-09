import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles


export default function Slider({
  ClassTitleTow,
  ClassSection,
  ClassSectionTwo,
  ClassDivision,
  ClassUnordeList,
  ClassArticleTwoOnList,
  ClassGlideSection,
  ClassGlideTitle,
  ClassPictureDiv,
  ClassImg,
  ClassDivFlex,
  ClassButton,
  ClassGlideTextInfo,
  ClassGlideList,
  ClassGlideArticleTwo,
  danger
}: SliderInterface) {
  useEffect(() => {
    AOS.init({});
  }, []);

  const sublisted: ListedInterface[] = [
    { id: 1, name: "-SpiraPlan." },
    { id: 2, name: "-Jmetter." },
    { id: 3, name: "-Jira." },
  ];

  const itemsSlider = [
    {
      id: 1, 
      title: ".Frontend Dev",
      subtitle: "AppWeb", 
      imageSrc: "",
      imageAlt: "Imagen represntativa del codigo de desarrollo de un frontend.",
      buttonText: "More information",
      listItems: {
        listed: [
          { id: 1, name: "API´S" },
          { id: 2, name: "Fetching" },
          { id: 3, name: "Frameworks." },
          { id: 4, name: "Movile First." },
          { id: 5, name: "Consulta a base de datos (SQL)." },
          { id: 6, name: "Gestor de verciones." },
          { id: 7, name: "S.E.O." },
        ],
      }
    },{
      id: 2, 
      title: "Backend Dev",
      subtitle: "AppWeb", 
      imageSrc: "",
      imageAlt: "Imagen represntativa del codigo de desarrollo de un backend.",
      buttonText: "More information",
      listItems: {
        listed: [
          { id: 1, name: "Entorno de trabajo nodejs." },
          { id: 2, name: "Ciclos e iteraciones." },
          { id: 3, name: "Componentes." },
          { id: 4, name: "Arquitectura (MVC, Microservicios)." },
          { id: 5, name: "Middleware." },
          { id: 6, name: "Asincronias y promesas." },
          { id: 7, name: "Web Module." },
          { id: 8, name: "Eventos." },
        ],
      }
    },{
      id: 3,
      title: "Testing Funcional",
      subtitle: "BlackBox",
      imageSrc: "",
      imageAlt:"Imagen represntativa del codigo de desarrollo de un backend.",
      buttonText:"More information",
      listItems:{
        listed:[
          {id:1,name:"Herramientas.",sublisted},
          {id:2,name:"Agile."},
          {id:3,name:"Use case Doc."},
          {id:4,name:"test case Doc."},
          {id:5,name:"DER Desing and doc."}
        ]
      }
    }
  ];
  let bullets = itemsSlider.length;

  return (
    <>
      <h2 className={ClassTitleTow}>Our services</h2>
      <section
        className={ClassSection}
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-delay="100"
        data-aos-duration="400"
      >
        <section className={ClassSectionTwo}>
          <div className={ClassDivision} data-glide-el="track">
            <ul className={ClassUnordeList}>

              {itemsSlider.map((item) => (
                <li key={item.id}>
                  <section className={ClassGlideSection}>
                    <article className={item.id % 2 === 0 ? ClassArticleTwoOnList : ClassGlideArticleTwo}>
                      <h2 className={ClassGlideTitle}>
                        {item.title}{" "}
                        <span className={item.id % 2 !== 0 ? danger : ClassGlideTextInfo}>
                          {item.subtitle}
                        </span>
                      </h2>
                      <ul className={ClassGlideList}>
                        {item.listItems.listed?.map((listItem) => (
                          <>
                            <li key={listItem.id}>{listItem.name}</li>
                            {(listItem.sublisted ?? []).length > 0 && (
                              <ul className={ClassGlideSection}>
                                {(listItem.sublisted ?? []).map((sublist) => (
                                  <li key={sublist.id}>{sublist.name}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        ))}
                      </ul>
                    </article>

                    <div className={ClassPictureDiv}>
                      <picture>
                        <Image
                          className={ClassImg}
                          src={item.imageSrc}
                          width={500}
                          height={500}
                          alt={item.imageAlt}
                        />
                      </picture>
                      <div className={ClassDivFlex}>
                        <button className={ClassButton} type="submit">
                          {item.buttonText}
                        </button>
                      </div>
                    </div>
                  </section>
                </li>
              ))}

            </ul>
          </div>
          
        </section>
      </section>
    </>
  );
}
