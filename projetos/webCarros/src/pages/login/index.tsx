import { useEffect } from "react";
import Logo from "../../assets/logo.svg";

// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// Components
import Container from "../../components/Container";
import Input from "../../components/Input";

// libs
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

// firebase
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

const loginSchema = z.object({
    email: z.string().email("Digite um email válido"),
    password: z.string().nonempty("O campo senha é obrigatório"),
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
    const navigate = useNavigate();

    useEffect(() => {
        async function handleLogout() {
            await signOut(auth);
        }

        handleLogout();
    }, []);

    const onSubmit = (data: FormData) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                console.log("USUÁRIO LOGADO COM SUCESSO!");
                console.log(user);
                navigate("/dashboard", { replace: true });
                toast.success("Logado com sucesso!");
            })
            .catch((err) => {
                toast.error("Erro ao logar");
                console.log("ERRO AO LOGAR USUÁRIO", err);
            });
    };

    return (
        <Container>
            <div className="flex min-h-screen items-center justify-center">
                <div className="flex w-full max-w-md flex-col items-center gap-8">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo WebCarros"
                            className="w-52 hover:scale-105 duration-100"
                        />
                    </Link>
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

                    <Link
                        to="/register"
                        className="text-center text-sm text-gray-500 transition hover:text-red-600"
                    >
                        Você ainda não possui uma conta?{" "}
                        <span className="font-semibold text-red-600">
                            Cadastre-se
                        </span>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Login;
