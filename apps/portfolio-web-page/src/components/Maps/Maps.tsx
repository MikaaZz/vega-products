import './Maps.scss';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Maps = function () {
  return (
    <div id="products" className="swiperSlides--container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="swiperSlide">
            <div className="swiperSlide--image"></div>
            <div className="swiperSlide__text__container">
              <h3 className="swiperSlide__text__container--title">
                Mapas de localização:
              </h3>
              <p className="swiperSlide__text__container--text">
                São mapas bastante usuais. Estes mapas mostram a localização de
                uma área de estudo e a distribuição de dados. Podem ser
                encontrados em monografias, TCCs, dissertações, teses, artigos e
                relatórios.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <div className="swiperSlide--image"></div>
            <div className="swiperSlide__text__container">
              <h3 className="swiperSlide__text__container--title">
                Mapas temáticos:
              </h3>
              <p className="swiperSlide__text__container--text">
                São mapas que abordam um tema. Estes mapas podem ser muito
                importantes na tomada de decisão, pois podem trazer algumas
                respostas a partir da associação de informações conhecidas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <div className="swiperSlide--image"></div>
            <div className="swiperSlide__text__container">
              <h3 className="swiperSlide__text__container--title">
                Mapas avançados:
              </h3>
              <p className="swiperSlide__text__container--text">
                São mapas que permitem a visualização da distribuição de um
                fenômeno, a identificação e a interpretação de padrões do
                fenômeno representado.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <div className="swiperSlide--image"></div>
            <div className="swiperSlide__text__container">
              <h3 className="swiperSlide__text__container--title">
                Mapas Estilo Vintage:
              </h3>
              <p className="swiperSlide__text__container--text">
                São mapas cuja aparência lembra os mapas mais antigos. Passam a
                ideia de desenhos em papiro, planta de grande importância para
                os egípcios, que serviu de suporte para a escrita.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Maps;
