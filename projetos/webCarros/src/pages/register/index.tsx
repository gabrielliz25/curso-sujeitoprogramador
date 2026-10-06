import { useEffect } from "react";
import Logo from "../../assets/logo.svg";

// Context auth
import { useAuth } from "../../context/useAuth";

// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// Components
import Container from "../../components/Container";
import Input from "../../components/Input";

// libs
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// firebase
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

const registerSchema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    email: z.string().email("Digite um email válido"),
    password: z
        .string()
        .nonempty("O campo senha é obrigatório")
        .min(6, "Senha está muito fraca"),
});

type FormData = z.infer<typeof registerSchema>;

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
    });
    const navigate = useNavigate();
    const { handleUpdateUser } = useAuth();

    useEffect(() => {
        async function handleLogout() {
            await signOut(auth);
        }

        handleLogout();
    }, []);

    const onSubmit = async (data: FormData) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (user) => {
                await updateProfile(user.user, {
                    displayName: data.name,
                });

                handleUpdateUser({
                    uid: user.user.uid,
                    name: data.name,
                    email: data.email,
                });

                console.log("USUÁRIO CADASTRADO COM SUCESSO");
                navigate("/dashboard", { replace: true });
            })
            .catch((err) => console.log("ERRO AO CADASTRAR USUÁRIO", err));
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
                            type="text"
                            placeholder="Digite o seu nome completo"
                            {...register("name")}
                            errors={errors.name?.message}
                        />
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
                        to="/login"
                        className="text-center text-sm text-gray-500 transition hover:text-red-600"
                    >
                        Você já possui uma conta?{" "}
                        <span className="font-semibold text-red-600">
                            Logar
                        </span>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Register;
