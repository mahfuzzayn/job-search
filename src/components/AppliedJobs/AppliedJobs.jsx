import React, { useEffect, useRef, useState } from "react";
import { getAppliedJobs } from "../../utilities/fakedb";
import "./AppliedJobs.css";
import AppliedJob from "../AppliedJob/AppliedJob";
import ArrowDown from "../../assets/Logo/arrow-down.svg";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    const featuredJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [fixedAppliedJobs, setFixedAppliedJobs] = useState([]);
    const [isFilterDropdownActive, setIsFilterDropdownActive] = useState(false);
    const [filterBy, setFilterBy] = useState(["default"]);
    useEffect(() => {
        const storedAppliedJobs = getAppliedJobs();
        const appliedJobsArray = [];
        for (const id in storedAppliedJobs) {
            appliedJobsArray.push(id);
        }
        setAppliedJobs(appliedJobsArray);
        setFixedAppliedJobs(appliedJobsArray);
    }, [filterBy]);

    const handleFilterBy = (filterType) => {
        if (filterType === "remote") {
            filterBy[0] === "remote"
                ? setFilterBy(["default"])
                : setFilterBy(["remote"]);
        }
        if (filterType === "on-site") {
            filterBy[0] === "on-site"
                ? setFilterBy(["default"])
                : setFilterBy(["on-site"]);
        }
    };
    useEffect(() => {
        const allAppliedJobs = [];
        for (const jobId of fixedAppliedJobs) {
            allAppliedJobs.push(featuredJobs.find((job) => job.id === jobId));
        }
        if (filterBy[0] === "remote") {
            const remoteAppliedJobs = allAppliedJobs.filter(
                (job) => job.work_type === "Remote"
            );
            const remoteAppliedJobsId = remoteAppliedJobs.map((job) => job.id);
            setAppliedJobs(remoteAppliedJobsId);
        } else if (filterBy[0] === "on-site") {
            const onsiteAppliedJobs = allAppliedJobs.filter(
                (job) => job.work_type === "Onsite"
            );
            const onsiteAppliedJobsId = onsiteAppliedJobs.map((job) => job.id);
            setAppliedJobs(onsiteAppliedJobsId);
        }
    }, filterBy);

    let filterByRef = useRef();

    useEffect(() => {
        const closeDropdown = (e) => {
            if (!filterByRef.current.contains(e.target)) {
                setIsFilterDropdownActive(false);
            }
        };

        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
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
                    <div className="filter-section flex justify-end">
                        <div
                            className={`dropdown bg-[#F4F4F4] h-[69px] overflow-hidden max-w-[160px] text-[20px] text-[#474747] font-semibold text-right p-2 rounded-lg ${
                                isFilterDropdownActive && "dropdown-active"
                            }`}
                            ref={filterByRef}
                        >
                            <button
                                onClick={() => {
                                    setIsFilterDropdownActive(
                                        !isFilterDropdownActive
                                    );
                                }}
                                className="flex items-center gap-x-2 px-[16px] py-[15px] mb-1 outline-none"
                            >
                                Filter By
                                <img
                                    className="arrow-down"
                                    src={ArrowDown}
                                    alt=""
                                />
                            </button>
                            <div className="options flex flex-col gap-y-2">
                                <p
                                    onClick={() => handleFilterBy("remote")}
                                    className={`bg-gray-200 hover:bg-gray-300 text-center cursor-pointer rounded-lg ${
                                        filterBy[0] === "remote" &&
                                        "filter-by-active"
                                    }`}
                                >
                                    <span>Remote</span>
                                </p>
                                <p
                                    onClick={() => handleFilterBy("on-site")}
                                    className={`bg-gray-200 hover:bg-gray-300 text-center cursor-pointer rounded-lg ${
                                        filterBy[0] === "on-site" &&
                                        "filter-by-active"
                                    }`}
                                >
                                    <span>On-site</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="applied-jobs-container flex flex-col gap-y-6 mt-8">
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
