/* eslint-disable react/no-unescaped-entities */
import image from '../../../assets/images/3-removebg-preview.png';

const Work = () => {
    return (
        <div>
            <div className='container mx-auto px-5 flex gap-10 my-20'>
                <div className='flex-1'>
                    <img className='w-full' src={image} alt="" />
                </div>
                <div className='flex-1 flex items-center'>
                    <div>
                        <p className='text-xl font-bold mb-5 text-[#fc5a03]'>work smarter</p>
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold'>Take Control of <br /> your work, <span className='text-[#fc5a03]'>don't let it <br /> control you</span></h2>
                        <p>You're in charge! Instead of letting work stress you out, take control. Decide what's most important, make a plan, and set limits. This way, you can have a good balance between work and your personal life. Take charge, focus on what matters, and enjoy a better mix of your job and your own time. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;