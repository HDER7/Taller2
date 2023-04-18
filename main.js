let producto = document.getElementById('pro');
let unidad = document.getElementById('uni');
let valor = document.getElementById('val');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let array = []
let pagar = 0
let productos = {}
let f = document.getElementById('agre')
//////////////////////////////////////////////////////////////////////////

let numero = document.getElementById('numero');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let num = []
let F = document.getElementById('agree')
let i = 1
let variable = 0;
btn3.addEventListener('click', function () {
    if (i != 5) {
        let valor = numero.value;
        if (valor != variable) {

            num.push(Number(valor));
            numeros = {
                numero: numero.value
            }
            let mos = document.createElement('tr')
            mos.innerHTML = `<td>${numeros.numero}</td>`
            F.appendChild(mos);
            i++;

            variable = valor;

        } else { alert("No agreges numeros iguales"); }
    }
})

btn4.addEventListener('click', function () {
    let N = document.getElementById('NumMax')
    let maxNum = Math.max(...num);
    let maxIndex = num.indexOf(maxNum);
    let max = num[0]
    let pos = 0;
    let output = "";


    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i]
            pos = i;
        }
    }

    num.splice(pos, 1);



    for (let i = 0; i < num.length; i++) {
        output += num[i] + ", ";
    }

    document.getElementById("NumMax").innerHTML = output; 


})





//////////////////////////////////////////////////////////////////7
btn1.addEventListener('click', function () {
    array.push([producto, unidad, valor])
    productos = {
        producto: producto.value,
        cantidad: unidad.value,
        precio: valor.value
    }
    pagar = Number(pagar) + Number(valor.value)
    let st = document.createElement('tr')
    st.innerHTML = `<td>${productos.producto}</td> <td>${productos.cantidad}</td> <td>${productos.precio}</td>`
    f.appendChild(st);
})

btn2.addEventListener('click', function () {
    let m = document.getElementById('resultado')
    m.innerHTML = '<h1> Total a Pagar: ' + pagar + '</h1>'
})

let t1 = document.getElementById('c1')
let t2 = document.getElementById('c2')
let tab2 = document.getElementById('dos')
let tab1 = document.getElementById('uno')
tab1.addEventListener('click', function () {
    t2.className = "visually-hidden"
    tab1.className = "nav-link active";
    t1.className = ""
    tab2.className = "nav-link";
})


tab2.addEventListener('click', function () {
    t1.className = "visually-hidden"
    tab2.className = "nav-link active";
    t2.className = ""
    tab1.className = "nav-link";
})





