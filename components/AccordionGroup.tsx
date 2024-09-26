"use client"

import Accordion from "./Accordion";
import { FAQ } from "@/constants";
import { useState } from "react";

function AccordionGroup() {
    const [activeQuestion, setActiveQuestion] = useState("0");

    return (
        <div className="flex flex-col gap-y-3">
            {FAQ.map((item) => (
                <Accordion
                    key={item.index}
                    title={item.question}
                    content={item.answer}
                    onPress={() => setActiveQuestion(item.index)}
                    isActive={activeQuestion === item.index}
                />
            ))}
        </div>
    );
}

export default AccordionGroup;
