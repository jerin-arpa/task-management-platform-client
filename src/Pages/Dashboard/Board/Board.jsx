import { useLoaderData } from "react-router-dom";
import DashboardSection from "../../../Component/DashboardSection/DashboardSection";

const Board = () => {
  const boardData = useLoaderData();
  console.log(boardData);

  return (
    <div>
      <DashboardSection title="Board(By Status)"></DashboardSection>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="p-5 shadow-2xl rounded-xl">
          <h3
            className="text-[#fc5a03]
                    text-xl font-bold uppercase mb-3"
          >
            Pending
          </h3>

          <div>
            {boardData?.map((board) => (
              <div key={board?._id} className="shadow-xl p-5 rounded-xl mb-5">
                <h2 className="font-bold text-lg my-2">{board?.title}</h2>
                <p>{board?.description}</p>
                <div className="font-bold flex justify-start my-2 mt-4 ">
                  <div
                    className="text-white px-4 py-2"
                    style={{
                      backgroundColor:
                        board?.priority === "High"
                          ? "red"
                          : board?.priority === "Moderate"
                          ? "green"
                          : "skyblue",
                    }}
                  >
                    {board?.priority}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 shadow-2xl rounded-xl">
          <h3
            className="text-[#fc5a03]
                    text-xl font-bold uppercase"
          >
            In Progress
          </h3>
        </div>

        <div className="p-5 shadow-2xl rounded-xl">
          <h3
            className="text-[#fc5a03]
                    text-xl font-bold uppercase"
          >
            Complete
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Board;
