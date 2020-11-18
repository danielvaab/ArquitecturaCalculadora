document.getElementById("valor3").style.display = "none";
document.getElementById("TextT3").style.display = "none";
//Triangulo
function Borrar() {
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("valor3").value = "";
  document.getElementById("ResultT").value = "";
}
function AreaT() {
  document.getElementById("TextT1").innerHTML = "Base: ";
  document.getElementById("TextT2").innerHTML = "Altura: ";

  document.getElementById("TextT3").style.display = "none";
  document.getElementById("valor3").style.display = "none";
}
function PerimetroT() {
  document.getElementById("TextT1").innerHTML = "Lado 1: ";
  document.getElementById("TextT2").innerHTML = "Lado 2: ";
  document.getElementById("TextT3").innerHTML = "Base: ";

  document.getElementById("valor3").style.display = "inline";
  document.getElementById("TextT3").style.display = "inline";
}
function CalcularT() {
  if (document.getElementById("TextT1").innerText == "Base: ") {
    let b = parseInt(document.getElementById("valor1").value);
    let h = parseInt(document.getElementById("valor2").value);
    let data = { b, h };
    fetch("/calcularTrianguloA", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then(
        (response) =>
          (document.getElementById("ResultT").value = response.respuesta)
      );
  } else {
    if (document.getElementById("TextT1").innerText == "Lado 1: ") {
      let a = parseInt(document.getElementById("valor1").value);
      let b = parseInt(document.getElementById("valor2").value);
      let c = parseInt(document.getElementById("valor3").value);
      let data = { a, b, c };
      fetch("/calcularTrianguloP", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then(
          (response) =>
            (document.getElementById("ResultT").value = response.respuesta)
        );
    }
  }
}

//----------------------------------Rectangulo
function BorrarR() {
  document.getElementById("valor4").value = "";
  document.getElementById("valor5").value = "";
  document.getElementById("ResultR").value = "";
}

function PerimetroR() {
  let a = parseInt(document.getElementById("valor4").value);
  let b = parseInt(document.getElementById("valor5").value);
  let data = { a, b };
  fetch("/calcularRectanguloP", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then(
      (response) =>
        (document.getElementById("ResultR").value = response.respuesta)
    );
}

function AreaR() {
  let a = parseInt(document.getElementById("valor4").value);
  let b = parseInt(document.getElementById("valor5").value);
  let data = { a, b };
  fetch("/calcularRectanguloA", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then(
      (response) =>
        (document.getElementById("ResultR").value = response.respuesta)
    );
}
//----------------------------------Circulo
function BorrarC() {
  document.getElementById("valor6").value = "";
  document.getElementById("ResultC").value = "";
}
function PerimetroC() {
  let r = parseInt(document.getElementById("valor6").value);
  fetch("/calcularCirculoP", {
    method: "POST",
    body: JSON.stringify({ r }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then(
      (response) =>
        (document.getElementById("ResultC").value = response.respuesta)
    );
}
function AreaC() {
  let r = parseInt(document.getElementById("valor6").value);
  fetch("/calcularCirculoA", {
    method: "POST",
    body: JSON.stringify({ r }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then(
      (response) =>
        (document.getElementById("ResultC").value = response.respuesta)
    );
}
