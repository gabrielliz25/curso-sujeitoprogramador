import Logo from "../../assets/logo.svg";

// Components
import Container from "../../components/Container";
import Input from "../../components/Input";

// libs
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email("Digite um email válido"),
    password: z.string().nonempty("O campo senha é obrigatório")
});

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
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
                            type="email"
                            placeholder="Digite o seu email"
                            {...register("email")}
                            errors={errors.email?.message}
                        />
                        <Input
                            type="password"
                            placeholder="Digite a sua senha"
                            {...register("password")}
                            errors={errors.password?.message}
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
