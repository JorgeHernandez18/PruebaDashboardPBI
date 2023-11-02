const backendURL = "http://localhost:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        const datos = {
            correo: correo,
            password: contrasena
        };

        fetch(backendURL + "auth/api/login", {
            method: "POST", // Método POST para enviar datos
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido JSON
            },
            body: JSON.stringify(datos) // Convertir datos a formato JSON
        })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes procesar la respuesta del servidor
            if (data === true) {
                // Las credenciales son válidas, redirige al usuario a la página principal.
                window.location.href = "dashboard.html";
            } else {
                // Las credenciales son inválidas, muestra un mensaje de error.
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        })
        .catch(error => {
            // Manejo de errores, puedes personalizar este bloque según tus necesidades.
            console.error("Error en la solicitud Fetch: " + error);
        });
    });

});