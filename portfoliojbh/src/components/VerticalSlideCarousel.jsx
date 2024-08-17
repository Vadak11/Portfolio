import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Mousewheel} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const VerticalSlideCarousel = () => {
    return (
        <div className="w-full relative">
            <Swiper
                direction="vertical"
                loop={true}
                mousewheel={{
                    releaseOnEdges: true,
                }}
                grabCursor={true}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                }}
                modules={[Pagination, Mousewheel]}
                className="swiper vertical-slide-carousel h-144 w-4/5"
            >3
                <SwiperSlide>
                    <div className="bg-bg-darker rounded-lg h-144 flex justify-center items-center">
                        <span className="text-3xl font-semibold text-indigo-600">Slide 1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bg-darker rounded-lg h-144 flex justify-center items-center">
                        <h2 className={`text-5xl font-semibold text-indigo-600`}>
                            Tasko
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bg-darker rounded-lg h-144 flex justify-center items-center">
                        <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-bullet-active"></div>
        </div>
    );
}
