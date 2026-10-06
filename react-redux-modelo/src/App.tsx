import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { increment } from "./store/counter/counterSlice";

function App() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <main>
            <h1>Counter</h1>

            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>+</button>
        </main>
    );
}

export default App;
