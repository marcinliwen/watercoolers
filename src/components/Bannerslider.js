import React,  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";


const Bannerslider = () =>{
    return(
        <section>
            <div className="container !p-0 md:!px-4 md:mb-12">
            <StaticImage
                  src="../img/banners/banner-blupura.png"
                  alt="Blupura"
                  placeholder="none"
                />
            {/* <Swiper
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
        >
          <SwiperSlide> <StaticImage
                  src="../img/banners/banner-blupura.png"
                  alt="Blupura"
                  placeholder="none"
                /></SwiperSlide>
                 <SwiperSlide> <StaticImage
                  src="../img/banners/banner-blupura.png"
                  alt="Blupura"
                  placeholder="none"
                /></SwiperSlide>
        </Swiper> */}
            </div>
        
      </section>
    )
}

export default Bannerslider