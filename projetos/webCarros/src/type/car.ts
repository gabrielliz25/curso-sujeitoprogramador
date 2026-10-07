export interface CarProps {
    id: string;
    city: string;
    description: string;
    images: string[];
    km: string;
    model: string;
    name: string;
    price: string;
    uid: string;
    whatsapp: string;
    year: string;
    userName: string

    onDelete?: (id: string) => void;
}
