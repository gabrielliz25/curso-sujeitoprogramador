// components
import Container from "../../components/Container";
import HeaderDashboard from "../../components/HeaderDashboard";

// icons
import { MdFileUpload } from "react-icons/md";

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Container>
            <HeaderDashboard />

            <div className="mt-6 flex min-h-50 w-full gap-6 ">
                <label
                    htmlFor="car-images"
                    className="relative flex h-50 w-50 shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-400 transition hover:border-red-600 hover:bg-gray-50"
                >
                    <MdFileUpload size={70} className="text-gray-500" />

                    <input
                        id="car-images"
                        type="file"
                        accept="image/*"
                        multiple
                        className="absolute inset-0 cursor-pointer opacity-0"
                    />
                </label>

                <div className="flex flex-1 items-center justify-center rounded-xl border border-gray-300">
                    <span className="text-gray-400">
                        As imagens aparecerão aqui
                    </span>
                </div>
            </div>

            <form
                className="w-full border border-gray-300 rounded-2xl p-5 mt-5 mb-15 flex flex-col gap-5"
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
                            placeholder="Digite o nome do carro"
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
                        placeholder="Digite o numero de telefone"
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
                    className="cursor-pointer w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-red-800 hover:shadow-md active:scale-[0.99]"
                >
                    Cadastrar
                </button>
            </form>
        </Container>
    );
};

export default NewCar;
