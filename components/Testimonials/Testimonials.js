import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import depoimento from "../../public/depoimento.jpg";
import s from "./testimonials.module.scss";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <>
      <section className="container mx-auto px-8 py-10 xl:py-20 xl:max-w-7xl">
        <h2 className="text-center mb-10 text-3xl xl:text-4xl">Depoimentos</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="grid items-center md:grid-cols-3">
              <div className="pb-4 md:col-span-1">
                <div className="drop-shadow-lg rounded-full m-auto w-60 h60 md:w-80 md:h-80 md:mb-0">
                  <Image
                    className="object-cover rounded-full"
                    src={depoimento}
                    width="300"
                    height="300"
                    alt="temp"
                  />
                </div>
              </div>

              <blockquote className={s.blockquote}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tristique leo nisi, id convallis tortor efficitur id. Donec id
                eros nec metus faucibus sollicitudin. Sed faucibus maximus
                tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
                <div className="text-base md:text-xl font-semibold mt-6">
                  Myllena Atanazio
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid items-center md:grid-cols-3">
              <div className="pb-4 md:col-span-1">
                <div className="drop-shadow-lg rounded-full m-auto w-60 h60 md:w-80 md:h-80 md:mb-0">
                  <Image
                    className="object-cover rounded-full"
                    src={depoimento}
                    width="300"
                    height="300"
                    alt="temp"
                  />
                </div>
              </div>

              <blockquote className={s.blockquote}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tristique leo nisi, id convallis tortor efficitur id. Donec id
                eros nec metus faucibus sollicitudin. Sed faucibus maximus
                tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
                <div className="text-base md:text-xl font-semibold mt-6">
                  Myllena Atanazio
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
