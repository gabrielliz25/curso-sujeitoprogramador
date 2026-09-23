interface RespostaAPI<T> {
    sucesso: boolean;
    message: string;
    data: T;
}

interface Video {
    title: string;
    time: number;
}

interface Usuario {
    name: string;
    password: number;
}

const resVideo: RespostaAPI<Video> = {
    sucesso: true,
    message: "Busca com sucesso!",
    data: { title: "aula de typescript", time: 120 },
};

const resUsuario: RespostaAPI<Usuario> = {
    sucesso: true,
    message: "Busca com sucesso!",
    data: { name: "Gabriel", password: 123 },
}

console.log(resVideo)
console.log(resUsuario)