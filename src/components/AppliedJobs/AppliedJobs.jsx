import React, { useEffect, useState } from "react";
import { getAppliedJobs } from "../../utilities/fakedb";
import "./AppliedJobs.css";
import AppliedJob from "../AppliedJob/AppliedJob";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    const featuredJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedAppliedJobs = getAppliedJobs();
        const appliedJobsArray = [];
        for (const id in storedAppliedJobs) {
            appliedJobsArray.push(id);
        }
        setAppliedJobs(appliedJobsArray);
    }, []);

    return (
        <div className="main-content">
            <div className="container max-w-[1920px] mx-auto">
                <div className="applied-jobs-banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                    <h2 className="text-[32px] text-[#1A1919] font-bold">
                        Applied Jobs
                    </h2>
                </div>
                <div className="applied-jobs-section mt-[227px] mx-12">
                    <div className="applied-jobs-container flex flex-col gap-y-6">
                        {appliedJobs.map((job) => (
                            <AppliedJob
                                key={job}
                                jobId={job}
                                featuredJobs={featuredJobs}
                            ></AppliedJob>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
