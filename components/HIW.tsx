"use client";

import { Accordion, CustomFlowbiteTheme } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

interface HIWProps {
    id: string;
    title: string;
    desc: string;
    image?: string;
}

const HIW = ({ title, desc, id, image }: HIWProps) => {
    return (
        <div className="px-4 text-sm bg-gray-200 rounded-xl py-4 space-y-8 md:w-[600px] max-w-[500px] flex-flex-col md:justify-center md:items-center">
            <div className="w-full aspect-[0.85] relative rounded-xl max-w-[400px] md:aspect-[1.32] md:justify-center md:items-center">
                <Image
                    alt="Product Image ..."
                    src={`/images/${image}.png`}
                    className="w-full h-full pt-4"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>
            <div className="space-y-2.5">
                <p className="capitalize font-hmedium  !text-gray-900 text-xl tracking-wide hover:text-gray-1000   focus:ring-0 !rounded-none">
                    {title}
                </p>
                <p className="text-sm  tracking-wide md:text-base">{desc}</p>
            </div>
        </div>
    );
};

export default HIW;
