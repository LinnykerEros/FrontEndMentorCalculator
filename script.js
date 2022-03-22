let input = document.getElementById("screen");
let resultado = document.getElementById("resultado");

function inserirNum(num) {
  document.getElementById("resultado").innerHTML += num;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
//função para apagar.
function del() {
  let deletar = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = deletar.substring(
    0,
    deletar.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "Nada para calcular";
  }
}

function buttonTema(num) {
  if (num == 0) {
    document.body.classList.toggle("temaPrincipal");
  } else if (num == 1) {
    document.body.setAttribute("class", "");
    document.body.classList.add("tema1");
  } else if (num == 2) {
    document.body.setAttribute("class", "");
    document.body.classList.add("tema2");
  } else {
    document.body.setAttribute("class", "");
    document.body.classList.add("tema3");
  }
}

// function buttonTema1() {
//   let buttonTema1 = document.getElementById("buttonTema1");
//   let buttonTema2 = document.getElementById("buttonTema2");
//   let buttonTema3 = document.getElementById("buttonTema3");
//   if (buttonTema1.style.marginRight == 0) {
//     buttonTema1.style.background = "red";
//     buttonTema1.style.marginRight = "10px";
//     document.body.classList.add("tema1");
//   } else {
//     buttonTema1.style.background = "";
//     buttonTema1.style.marginRight = "";
//     document.body.classList.toggle("tema1");
//   }
// }

// function buttonTema2() {
//   let buttonTema1 = document.getElementById("buttonTema1");
//   let buttonTema2 = document.getElementById("buttonTema2");
//   let buttonTema3 = document.getElementById("buttonTema3");
//   if (buttonTema2.style.marginRight == 0) {
//     buttonTema1.style.background = "";
//     buttonTema1.style.marginRight = "";
//     buttonTema2.style.background = "red";
//     buttonTema2.style.marginRight = "10px";
//     document.body.classList.toggle("dark");
//   } else {
//     document.body.classList.toggle("dark");
//     buttonTema2.style.background = "";
//     buttonTema2.style.marginRight = "";
//   }
// }
// function buttonTema3() {
//   let buttonTema3 = document.getElementById("buttonTema3");
//   if (buttonTema3.style.marginRight == 0) {
//     buttonTema3.style.background = "red";
//     buttonTema3.style.marginRight = "10px";
//     document.body.classList.toggle("tema3");
//   } else {
//     buttonTema3.style.background = "";
//     buttonTema3.style.marginRight = "";
//     document.body.classList.toggle("tema3");
//   }
// }
