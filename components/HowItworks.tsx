import React from "react";
import { Accordion } from "flowbite-react";
import HIW from "./HIW";
import { STEPS } from "@/constants";

function HowItworks() {
    return (
        <section>
            {STEPS.map((item) => (
                <HIW
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
