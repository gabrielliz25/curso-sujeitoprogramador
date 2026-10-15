interface ContatoSlugProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: ContatoSlugProps) {
    const { slug } = await params;

    return <h1>Pagina do slug {slug}</h1>;
}
