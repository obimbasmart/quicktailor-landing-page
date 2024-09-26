"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Button from "./Button";

export function RootNavigation() {
    return (
        <Navbar fluid rounded className="px-4 py-2">
            <Navbar.Brand
                as={Link}
                href="https://flowbite-react.com"
                className="flex flex-row items-center"
            >
                <img
                    src="/icons/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Styl
                </span> */}
            </Navbar.Brand>

            <div className="flex flex-row gap-x-6 items-center">
                <Button
                    title="Contact Us"
                    containerStyles="border-[1px] border-gray-1000 text-sm font-hmedium !py-1"
                    textStyles="leading-6 pt-1"
                />
                <Navbar.Toggle className="text-gray-1000  focus:ring-0" />
            </div>
            <Navbar.Collapse className="h-[100vh]">
                <Navbar.Link
                    href="#"
                    className="text-center py-3 pt-4 text-gray-1000 border-b-gray-500"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className="text-center py-3 pt-4 text-gray-1000 border-b-gray-500 font-hregular"
                >
                    How It Works
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className="text-center pb-3 pt-4 text-gray-1000 border-b-gray-500"
                >
                    Our Story
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className="text-center py-3 pt-4 text-gray-1000 border-b-gray-500"
                >
                    FAQ
                </Navbar.Link>

                <Navbar.Link
                    href="#"
                    className="text-center flex items-center justify-center py-4 border-b-white"
                >
                    <Button
                        title="Get Started"
                        containerStyles="bg-gray-200 py-2 px-6"
                        textStyles="leading-6 pt-1"
                    />
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
