// Components
import Container from "../../components/Container";
import Search from "../../components/Search";
import Card from "../../components/Card";

const Home = () => {
    return (
        <>
            <Container>
                <Search />

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Container>
        </>
    );
};

export default Home;
