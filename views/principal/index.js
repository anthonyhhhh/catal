function agregarElemento() {
  var texto = document.getElementById("texto").value;
  var imagen = document.getElementById("imagen").files[0];

  if (texto !== "" || imagen) {
    var elementosDiv = document.getElementById("elementos");

    var elementoDiv = document.createElement("div");
    elementoDiv.classList.add("elemento");

    if (imagen) {
      var imagenTag = document.createElement("img");
      imagenTag.src = URL.createObjectURL(imagen);
      elementoDiv.appendChild(imagenTag);
    }

    if (texto !== "") {
      var textoTag = document.createElement("p");
      textoTag.innerText = texto;
      elementoDiv.appendChild(textoTag);
    }

    var eliminarBtn = document.createElement("button");
    eliminarBtn.innerText = "Eliminar";
    eliminarBtn.classList.add("eliminar");
    eliminarBtn.onclick = function() {
      elementoDiv.remove();
    };
    elementoDiv.appendChild(eliminarBtn);

    elementosDiv.appendChild(elementoDiv);

    fadeElemento(elementoDiv);
  }
}

function fadeElemento(elemento) {
  elemento.style.opacity = "0";
  setTimeout(function() {
    elemento.style.opacity = "1";
  }, 100);
}