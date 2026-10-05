export type ProductsProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
};

export type CartProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
};

export type CommerceContextType = {
    cart: CartProps[];
    setCart: (products: CartProps[]) => void;
    cartAmount: number;
};
