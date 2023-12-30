import { useEffect, useState } from "react";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 pb-20">
                {
                    blogs.map(blog => <div
                        key={blog.id}
                        className="relative mb-20">
                        <img className="rounded-2xl" src={blog.image} alt="" />

                        <div className="bg-white absolute -bottom-20 mx-5 rounded-2xl p-5">
                            <p>{blog.date}</p>
                            <h3 className="text-2xl font-bold">{blog.title}</h3>
                            <p>{blog.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;