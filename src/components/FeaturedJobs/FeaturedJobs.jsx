import React, { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch("featured-jobs.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
    }, []);

    return (
        <div className="featured-jobs-section mt-[130px] mx-6">
            <div className="container flex flex-col items-center max-w-[1920px] mx-auto">
                <div className="information-container text-center">
                    <h2 className="text-[48px] text-[#1A1919] font-bold">
                        Featured Jobs
                    </h2>
                    <p className="text-[16px] text-[#757575] font-medium mt-4">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future
                    </p>
                </div>
                <div className="featured-jobs w-full max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-8 mx-6">
                    {featuredJobs.map((featuredJob) => (
                        <FeaturedJob
                            key={featuredJob.id}
                            featuredJob={featuredJob}
                        ></FeaturedJob>
                    ))}
                </div>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] text-[20px] font-bold px-[28px] py-[19px] mt-10 rounded-lg">
                    See All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
