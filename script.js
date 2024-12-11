document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada.

    const formData = new FormData(event.target);

    // URL del webhook del script de Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbz2hNAwZ_d1e4mKvdqu1m-bbItvwCIfQ2ECB2nTtWFTSj7xeshJO0hy0wn0cubKG0L0ow/exec";

    fetch(scriptURL, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                document.getElementById("response-message").textContent = "¡Datos enviados con éxito!";
                document.getElementById("response-message").style.color = "green";
                event.target.reset(); // Limpia el formulario.
            } else {
                throw new Error("Error en la respuesta del servidor");
            }
        })
        .catch((error) => {
            document.getElementById("response-message").textContent = "Hubo un problema al enviar los datos.";
            document.getElementById("response-message").style.color = "red";
            console.error("Error:", error);
        });
});
