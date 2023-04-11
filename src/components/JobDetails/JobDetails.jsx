import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import dollarColored from "../../assets/Logo/dollar-linear-colored.svg";
import calendarColored from "../../assets/Logo/calendar-linear-colored.svg";
import phoneColored from "../../assets/Logo/phone-linear-colored.svg";
import emailColored from "../../assets/Logo/email-linear-colored.svg";
import locationColored from "../../assets/Logo/location-linear-colored.svg";
import "./JobDetails.css";
import { addToDb } from "../../utilities/fakedb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
    const job = useLoaderData();
    const {
        id,
        company_name,
        job_title,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        location,
        salary,
        contact_information,
    } = job;

    const getBrowserLocation = useLocation();
    useEffect(() => {
        document.title = "Job Details - JobSearch";
    }, [getBrowserLocation]);

    const handleAddToAppliedJobs = (id) => {
        const exists = addToDb(id);
        if (!exists) {
            toast.warn(
                `You have already applied to ${job_title} job at ${company_name}.`,
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        } else {
            toast.success(
                `You have applied for ${job_title} job at ${company_name}.`,
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
    };

    return (
        <div className="main-content">
            <div className="container max-w-[1920px] mx-auto mb-[130px]">
                <div className="job-details-banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                    <h2 className="text-[32px] text-[#1A1919] font-bold">
                        Job Details
                    </h2>
                </div>
                <div className="job-details-container flex flex-col lg:flex-row mt-[130px] gap-6 mx-12">
                    <div className="left-content flex flex-col gap-y-6">
                        <p className="text-[16px] text-[#1A1919] font-bold leading-8">
                            Job Description:
                            <span className="text-[#757575] font-medium pl-1">
                                {job_description}
                            </span>
                        </p>
                        <p className="text-[16px] text-[#1A1919] font-bold leading-8">
                            Job Responsibility:
                            <span className="text-[#757575] font-medium pl-1">
                                {job_responsibility}
                            </span>
                        </p>
                        <p className="text-[16px] text-[#1A1919] font-bold leading-8">
                            Educational Requirements:
                            <span className="text-[#757575] font-medium pl-1">
                                <span className="block mt-4">
                                    {educational_requirements}
                                </span>
                            </span>
                        </p>
                        <p className="text-[16px] text-[#1A1919] font-bold leading-8">
                            Experiences:
                            <span className="text-[#757575] font-medium pl-1">
                                <span className="block mt-4">
                                    {experiences}
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="right-content ">
                        <div className="bg-[#faf8ff] lg:w-[424px] p-[30px] rounded-lg">
                            <h2 className="text-[20px] text-[#1A1919] text-center sm:text-left mt-0.5 font-bold">
                                Job Details
                            </h2>
                            <hr className="border-1 border-[#9873FF] opacity-30 my-6" />
                            <div className="flex flex-col gap-y-4">
                                <p className="flex flex-col sm:flex-row items-center gap-x-2">
                                    <img src={dollarColored} alt="" />
                                    <span className="text-[20px] text-[#474747] font-bold">
                                        Salary<span className="px-1">:</span>
                                    </span>
                                    <span className="text-[20px] text-[#757575] text-center font-medium">
                                        {salary} (Per Month)
                                    </span>
                                </p>
                                <p className="flex flex-col sm:flex-row items-center gap-x-2">
                                    <img src={calendarColored} alt="" />
                                    <span className="text-[20px] text-[#474747] text-center font-bold whitespace-nowrap">
                                        Job Title<span className="px-1">:</span>
                                    </span>
                                    <span className="text-[20px] text-[#757575] text-center sm:text-left font-medium ">
                                        {job_title}
                                    </span>
                                </p>
                            </div>
                            <h2 className="text-[20px] text-[#1A1919] text-center sm:text-left mt-8 font-bold">
                                Contact Information
                            </h2>
                            <hr className="border-1 border-[#9873FF] opacity-30 my-6" />
                            <div className="flex flex-col gap-y-4">
                                <p className="flex flex-col sm:flex-row items-center gap-x-2">
                                    <img src={phoneColored} alt="" />
                                    <span className="text-[20px] text-[#474747] font-bold">
                                        Phone<span className="px-1">:</span>
                                    </span>
                                    <span className="text-[20px] text-[#757575] text-center font-medium">
                                        {contact_information.phone}
                                    </span>
                                </p>
                                <p className="flex flex-col sm:flex-row items-center gap-x-2">
                                    <img src={emailColored} alt="" />
                                    <span className="text-[20px] text-[#474747] font-bold">
                                        Email<span className="px-1">:</span>
                                    </span>
                                    <span className="text-[20px] text-[#757575] text-center font-medium">
                                        {contact_information.email}
                                    </span>
                                </p>
                                <p className="flex flex-col sm:flex-row items-center gap-x-2">
                                    <img src={locationColored} alt="" />
                                    <span className="text-[20px] text-[#474747] font-bold">
                                        Address<span className="px-1">:</span>
                                    </span>
                                    <span className="text-[20px] text-[#757575] text-center font-medium">
                                        {location}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleAddToAppliedJobs(id)}
                            className="w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] text-[20px] font-bold px-[28px] py-[19px] mt-10 rounded-lg"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
