import { useState } from "react";

// components
import Container from "../../components/Container";
import HeaderDashboard from "../../components/HeaderDashboard";

// icons
import { MdAdd, MdDelete } from "react-icons/md";

// libs
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input";

const carSchema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    model: z.string().nonempty("O campo modelo é obrigatório"),
    year: z.string().nonempty("O campo ano é obrigatório"),
    km: z.string().nonempty("O campo kilometro é obrigatório"),
    price: z.string().nonempty("O campo preço é obrigatório"),
    city: z.string().nonempty("O campo cidade é obrigatório"),
    whatsapp: z
        .string()
        .nonempty("O telefone é obrigatório")
        .length(11, "O telefone deve ter 11 dígitos"),
    description: z.string().nonempty("O campo descrição é obrigatório"),
});

type FormData = z.infer<typeof carSchema>;

const NewCar = () => {
    const [images, setImages] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
    });

    const handleAddImage = () => {
        const url = imageUrl.trim();

        if (!url) return;

        setImages((prevImages) => [...prevImages, url]);

        setImageUrl("");
    };

    const handleRemoveImage = (indexToRemove: number) => {
        setImages((prevImages) =>
            prevImages.filter((_, index) => index !== indexToRemove),
        );
    };

    const onSubmit = (data: FormData) => {
        const car = {
            ...data,
            images,
        };

        console.log(car);
    };

    return (
        <Container>
            <HeaderDashboard />

            {/* IMAGENS */}
            <div className="mt-6 flex w-full flex-col gap-4">
                <div className="flex w-full gap-3">
                    <input
                        type="url"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                handleAddImage();
                            }
                        }}
                        placeholder="Cole o link da imagem"
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
                    />

                    <button
                        type="button"
                        onClick={handleAddImage}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
                    >
                        <MdAdd size={22} />
                        Adicionar
                    </button>
                </div>

                <div className="flex min-h-50 w-full gap-4 overflow-x-auto rounded-xl border border-gray-300 p-4">
                    {images.length === 0 ? (
                        <div className="flex w-full items-center justify-center">
                            <span className="text-gray-400">
                                As imagens aparecerão aqui
                            </span>
                        </div>
                    ) : (
                        images.map((image, index) => (
                            <div
                                key={`${image}-${index}`}
                                className="relative h-40 w-40 shrink-0 overflow-hidden rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={`Imagem do carro ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />

                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full bg-red-700 p-1 text-white transition hover:bg-red-800"
                                >
                                    <MdDelete size={20} />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* FORMULÁRIO */}
            <form
                className="mt-5 mb-15 flex w-full flex-col gap-5 rounded-2xl border border-gray-300 p-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="mb-6 text-xl font-semibold text-gray-800">
                    Informações do veículo
                </h2>

                <div>
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                    >
                        Nome do Carro:
                    </label>

                    <Input
                        placeholder="Digite o nome do carro"
                        {...register("name")}
                        errors={errors.name?.message}
                    />
                </div>

                <div>
                    <label
                        htmlFor="model"
                        className="text-sm font-medium text-gray-700"
                    >
                        Modelo:
                    </label>

                    <Input
                        placeholder="Digite o modelo do carro"
                        {...register("model")}
                        errors={errors.model?.message}
                    />
                </div>

                <div className="flex w-full gap-5">
                    <div className="flex flex-1 flex-col gap-2">
                        <label
                            htmlFor="year"
                            className="text-sm font-medium text-gray-700"
                        >
                            Ano:
                        </label>

                        <Input
                            placeholder="Digite o ano do carro"
                            {...register("year")}
                            errors={errors.year?.message}
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                        <label
                            htmlFor="km"
                            className="text-sm font-medium text-gray-700"
                        >
                            Km rodados:
                        </label>

                        <Input
                            placeholder="Digite os quilômetros rodados"
                            {...register("km")}
                            errors={errors.km?.message}
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="price"
                        className="text-sm font-medium text-gray-700"
                    >
                        Valor em R$:
                    </label>

                    <Input
                        placeholder="Digite o preço do carro"
                        {...register("price")}
                        errors={errors.price?.message}
                    />
                </div>

                <div>
                    <label
                        htmlFor="city"
                        className="text-sm font-medium text-gray-700"
                    >
                        Cidade:
                    </label>

                    <Input
                        placeholder="Digite a cidade em que se localiza"
                        {...register("city")}
                        errors={errors.city?.message}
                    />
                </div>

                <div>
                    <label
                        htmlFor="whatsapp"
                        className="text-sm font-medium text-gray-700"
                    >
                        Whatsapp:
                    </label>

                    <Input
                        placeholder="Digite o número de telefone"
                        {...register("whatsapp")}
                        errors={errors.whatsapp?.message}
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="text-sm font-medium text-gray-700"
                    >
                        Descrição:
                    </label>

                    <Input
                        placeholder="Digite a descrição do carro"
                        {...register("description")}
                        errors={errors.description?.message}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg bg-red-700 px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-red-800 hover:shadow-md active:scale-[0.99]"
                >
                    Cadastrar
                </button>
            </form>
        </Container>
    );
};

export default NewCar;
