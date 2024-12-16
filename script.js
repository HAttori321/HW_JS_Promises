const userList = document.getElementById("user-list");
const todoList = document.getElementById("todo-list");
        function fetchUsers() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(users => {
                    userList.innerHTML = "";
                    users.forEach(user => {
                        const li = document.createElement("li");
                        li.textContent = user.name;
                        li.dataset.userId = user.id;
                        li.addEventListener("click", () => fetchTodos(user.id));
                        userList.appendChild(li);
                    });
                })
                .catch(error => console.error("Error fetching users:", error));
        }
        function fetchTodos(userId) {
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                .then(response => response.json())
                .then(todos => {
                    todoList.innerHTML = "";
                    todos.forEach(todo => {
                        const li = document.createElement("li");
                        li.textContent = todo.title;
                        if (todo.completed) li.classList.add("completed");
                        todoList.appendChild(li);
                    });
                })
                .catch(error => console.error("Error fetching todos:", error));
        }
        fetchUsers();