import { GiChemicalBolt } from 'react-icons/gi';


const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/4PGFMkZ/background-2.png)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex justify-center gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-info"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white">Task Management</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Task <span className="text-info">Management</span> Platform</h1>
                                    <p className="mb-5 text-white">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                    <button className="btn bg-info border-0 text-white hover:bg-white hover:text-info px-14">Lets Explore</button>
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