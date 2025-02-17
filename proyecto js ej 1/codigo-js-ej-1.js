
let resultado = FormatString("Lavese las manos,]4por favor!")
console.log("resultado:" + resultado);
console.log("terminado");

function FormatString(sentence){
let result = [];
let prueba = "ab";
let prueba2 = [];

console.log("parametro:" + sentence);

sentence = sentence.toUpperCase();

console.log("parametro post upper:" + sentence);


let i = 0;
let j = 0;
while(i < sentence.length) {

    console.log("validamos:" + sentence[i]);

    if (
        (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
        (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(j) <= 57) ||
        sentence.charCodeAt(i) == 32 ||
        sentence.charCodeAt(i) == 45
    ) {
        console.log(sentence[i] + " ES VÁLIDO");
        sentence[j] = result[i]
        j += 1;
    }
    console.log("sentence: " + sentence);
    console.log("result: " + result);

    i += 1;
}


// prueba[0] = 'a';
// prueba[1] = 'b';
prueba[0] = 'z';
prueba[1] = prueba2[1];

console.log("parametro post while:" + sentence);

console.log("prueba:" + prueba);

console.log(result);

return result.join('');

}

