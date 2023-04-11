import React from "react";
import Banner from "../Banner/Banner";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div className="home-section">
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
