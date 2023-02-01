const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#calcular-btn");
const form = document.querySelector('#form');
const mostrar = document.querySelector("#mostrando-resultado");
 
// btn.addEventListener('click', btnOnClick);
form.addEventListener('submit',btnOnClick);

function btnOnClick(event) {
    //evita que se recargue la pagina
    event.preventDefault();
    console.log(input1.value);

    if(input1.value == '' && input2.value == ''){
        mostrar.innerText = 'Ingresa un valor...';
        
    }else{
        if(input1.value == ''){
            input1.value = 0;
        }else if(input2.value == ''){
            input2.value = 0;
        }
        mostrar.innerText = 'resultado = ' + 
                        (parseInt(input1.value) + parseInt(input2.value));
    } 
}






