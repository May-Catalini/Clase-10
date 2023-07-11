function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(resultado);
}

sumar(2,5);


function sumarTodo() {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
      resultado += arguments[i];
    }
    return resultado;
}

console.log(sumarTodo(5,8,1));