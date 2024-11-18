class Juego {
    constructor() {
        this.opciones = ['piedra', 'papel', 'tijera'];
        this.resultadoElement = document.getElementById("resultado");
        this.eleccionAutomaticaElement = document.getElementById("eleccionMaquina");
        this.mensajeResultadoElement = document.getElementById("mensajeResultado");

        this.asignarEventos();
    }

    asignarEventos() {
        document.getElementById("piedra").addEventListener("click", () => this.jugar('piedra'));
        document.getElementById("papel").addEventListener("click", () => this.jugar('papel'));
        document.getElementById("tijera").addEventListener("click", () => this.jugar('tijera'));
    }

    eleccionAleatoria() {
        // math floor pa redondear el numero, y math random pa elegir un numero
        const randomIndex = Math.floor(Math.random() * this.opciones.length);
        return this.opciones[randomIndex];
    }

    // Función que determina el resultado del juego
    determinarResultado(jugador, maquina) {
        if (jugador === maquina) {
            return '¡Es un empate!';
        } else if (
            (jugador === 'piedra' && maquina === 'tijera') ||
            (jugador === 'papel' && maquina === 'piedra') ||
            (jugador === 'tijera' && maquina === 'papel')
        ) {
            return '¡Ganaste!';
        } else {
            return '¡Perdiste!';
        }
    }

    jugar(opcionJugador) {
        const opcionMaquina = this.eleccionAleatoria();
        const mensaje = this.determinarResultado(opcionJugador, opcionMaquina);
        this.mostrarResultado(opcionJugador, opcionMaquina, mensaje);
    }

    mostrarResultado(jugador, maquina, mensaje) {
        this.resultadoElement.innerHTML = `Elegiste <em></em><strong>${jugador}</strong></em>`;
        this.eleccionAutomaticaElement.innerHTML = `charizard eligió <em><strong>${maquina}</strong></em>`;
        this.mensajeResultadoElement.innerHTML = `<p>${mensaje}</p>`;
    }
}

const juego = new Juego();