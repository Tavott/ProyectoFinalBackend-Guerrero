let paymentBtn = document.querySelector('#pago');

paymentBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    try {

        const amountValue = document.querySelector('#payForm').value; // Asume que tienes un input con id "amountInput"

        // Construye el objeto de datos para la solicitud POST
        const postData = {
            amount: amountValue, // Asigna el valor del amount
            // Otros campos de datos si es necesario...
        };
        
        // Realiza una solicitud POST a la API de payment-intents
        const response = await fetch('/api/payment/payment-intents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData), // Convierte el objeto de datos a JSON
        });

        // Comprueba si la respuesta es exitosa
        if (response.ok) {
            const data = await response.json();

            // Comprueba si el estado es "error" en lugar de "status.error"
            if (data.status === 'error') {
                console.error('Error en la respuesta:', data.error);
            } else {
                // Abre el resultado en una nueva ventana o pestaña
                const newWindow = window.open('', '_blank');
                if (newWindow) {
                    // Escribe el contenido de payContainer en la nueva ventana
                    newWindow.document.write(`
                        <html>
                        <head>
                            <title>Página de Pago</title>
                        </head>
                        <body>
                            <h1>Formulario de Pago</h1>
                            <form action="">
                                <p>Ingrese el número de la tarjeta</p>
                                <input type="number">
                                <p>Ingrese la fecha de expiración de la tarjeta</p>
                                <input type="number">
                                <p>Ingrese el CVC de la tarjeta</p>
                                <input type="number">
                            </form>
                        </body>
                        </html>
                    `);
                } else {
                    console.error('No se pudo abrir una nueva ventana.');
                }
            }
        } else {
            console.error('Error en la solicitud:', response.status);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
    }
});