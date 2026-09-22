interface Post {
    nome: string
}

interface Conteudo {
    descricao: string
}

type Post2 = {
    nome: string
}

type Conteudo2 = {
    descricao: string
}

interface Blog extends Post, Conteudo {
    nome: string,
    descricao: string
}

type Blog2 = Post & Conteudo

interface Soma {
    (v1: number, v2: number): number
}

type Soma2 = (v1: number, v2: number) => number

// ! interface UserId extends string | number {} Não tem como fazer isso
type UserId = string | number