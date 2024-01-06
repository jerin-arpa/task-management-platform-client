import DashboardSection from "../../../Component/DashboardSection/DashboardSection";


const CreateTask = () => {

    const handleAddTask = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const priority = e.target.priority.value;

        console.log(title, description, priority)
    }

    return (
        <div>
            <DashboardSection
                title='Create Task'
            ></DashboardSection>


            <div className="flex justify-center mt-20">
                <div className="shadow-2xl bg-base-100 w-1/2 rounded-xl">
                    <form onSubmit={handleAddTask} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select defaultValue='Priority'
                                name="priority" className="select select-bordered">
                                <option disabled>Priority</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                        </label>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#fc5a03] border-2 text-white hover:bg-white hover:text-[#fc5a03] hover:border-[#fc5a03]">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;