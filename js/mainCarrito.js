function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="alert alert_purple text-center" role="alert">No se encontraron productos en el carrito.</p>`
  
    if (productos.length > 0) {
      contenido = `<p class="text-end"><a href="#" class="btn btn_purple button text-black" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito <img src= "assets/imagenes/delete.png" width="24"></a></p>
        <table class="table">`;
        let total =0;
  
      for (let producto of productos) {
        let valor = producto.valor * producto.cantidad;
        contenido += ` <tr>
          <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
          <td class="align-middle">${producto.nombre} X ${producto.cantidad}</td>
          <td class="align-middle"><b>$${valor}</b></td>
          <td class="text-end"><a href="#" class="btn btn button" onclick="eliminarCarrito(${producto.id})" ><img src="assets/imagenes/delete.png" width="24"></a> </td>
          </tr>`;
          total += valor;
  
      }
  
      contenido += `<tr>
      <td>&nbsp;</td>
      <td>Total a Pagar</td>
      <td class="align-middle"><b>$${total}</b></td>
      <td class="text-end"><a href="#" class="btn btn_purple">Finalizar Compra</a></td>
      </tr>`;
  
      contenido += `</table>`;
    }
  
  
    document.getElementById("productos_carrito").innerHTML = contenido;
  }
  
  actualizarBotonCarrito();
  renderProductosCarrito();