function Funciones(){

}

function Funciones(ecuation, x, delta) {
  this.ecuation = ecuation;
  this.solution = "";
  this.x = parseInt(x);
  this.delta = 0.01;

}

Funciones.prototype.evaluateEcuation = function(ecuation, value) {
  for (var i = 0; i < ecuation.length; i++) {
    if (ecuation.charAt(i)=="e") {
      ecuation = ecuation.replace("e", "2.7182818")
    }
    if (ecuation.charAt(i)=="x") {
      ecuation = ecuation.replace("x", value)
    }
  }
  for (var i = 0; i < ecuation.length; i++) {
    if (ecuation.charAt(i)=="^") {
      var TotalPotencia=0;
      var Previo=ecuation.charAt(i-1);
      var Potencia=ecuation.charAt(i+1);
      ecuation = ecuation.replace(Previo, "");
      ecuation = ecuation.replace(Potencia, "");
      TotalPotencia=Math.pow(Previo, Potencia);
      ecuation = ecuation.replace("^", TotalPotencia)
    }
  }

  return eval(ecuation);
}
