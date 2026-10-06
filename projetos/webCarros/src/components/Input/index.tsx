import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errors?: string;
}

const Input = ({ errors, ...props }: InputProps) => {
    return (
        <div className="w-full">
            <input
                {...props}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
