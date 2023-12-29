import image from '../../../assets/images/image.jpg';

const Subscription = () => {
    return (
        <div className="container mx-auto px-5 my-20">
            <div className="hero py-28 lg:py-36 rounded-2xl" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-white bg-opacity-70"></div>
                <div className="hero-content text-center py-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get Started Now</h1>
                        <p className="mb-5">Unlock premium features and seamless collaboration with our subscription plans. Elevate your task management experience by subscribing today for exclusive benefits.</p>
                        <button className="btn bg-[#fc5a03] border-0 text-white hover:bg-white hover:text-[#fc5a03] px-14">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;