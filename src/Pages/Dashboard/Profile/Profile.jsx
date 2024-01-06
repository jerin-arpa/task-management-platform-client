import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardSection from "../../../Component/DashboardSection/DashboardSection";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <DashboardSection
                title='Profile'
            ></DashboardSection>

            <div className="flex gap-5 p-8">
                <img className="w-44 h-44 rounded-full" src={user.photoURL} alt="" />
                <div className="flex items-center ">
                    <div>
                        <h2 className="text-[#fc5a03] text-2xl font-bold uppercase">{user.displayName}</h2>
                        <p className="text-lg font-bold">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;