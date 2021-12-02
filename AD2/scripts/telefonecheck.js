function VerificaTelef( campo, tam ) {
    var i, c;
    var strTel = campo.value;
    if ( strTel.length != tam ) {
    alert(campo.name
    + " tem de ter " +
    tam + " dígitos!");
    return false;
    }
    for ( i = 0; i < tam; i++ ) {
    c = strTel.charAt(i);
    if ( (c < '0') || (c > '9')) {
    alert(campo.name + " só pode ter" +
    " dígitos, caracter " +
   c + " inválido!");
    return false;
    }
    }
    return true;
   }