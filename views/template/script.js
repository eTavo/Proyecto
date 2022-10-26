// calculadora

function calculo(){
    
    let btn = document.getElementById('btn');
    let valor = document.getElementById('valor');
    let semana = 0;
    let mes = 0;
    let anio = 0;

    if(valor > 0)
        semana = valor * 6;
        mes = valor * 25;
        anio = mes *12;

        semana.addEventListener('semana');
        mes.addEventListener('mes');
        anio.addEventListener('anio');

    else (valor < 0 || valor == 0)
        alert.call('Ingrese un valor mayor a 0');
}

btn.addEventListener('click', calculo, true);
