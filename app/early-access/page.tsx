import Image from "next/image";
import React from "react";

function EarlyAccess() {
    return (
        <section>
            <div>
                <div className="w-full aspect-[0.9] relative bg-gray-200  rounded-xl">
                    <Image
                        alt="Product Image ..."
                        src={"/images/dashboard.png"}
                        className="w-full h-full pt-6"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>

            <div className="text-center flex flex-col items-center justify-center space-y-2 py-5">
                <p className="text-xs bg-[#D9ECEC] w-fit px-2 py-1 rounded-md font-hammer tracking-wider">
                    LAUNCHING LATE 2024
                </p>

                <h1 className="font-hmedium text-2xl">Get early access</h1>

                <p className="leading-7">
                    We want to build a product for you, with you. Join our
                    community to be a part of our journey, shape our product and
                    be the first to access atelyo.
                </p>

                <form className="max-w-sm mx-auto">
                    <div className="flex flex-row gap-x-3 mb-3">
                        <div className="">
                            <label
                                htmlFor="email"
                                className="text-start block mb-1 text-sm font-medium text-gray-1000 dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="first-name"
                                id="text"
                                className="border-gray-500 border-[1px]  text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="email"
                                className="text-start block mb-1 text-sm font-medium text-gray-1000 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="first-name"
                                id="text"
                                className="border-gray-500 border-[1px]  text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="text-start block mb-1 text-sm  text-gray-1000 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-500 text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mb-5 text-white bg-primary hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-hmedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>

                    <div className="flex items-start">
                        <input
                            id="link-checkbox"
                            type="checkbox"
                            value=""
                            className="w-5 h-5 text-teal-600  border-gray-1000 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="link-checkbox"
                            className="ms-2 text-start text-sm font-medium text-gray-900 dark:text-gray-300 leading-6"
                        >
                            By ticking this box, you agree to Ateylo to contact you
                            and Terms & Conditions. We won't share your data.
                            View our Terms & Conditions and Privacy Policy.
                        </label>
                    </div> 
                </form>
            </div>
        </section>
    );
}

export default EarlyAccess;
