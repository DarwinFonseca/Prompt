function Vista() {

}

Vista.prototype.MostrarComandos = function(command) {
  $("#response").append("User#" + command+"<br>");
}

Vista.prototype.Ayuda = function() {
  $("#response").append("1) Entre a la opción 1  y Digite fx( , )<br>");
  $("#response").append("2) En el primer espacio de 'fx' digile la ecuación<br>");
  $("#response").append("3) Después de la coma digite el valor de X<br>");
  $("#line").val("");
}

Vista.prototype.Limpiar = function() {
  $("#response").html("");
  $("#line").val("");
}

Vista.prototype.MostrarValorCapturado = function() {
  $("#line").remove();
  $("#response").hide();
  $(".App").append("<div id=\"response2\"></div>")
  $("#divInput").html("<input class=\"w3-input w3-border w3-round-large w3-hover-grey\" name=\"line2\" id=\"line2\" onkeypress=\"capturador.captureEquation(event)\" placeholder=\"Digíte una opción\"></input>");
  $("#response2").append("<p>Por favor digite fx('la ecuación, 'el valor numérico de X')</p>");
  $("#response2").append("<p>Ejemplo: fx(((x/15)*(3-x)), 5)</p>");
}

Vista.prototype.MostrarRespuesta = function(response){
  $("#response2").remove();
  $("#line2").remove();
  $("#divInput").html("<input class=\"w3-input w3-border w3-round-large w3-hover-grey\" name=\"line\" id=\"line\" onkeypress=\"capturador.captureCommand(event)\"  placeholder=\"Digíte una opción\"></input>");
  $("#response").show();
  $("#response").append(response);
  $("#response").append("<br>");

}
