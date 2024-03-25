document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var dni = document.getElementById('dni').value;
    var resultado = document.getElementById('resultado');

    // Aquí puedes agregar tu lógica de validación del DNI
    // Por ahora, simplemente mostraremos un mensaje en el div de resultado
    resultado.textContent = 'DNI ingresado: ' + dni;
});