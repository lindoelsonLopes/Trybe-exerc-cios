let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;
    for(let indice = 0; indice < numbers.length; indice +=1){
        if(numbers[indice] % 2 !== 0){
             numeroImpar +=1;
        
            
        }
    }
        if(numeroImpar === 0){
            console.log('Nenhum valor ímpar encontrado');
        }
    

    console.log('Foram encontratos ' + numeroImpar + ' numero(s) ímpares.');
        
