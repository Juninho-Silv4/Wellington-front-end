import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";import "swiper/css";
import './Galery.css';
import "swiper/css/navigation";
import api from "../../services/api";
import { BsDownload } from "react-icons/bs"

interface GaleryProps {
  artefatos:Artefatos[]
}

interface Images {
  id: number,
  link: string
}
interface Artefatos {
  id: number;
  numero_registro: number;
  numero_inventario: number;
  cultura: string;
  classe_morfologica: string;
  dimensoes: string;
  descricao: string;
  observacoes: string;
  referencias: string;
  tags: string;
  images: Images[]
}

function Galery({artefatos}:GaleryProps) {
  console.log(typeof(artefatos))
  console.log(artefatos)

  return (
      <>
      <div className="mySlides">
      
      {
          artefatos.map((artefato) => {
            return(
            <Swiper
              key={artefato.id}
              slidesPerView={1}
              spaceBetween={0}                
              loop={true}
              cssMode={true}
              navigation={true}
              modules={[Navigation]}              
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" alt="cachorro" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" alt="cachorro" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" alt="cachorro" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" alt="cachorro" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" alt="cachorro" />
              </SwiperSlide>
              {/* {
                artefato.images.map((img) => {
                  return (
                  
                    <SwiperSlide
                      key={img.id}
                    >
                      <img src={img.link} alt="" />
                    </SwiperSlide>
                  )
                })
              } */}
              
            </Swiper>
          )
        })
      }
    </div>
    <div className="floating-button">
      <BsDownload className="download-icon" color='white' size={40} />
    </div>
    </>
  );
}

export default Galery;




