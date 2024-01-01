import banner from '../../../assets/images/2.png';


const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
                            <div className="hero-overlay bg-opacity-80 bg-white"></div>
                            <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10 py-28 md:py-44 items-center">
                                <div className="flex-1">
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Task <span className="text-[#fc5a03]">Management</span> Platform</h1>
                                    <p className="mb-5">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                    <button className="btn bg-[#fc5a03] border-0 text-white hover:bg-white hover:text-[#fc5a03] px-14">Lets Explore</button>
                                </div>

                                <div className="flex-1 flex justify-end">
                                    {/* <img className='w-full rounded-full' src={banner} alt="" /> */}
                                    <img className="mask mask-hexagon-2" src={banner} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;