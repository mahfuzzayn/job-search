import React, { useEffect, useState } from "react";
import locationIcon from "../../assets/Logo/location.svg";
import dollarIcon from "../../assets/Logo/dollar.svg";
import { Link } from "react-router-dom";

const AppliedJob = ({ jobId, featuredJobs }) => {
    const [appliedJob, setAppliedJob] = useState({});
    useEffect(() => {
        const getAppliedJob = featuredJobs.filter((job) => job.id === jobId);
        setAppliedJob(getAppliedJob[0]);
    }, []);
    const {
        job_id,
        company_name,
        job_title,
        job_type,
        location,
        logo,
        salary,
        work_type,
    } = appliedJob;
    return (
        <div className="applied-job flex flex-col md:flex-row justify-between items-center gap-8 border-2 border-[#E8E8E8] p-[30px] rounded-lg">
            <div className="box w-full flex flex-col sm:flex-row gap-x-8 h-full items-center">
                <div className="image h-[240px] w-full max-w-[240px] bg-[#F4F4F4] flex justify-center items-center p-4 rounded-lg">
                    <img src={logo} alt="" />
                </div>
                <div className="information">
                    <h2 className="text-[24px] text-[#474747] font-bold mt-8">
                        {job_title}
                    </h2>
                    <p className="text-[20px] text-[#757575] font-semibold mt-2">
                        {company_name}
                    </p>
                    <p className="flex flex-col sm:flex-row gap-4 mt-4">
                        <span className="linear-text w-fit px-[19px] py-[9px] border-2 border-[#7E90FE] rounded-[4px]">
                            {work_type}
                        </span>
                        <span className="linear-text w-fit px-[19px] py-[9px] border-2 border-[#7E90FE] rounded-[4px]">
                            {job_type}
                        </span>
                    </p>
                    <p className="flex flex-col sm:flex-row gap-x-6 gap-y-2 mt-4">
                        <span className="flex gap-x-2">
                            <img src={locationIcon} alt="" />
                            <span className="text-[20px] text-[#757575] font-semibold">
                                {location}
                            </span>
                        </span>
                        <span className="flex gap-x-2">
                            <img src={dollarIcon} alt="" />
                            <span className="text-[20px] text-[#757575] font-semibold">
                                {salary}
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <button className="text-[#FFFFFF] text-[20px] font-bold lg:mr-[17px] mt-6 md:mt-0">
                <Link
                    to={`/job/${job_id}`}
                    className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-[20.75px] pt-[12px] pb-[12.5px] rounded-lg whitespace-nowrap"
                >
                    View Details
                </Link>
            </button>
        </div>
    );
};

export default AppliedJob;
