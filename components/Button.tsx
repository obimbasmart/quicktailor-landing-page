interface ButtonProps {
    onClick: () => void;
    title: string;
    icon?: React.ReactNode;
    containerStyles?: string;
    textStyles?: string;
}
function Button({
    onClick,
    title,
    icon,
    containerStyles,
    textStyles,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center justify-center px-[14px] py-2 text-primary space-x-2 rounded-lg ${containerStyles}`}
        >
            {title && (
                <p className={`text-sm font-medium ${textStyles}`}>
                    {title}
                </p>
            )}
            {icon}
        </button>
    );
}

export default Button;
