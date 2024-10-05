import React from "react";

interface FeatureProps {
    title: string;
    desc: string;
    icon?: string;
    extraStyle?: string;
}

function Features({ title, desc, extraStyle }: FeatureProps) {
    return (
        <div className={`p-4 border-lg border-[1px] border-gray-500 rounded-lg space-y-2 ${extraStyle}`}>
            <h3 className="font-hmedium font-xl">{title}</h3>
            <p className="text-sm leading-6">{desc}</p>
        </div>
    );
}

export default Features;
