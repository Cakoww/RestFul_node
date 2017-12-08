/*process.stdout.write -- Escreve no console
  process.stdin.on -- espera a escrita do usuário  

*/

process.stdout.write('Entre com algum dado...')
process.stdin.on('data', function(data){
    process.stdout.write(`Seu dado de entrada foi: ${data.toString()} \n gracias!`)
    process.exit()
})