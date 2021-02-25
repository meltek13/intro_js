//________________2.2.2 Pyramide de Mario____________

let number = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

vide = " ";
bloc = "";

for (var i = 1; i <= number; i++) {
  space = number - i;
  bloc += "#";
  console.log(vide.repeat(space) + bloc);
}

/*
n = 0;

function pyra(answer) {
  // Si nbr = 0 la factorielle retournera 1
  if (answer === 0) {
    return 1;
  }
  // appelez à nouveau la procédure récursive
  return;
  n = "#" + 1;
  vide = " ";
  console.log(vide + n);
  answer - pyra(answer - 1);
}
*/
