import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="main-content blog">
            <div className="blog-banner h-[272px] bg-[#faf8ff] flex justify-center items-center">
                <h2 className="text-[32px] text-[#1A1919] font-bold">Blog</h2>
            </div>
            <div className="container max-w-[1920px] mx-auto mb-[130px]">
                <div className="blog-section mt-[130px] mx-12">
                    <div className="blog-header">
                        <h1 className="text-[36px] sm:text-[48px] font-bold text-[#1A1919] text-center">
                            Questions
                        </h1>
                    </div>
                    <div className="questions text-[#1A1919] text-justify mt-10">
                        <div className="container max-w-[1280px] flex flex-col gap-y-8 mx-auto">
                            <div className="question question-1">
                                <h3 className="text-[24px] font-semibold">
                                    1. When should you use context API?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        The Context API in React should be used
                                        when there is a need to pass data or
                                        state down to multiple levels of
                                        components in a React application. It is
                                        particularly useful when working with
                                        complex components where it can be
                                        difficult to pass data between different
                                        components at different levels. By using
                                        the Context API, you can avoid prop
                                        drilling and making your code more
                                        concise and easier to maintain.
                                        Additionally, it can be used to manage
                                        the global state in a React application,
                                        allowing you to share data and state
                                        between components without having to
                                        pass it down through props.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-2">
                                <h3 className="text-[24px] font-semibold">
                                    2. What is a custom hook?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        Custom hook is a JavaScript function
                                        that enables you to extract reusable
                                        logic from a component. By creating a
                                        custom hook, you can share stateful
                                        logic between components without
                                        duplicating code, making your codebase
                                        more efficient and easier to maintain.
                                        Custom hooks are a powerful tool for
                                        managing state and can be used to brief
                                        complex behavior, such as API requests,
                                        form validation, or animation sequences.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-3">
                                <h3 className="text-[24px] font-semibold">
                                    3. What is useRef?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        useRef is a hook in React that allows
                                        you to create a mutable reference that
                                        can be persisted across re-renders of a
                                        functional component. The useRef hook
                                        returns an object with a current
                                        property that can be used to store and
                                        access the current value of the
                                        reference. This can be useful for
                                        holding references to DOM elements,
                                        tracking the previous value of a state
                                        variable, or any other mutable value
                                        that needs to be accessed across
                                        multiple renders of a component. Unlike
                                        state variables or props, changes to the
                                        current property of a useRef reference
                                        do not trigger a re-render of the
                                        component.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-4">
                                <h3 className="text-[24px] font-semibold">
                                    4. What is useMemo?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        useMemo is a hook in React that allows
                                        you to memoize the result of a function
                                        call and cache it so that it can be
                                        reused across multiple renders of a
                                        component. This can be useful for
                                        optimizing performance in cases where a
                                        function call is costly and may not need
                                        to be executed on every render. useMemo
                                        takes two arguments: the first is a
                                        function that returns a value, and the
                                        second is an array of dependencies. If
                                        any of the dependencies change between
                                        renders, the function will be
                                        re-executed and the result will be
                                        cached. If none of the dependencies
                                        change, the cached result will be
                                        returned without re-executing the
                                        function.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
