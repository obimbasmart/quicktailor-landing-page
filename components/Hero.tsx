import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="flex flex-col bg-white dark:bg-gray-900 w-full md:flex-row md:px-20 py-8 md:max-w-[2000px]">
            <div className="px-2 mx-auto max-w-screen-xl text-center lg:py-16 space-y-4 md:text-start pb-8">
                <h1 className="z-50 text-4xl leading-snug font-extrabold tracking-normal text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
                    Fashion your ideal apperance
                    <span className="block text-gray-1000">
                        from top to bottom
                    </span>
                </h1>

                <p className="text-base text-left font-normal text-gray-900 lg:text-xl leading-7  dark:text-gray-400 w-full">
                    Connect with skilled artisans for custom-made clothing and
                    footwear that fit your style and body perfectly.
                </p>
                <Link
                    prefetch
                    className="inline-flex justify-center items-center py-3 px-6 text-sm font-hmedium text-center text-white rounded-lg bg-primary hover:bg-teal-700  dark:focus:ring-blue-900"
                    href="/early-access"
                >
                    Get early access
                </Link>
            </div>

            <div className="w-full aspect-[0.9] relative md:w-1/3 md:aspect-[1.5]">
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
