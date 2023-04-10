import React from "react";
import { useLoaderData } from "react-router-dom";
import './JobDetails.css'

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)

    return (
        <div className="main-content">
            <div className="banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                <h2 className="text-[32px] text-[#1A1919] font-bold">Job Details</h2>
            </div>
            <div className="job-details-container">
                
            </div>
        </div>
    );
};

export default JobDetails;
