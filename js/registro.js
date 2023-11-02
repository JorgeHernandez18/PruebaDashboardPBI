const backendURL = "http://localhost:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar-contrasena").value;

        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            telefono,
            password
        }

        if (password !== confirmarContrasena) {
            alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        } else {

            fetch(backendURL + "usuario/api/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoUsuario)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json(); // Convertir la respuesta a JSON
                    } else {
                        throw new Error("Error en la solicitud");
                    }
                })
                .then(data => {
                    // Aquí procesas la respuesta del backend
                    console.log("Respuesta del backend:", data);
                    // Puedes realizar acciones basadas en la respuesta, como mostrar un mensaje de éxito o redirigir a otra página.
                })
                .catch(error => {
                    // Manejo de errores en caso de problemas con la solicitud o la respuesta del backend
                    console.error("Error en la solicitud:", error);

                    // Puedes mostrar un mensaje de error al usuario o tomar otras acciones de acuerdo con la situación.
                });


            // Aquí puedes enviar los datos del formulario al servidor, por ejemplo, a través de una solicitud AJAX.
            // Luego, redirige al usuario a la página de inicio de sesión o realiza la acción que desees.
            alert("Registro exitoso. Redirigiendo al inicio de sesión...");
            window.location.href = "../html/login.html"; // Redirige al usuario a la página de inicio de sesión.
        }
    });
});
