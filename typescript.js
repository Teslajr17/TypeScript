let formulario: HTMLFormElement = document.querySelector('#formulario')
let erroresUl: HTMLUListElement = document.querySelector('#errores')
let inputNombre: HTMLInputElement = document.querySelector('#nombre')
let botonGuardar: HTMLButtonElement = document.querySelector('#guardar')

function enviarFormulario(): void {

    let errores: string[] = []

    if (isNaN(parseInt(inputNombre.value))) errores.push('El nombre no puede ser un número')
    if (inputNombre.value === '') errores.push('El nombre es obligatorio')

    imprimirErrores(errores)

    if (errores.length === 0) formulario.submit()
}


function imprimirErrores(errores: string[]): void {
    erroresUl.textContent = '' 
    errores.forEach(function(mensaje) {
        let nuevoLi = document.createElement('li')
        nuevoLi.textContent = mensaje
        erroresUl.appendChild(nuevoLi)
    })
}


botonGuardar.addEventListener('click', enviarFormulario)
