interface GreatingProps {
    name: string;
}

const Greating: React.FC<GreatingProps> = ({ name }) => {
    return <h1 style={{textAlign: "center"}}>Hello, {name}!</h1>;
};

export default Greating;