import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900 w-full">
            <div className="py-8 px-2 mx-auto max-w-screen-xl text-center lg:py-16 space-y-4">
                <h1 className="z-50 text-4xl leading-snug font-extrabold tracking-normal text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
                    Fashion your ideal apperance
                    <span className="block text-gray-1000">
                        from top to bottom
                    </span>
                </h1>

                <p className="text-base font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Discover talented fashion experts to bring your unique style
                    to life.
                </p>
                <div className="space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-6 text-sm font-hmedium text-center text-white rounded-lg bg-primary hover:bg-teal-700  dark:focus:ring-blue-900"
                    >
                        Get early access
                    </a>
                </div>
            </div>

            <div className="w-full aspect-[0.9] relative">
                <Image
                    alt="Product Image ..."
                    src={"/images/heroImage.png"}
                    className="w-full h-full"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>
        </section>
    );
}

export default Hero;
