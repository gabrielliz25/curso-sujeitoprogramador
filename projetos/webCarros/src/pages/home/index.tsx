import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Container from "../../components/Container";
import Search from "../../components/Search";
import Card from "../../components/Card";

// firebase
import { db } from "../../services/firebaseConnection";
import { getDocs, collection } from "firebase/firestore";

// type
import type { CarProps } from "../../type/car";

const Home = () => {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)
    
    useEffect(() => {
        const loadCars = async () => {
            try {
                const carsRef = collection(db, "cars");

                const snapshot = await getDocs(carsRef);

                const carsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as CarProps[];

                setCars(carsList);
            } catch (error) {
                console.error("Erro ao buscar carros:", error);
            }
        };

        loadCars();
    }, []);

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <Container>
                <Search
                    value={search}
                    onChange={setSearch}
                    onSearch={() => setSearchTerm(search)}
                />

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredCars.map((car) => (
                        <Link to={`/details/${car.id}`}>
                            <Card key={car.id} {...car} />
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;
