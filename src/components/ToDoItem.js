function ToDoItem({ item, onUpdate, onDelete }) {
    return (
        <tr className={`border-b ${item.status ? 'bg-green-100' : ''}`}>
            <td className="px-4 py-2">{item.title}</td>
            <td className="px-4 py-2">
                {item.status ? "Completed" : "Pending"}
            </td>
            <td className="px-4 py-2">
                <button
                    onClick={() => onUpdate(item.id, !item.status, item.title)} // Pass title and status
                    className={`text-white px-4 py-2 rounded-md mr-2 ${item.status ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} transition-colors`}
                >
                    {item.status ? "Undo" : "Complete"}
                </button>
                <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ToDoItem;
