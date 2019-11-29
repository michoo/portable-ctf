// I know it's easy to crack...


function validateN1() {
  var x = document.forms["myForm"]["resp"].value;
    x = x.replace(/\s/g, '').toLowerCase();
    if (x === "3") {
        alert("Bravo !!!");
        return true;
    }
    else {
        alert("Et bien, non, ce n'est pas la bonne réponse ");
        return false;
    }
}

function validateCesar() {
  var x = document.forms["myForm"]["resp"].value;
  x = x.replace(/\s/g, '').toLowerCase();
  if (x === "jesuisfierdetoi!") {
      alert("Bien !!!");
    return true;
  }
  else {
      alert("^⨀ᴥ⨀^ \n\nPetits indices: ASCII table, codage César ;)");
      return false;
  }
}

function validateMorse() {
  var x = document.forms["myForm"]["resp"].value;
  x = x.replace(/\s/g, '').toLowerCase();
  if (x === "lespiratesontunlanguageilsgrognent") {
      alert("Le Crabe Croustillant");
    return true;
  }
  else {
      var t = "¯\\_(ツ)_/¯ \n\n" +
          "petit indice: \"/\" est un espace ;)";
      alert(t);
      return false;
  }
}

function validateJDM() {
    var x = document.forms["myForm"]["resp"].value;
    x = x.replace(/\s/g, '').toLowerCase();
    if (x === "15") {
        alert("En même temps elle était facile ...");
        return true;
    }
    else {
        var t = "Bah là...";
        alert(t);
        return false;
    }
}

function validateSuite() {
    var x = document.forms["myForm"]["resp"].value;
    x = x.replace(/\s/g, '').toLowerCase();
    if (x === "6") {
        alert("@( * O * )@");
        return true;
    }
    else {
        alert("(╯°□°）╯ ︵ ┻━┻");
        return false;
    }
}

function validateEau() {
    var x = document.forms["myForm"]["resp"].value;
    x = x.replace(/\s/g, '').toLowerCase();
    if ((x === "1") || (x === "une")) {
        alert(",.-~*´¨¯¨`*·~-.¸-(_Super !_)-,.-~*´¨¯¨`*·~-.¸");
        return true;
    }
    else {
        alert("Un optimiste vois le verre toujours à moitié plein !");
        return false;
    }
}
