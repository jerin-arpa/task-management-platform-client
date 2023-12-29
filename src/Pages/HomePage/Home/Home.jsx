import Banner from "../Banner/Banner";
import EmpoweringTeams from "../EmpoweringTeams/EmpoweringTeams";
import Faq from "../FAQ/FAQ";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <EmpoweringTeams></EmpoweringTeams>
            <Faq></Faq>
        </div>
    );
};

export default Home;