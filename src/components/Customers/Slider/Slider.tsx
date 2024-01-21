import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { reviewsData } from "./Slider.data";
import ImageContainer from "../../ImageContainer/ImageContainer";

const Slider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[480px] w-[310px] md:h-[500px] md:w-[420px]"
      >
        {reviewsData.map(({ id, image, name, review }) => {
          const props = { image, name };
          return (
            <SwiperSlide key={id}>
              <ImageContainer {...props} />
              <h4 className="text-center">{name}</h4>
              <div className="mt-5 text-center">{review}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
