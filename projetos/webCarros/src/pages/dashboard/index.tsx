import { useEffect, useState } from "react";

// components
import HeaderDashboard from "../../components/HeaderDashboard";
import Container from "../../components/Container";
import Card from "../../components/Card";

// firebase
import { db } from "../../services/firebaseConnection";
import {
    getDocs,
    collection,
    query,
    where,
    deleteDoc,
    doc,
} from "firebase/firestore";

// context
import { useAuth } from "../../context/useAuth";

import type { CarProps } from "../../type/car";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [cars, setCars] = useState<CarProps[]>([]);
    const { user } = useAuth();

    useEffect(() => {
        const loadMyCars = async () => {
            if (!user) return;

            try {
                const carsRef = collection(db, "cars");

                const q = query(carsRef, where("uid", "==", user.uid));

                const snapshot = await getDocs(q);

                const carsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as CarProps[];

                setCars(carsList);
            } catch (error) {
                console.error("Erro ao buscar meus carros:", error);
            }
        };

        loadMyCars();
    }, [user]);

    const handleDeleteCar = async (id: string) => {
        try {
            await deleteDoc(doc(db, "cars", id));

            setCars((prevCars) => prevCars.filter((car) => car.id !== id));
            toast.info("Carro deletado!")
        } catch (error) {
            console.error("Erro ao deletar carro:", error);
            toast.error("Erro ao deletar o carro!")
        }
    };

    return (
        <Container>
            <HeaderDashboard />

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cars.map((car) => (
                    <Card {...car} onDelete={handleDeleteCar} />
                ))}
            </div>
        </Container>
    );
};

export default Dashboard;
