interface MeuProps {
    text: string;
    status: boolean;
}

const Props = ({ text, status }: MeuProps) => {
    return <div>{text} - {status ? "sim" : "nao"}</div>;
};

export default Props;
