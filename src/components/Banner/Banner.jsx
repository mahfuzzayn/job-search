import React from "react";
import bannerImage from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-section bg-[#faf8ff] pt-[60px] px-6 md:px-12">
            <div className="container max-w-[1920px] flex flex-col md:flex-row md:justify-center item-start md:items-end gap-[35px] mx-auto">
                <div className="content max-w-[570px] md:mb-[136px]">
                    <h2 className="text-[60px] lg:text-[80px] text-[#1A1919] font-bold leading-[80px] lg:leading-[100px]">
                        One Step Closer To Your{" "}
                        <span className="linear-text">Dream Job</span>
                    </h2>
                    <p className="text-[18px] text-[#757575] font-medium mt-6">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future. Come find it.
                        Manage all your job application from start to finish.
                    </p>
                    <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] text-[20px] font-bold px-[28px] py-[19px] mt-8 rounded-lg">
                        Get Started
                    </button>
                </div>
                <div className="banner">
                    <img
                        className="w-full max-w-[816px] md:min-w-[408px]"
                        src={bannerImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
