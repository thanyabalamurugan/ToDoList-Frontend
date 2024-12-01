import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [tasks, setTasks] = useState([]); // Stores the list of tasks
    const [newTask, setNewTask] = useState(""); // For the input field

    // Fetch tasks from the API
    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/ToDo', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTasks(data); // Update tasks state
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    // Load tasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, []);

    // Add a new task
    const addTask = async () => {
        if (!newTask) return; // Ensure newTask is not empty
        const taskData = {
            title: newTask,  // Ensure title is correctly passed
            status: false     // Default status as not completed
        };
        await fetch("http://localhost:5000/api/ToDo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskData),  // Correctly passing task data
        });
        setNewTask("");  // Clear input field after adding the task
        fetchTasks();    // Reload tasks
    };

    // Update task status
    const updateTask = async (id, status, title) => {
        const payload = { 
            title: title,  // Assuming your backend expects "item" instead of "title"
            status: status // Ensure status is passed correctly
        };
    
        const response = await fetch(`http://localhost:5000/api/ToDo/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        fetchTasks(); // Reload tasks after updating
    };
    
    // Delete a task
    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/ToDo/${id}`, { method: "DELETE" });
            fetchTasks(); // Refresh the tasks
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
        <div className="flex mb-4 w-full max-w-lg">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-lg"
                placeholder="New Task"
            />
            <button
                onClick={addTask}
                className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-600 transition-colors"
            >
                Add
            </button>
        </div>
    
        {/* Table to display tasks */}
        <table className="min-w-full table-auto border border-gray-300 rounded-lg">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Task</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <ToDoItem 
                        key={task.id} 
                        item={task}  
                        onUpdate={updateTask} 
                        onDelete={deleteTask} 
                    />
                ))}
            </tbody>
        </table>
    </div>
    
    );
}

export default ToDoList;
