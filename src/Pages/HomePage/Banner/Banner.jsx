import banner from '../../../assets/images/banner.png'


const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10">
                        <div className="flex-1 flex items-center">
                            <div>
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Task <span className="text-info">Management</span></h1>
                                <p className="mb-5 text-white">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                <button className="btn bg-info border-0 text-white hover:bg-white hover:text-info px-14">Lets Explore</button>
                            </div>
                        </div>

                        <div className="flex-1">
                            <img className='w-full' src={banner} alt="" />
                        </div>
                    </div>
                </div>


                {/* <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero ">
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10 py-28 md:py-44">
                                <div className="flex-1">
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Task <span className="text-info">Management</span> Platform</h1>
                                    <p className="mb-5 text-white">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                    <button className="btn bg-info border-0 text-white hover:bg-white hover:text-info px-14">Lets Explore</button>
                                </div>

                                <div className="flex-1">
                                    <img className='w-full' src={banner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;