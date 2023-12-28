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
                        <p className='text-xl font-bold mb-5'>work smarter</p>
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold'>Take Control of your work, don't let it control you</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;