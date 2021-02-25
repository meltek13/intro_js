let answer = prompt("Parle moi");

switch (true) {
  case answer.includes("?"):
    console.log("ouai ouai ...");
    break;

  case answer === undefined || answer === "":
    console.log("t'es en PLS ?");
    break;

  case answer === answer.toUpperCase():
    console.log("pwaa calme toi");
    break;

  case answer.includes("fortnite"):
    console.log("on s' fait une partie soum-soum ?");
    break;

  default:
    console.log("balek.");
    break;
}
