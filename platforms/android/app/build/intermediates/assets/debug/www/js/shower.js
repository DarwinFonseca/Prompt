function shower() {

}

shower.prototype.showCommand = function(command) {
  $("#response").append("User#" + command+"<br>");
}

shower.prototype.sendHelp = function() {
  $("#response").append("1) Entre a la opción 1  y Digite fx( , )<br>");
  $("#response").append("2) En el primer espacio de 'fx()' digile la ecuación<br>");
  $("#response").append("3) Después de la coma digite el valor de X<br>");
  $("#line").val("");
}

shower.prototype.clean = function() {
  $("#response").html("");
  $("#line").val("");
}

shower.prototype.showInput = function() {
  $("#line").remove();
  $("#response").hide();
  $(".App").append("<div id=\"response2\"></div>")
  $("#divInput").html("<input class=\"w3-input\" name=\"line2\" id=\"line2\" onkeypress=\"capturador.captureEquation(event)\"></input>");
  $("#response2").append("<p>Por favor digite fx('la ecuación, 'el valor numérico de X')</p>");
  $("#response2").append("<p>Ejemplo: fx(((x+8)*(9-x)), 2)</p>");
}

shower.prototype.showEcuationResponse = function(response){
  $("#response2").remove();
  $("#line2").remove();
  $("#divInput").html("<input class=\"w3-input\" name=\"line\" id=\"line\" onkeypress=\"capturador.captureCommand(event)\"></input>");
  $("#response").show();
  $("#response").append("<p>" + response + "</p>");
}
