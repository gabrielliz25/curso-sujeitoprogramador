import type { CarProps } from "../../type/car";
import { MdDelete } from "react-icons/md";

const Card = (props: CarProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <img
                src={props.images[0]}
                alt="Foto do carro"
                className="h-48 w-full object-cover sm:h-52"
            />

            <div className="p-4">
                <p className="truncate text-base font-semibold text-gray-900">
                    {props.name} - {props.model}
                </p>

                <span className="mt-1 block text-sm text-gray-500">
                    {props.year} | {props.km} km
                </span>

                <p className="mt-4 text-xl font-bold text-red-600">
                    R$ {props.price}
                </p>

                <hr className="my-4 border-gray-200" />

                <span className="text-sm text-gray-500">{props.city}</span>

                {props.onDelete && (
                    <button
                        type="button"
                        onClick={() => props.onDelete?.(props.id)}
                        className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 text-red-600 shadow-md transition hover:bg-red-600 hover:text-white cursor-pointer"
                        title="Excluir carro"
                    >
                        <MdDelete size={20} />
                    </button>
                )}

                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    {props.userName}
                </span>
            </div>
        </div>
    );
};

export default Card;
