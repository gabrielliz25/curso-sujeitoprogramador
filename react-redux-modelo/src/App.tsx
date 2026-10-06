import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { increment, incrementInput } from "./store/counter/counterSlice";
import { useState } from "react";

function App() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const [input, setInput] = useState("");

    return (
        <main>
            <h1>Counter</h1>

            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>+</button>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => dispatch(incrementInput(Number(input)))}>
                Aumentar
            </button>
        </main>
    );
}

export default App;
