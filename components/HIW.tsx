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
        <Accordion
            collapseAll
            className="!rounded-none !border-0 tracking-wide text-dark-700"
            arrowIcon={() => <p className="text-2xl font-hmedium">{id}</p>}
        >
            <Accordion.Panel>
                <Accordion.Title className="px-2 capitalize font-hmedium  !text-gray-800 text-xl tracking-wide hover:text-gray-1000   focus:ring-0 !rounded-none !border-gray-500 !bg-white py-4">
                    {title}
                </Accordion.Title>
                <Accordion.Content className="border-b-2 px-4 text-sm">
                    <div className="w-full aspect-[0.9] relative bg-gray-200 rounded-xl">
                        <Image
                            alt="Product Image ..."
                            src={`/images/${image}.png`}
                            className="w-full h-full pt-4"
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                    <p className="py-3 text-sm border-b-[1px] border-gray-1000">
                        {desc}
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default HIW;
