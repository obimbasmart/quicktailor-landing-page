import React from "react";

function ExpertFeatures({ image, title, desc }: any) {
    return (
        <div
            style={{ backgroundImage: `url('/images/${image}')` }}
            className={`relative flex items-center text-white w-full aspect-[0.91]  bg-cover bg-center bg-no-repeat  bg-black/50 bg-blend-multiply`}
        >
            <p className="absolute top-7 px-4">For Experts</p>

            <div className="absolute bottom-3 left-4 space-y-2">
                <h3 className="font-hmedium text-xl">{title}</h3>
                <p className="text-sm leading-6">{desc}</p>
            </div>
        </div>
    );
}

export default ExpertFeatures;
