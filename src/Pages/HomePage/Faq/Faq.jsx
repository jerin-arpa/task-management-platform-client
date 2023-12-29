import image from '../../../assets/images/7.png';

const Faq = () => {
    return (
        <div className="container mx-auto px-5 mb-20">
            <div className="flex justify-center">
                <div className="mb-10">
                    <p className='text-xl font-bold mb-5 text-center'>work smarter</p>
                    <div className="flex justify-center">
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold text-center w-1/2'>Task Dependencies and Sequencing</h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center w-2/3">Understand how to leverage task dependencies to create a structured and efficient workflow. Learn the art of sequencing tasks to ensure that your projects progress seamlessly, maintaining a logical order and achieving optimal productivity.  </p>
                    </div>
                </div>
            </div>



            <div className='flex flex-col-reverse lg:flex-row gap-10'>
                <div className='flex-1'>
                    <div className="collapse collapse-plus bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <img className='w-full' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;