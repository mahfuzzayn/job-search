import React from "react";
import socialMediaIcons from "../../assets/Icons/Group 9969.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#1A1919]">
            <div className="container max-w-[1920px] mx-auto px-12 lg:px-20 ">
                <div className="top-section flex flex-col md:flex-row justify-between gap-x-[137px] gap-y-12 pt-[130px] pb-[50px]">
                    <div className="information-container flex flex-col gap-y-5 max-w-[300px] text-[#FFFFFF]">
                        <h2 className="text-[32px] font-bold">JobSearch</h2>
                        <p className="text-[16px] text-[#ffffff]/70">
                            There are many variations of passages of Lorem Ipsum
                            , but the majority have suffered alteration in some
                            form.
                        </p>
                        <div className="social-media-icons">
                            <img src={socialMediaIcons} alt="" />
                        </div>
                    </div>
                    <div className="navigation-links-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[#FFFFFF] gap-x-[137px] gap-y-6">
                        <div className="company">
                            <h2 className="text-[20px] font-semibold">
                                Company
                            </h2>
                            <ul className="text-[#FFFFFF]/70 mt-3 leading-10">
                                <li>
                                    <Link to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/work">Work</Link>
                                </li>
                                <li>
                                    <Link to="/latest-news">Latest News</Link>
                                </li>
                                <li>
                                    <Link to="/careers">Careers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="product">
                            <h2 className="text-[20px] font-semibold">
                                Product
                            </h2>
                            <ul className="text-[#FFFFFF]/70 mt-3 leading-10">
                                <li>
                                    <Link to="/prototype">Prototype</Link>
                                </li>
                                <li>
                                    <Link to="/plans-&-pricing">
                                        Plans & Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customers">Customers</Link>
                                </li>
                                <li>
                                    <Link to="/integrations">Integrations</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="support">
                            <h2 className="text-[20px] font-semibold">
                                Support
                            </h2>
                            <ul className="text-[#FFFFFF]/70 mt-3 leading-10">
                                <li>
                                    <Link to="/help-desk">Help Desk</Link>
                                </li>
                                <li>
                                    <Link to="/sales">Sales</Link>
                                </li>
                                <li>
                                    <Link to="/become-a-partner">
                                        Become a Partner
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/developers">Developers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h2 className="text-[20px] font-semibold">
                                Contact
                            </h2>
                            <ul className="text-[#FFFFFF]/70 mt-3 leading-10">
                                <li>524 Broadway , NYC</li>
                                <li>+1 777 - 978 - 5570</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span className="m-4">
                    <hr className="border-1 h-[2px] w-full border-[#7E90FE]/20" />
                </span>
                <div className="bottom-section pt-[50px] pb-[130px]">
                    <div className="copyright-information flex flex-col sm:flex-row justify-between text-[14px] text-[#FFFFFF]/40 text-center gap-6">
                        <p>
                            @2023{" "}
                            <span className="font-semibold">JobSearch.</span>{" "}
                            All Rights Reserved
                        </p>
                        <p>
                            Powered by{" "}
                            <span className="font-bold">JobSearch</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
