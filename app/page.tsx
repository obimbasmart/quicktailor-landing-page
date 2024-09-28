import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItworks from "@/components/HowItworks";
import { FEATURES } from "@/constants";
import Accordion from "@/components/Accordion";
import { FAQ } from "@/constants";
import Image from "next/image";
import AccordionGroup from "@/components/AccordionGroup";
import ExpertFeatures from "@/components/ExpertFeatures";
import { CustomCarousel } from "@/components/Carousel";

export default function Home() {
    return (
        <main>
            <section>
                <Hero />
            </section>
            <section className="py-6">
                <h2 className="font-hmedium text-xl text-center mb-4">
                    Witness Our Standout Features
                </h2>

                <div className="flex flex-col md:flex-row gap-6 md:px-20">
                    {FEATURES.map((item) => (
                        <Features
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </section>

            <HowItworks />

            <section className="text-center py-8 space-y-3">
                <div className="mx-auto max-w-screen-xl text-center lg:py-16 space-y-3 px-2">
                    <h1 className="text-2xl font-hmedium">
                        Get Early Access: Join 200+ Users Before Launch!
                    </h1>
                    <p className="text-base font-hregular text-gray-1000">
                        Get ahead by joining now for exclusive early access, and
                        start creating or discovering your perfect style before
                        our official launch!
                    </p>
                </div>
                <div className="sm:flex-row sm:justify-center sm:space-y-0">
                    <a
                        href="/early-access"
                        className="inline-flex justify-center items-center py-3 px-6 text-sm font-hmedium text-center text-white rounded-lg bg-primary hover:bg-teal-700  dark:focus:ring-blue-900"
                    >
                        Join the Waitlist
                    </a>
                </div>
            </section>

            <CustomCarousel />

            <section className="py-4">
                <div className="mx-auto max-w-screen-xl text-center lg:py-16 space-y-3 mb-3">
                    <h1 className="text-2xl font-hmedium">
                        Frequently asked questions
                    </h1>
                    <p className="text-base font-hregular text-gray-1000">
                        Get quick answers to your most common questions
                    </p>

                    <form className="max-w-md mx-auto">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none bg-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                >
                                    <path
                                        d="M14.5833 15.0833L18.3333 18.8333"
                                        stroke="#CECECE"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M16.6667 9.66675C16.6667 5.52461 13.3089 2.16675 9.16669 2.16675C5.02455 2.16675 1.66669 5.52461 1.66669 9.66675C1.66669 13.8089 5.02455 17.1667 9.16669 17.1667C13.3089 17.1667 16.6667 13.8089 16.6667 9.66675Z"
                                        stroke="#CECECE"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="placeholder:text-gray-1000 block w-full px-3 py-2 ps-10 text-sm text-gray-1000 border border-gray-500 rounded-lg  focus:ring-teal-500 focus:ring-[1px] focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Search for questions..."
                                required
                            />
                        </div>
                    </form>
                </div>

                <AccordionGroup />
            </section>

            <section className="bg-gray-1000 pt-10 rounded-2xl px-4 my-5">
                <div className="text-center space-y-5">
                    <h3 className="text-gray-700 text-xl font-hmedium">
                        Don't miss out on the advantages,{" "}
                        <span className="text-white">download the app now</span>
                    </h3>

                    <div className="flex flex-row items-center justify-evenly">
                        <Image
                            src="/images/applestore.png"
                            alt="apple store ..."
                            width={147}
                            height={50}
                        />
                        <Image
                            src="/images/playstore.png"
                            alt="apple store ..."
                            width={147}
                            height={50}
                        />
                    </div>
                </div>

                <div className="w-full aspect-[0.9] relative">
                    <Image
                        alt="Product Image ..."
                        src={"/images/mobile.png"}
                        className="w-full h-full"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </section>
        </main>
    );
}
