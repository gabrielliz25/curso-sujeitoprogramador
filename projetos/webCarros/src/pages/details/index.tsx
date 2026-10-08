import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import Container from "../../components/Container";

// firebase
import { db } from "../../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

import type { CarProps } from "../../type/car";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Details = () => {
    const [car, setCar] = useState<CarProps | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const loadCar = async () => {
            if (!id) {
                return;
            }

            try {
                const carRef = doc(db, "cars", id);

                const snapshot = await getDoc(carRef);

                if (snapshot.exists()) {
                    const carData = {
                        id: snapshot.id,
                        ...snapshot.data(),
                    } as CarProps;

                    setCar(carData);
                }
            } catch (error) {
                console.error("Erro ao buscar carro:", error);
            }
        };

        loadCar();
    }, [id]);

    if (!car) {
        return <div>Carregando...</div>;
    }

    return (
        <Container>
            <div className="w-full">
                {car.images.length === 1 ? (
                    <img
                        src={car.images[0]}
                        alt={`${car.name} - imagem 1`}
                        className="w-full max-w-xl rounded-xl object-cover"
                    />
                ) : (
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full"
                    >
                        {car.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`${car.name} - imagem ${index + 1}`}
                                    className="aspect-square w-full rounded-xl object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            <div className="flex flex-col mb-20">
                <div className="border-b border-gray-200 pb-6">
                    <p className="mb-2 text-sm font-medium text-gray-500">
                        {car.city}
                    </p>

                    <h1 className="text-3xl font-bold text-gray-900">
                        {car.name}
                    </h1>

                    <p className="mt-2 text-lg text-gray-600">{car.model}</p>
                </div>

                {/* Informações do veículo */}
                <div className="grid grid-cols-2 gap-4 border-b border-gray-200 py-6">
                    <div>
                        <p className="text-sm text-gray-500">Ano</p>
                        <p className="font-semibold text-gray-900">
                            {car.year}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Quilometragem</p>
                        <p className="font-semibold text-gray-900">
                            {car.km} km
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Cidade</p>
                        <p className="font-semibold text-gray-900">
                            {car.city}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">WhatsApp</p>
                        <p className="font-semibold text-gray-900">
                            {car.whatsapp}
                        </p>
                    </div>
                </div>

                {/* Preço */}
                <div className="py-6">
                    <p className="text-sm text-gray-500">Preço</p>

                    <p className="text-3xl font-bold text-red-600">
                        R$ {car.price}
                    </p>
                </div>

                {/* Descrição */}
                <div className="border-t border-gray-200 pt-6">
                    <h2 className="mb-3 text-xl font-bold text-gray-900">
                        Descrição
                    </h2>

                    <p className="leading-7 text-gray-600">{car.description}</p>
                </div>

                {/* WhatsApp */}
                <a
                    href={`https://wa.me/55${car.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 w-full rounded-lg bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-700"
                >
                    Entrar em contato pelo WhatsApp
                </a>
            </div>
        </Container>
    );
};

export default Details;
