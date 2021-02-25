//________________2.2.1 Calculs rapides______________

//1ere methode
/*
let number = prompt("choisis un nombre ..?");
factoriel = 1;
for (var count = 1; count <= number; count++) {
  factoriel = factoriel * count;
}
console.log(factoriel);
*/

//deuxieme methode

//Calculer la factorielle en utilisant la boucle for:
//for([initialisation]; [condition]; [incrémentation]) { };
/*
let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) {
  f = 1;
  for (var i = 1; i <= nbr; i++) {
    //Pour variable i = 1, tant que i inferieur ou egal au nbr, increment i
    f = f * i; // ou f *= i;
  }
  return f;
}
console.log(fact(nbr));
*/

//methode 3 (dur a comprendre )

let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) {
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0) {
    return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr - 1);
}
console.log(fact(nbr));
