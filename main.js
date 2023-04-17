let producto = document.getElementById('pro');
let unidad = document.getElementById('uni');
let valor = document.getElementById('val');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let array = []
let pagar = 0
let productos = {}
let f = document.getElementById('agre')

btn1.addEventListener('click',function(){
    array.push([producto,unidad,valor])
    productos = {
        producto:producto.value,
        cantidad:unidad.value,
        precio:valor.value
    }
    pagar=Number(pagar)+Number(valor.value)
    let st = document.createElement('tr')
    st.innerHTML =`<td>${productos.producto}</td> <td>${productos.cantidad}</td> <td>${productos.precio}</td>`
    f.appendChild(st);
})

btn2.addEventListener('click',function(){
    let m = document.getElementById('resultado')
    m.innerHTML = '<h1> Total a Pagar: '+ pagar +'</h1>'
})

let t1 =document.getElementById('c1')
let t2 =document.getElementById('c2')
let tab2 = document.getElementById('dos')
let tab1 = document.getElementById('uno')
tab1.addEventListener('click',function(){
    t2.className = "visually-hidden"
    tab1.className ="nav-link active";
    t1.className = ""
    tab2.className ="nav-link";
})


tab2.addEventListener('click',function(){
    t1.className = "visually-hidden"
    tab2.className ="nav-link active";
    t2.className = ""
    tab1.className ="nav-link";
})





