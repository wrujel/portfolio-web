import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { reviewsData } from "./Slider.data";
import Image from "next/image";

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
        className="h-[380px] md:h-[500px] w-[270px] md:w-[420px]"
      >
        {reviewsData.map(({ id, name, review, image }) => {
          return (
            <SwiperSlide key={id}>
              <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="mx-auto"
              />
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
