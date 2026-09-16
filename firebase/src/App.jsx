import AddItem from "./components/AddItem";
import BuscarItens from "./components/BuscarItens";
import LoadItems from "./components/LoadItems";
// import EditItem from "./components/EditItem";

const App = () => {
    return (
        <>
            <div>
                <h1>React + Firebase</h1>
                <AddItem />
                <br />
                <BuscarItens />
                <LoadItems />
            </div>
        </>
    );
};

export default App;
