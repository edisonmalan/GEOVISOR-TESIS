let users = [];
let editingUserId = null;
let deletingUserId = null;

// Función para cargar la tabla de usuarios
function loadTable() {
    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="confirmDelete(${user.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para agregar o editar un usuario
document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    if (editingUserId) {
        // Editar usuario
        const userIndex = users.findIndex(user => user.id === editingUserId);
        users[userIndex] = { id: editingUserId, name, email, password };
        editingUserId = null;
    } else {
        // Agregar nuevo usuario
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password
        };
        users.push(newUser);
    }

    clearForm();
    loadTable();
    $('#userModal').modal('hide');
});

// Función para eliminar un usuario
function confirmDelete(id) {
    deletingUserId = id;
    $('#confirmDeleteModal').modal('show');
}

// Función para confirmar la eliminación del usuario
document.getElementById("confirmDeleteBtn").addEventListener("click", function() {
    users = users.filter(user => user.id !== deletingUserId);
    loadTable();
    $('#confirmDeleteModal').modal('hide');
});

// Función para editar un usuario
function editUser(id) {
    const user = users.find(user => user.id === id);
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;
    document.getElementById("userPassword").value = user.password;
    document.getElementById("userId").value = user.id;
    editingUserId = user.id;
    $('#userModal').modal('show');
}

// Función para limpiar el formulario
function clearForm() {
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("userId").value = "";
}

// Cargar la tabla inicial
loadTable();
