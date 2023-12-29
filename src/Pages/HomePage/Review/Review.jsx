import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from "react-icons/fa";


const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container mx-auto px-5 mb-20'>
            <div className="flex justify-center">
                <div className="mb-10">
                    <p className='text-xl font-bold mb-5 text-center text-[#fc5a03]'>User Testimonials</p>
                    <div className="flex justify-center">
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold text-center w-1/2'>Hear What Others <span className='text-[#fc5a03]'>Are Saying</span></h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center w-2/3">Explore the firsthand experiences of users who have embraced our task management platform. Discover how our features enhance productivity and streamline project collaboration. Join the ranks of satisfied users!</p>
                    </div>
                </div>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <div className='bg-gray-100 p-10 py-14 rounded-xl flex gap-5'>
                            <div>
                                <FaQuoteRight className='text-5xl text-[#fc5a03]'></FaQuoteRight>
                            </div>

                            <div>
                                <h2 className='text-2xl font-bold text-[#fc5a03]'>{review.reviewerName}</h2>
                                <p className='font-bold mb-5'>{review.reviewTime}</p>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;