Description:
This project is a simple To-Do List application with separate frontend and backend implementations. The backend is developed using ASP.NET Core Web API, while the frontend provides a user interface for interacting with the API.


Prerequisites
.NET SDK: Ensure that the .NET SDK is installed on your system. 
Node.js: Required if the frontend uses JavaScript frameworks like React or Angular.


1. FrontEnd
Navigate to the frontend folder
2. Install dependencies (if applicable):
npm install
3. Start the frontend server:
npm start
4. Open your browser and navigate to http://localhost:3000 or the port configured for the frontend.


Testing the Application:
1. View Tasks:
When the app loads, it will fetch all tasks from the backend and display them in a table.
2. Add a Task:
Enter a task in the input field.
Click the Add button.
The new task will appear in the list.
3. Update Task Status:
Click the Complete button next to a task to mark it as completed.
Click Undo to revert the status back to pending.
4. Delete a Task:
Click the Delete button next to a task to remove it from the list.