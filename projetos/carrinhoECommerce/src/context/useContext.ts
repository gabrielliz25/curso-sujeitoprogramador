import { useContext } from "react";
import { CommerceContext } from "./CommerceContext";

export const useCommerce = () => {
    return useContext(CommerceContext);
};