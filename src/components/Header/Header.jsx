import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
    return (
        <header className="header bg-[#faf8ff] pt-[60px] px-6">
            <div className="container max-w-[1920px] flex justify-around items-center mx-auto">
                <h2 className="text-[32px] text-[#1A1919] font-extrabold">
                    <Link to="/">JobSearch</Link>
                </h2>
                <nav>
                    <ul className="flex gap-x-[42px] text-[#757575] text-[16px] font-medium">
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
