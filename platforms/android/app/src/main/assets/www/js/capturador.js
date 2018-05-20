function capturador() {
}

capturador.prototype.captureCommand = function(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    this.evaluateCommand($("#line").val());
  }
}
capturador.prototype.captureEquation = function(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    var Vista1 = new Vista();
    Vista1.MostrarRespuesta(this.analizeEcuation($("#line2").val()));
  }
}
capturador.prototype.evaluateCommand = function(command) {
  var Vista1 = new Vista();
  switch (command) {
    case "1":
    Vista1.MostrarValorCapturado();
     break;
    case "2":
    Vista1.Ayuda();
      break;
    default:
      Vista1.MostrarComandos(command);
  }
}

capturador.prototype.analizeEcuation = function(ecuation) {
  var Vista1 = new Vista();
  Vista1.MostrarComandos(ecuation);
  //Verifica que la ecuacion este bien escrita
  if (ecuation.includes("fx(") && ecuation.charAt(ecuation.length - 1) == ')') {
    //Parte la ecuacion
    var variables = ecuation.split(",");
    //Elimina el último paréntesis de la variable
    variables[variables.length - 1] = variables[variables.length - 1].replace(")", "");
    //Elimina el fx( de la ecuacion)
    variables[0] = variables[0].replace("fx(", "");
      var Funciones1 = new Funciones();
      var answer;
      answer=Funciones1.evaluateEcuation(variables[0], variables[1]);
      Vista1.MostrarRespuesta(answer);
  } else {
    return "Digíte una opción válida";
  }
}

var capturador = new capturador();
