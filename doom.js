function agregarAlCarrito(button) {
    button.classList.add("agregado");
    button.innerHTML = "Agregado al carrito";
    var card = button.parentNode;
    card.classList.add("card-resaltada");
  }
  