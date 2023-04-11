import React from "react";
import "./ErrorPage.css";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="error-page-section">
            <div className="container max-w-[1920px] mx-auto mb-[130px]">
                <div className="error-page-banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                    <h1 className="text-9xl text-[#1A1919] linear-text font-bold">
                        404
                    </h1>
                </div>
                <div className="error-page-information text-center mt-[130px] mx-6">
                    <h2 className="text-5xl text-[#1A1919] font-bold">Oops</h2>
                    <p className="text-xl text-[#757575] font-medium mt-4">
                        The page you are looking for{" "}
                        <span className="text-red-500">
                            {location.pathname}
                        </span>{" "}
                        is not available
                    </p>
                    <button className="text-[#FFFFFF] text-[20px] font-bold mt-8">
                        <Link
                            to={"/"}
                            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-[20.75px] pt-[12px] pb-[12.5px] rounded-lg whitespace-nowrap"
                        >
                            Go Home
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
