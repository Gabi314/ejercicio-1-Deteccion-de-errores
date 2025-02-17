
//let resultado = FormatString("[#.");
//console.log("resultado:" + resultado);
//console.log("terminado");

function FormatString(sentence){

validarTipoString(sentence);

let result = [];
let tieneCaracteresPermitidos = false;

//console.log("parametro:" + sentence);

sentenceResult = sentence;
sentence = sentence.toUpperCase();

console.log("parametro post upper:" + sentence);


let i = 0;
let j = 0;
while(i < sentence.length) {

    console.log("validamos:" + sentence[i]);

    if (
        (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
        (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(i) <= 57) ||
        sentence.charCodeAt(i) == 32 ||
        sentence.charCodeAt(i) == 45 ||
        sentence.charCodeAt(i) == 95
    ) {

        if(!tieneCaracteresPermitidos){
            tieneCaracteresPermitidos = true;
        }

        console.log(sentence[i] + " ES VÁLIDO");
        result[j] = sentenceResult[i];
        j += 1;
    }
    console.log("sentence: " + sentence);
    console.log("result: " + result);

    i += 1;
}


// prueba[0] = 'a';
// prueba[1] = 'b';


console.log("parametro post while:" + sentence);



console.log(result);

if (tieneCaracteresPermitidos)
return result.join('');
else
return "ERROR";

}

function validarTipoString(dato){
    if (typeof dato !== 'string') {
        throw new Error('El parámetro no es un string');
        }
}

module.exports = FormatString;
