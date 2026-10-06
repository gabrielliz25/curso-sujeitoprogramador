import Logo from "../../assets/logo.svg";

// Components
import Container from "../../components/Container";
import Input from "../../components/Input";

// libs
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email("Digite um email válido"),
});

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const email = useWatch({
        control,
        name: "email",
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Container>
            <div className="flex min-h-screen items-center justify-center">
                <div className="flex w-full max-w-md flex-col items-center gap-8">
                    <img src={Logo} alt="Logo WebCarros" className="w-52" />
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex w-full flex-col gap-4"
                    >
                        <Input
                            type="text"
                            placeholder="Digite o seu email"
                            {...register("email")}
                            errors={errors.email?.message}
                            success={!!email && !errors.email}
                        />
                        <button className="w-fit mx-auto rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700">
                            Acessar
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Login;
