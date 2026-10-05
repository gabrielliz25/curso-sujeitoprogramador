import { useState } from "react";
import { CommerceContext } from "./CommerceContext";
import { type CartProps } from "../type/Commerce"

interface CommerceProviderProps {
    children: React.ReactNode
}

function CommerceProvider({ children }: CommerceProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])

    return (
        <CommerceContext.Provider
            value={{
                cart,
                setCart,
                cartAmount: cart.length
            }}
        >
            {children}
        </CommerceContext.Provider>
    );
}

export default CommerceProvider;
