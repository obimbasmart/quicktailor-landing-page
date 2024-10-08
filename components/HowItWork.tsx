import Image from "next/image";

function HowItWork({ image, title, desc }: any) {
    return (
        <div>
            <div className="w-full aspect-[0.9] relative bg-gray-200 rounded-xl">
                <Image
                    alt="Product Image ..."
                    src={`/images/${image}.png`}
                    className="w-full h-full"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>

            <div>
                <p>{title}</p>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default HowItWork;
