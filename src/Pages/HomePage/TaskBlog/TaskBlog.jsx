import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaskBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="container mx-auto px-5">
            <div className="flex justify-center">
                <div className="mb-10">
                    <p className='text-xl font-bold mb-5 text-center text-[#fc5a03]'>Blogs</p>
                    <div className="flex justify-center">
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold text-center w-1/2'> Elevate Your Productivity and <span className='text-[#fc5a03]'>Conquer Your Goals</span></h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center w-2/3">In this task management-focused section, we will explore the strategies and tools that empower individuals to conquer their to-do lists, meet deadlines, and achieve their goals.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs.slice(0, 3).map(blog => <div
                        key={blog.id}
                        className="relative mb-20">
                        <img className="rounded-2xl" src={blog.image} alt="" />

                        <div className="bg-white absolute -bottom-20 mx-5 rounded-2xl p-5 shadow-2xl">
                            <p>{blog.date}</p>
                            <h3 className="text-2xl font-bold">{blog.title}</h3>
                            <p>{blog.description}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className="pb-20 pt-10 flex justify-center">
                <Link to='/blog'>
                    <button className="btn bg-[#fc5a03] border-0 text-white hover:bg-white hover:text-[#fc5a03] px-14">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default TaskBlog;