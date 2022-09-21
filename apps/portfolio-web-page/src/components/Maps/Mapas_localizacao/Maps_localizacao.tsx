import '../Maps.scss';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface sliderInfos {
  mapDescription: string;
  mapTitle: string;
  imageSrcOne: string;
  imageSrcTwo: string;
  imageSrcThree: string;
}

const Maps_localizacao = function (props: sliderInfos) {
  return (
    <>
      <h2 className="swiperSlides--title">{props.mapTitle}</h2>
      <p style={{ fontSize: '16px' }}>Arraste para o lado para ver mais!</p>
      <div className="swiperSlides--container">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={props.imageSrcOne} className="swiperSlide--image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={props.imageSrcTwo} className="swiperSlide--image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={props.imageSrcThree} className="swiperSlide--image" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiperSlide__text__container">
          <p className="swiperSlide__text__container--text">
            {props.mapDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default Maps_localizacao;
