import AddItem from "./components/AddItem";
import BuscarItens from "./components/BuscarItens";
import EditItem from "./components/EditItem";

const App = () => {
    return <>
        <div>
            <h1>React + Firebase</h1>
            <AddItem />
            <BuscarItens />
            <EditItem />
        </div>
    </>
};

export default App;
