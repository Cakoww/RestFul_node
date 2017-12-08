//process.argv --> parametros passados pelo console ex.: node <arquivo.js> --param1 --param2 --param3 ...

function temParam(param){


    return process.argv.indexOf(param) !== -1

}


if(temParam('--producao')){
    console.log('atenção!')
}else{
    console.log('tranquilo!')
}
