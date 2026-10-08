# Contexto do projeto — WebCarros

Estou desenvolvendo um projeto chamado **WebCarros**, uma aplicação web de compra e venda/anúncio de veículos.

A ideia principal é criar uma plataforma onde usuários possam cadastrar seus próprios carros para anunciar. Pessoas que acessam a página inicial conseguem visualizar os carros cadastrados. Usuários autenticados possuem um Dashboard onde conseguem visualizar e gerenciar somente os próprios carros.

## Tecnologias utilizadas

O projeto está sendo desenvolvido com:

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Firebase Authentication
- Firebase Firestore
- React Hook Form
- Zod
- React Icons
- Swiper

Quero manter o projeto relativamente simples e didático. Evite criar abstrações desnecessárias ou uma arquitetura excessivamente complexa.

Meu objetivo é **entender o código**, e não apenas copiar código pronto. Sempre que possível, explique o que está acontecendo e por que determinada solução está sendo utilizada.

---

# Autenticação

O projeto utiliza o **Firebase Authentication**.

Existe um `AuthProvider` responsável por acompanhar o usuário autenticado através do:

```ts
onAuthStateChanged(auth, ...)
```

O usuário autenticado é armazenado no contexto e possui informações como:

```ts
{
    uid: string;
    name: string | null;
    email: string | null;
}
```

Existe também um hook:

```ts
useAuth();
```

que permite acessar o usuário atual dentro dos componentes.

O `uid` do Firebase é muito importante no projeto porque é utilizado para identificar quais carros pertencem a determinado usuário.

---

# Firestore

O banco utilizado é o **Cloud Firestore**.

A principal coleção é:

```text
cars
```

Cada documento representa um carro cadastrado.

A estrutura aproximada de um carro é:

```ts
{
    name: string;
    model: string;
    year: string;
    km: string;
    price: string;
    city: string;
    whatsapp: string;
    description: string;
    images: string[];
    uid: string;
}
```

O Firestore gera automaticamente o ID do documento.

Exemplo:

```text
cars
├── abc123
│   ├── name
│   ├── model
│   ├── year
│   ├── km
│   ├── price
│   ├── city
│   ├── whatsapp
│   ├── description
│   ├── images
│   └── uid
│
└── xyz789
    ├── name
    ├── model
    ├── year
    ├── km
    ├── price
    ├── city
    ├── whatsapp
    ├── description
    ├── images
    └── uid
```

Quando preciso do ID do documento no frontend, uso:

```ts
doc.id;
```

Por exemplo:

```ts
const carsList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
}));
```

O `id` pode ser adicionado ao tipo `CarProps` no frontend mesmo que ele não esteja salvo como campo dentro do documento do Firestore.

---

# Cadastro de carros

A página de cadastro é:

```text
NewCar
```

O formulário utiliza:

- React Hook Form
- Zod
- `zodResolver`

O schema atual possui:

```ts
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
```

O usuário precisa estar autenticado para cadastrar um carro.

Antes de salvar, verificamos:

```ts
if (!user) {
    return;
}
```

Também é obrigatório possuir pelo menos uma imagem.

---

# Imagens dos carros

Neste momento **não estou utilizando Firebase Storage**.

Para evitar custos e simplificar o projeto, o usuário fornece URLs das imagens.

Existe um estado:

```ts
const [images, setImages] = useState<string[]>([]);
```

E outro para controlar o input:

```ts
const [imageUrl, setImageUrl] = useState("");
```

Quando o usuário adiciona uma URL:

```ts
setImages((prevImages) => [...prevImages, url]);
```

As imagens são armazenadas no Firestore como um array de strings:

```ts
images: ["https://site.com/imagem1.jpg", "https://site.com/imagem2.jpg"];
```

No Card, normalmente a primeira imagem é utilizada:

```tsx
<img src={props.images[0]} />
```

Existe também uma função para remover uma imagem antes do cadastro:

```ts
const handleRemoveImage = (indexToRemove: number) => {
    setImages((prevImages) =>
        prevImages.filter((_, index) => index !== indexToRemove),
    );
};
```

---

# Swiper

O projeto utiliza a biblioteca **Swiper** para criar uma galeria/carrossel de imagens na página de detalhes do veículo.

A biblioteca foi instalada com:

```bash
npm install swiper
```

Na página `Details`, os componentes utilizados são:

```tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
```

O `Swiper` funciona como o container do carrossel e cada `SwiperSlide` representa uma imagem.

Exemplo básico:

```tsx
<Swiper spaceBetween={12} slidesPerView={1}>
    {car.images.map((image, index) => (
        <SwiperSlide key={index}>
            <img src={image} alt={`${car.name} - imagem ${index + 1}`} />
        </SwiperSlide>
    ))}
</Swiper>
```

## Swiper responsivo

A galeria da página `Details` deve ser responsiva.

Atualmente utilizamos `breakpoints` para controlar quantas imagens aparecem lado a lado de acordo com o tamanho da tela:

```tsx
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
    className="w-full max-w-4xl"
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
```

O comportamento é:

```text
Celular
< 640px
→ 1 imagem

Tablet
≥ 640px
→ 2 imagens

Desktop
≥ 1024px
→ 3 imagens
```

A classe:

```text
aspect-square
```

faz com que cada imagem tenha proporção **1:1**, mantendo o formato quadrado.

A classe:

```text
object-cover
```

faz a imagem preencher o quadrado sem distorcer a proporção original.

A classe:

```text
max-w-4xl
```

limita a largura máxima da galeria para que ela não ocupe toda a tela em monitores grandes.

O `Swiper` é utilizado principalmente na página:

```text
Details
```

A página recebe o ID do carro pela URL usando:

```ts
const { id } = useParams();
```

Depois busca o documento correspondente no Firestore:

```ts
const carRef = doc(db, "cars", id);
const snapshot = await getDoc(carRef);
```

Após encontrar o carro, as imagens armazenadas no campo `images` são utilizadas pelo Swiper.

---

# Salvando o carro

O cadastro utiliza:

```ts
addDoc(collection(db, "cars"), car);
```

O objeto enviado ao Firestore é semelhante a:

```ts
const car = {
    ...data,
    images,
    uid: user.uid,
};
```

O `uid` **não é informado pelo usuário no formulário**.

Ele vem diretamente do Firebase Authentication:

```ts
uid: user.uid;
```

Isso permite saber quem é o dono de cada carro.

---

# Home

A página `Home` mostra **todos os carros cadastrados**.

Ela utiliza:

```ts
useEffect();
```

para buscar os documentos da coleção:

```ts
collection(db, "cars");
```

A busca é feita com:

```ts
getDocs();
```

Exemplo:

```ts
useEffect(() => {
    const loadCars = async () => {
        try {
            const carsRef = collection(db, "cars");

            const snapshot = await getDocs(carsRef);

            const carsList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as CarProps[];

            setCars(carsList);
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };

    loadCars();
}, []);
```

Depois os carros são renderizados:

```tsx
{
    cars.map((car) => <Card key={car.id} {...car} />);
}
```

A Home é pública e sua função é mostrar os anúncios disponíveis.

---

# Card

Existe um componente:

```text
components/Card
```

Ele recebe um `CarProps`.

Exemplo:

```tsx
<Card {...car} />
```

O Card utiliza informações reais do carro:

```tsx
props.name;
props.model;
props.year;
props.km;
props.price;
props.city;
props.images;
```

A imagem principal vem de:

```tsx
props.images[0];
```

O Card pode ser utilizado tanto na Home quanto no Dashboard.

---

# Página Details

Existe uma página:

```text
Details
```

Sua função é exibir todas as informações de um carro específico.

O ID do carro é recebido através da URL:

```ts
const { id } = useParams();
```

O documento é buscado diretamente no Firestore:

```ts
const carRef = doc(db, "cars", id);
const snapshot = await getDoc(carRef);
```

Quando o documento existe, seu ID e seus dados são armazenados no estado:

```ts
const carData = {
    id: snapshot.id,
    ...snapshot.data(),
} as CarProps;

setCar(carData);
```

A página exibe:

- Galeria de imagens com Swiper
- Cidade
- Nome
- Modelo
- Ano
- Quilometragem
- WhatsApp
- Preço
- Descrição
- Botão para contato pelo WhatsApp

A galeria utiliza as imagens existentes em:

```ts
car.images;
```

---

# Dashboard

O Dashboard possui uma diferença importante em relação à Home.

A Home mostra:

```text
TODOS os carros
```

Enquanto o Dashboard mostra:

```text
SOMENTE os carros do usuário logado
```

Para isso, utilizamos:

```ts
where("uid", "==", user.uid);
```

Exemplo:

```ts
const carsRef = collection(db, "cars");

const q = query(carsRef, where("uid", "==", user.uid));

const snapshot = await getDocs(q);
```

Depois:

```ts
const carsList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
})) as CarProps[];

setCars(carsList);
```

O `useEffect` depende do usuário:

```ts
useEffect(() => {
    // buscar carros
}, [user]);
```

Isso é importante porque o usuário pode ainda não estar disponível no primeiro render.

---

# Exclusão de carros

No Dashboard existe a possibilidade de o usuário excluir seus próprios carros.

A exclusão utiliza:

```ts
deleteDoc();
```

e:

```ts
doc(db, "cars", id);
```

Exemplo:

```ts
const handleDeleteCar = async (id: string) => {
    try {
        await deleteDoc(doc(db, "cars", id));

        setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
        console.error("Erro ao deletar carro:", error);
    }
};
```

O `id` utilizado nessa função é o ID do documento do Firestore.

No Dashboard:

```tsx
{
    cars.map((car) => (
        <Card key={car.id} {...car} onDelete={handleDeleteCar} />
    ));
}
```

O `Card` possui uma prop opcional:

```ts
interface CardProps extends CarProps {
    onDelete?: (id: string) => void;
}
```

Isso permite que o mesmo Card seja utilizado na Home sem mostrar o botão de excluir.

No Card:

```tsx
{
    props.onDelete && (
        <button type="button" onClick={() => props.onDelete?.(props.id)}>
            Excluir carro
        </button>
    );
}
```

Na Home:

```tsx
<Card {...car} />
```

Não existe `onDelete`, então o botão não aparece.

No Dashboard:

```tsx
<Card {...car} onDelete={handleDeleteCar} />
```

O botão aparece.

---

# Segurança do Firestore

O projeto utiliza regras do Firestore para impedir que um usuário altere ou exclua carros de outro usuário.

A ideia das regras é:

```text
Usuário autenticado
        ↓
       uid
        ↓
documento do carro
        ↓
  uid é igual?
        ↓
     SIM → permite
     NÃO → bloqueia
```

Para criação, o `uid` enviado pelo frontend deve ser igual ao usuário autenticado.

Para atualização e exclusão, o `uid` existente no documento deve pertencer ao usuário autenticado.

Não devemos confiar apenas no frontend para essa segurança.

---

# Estrutura conceitual do projeto

A aplicação funciona aproximadamente assim:

```text
                        WEB CARROS
                            │
            ┌───────────────┴────────────────┐
            │                                │
           Home                         Autenticação
            │                                │
      Todos os carros                   Firebase Auth
            │                                │
          Card                              uid
                                             │
                                             ↓
                                        Dashboard
                                             │
                              ┌──────────────┴──────────────┐
                              │                             │
                         Meus carros                  Cadastrar carro
                              │                             │
                         Excluir carro                   NewCar
                              │                             │
                              └──────────────┬──────────────┘
                                             ↓
                                         Firestore
                                             │
                                            cars
                                             │
                                             ↓
                                          Details
                                             │
                                          Swiper
                                             │
                                      Imagens do carro
```

---

# Regras para futuras alterações

Ao trabalhar neste projeto:

1. Não trocar a tecnologia sem necessidade.
2. Manter React + TypeScript + Firebase.
3. Preferir soluções simples e fáceis de entender.
4. Não criar abstrações desnecessárias.
5. Não criar Context API para tudo.
6. Não adicionar bibliotecas sem necessidade.
7. Utilizar o Firebase Authentication para identificar usuários.
8. Utilizar o `uid` para relacionar carros e usuários.
9. Utilizar o ID automático do Firestore para identificar documentos.
10. Não utilizar Firebase Storage neste momento.
11. As imagens são URLs fornecidas pelo usuário.
12. A Home mostra todos os carros.
13. O Dashboard mostra somente os carros do usuário logado.
14. O usuário pode excluir somente seus próprios carros.
15. A página Details utiliza Swiper para exibir as imagens do carro.
16. O Swiper deve permanecer responsivo.
17. As imagens da galeria devem permanecer em formato quadrado usando `aspect-square`.
18. Evitar adicionar funcionalidades do Swiper sem necessidade.
19. Ao sugerir alterações, preservar a estrutura existente sempre que possível.
20. Explicar as alterações de forma didática, mostrando exatamente onde o código deve ser colocado.
21. Evitar soluções excessivamente avançadas quando uma solução simples resolver o problema.

Quando eu enviar um erro ou trecho de código, primeiro considere a arquitetura acima e tente corrigir o problema dentro dessa estrutura, em vez de criar uma arquitetura completamente diferente.
