"use client";
import Image from "next/image";
import { useState } from 'react';

function EarlyAccess() {
    const [formData, setFormData] = useState({
        last_name: '',
        first_name: '',
        email: '',
        agree: false 
    });

    const handleChange = (e: any) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        console.log(formData);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { first_name, email, last_name, agree } = formData;

    
        const response = await fetch('/api/waitList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Name: ${first_name + ' ' + last_name} \nEmail: ${email}`,
                to: 'JCkfxhxt9S45cgIma7sE3N', // recipient's WhatsApp number
            }),
        });

        const result = await response.json();

        if (result.success) {
            console.log('Message sent:', result.messageResponse);

          
            setFormData({
                last_name: '',
                first_name: '',
                email: '',
                agree: false 
            });
        } else {
            console.error('Error sending message:', result.error);
        }
    };

    return (
        <section className="flex flex-col md:flex-row md:py-6">
            <div className="w-full aspect-[0.9] relative bg-gray-200  rounded-xl md:w-[50%]">
                <Image
                    alt="Product Image ..."
                    src={"/images/dashboard.png"}
                    className="w-full h-full pt-1/3"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>

            <div className="text-center flex flex-col items-center  space-y-2 py-5 md:px-5 md:pt-0">
                <p className="text-xs bg-[#D9ECEC] w-fit px-2 py-1 rounded-md font-hammer tracking-wider">
                    LAUNCHING LATE 2024
                </p>

                <h1 className="font-hmedium text-2xl md:text-4xl">Get early access</h1>

                <p className="leading-7 md:text-xl">
                    We want to build a product for you, with you. Join our
                    community to be a part of our journey, shape our product and
                    be the first to access atelyo.
                </p>

                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-x-3 mb-3">
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

                    <div className="mb-5">
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

                    <div className="flex items-start mb-4">
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
                            you and Terms & Conditions. We won't share your
                            data. View our Terms & Conditions and Privacy
                            Policy.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mb-5 text-white bg-primary hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-hmedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EarlyAccess;
