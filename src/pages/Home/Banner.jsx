
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
// import slider image
import slider1 from '../../../public/images/slider1.jpg';
import slider2 from '../../../public/images/slider2.jpg';
import slider3 from '../../../public/images/slider3.jpg';
import slider4 from '../../../public/images/slider4.jpg';
import slider5 from '../../../public/images/slider5.jpg';
import slider6 from '../../../public/images/slider6.jpg';


const Banner = () => {
    return (
        <div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:h-[80vh] lg:py-4 md:py-4 py-20 rounded-lg object-cover object-center ">

                <SwiperSlide >
                    <img src={slider1}  className="w-full rounded-lg " />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slider2} className="w-full rounded-lg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slider3} className="w-full rounded-lg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slider4} className="w-full rounded-lg " />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slider5} className="w-full rounded-lg " />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slider6} className="w-full rounded-lg " />
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Banner;