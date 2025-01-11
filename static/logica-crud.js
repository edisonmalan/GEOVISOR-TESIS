let users = []; // Array para almacenar usuarios temporalmente

        // Referencias al DOM
        const userTable = document.getElementById('userTable');
        const userForm = document.getElementById('userForm');
        const userModal = new bootstrap.Modal(document.getElementById('userModal'));
        const userIdInput = document.getElementById('userId');
        const userNameInput = document.getElementById('userName');
        const userEmailInput = document.getElementById('userEmail');
        const userPasswordInput = document.getElementById('userPassword');

        // Renderizar tabla de usuarios
        function renderTable() {
            userTable.innerHTML = '';
            users.forEach((user, index) => {
                userTable.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Editar</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        }

        // Agregar/Editar usuario
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = userIdInput.value;
            const name = userNameInput.value;
            const email = userEmailInput.value;
            const password = userPasswordInput.value;

            if (id) {
                // Actualizar usuario existente
                users[id] = { name, email, password };
            } else {
                // Agregar nuevo usuario
                users.push({ name, email, password });
            }

            renderTable();
            userForm.reset();
            userModal.hide();
        });

        // Editar usuario
        function editUser(index) {
            const user = users[index];
            userIdInput.value = index;
            userNameInput.value = user.name;
            userEmailInput.value = user.email;
            userPasswordInput.value = user.password;
            userModal.show();
        }

        // Eliminar usuario
        function deleteUser(index) {
            users.splice(index, 1);
            renderTable();
        }

        // Renderizar tabla inicial
        renderTable();