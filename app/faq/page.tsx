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
                    <h2 className="text-center font-hmedium text-gray-1000 text-[32px]">Hi. We’re   <span className="bg-teal-700 px-3 py-4 text-white rounded-lg">Atelyo</span>
                    </h2>
                </div>
            </section>
            <section className="py-6 space-y-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="font-hroman text-center text-gray-1000 text-[20px] lg:-[24px] tracking-wide leading-[30px]  md:w-full lg:w-[60%] mb-[50px] lg:leading-[36px]">
                        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>
                </div>
                <div className="p-4 lg:p-10 flex flex-col rounded-lg self-stretch items-center space-y-4 h-[450px] lg:h-[872px] md:h-[780px] bg-teal-100 ">
                    <h2 className="text-center font-hmedium text-gray-1000 text-[32px] px-4 ">Our Story</h2>
                    <div className="font-hroman text-center text-gray-1000 text-[20px] lg:-[24px] tracking-wide leading-[30px]  md:w-full lg:w-[60%]  lg:mb-6 lg:leading-[36px] mb-4">
                        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>
                    <div className="mt-8 w-full h-[266px] lg:h-[612px] md:h-[580px] relative">
                        <Image
                            alt="Product Image ..."
                            src={"/images/about.png"}
                            className="rounded-lg h-full w-full"
                            width={500} 
                            height={300} 
                            objectFit="contain" 
                            quality={100}
                        />
                    </div>

                </div>
                <div className="p-4 flex flex-col rounded-lg self-stretch items-center space-y-4 pt-[50px]">
                    <h2 className="text-center font-hmedium text-gray-1000 text-[32px] px-4 ">Our Values</h2>
                    <div className="font-hroman text-center text-gray-1000 text-[20px] lg:-[24px] tracking-wide leading-[30px]  md:w-full lg:w-[60%] lg:mb-6 lg:leading-[36px] mb-4">
                        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>

                </div>
                <div className="flex flex-wrap justify-center gap-6 ">
                    {ABOUT_LISTS.map((item) => (
                        <Features
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            extraStyle="lg: w-[352px] md:w-[352px]"
                        />
                    ))}
                </div>

                
                   
                    
            </section>







        </main>
        
    );
}
