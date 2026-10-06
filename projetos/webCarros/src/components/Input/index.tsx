import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errors?: string;
    success?: boolean;
}

const Input = ({ errors, success, ...props }: InputProps) => {
    return (
        <div className="w-full">
            <input
                {...props}
                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                    errors
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : success
                          ? "border-green-500 focus:ring-1 focus:ring-green-500"
                          : "border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                }`}
            />

            {errors && (
                <span className="mt-1 block text-sm text-red-500">
                    {errors}
                </span>
            )}
        </div>
    );
};

export default Input;
