import React from "react";

const JobCategory = ({ jcg }) => {
    const { id, logo, name, jobs_available } = jcg;
    return (
        <div className="job-category max-w-[312px] bg-[#faf8ff] p-10 rounded-lg">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
            <h2 className="text-[20px] text-[#474747] font-bold mt-8">{name}</h2>
            <p className="text-[16px] text-[#A3A3A3] mt-2">{jobs_available} Jobs Available</p>
        </div>
    );
};

export default JobCategory;
