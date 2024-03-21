const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function traducirPalabra(palabra) {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let palabraTraducida = '';

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra.charAt(i);

    if (vocales.includes(letra.toLowerCase())) {
      palabraTraducida += letra.toLowerCase() + 'p' + letra.toLowerCase();
    } else {
      palabraTraducida += letra;
    }
  }

  return palabraTraducida;
}

rl.question('Ingrese la palabra a traducir al Idioma P: ', (palabra) => {
  const palabraTraducida = traducirPalabra(palabra);
  console.log('Palabra traducida al Idioma P:', palabraTraducida);

  rl.close();
});
