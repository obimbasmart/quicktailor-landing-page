import React from "react";
import { Accordion } from "flowbite-react";
import HIW from "./HIW";
import { STEPS } from "@/constants";

function HowItworks() {
    return (
        <section className="space-y-5 w-full md:flex md:flex-row md:flex-wrap md:gap-6 md:items-center md:justify-center md:space-y-0 gap-y-5 md:px-20">
            {STEPS.map((item) => (
                <HIW
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    desc={item.desc}
                    image={item.image}
                />
            ))}
        </section>
    );
}

export default HowItworks;
