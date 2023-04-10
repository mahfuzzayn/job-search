import React from "react";
import locationIcon from "../../assets/Logo/location.svg";
import dollarIcon from "../../assets/Logo/dollar.svg";

const FeaturedJob = ({ featuredJob }) => {
    const {
        id,
        logo,
        job_title,
        company_name,
        work_type,
        job_type,
        location,
        salary,
    } = featuredJob;
    return (
        <div className="featured-job w-full max-w-[648px] border-2 border-[#E8E8E8] rounded-lg pt-10 pl-10 pb-[51px]">
            <img src={logo} alt="" />
            <h2 className="text-[24px] text-[#474747] font-bold mt-8">
                {job_title}
            </h2>
            <p className="text-[20px] text-[#757575] font-semibold mt-2">
                {company_name}
            </p>
            <p className="flex gap-x-4 mt-4">
                <span className="linear-text linear-text px-[19px] py-[9px] border-2 border-[#7E90FE] rounded-[4px]">
                    {work_type}
                </span>
                <span className="linear-text px-[19px] py-[9px] border-2 border-[#7E90FE] rounded-[4px]">
                    {job_type}
                </span>
            </p>
            <p className="flex gap-x-6 mt-4">
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
            <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] text-[20px] font-bold px-[18px] py-[11px] mt-6 rounded-lg">
                View Details
            </button>
        </div>
    );
};

export default FeaturedJob;
