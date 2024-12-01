import "./App.css";
import ToDoList from "./components/ToDoList";
import "./index.css"
function App() {
    return (
        <div className="App bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
            <ToDoList />
        </div>
    );
}

export default App;
