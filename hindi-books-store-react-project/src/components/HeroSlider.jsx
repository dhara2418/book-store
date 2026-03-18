
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"

function HeroSlider(){

return(

<Swiper>

<SwiperSlide>
<div className="hero hero1">
    <img src="/images/slider/slider-1.png" alt="रामायण"/>
{/* <h1>हिंदी साहित्य की अमर धरोहर</h1> */}
</div>
</SwiperSlide>

<SwiperSlide>
<div className="hero hero2">
    <img src="/images/slider/slider-2.png" alt="कबीर"/>
{/* <h1>महान कवियों की रचनाएँ</h1> */}
</div>
</SwiperSlide>

<SwiperSlide>
<div className="hero hero3">
    <img src="/images/slider/slider-3.png" alt="प्रेमचंद"/>
{/* <h1>ज्ञान और संस्कृति का संसार</h1> */}
</div>
</SwiperSlide>

</Swiper>

)

}

export default HeroSlider
