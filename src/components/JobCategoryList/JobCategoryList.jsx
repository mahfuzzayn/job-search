import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";

const JobCategoryList = () => {
    const { jobCategories } = useLoaderData();

    return (
        <div className="job-category-list-section mt-[130px] mx-6">
            <div className="container flex flex-col items-center max-w-[1920px] mx-auto">
                <div className="information-container text-center">
                    <h2 className="text-[48px] text-[#1A1919] font-bold">
                        Job Category List
                    </h2>
                    <p className="text-[16px] text-[#757575] font-medium mt-4">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future
                    </p>
                </div>
                <div className="job-category-list max-w-[1320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[25px] mt-8 mx-6">
                    {jobCategories.map((jcg) => (
                        <JobCategory key={jcg.id} jcg={jcg}></JobCategory>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;
