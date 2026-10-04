import { useState } from "react";
import { CounterContext } from "./CounterContext";

interface CounterProviderProps {
    children: React.ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState("")
    const [op, setOp] = useState("soma")

    const incrementar = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const stepCounter = () => {
        const numStep = Number(step)
        if (Number.isNaN(numStep)) return
        
        switch (op) {
            case "soma":
                setCounter(counter + numStep)
                break
            case "mult":
                setCounter(counter * numStep)
                break
            case "div":
                setCounter(counter / numStep)
                break
            case "sub":
                setCounter(counter - numStep)
                break
            default:
                console.log("OP inválido")
        }

        
    }

    return (
        <CounterContext.Provider
            value={{
                counter,
                step,
                op,
                setStep,
                setOp,
                incrementar,
                resetCounter,
                stepCounter
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;