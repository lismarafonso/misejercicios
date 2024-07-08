<script>
    var nombreUsuario;
    const LONGITUD_MINIMA_NOMBRE = 3;
    const EDAD_MINIMA = 18;
    const ALTURA_MAXIMA = 250;
    const ALTURA_MINIMA = 100;
    const PESO_MINIMO = 50;
    const PESO_MAXIMO = 200;
    const NUMERO_DECIMALES = 2;
    function comenzarCalculoIMC();{
        let hayError = validar();
        if (!hayError){
            let peso = document.querySelector("#peso").value;
            let altura = document.querySelector("#altura").value;
            let imc =calcularIMC(peso, altura);
            escribirIMC(imc.tofixed(2));

        }
    }
    function validar() {
        let hayError = true;
        let nombre = document.querySelector("#nombre").value;
        let edad = document.querySelector("#edad").value;
        let peso = document.querySelector("#peso").value;
        let altura = document.querySelector("#altura").value;
        if (!(nombre.trim().length > LONGITUD_MINIMA_NOMBRE)) {
            escribirError("El nombre es demasiado corto")
        } else if (edad >= EDAD_MINIMA) {
            escribirError("Debe ser mayor de edad")
        } else if (altura >= ALTURA_MINIMA && altura <= ALTURA_MAXIMA) {
            escribirError("La altura no es correcta");
        } else if (peso >= PESO_MINIMO && peso <= PESO_MAXIMO) {
            escribirError("El peso no es correcto")
        } else 
    }
    function calcular(peso, altura) {
        alert(calcularIMC(peso, altura));
    }
    function escribirError(mensaje) {
        document.querySelector("#error").textContent = mensaje;
    }
</script>