import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css'

const titles = {
    "/": "Home - JobSearch",
    "/statistics": "Statistics - JobSearch",
    "/applied-jobs": "Applied Jobs - JobSearch",
    "/blog": "Blog - JobSearch",
};

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = titles[location.pathname] ?? "JobSearch";
    }, [location]);

    return (
        <header className="header bg-[#faf8ff] pt-[60px] px-6">
            <div className="container max-w-[1920px] flex flex-col md:flex-row md:justify-around items-start md:items-center gap-y-8 mx-auto">
                <h2 className="text-[32px] text-[#1A1919] font-extrabold">
                    <Link to="/">JobSearch</Link>
                </h2>
                <nav>
                    <ul className="flex flex-col sm:flex-row gap-x-[42px] text-[#757575] text-[16px] font-medium">
                        <li>
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/statistics">Statistics</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/applied-jobs">
                                Applied Jobs
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/blog">Blog</ActiveLink>
                        </li>
                    </ul>
                </nav>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] text-[20px] font-bold px-[28px] py-[19px] rounded-lg">
                    Star Applying
                </button>
            </div>
        </header>
    );
};

export default Header;
