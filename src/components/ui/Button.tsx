interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit";
    onClick?: () => void;
}

const Button = ({ children, type = "button", onClick }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;