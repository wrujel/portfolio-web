import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderData } from "./Slider.data";
import { RxArrowTopRight } from "react-icons/rx";

const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] md:h-[340px] w-[270px] md:w-[550px]"
    >
      {sliderData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex px-6 py-8 h-[200px] md:h-auto rounded-lg cursor-pointer bg-[rgba(57,48,74,0.3)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(57,48,74,0.6)] transition-all duration-300 ease-in-out">
            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-secondary" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
