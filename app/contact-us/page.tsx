import Image from "next/image";
import React from "react";

function ContactUs() {
    return (
        <section>
            <div>
               <h3 className=" py-3 pt-4 text-[24px] leading-[36px] text-center font-hmedium tracking-wide text-gray-1000">
                    Contact Our Team
                    
                </h3>
                <p className=" text-gray-1000 font-hroman text-[16px] leading-[21px] text-center">Got any questions about the product or scaling on our platform? We're here to help.</p>
            </div>
            <div className="h-[405px] mt-6 w-full border-2 border-gray-500 rounded-lg p-4 mb-20">

                <form className="max-w-sm mx-auto">
                    <div className="flex flex-col gap-x-3 mb-3">
                       
                           
                        <div className="">
                            <label
                                htmlFor="email"
                                className="text-start block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
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
                            className="border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="email"
                            className="text-start block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Message
                        </label>
                       <textarea className="w-full h-[135px] rounded-lg" name="message" id="message" cols={5} rows={10}></textarea> <br></br>
                    </div>

                    <button
                        type="submit"
                        className="mb-5 text-white bg-primary hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-hmedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send
                    </button>

                    
                </form>
            </div>

            

           
        </section>
    );
}

export default ContactUs;
