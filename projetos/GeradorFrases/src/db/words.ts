export interface Category {
    id: number,
    categoria: string,
    frases: string[]
}

export const categorias: Category[] = [
    {
        id: 1,
        categoria: "Motivação",
        frases: [
            "Acredite em você e continue avançando.",
            "Cada pequeno passo te aproxima do seu objetivo.",
            "Não desista. Grandes resultados levam tempo.",
            "Você é capaz de superar os desafios de hoje.",
            "Continue, mesmo quando parecer difícil.",
        ],
    },
    {
        id: 2,
        categoria: "Bom dia",
        frases: [
            "Bom dia! Que hoje seja um dia cheio de coisas boas.",
            "Bom dia! Comece o dia com fé e gratidão.",
            "Bom dia! Que não faltem motivos para sorrir hoje.",
            "Bom dia! Um novo dia é uma nova oportunidade.",
            "Bom dia! Que seu dia seja leve, produtivo e abençoado.",
        ],
    },
];
