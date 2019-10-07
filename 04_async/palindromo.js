/* var palindrome=prompt("Ana")

var x=palabra.toLowerCase();


/* var z="";
for (var i=0;i<y.length;i++){
if (y[i]!=""){
z=y[i];
} */
/* }
 */
/* for (var i=0;i<n.length;i++){
if(n[i]==m[i]){
alert("Esto es un palíndromo")
return (true);
}
else{
alert("Esto no es un palíndromo")
return(false);
}
}
 */ 

 const palindromo = "Anita lava la tina";

 const palindromoValidator = (palabra) => {
    const palabraProcesada = palabra.replace(/\s/g, '').toLowerCase()

    const reversePalabra = palabraProcesada.split("").reverse().join().replace(/,/g,'')

    if (reversePalabra === palabraProcesada){
        return `La frase o palabra ${palabra} es palindromo`
    }else{
        return `La frase o palabra ${palabra} NO es palindromo`
    }
    
 };

 console.log(palindromoValidator(palindromo));