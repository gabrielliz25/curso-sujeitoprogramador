import { createContext } from "react";

type CounterContextType = {
    counter: number,
    step: string,
    op: string,
    setStep: (step: string) => void,
    setOp: (op: string) => void,
    incrementar: () => void,
    resetCounter: () => void,
    stepCounter: () => void
};

export const CounterContext = createContext({} as CounterContextType);