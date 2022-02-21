/* USADO PARA ESCREVER NA TELA
document.write("Nome");
*/
/* usando variavel declarando seu conteudo atribuindo
var idade = 26, nome = 'Douglas', end = 'SP', tell = '981521995';
var texte ;
document.write(nome + idade + end + tell);

idade = idade + 1;
idade += 1;
++idade ou idade++

texto = `A idade de ${nome} é ${idade}`
*/
/* para declarar variavel 
usa o LET para declarar variavel que avisa se voce declarar dus vezes a mesma variavel 
ele apresenta um erro
ou CONST que é uma constante



   console.log(imc.toFixed(2));//toFixed define o número de casas decimais
*/

NO CASO DO IF
let hora =6,
    mensagem = '';

    if (hora < 12){
        mensagem = 'Bom dia';
    } else {
        mensagem = 'Boa Noite'
    }

    da pra por um else if (outra condição)

console.log(mensagem);

SWITCH
para evitar fazer varios ifs

switch(mes){
    case 1: nomeMes = 'Janeiro';  break;
    case 2: nomeMes = 'Janeiro'; break;
    case 3: nomeMes = 'Janeiro'; break;
    case 4: nomeMes = 'Janeiro'; break;
    case 5: nomeMes = 'Janeiro'; break;
    case 6: nomeMes = 'Janeiro'; break;
    case 7: nomeMes = 'Janeiro'; break;
    case 8: nomeMes = 'Janeiro'; break;
    case 9: nomeMes = 'Janeiro'; break;
    case 10: nomeMes = 'Janeiro'; break;
    case 11: nomeMes = 'Janeiro'; break;
    case 12: nomeMes = 'Janeiro'; break;

    default: nomeMes = 'Mes Invalido';

}

let vogal = false;
switch(letra){
    case 'a': vogal = true; break;
    case 'e': vogal = true; break;
    case 'i': vogal = true; break;
    case 'o': vogal = true; break;
    case 'u': vogal = true; break;
    
}
console.log(vogal ? 'Vogal' : 'Consoante');


let ab = a + b,
    ac = a + c,
    bc = b + c,
    eh_triangulo = (ab > c) && (ac > b) && (bc > a);

    if(eh_triangulo){
        if(a === b && a === c){
            console.log('Equilátero');
        } else if(a !== b && a !== c && b !== c){
            console.log('Escaleno');
        }else{
            console.log('Isóceles');
        }

    } else{
        console.log('Não é um triângulo');
    }


for(declara variavel e inicia ela ; condição; incrementa variavel){
    codigo
}

usa while quando não souber quando acaba o loop
cria contador fora
while(condição enquanto ela durar mantem o laço){
    codigo
    contador
}

do {
    executa essa condição pelo menos uma vez
}while();


comando continue; (usa para ignorar comandos dentro de um loop)
comando break; (usados para parar execução de forma forçada)

//comando para criar mensagem na tela e guardar dados.
//function clicar(){

   // let guardar = getSelection(InputEvent);
  //  document.write(window.guardar);

//}
//let nomeUser = prompt('Qual o seu Nome?');
//document.write(nomeUser);







