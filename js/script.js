
// este es el inoicio de sesión:

const usuario = document.getElementById('usuario')
const contrasena = document.getElementById('contrasena')
const ingresar = document.getElementById('ingresar')
const registro = document.getElementById('registro')
const visualzacion= document.getElementById('visualizacion')
const visualization = document.getElementById('visualization')
const visualion = document.getElementById('visualion');



//----------------------------------------------------------------
let almacenar={}
let almacen=[]

let subGuardar={}
let subIngresar=[]

let subdowlan={}
let subdowlant=[]

//----------------------------------------------------------------
let usuarioo = document.getElementById('newUsuari')
let contraseña = document.getElementById('newPasword')

//----------------------------------------------------------------

function registrado() {

    alert('Usuario creado con exito')
}



//----------------------------------------------------------------

let  ver= 0

//----------------------------------------------------------------

function inicio() {



    if ((usuario.value === usuarioo.value) && (contrasena.value === contraseña.value)) {
        ingresar.addEventListener('click',validacion);
    } else {
        
            ingresar.addEventListener('click', alerta);
    }
    if (ver>=3){
        ingresar.addEventListener('click', denegacion);
    }
}

function alerta(){
    if(ver<3){
        alert('datos incorrectos')
    }
    ver = ver + 1
} 
function validacion(){
   location.href = 'menu.html'   
   alert("welcome")
}
function denegacion(){
    alert('intentos agotados')
    ingresar.disabled = true

}
//----------------------------------------------------------------
const producto = document.getElementById('productoo')
const proveedor = document.getElementById('provedorr')
const clientes = document.getElementById('clientee')
//----------------------------------------------------------------------
function articulo() {
    producto.append(noombre, description, valoor, cantidad, guardarr)

}

function provedor() {
proveedor.append(nombres, id, descripcion, valorr, guaardar)
}

function cliente() {
    clientes.append(nombress, correo, telefono, direccion, guardaar)
}


//--------------------------------------------------------------------

let noombre = document.createElement('input')
noombre.placeholder = "nombre"
let description = document.createElement('input')
description.placeholder = "descripcion"
let valoor = document.createElement('input')
valoor.placeholder = "valor"
let cantidad = document.createElement('input')
cantidad.placeholder = "cantidad"
let guardarr = document.createElement('button')
guardarr.textContent = "Guardarr"

let nombres = document.createElement('input')
nombres.placeholder = "nombre"
let id= document.createElement('input')
id.placeholder = "id"
let descripcion = document.createElement('input')
descripcion.placeholder = "Direccion"
let valorr = document.createElement('input')
valorr.placeholder = "Telefono"
let guaardar = document.createElement('button')
guaardar.textContent = "Guardarrr"


let nombress = document.createElement("input")
nombress.placeholder = "nombress"
let correo = document.createElement("input")
correo.placeholder = "correo"
let telefono = document.createElement("input")
telefono.placeholder = "telefono"
let direccion = document.createElement("input")
direccion.placeholder = "direccion"
let guardaar = document.createElement('button')
guardaar.textContent = "Guardaar"


//----------------------------------------------------------------

function mostrar() {
    visualzacion.innerHTML+=`
    <tr>
        <td>${almacenar.noombre}</td>
        <td>${almacenar.description}</td>
        <td>${almacenar.cantidad}</td>
        <td>${almacenar.valoor}</td>
    </tr>
    `
}

guardarr.addEventListener('click',product)
function product() {
    function productos(noombre, description, cantidad, valoor){
        this.noombre = noombre,
        this.description = description,
        this.cantidad = cantidad,
        this.valoor = valoor
    }
    almacenar = new productos(noombre.value, description.value, cantidad.value, valoor.value)
    almacen.push(almacenar)
    mostrar()
    console.log(almacen)
}



function enseñarr() {
    visualization.innerHTML+=`
    <tr>
        <td>${subGuardar.nombres}</td>
        <td>${subGuardar.id}</td>
        <td>${subGuardar.valorr}</td>
        <td>${subGuardar.descripcion}</td>
    </tr>
    `
}


guaardar.addEventListener('click',objeto)
function objeto() {
    function objetoo(nombres, id, descripcion, valorr){
        this.nombres = nombres,
        this.id = id,
        this.descripcion = descripcion,
        this.valorr = valorr
    }
   subGuardar = new objetoo(nombres.value, descripcion.value, id.value, valorr.value)
    subIngresar.push(subGuardar)
    enseñarr()
    console.log(subIngresar)
}



function ingresart() {
    visualion.innerHTML+=`
    <tr>
        <td>${subdowlan.nombress}</td>
        <td>${subdowlan.correo}</td>
        <td>${subdowlan.telefono}</td>
        <td>${subdowlan.direccion}</td>
    </tr>
    `
}



    guardaar.addEventListener('click', objetivo)
    function objetivo() {
        function objetivvo(nombress, correo, telefono, direccion){
            this.nombress = nombress,
            this.correo = correo,
            this.telefono = telefono,
            this.direccion = direccion
        }
    subdowlan = new objetivvo(nombress.value, correo.value, telefono.value, direccion.value)
        subdowlant.push(subdowlan)
        ingresart()
        console.log(subdowlant)
    }







  








