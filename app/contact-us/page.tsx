"use client";
import Image from "next/image";
import { useState } from 'react';



import ConnectWithUs from "@/components/ConnectWithUs";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
       
    };

   
  const handleSubmit = async (e:any) => {
      e.preventDefault();
      const { name, email, message } = formData;

      
              

  const response = await fetch('/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        to: 'JCkfxhxt9S45cgIma7sE3N ', 
    }),
  });

  const result = await response.json();

      if (result.success) {
          console.log('Message sent:', result.messageResponse);

       
          setFormData({
              name: '',
              email: '',
              message: '' 
          });
      } else {
          console.error('Error sending message:', result.error);
      }
};

       
    
    return (
        <section className="md:flex md:flex-row  md:space-y-6 md:mb-[150px]">
            <div className="w-full md:flex md:flex-col justify-between items-center">
                <div className="pr-4">
                    <h3 className=" py-3 pt-4 text-[24px] leading-[36px] text-center font-hmedium tracking-wide text-gray-1000">
                        Contact Our Team

                    </h3>
                    <p className=" text-gray-1000 font-hroman text-[16px] leading-[21px] text-center">Got any questions about the product or scaling on our platform? We're here to help.</p>

                </div>
                <ConnectWithUs
                    containerStyles="hidden md:block"
                
                />
                
            </div>
               
            <div className="h-[405px] lg:h-full mt-6 w-full border-2 border-gray-500 rounded-lg p-4 mb-4">

                <form className=" mx-auto w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-x-3 mb-3">
                       
                           
                        <div className="">
                            <label
                                htmlFor="name"
                                className="text-start block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={formData.name}
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
                            name='email'
                            value={formData.email}
                            className="border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="message"
                            className="text-start block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full h-[135px] rounded-lg" name="message"
                            id="message" cols={5} rows={10}
                            onChange={handleChange}
                            value={formData.message}
                            required
                        ></textarea> <br></br>
                    </div>

                    <button
                        type="submit"
                        className="mb-5 text-white bg-primary hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-hmedium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send
                    </button>

                    
                </form>
            </div>
            <ConnectWithUs containerStyles=" md:hidden mb-[100px]"
            />

           

            

           
        </section>
    );
}

export default ContactUs;
