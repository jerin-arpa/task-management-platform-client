import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <img src={user.photoURL} alt="" />

            <h2>{user.displayName}</h2>
        </div>
    );
};

export default Profile;