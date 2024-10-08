"use client";
import Image from "next/image";
import { useState } from "react";

function EarlyAccess() {
    const [formData, setFormData] = useState({
        last_name: "",
        first_name: "",
        email: "",
        agree: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { first_name, email, last_name, agree } = formData;

        setIsLoading(true);

        const response = await fetch("/api/waitList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: `Name: ${
                    first_name + " " + last_name
                } \nEmail: ${email}`,
                to: "JCkfxhxt9S45cgIma7sE3N", // recipient's WhatsApp number
            }),
        });

        const result = await response.json();

        if (result.success) {
            setFormData({
                last_name: "",
                first_name: "",
                email: "",
                agree: false,
            });
            setIsLoading(false);
            setIsSubmitted(true);
        } else {
            console.error("Error sending message:", result.error);
        }
    };

    return (
        <section className="flex flex-col md:flex-row md:py-6">
            <div className="w-full aspect-[0.9] relative bg-gray-200  rounded-xl md:w-[50%]">
                <Image
                    alt="Product Image ..."
                    src={"/images/dashboard.png"}
                    className="w-full h-full pt-5 md:pt-0"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>

            <div className="text-center flex flex-col items-center  space-y-2 py-5 md:px-5 md:pt-0">
                <p className="text-xs bg-[#D9ECEC] w-fit px-2 py-1 rounded-md font-hammer tracking-wider">
                    LAUNCHING LATE 2024
                </p>

                <h1 className="font-hmedium text-2xl md:text-4xl">
                    Get early access
                </h1>

                <p className="leading-7 md:text-xl">
                    We want to build a product for you, with you. Join our
                    community to be a part of our journey, shape our product and
                    be the first to access atelyo.
                </p>

                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div
                        className={`flex flex-row gap-x-3 mb-3 ${
                            isSubmitted && "hidden"
                        }`}
                    >
                        <div className="w-1/2">
                            <label
                                htmlFor="first_name"
                                className="text-start block mb-1 text-sm font-medium text-gray-1000 dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="text"
                                name="first_name"
                                value={formData.first_name}
                                className="border-gray-500 border-[1px]  text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="last_name"
                                className="text-start block mb-1 text-sm font-medium text-gray-1000 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="text"
                                name="last_name"
                                value={formData.last_name}
                                className="border-gray-500 border-[1px]  text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={`mb-5 ${isSubmitted && "hidden"}`}>
                        <label
                            htmlFor="email"
                            className="text-start block mb-1 text-sm  text-gray-1000 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            className="border border-gray-500 text-gray-1000 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        className={`flex items-start mb-4 ${
                            isSubmitted && "hidden"
                        }`}
                    >
                        <input
                            id="link-checkbox"
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="w-5 h-5 text-teal-600  border-gray-1000 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="link-checkbox"
                            className="ms-2 text-start text-sm font-medium text-gray-900 dark:text-gray-300 leading-6"
                        >
                            By ticking this box, you agree to Ateylo to contact
                            you. We won't share your
                            data. View our Terms & Conditions and Privacy
                            Policy.
                        </label>
                    </div>

                    <button
                        disabled={!formData.agree || isSubmitted}
                        type="submit"
                        className={`flex items-center justify-center mb-5 text-white   focus:outline-none  font-hmedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
                            formData.agree
                                ? "bg-primary hover:bg-teal-700"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        {!isLoading && "Submit"}{" "}
                        {isSubmitted &&
                            "Thank you! Your submission has been received!"}
                        <svg
                            className={`animate-spin ${!isLoading && "hidden"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 4335 4335"
                            width="20"
                            height="20"
                        >
                            <path
                                fill="#ffffff"
                                d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EarlyAccess;
