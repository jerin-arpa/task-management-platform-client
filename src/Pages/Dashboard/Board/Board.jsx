import DashboardSection from "../../../Component/DashboardSection/DashboardSection";


const Board = () => {
    return (
        <div>
            <DashboardSection
                title='Board(By Status)'
            ></DashboardSection>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="p-5 shadow-2xl rounded-xl">
                    <h3 className="text-[#fc5a03]
                    text-lg font-bold uppercase">Pending</h3>
                </div>

                <div className="p-5 shadow-2xl rounded-xl">
                    <h3 className="text-[#fc5a03]
                    text-lg font-bold uppercase">In Progress</h3>
                </div>

                <div className="p-5 shadow-2xl rounded-xl">
                    <h3 className="text-[#fc5a03]
                    text-lg font-bold uppercase">Complete</h3>
                </div>
            </div>
        </div>
    );
};

export default Board;