document.getElementById('valor3').style.display = 'none';
document.getElementById('TextT3').style.display = 'none';
//Triangulo
function Borrar() {
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("valor3").value = "";
  document.getElementById("ResultT").value= "";
}
function AreaT() {
  document.getElementById("TextT1").innerHTML = "Base: ";
  document.getElementById("TextT2").innerHTML = "Altura: ";


  document.getElementById('TextT3').style.display = 'none';
  document.getElementById('valor3').style.display = 'none';
}
function PerimetroT() {
  document.getElementById("TextT1").innerHTML = "Lado 1: ";
  document.getElementById("TextT2").innerHTML = "Lado 2: ";
  document.getElementById("TextT3").innerHTML = "Base: ";
  

  document.getElementById('valor3').style.display = 'inline';
  document.getElementById('TextT3').style.display = 'inline';
}
function CalcularT() {
  if (document.getElementById("TextT1").innerText == "Base: ") {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    document.getElementById("ResultT").value = (a * b) / 2;
  } else {
    if (document.getElementById("TextT1").innerText == "Lado 1: ") {
      let a = parseInt(document.getElementById("valor1").value);
      let b = parseInt(document.getElementById("valor2").value);
      let c = parseInt(document.getElementById("valor3").value);
      document.getElementById("ResultT").value = c + a + b;
    }
  }
}
//Rectangulo
function BorrarR() {
  document.getElementById("valor4").value = "";
  document.getElementById("valor5").value = "";
  document.getElementById("ResultR").value= "";
}

function PerimetroR() {
    let a = parseInt(document.getElementById("valor4").value);
    let b = parseInt(document.getElementById("valor5").value);
    document.getElementById("ResultR").value = (a * 2 + b* 2);
}
function AreaR() {
  let a = parseInt(document.getElementById("valor4").value);
  let b = parseInt(document.getElementById("valor5").value);
  document.getElementById("ResultR").value = (a * b);
}
//Circulo
function BorrarC(){
  document.getElementById("valor6").value = "";
  document.getElementById("ResultC").value= "";
}
function PerimetroC() {
  let a = parseInt(document.getElementById("valor6").value);
  document.getElementById("ResultC").value = (2*a*Math.PI);
}
function AreaC() {
let a = parseInt(document.getElementById("valor6").value);
document.getElementById("ResultC").value = (Math.pow(a,2)*Math.PI);
}
