/* eslint-disable react/no-unescaped-entities */
import image from '../../../assets/images/7.png';

const Faq = () => {
    return (
        <div className="container mx-auto px-5 mb-20">
            <div className="flex justify-center">
                <div className="mb-10">
                    <p className='text-xl font-bold mb-5 text-center text-[#fc5a03]'>Frequently Asked Questions</p>
                    <div className="flex justify-center">
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold text-center w-1/2'>Task Dependencies and <span className='text-[#fc5a03]'>Sequencing</span></h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center w-2/3">Understand how to leverage task dependencies to create a structured and efficient workflow. Learn the art of sequencing tasks to ensure that your projects progress seamlessly, maintaining a logical order and achieving optimal productivity.  </p>
                    </div>
                </div>
            </div>



            <div className='flex flex-col-reverse lg:flex-row gap-10'>
                <div className='flex-1 mt-5'>
                    <div className="collapse collapse-plus bg-gray-100 mb-5">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How can I create a new task on your platform?
                        </div>
                        <div className="collapse-content">
                            <p>To create a new task, simply log in to your account and navigate to the "Tasks" or "Dashboard" section. Click on the "Add Task" button, fill in the necessary details and then click "Save" or "Create Task."</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-100 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I prioritize tasks using drag-and-drop?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! You can prioritize tasks effortlessly with our drag-and-drop feature. In the task view, simply drag the task card to rearrange the order based on priority. This intuitive functionality allows you to easily organize and reprioritize your tasks as needed.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-100 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I set reminders for my tasks?
                        </div>
                        <div className="collapse-content">
                            <p>No, currently, our platform does not support setting reminders for tasks. However, we are continually enhancing our features based on user feedback, and your input is valuable to us. Keep an eye on our updates, as we may introduce this functionality in future releases. In the meantime, we recommend exploring alternative methods such as integrating with external calendar applications for reminder notifications.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-100 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is there a mobile app available for your task management platform?
                        </div>
                        <div className="collapse-content">
                            <p>No, currently, our platform does not have a dedicated mobile app. However, you can access and use our platform through a mobile web browser. We understand the importance of mobile accessibility, and we are actively exploring options for developing a mobile app in the future. In the meantime, our mobile web version offers a responsive and user-friendly experience for managing tasks on your mobile device.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-100 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Does your platform support drag-and-drop on mobile devices?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, our platform extends the convenience of drag-and-drop functionality to mobile devices. Whether you're using a smartphone or tablet, you can easily manage tasks on the go by dragging and dropping them within the app. This ensures a consistent and user-friendly experience across different devices.</p>
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