import Banner from "../Banner/Banner";
import EmpoweringTeams from "../EmpoweringTeams/EmpoweringTeams";
import Faq from "../FAQ/FAQ";
import Review from "../Review/Review";
import Subscription from "../Subscription/Subscription";
import TaskBlog from "../TaskBlog/TaskBlog";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <EmpoweringTeams></EmpoweringTeams>
            <TaskBlog></TaskBlog>
            <Faq></Faq>
            <Subscription></Subscription>
            <Review></Review>
        </div>
    );
};

export default Home;