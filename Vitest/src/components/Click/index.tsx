interface ClickProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}

const Click = ({ children, onClick, disabled }: ClickProps) => {
    return (
        <button
            onClick={onClick}
            style={{ background: disabled ? "#0f0" : "#f00" }}
        >
            {children}
        </button>
    );
};

export default Click;
