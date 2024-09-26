"use client";

import { useState } from "react";

interface AccordionProps {
    title: string
    content: string
    onPress: () => void
    isActive: boolean
}


const Accordion = ({ title, content, isActive, onPress }: AccordionProps) => {
    return (
        <div className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 pb-2 space-y-2 pt-4">
            <button
                className="flex flex-row items-center justify-between text-sm"
                onClick={onPress}
            >
                <div className="font-hmedium text-start w-[80%]">{title}</div>
                <div className="border-[1px] font-hmedium border-gray-1000 w-5 h-5 flex items-center justify-center rounded-[4px]">
                    {isActive ? "-" : "+"}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isActive ? "max-h-36" : "max-h-0"
                }`}
            >
                {isActive && (
                    <div className="text-sm leading-relaxed overflow-hidden">
                        {content}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
