import React from "react";
import "./Statistics.css";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const assignmentMarks = [
    {
        name: "A1",
        mark: 60,
    },
    {
        name: "A2",
        mark: 60,
    },
    {
        name: "A3",
        mark: 60,
    },
    {
        name: "A4",
        mark: 60,
    },
    {
        name: "A5",
        mark: 60,
    },
    {
        name: "A6",
        mark: 60,
    },
    {
        name: "A7",
        mark: 60,
    },
    {
        name: "A8",
        mark: 60,
    },
];

const Statistics = () => {
    return (
        <div className="main-content">
            <div className="container max-w-[1920px] mx-auto mb-[130px]">
                <div className="statistics-banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                    <h2 className="text-[32px] text-[#1A1919] font-bold">
                        Statistics
                    </h2>
                </div>
                <div className="assignment-mark-chart-container mt-[130px]">
                    <h2 className="text-[40px] text-[#1A1919] font-bold text-center linear-text mb-10 mx-6">
                        Your past {assignmentMarks.length} Assignment Marks
                    </h2>
                    <div className="sameDataComposedChart mx-6">
                        <ResponsiveContainer width="100%" height={400}>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={assignmentMarks}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="mark"
                                    barSize={20}
                                    fill="#9873FF"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="mark"
                                    stroke="#7E90FE"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
