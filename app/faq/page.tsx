import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItworks from "@/components/HowItworks";
import Accordion from "@/components/Accordion";
// import { FAQ } from "@/constants";
// import ExpertFeatures from "@/components/ExpertFeatures";
// import { CustomCarousel } from "@/components/Carousel";
import Image from "next/image";

import { FEATURES, ABOUT_LISTS } from "@/constants";
// import Accordion from "@/components/Accordion";
// import { FAQ } from "@/constants";

export default function Faq() {
    return (
        <main>
            <section>
                <div className="flex flex-row items-center justify-center mt-10">
                    <h2 className="text-center font-hmedium text-gray-1000 text-2xl">
                        Hi. We’re{" "}
                        <span className="bg-teal-700 text-3xl px-3 py-4 text-white rounded-xl">
                            Atelyo
                        </span>
                    </h2>
                </div>
            </section>
            <section className="py-6 space-y-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="font-hroman text-center text-gray-1000 text-base leading-6 tracking-wide  md:w-full lg:w-[60%]">
                        Thoughtfully crafted and user-friendly, Atelyo is a
                        seamless platform connecting you with skilled tailors
                        and shoemakers, designed for everyone.{" "}
                    </div>
                </div>
                <div className="p-4 md:p-10 flex flex-col rounded-lg  items-center space-y-4  bg-teal-100 ">
                    <h2 className="text-center font-hmedium text-gray-1000 text-3xl px-4">
                        Our Story
                    </h2>
                    <div className="font-hroman text-center text-gray-1000 text-base leading-6 tracking-wide md:text-xl  md:w-full lg:w-[60%]  md:mb-6 md:leading-[36px] mb-4">
                        In 2024, a group of engineers, designers and fashion
                        experts came together with a shared vision: to make
                        custom fashion and footwear more accessible and seamless
                        for everyone. We wanted to bridge the gap between
                        talented artisans and individuals seeking unique,
                        tailored pieces. By combining innovation with
                        craftsmanship, we’ve built a platform where fashion
                        experts can showcase their skills, and customers can
                        bring their custom designs to life effortlessly.
                    </div>
                    <div className="w-full aspect-[1.77] lg:h-[612px] md:h-[580px] relative">
                        <Image
                            alt="Atelyo team"
                            src={"/images/about.png"}
                            className="rounded-lg h-full w-full"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
                <div className="p-4 flex flex-col rounded-lg self-stretch items-center space-y-4">
                    <h2 className="text-center font-hmedium text-gray-1000 text-3xl px-4 ">
                        Our Values
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {ABOUT_LISTS.map((item) => (
                        <Features
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
