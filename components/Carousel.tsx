"use client";

import { Carousel } from "flowbite-react";
import ExpertFeatures from "./ExpertFeatures";
import { ExpertFEATURES } from "@/constants";

const theme = {
    root: {
        base: "relative h-full w-full",
        leftControl:
            "inline-flex left-0 top-0 flex h-full items-center justify-center mt-2 focus:outline-none",
        rightControl:
            "inline-flex right-0 top-0 flex h-full items-center justify-center mt-2 ml-10 focus:outline-none",
    },
    indicators: {
        active: {
            off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            on: "bg-white dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
        base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: {
            off: "w-full flex-shrink-0 transform cursor-default snap-center",
            on: "w-full flex-shrink-0 transform cursor-grab snap-center",
        },
    },
    control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-1000/50 group-hover:bg-gray-500 bg-gray-500 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
    },
};

export function CustomCarousel() {
    return (
        <div className="">
            <Carousel indicators={false} pauseOnHover theme={theme} className="md:hidden">
                {ExpertFEATURES.map((item) => (
                    <ExpertFeatures
                        key={item.title}
                        title={item.title}
                        desc={item.desc}
                        image={item.image}
                    />
                ))}
            </Carousel>
        </div>
    );
}
