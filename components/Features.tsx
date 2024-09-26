import React from "react";

interface FeatureProps {
    title: string;
    desc: string;
    icon?: string;
}

function Features({ title, desc }: FeatureProps) {
    return (
        <div className="p-4 border-lg border-[1px] border-gray-500 rounded-lg space-y-2">
            <h3 className="font-hmedium font-xl">{title}</h3>
            <p className="text-sm leading-6">{desc}</p>
        </div>
    );
}

export default Features;
