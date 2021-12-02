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

   /*
* Lista de Compras
*/
var tabPrcProd = [ [ "", 0],
[ "Iogurte", 8],
[ "Iogurte", 8],
[ "Balas", 6],
[ "Balas", 6],
[ "Barra", 5],
["Pote", 20],
["Pote", 25],
["Pote", 40],
["Própolis", 16],
["Própolis", 9] ];
function IncluiLista( sel ) {
var prod = sel.selectedIndex;
if ( prod != 0 ) {
var tip = tabPrcProd[prod][0];
var prc = tabPrcProd[prod][1];
sel.selectedIndex = 0;
with ( sel.form ) {
listaPedidos.value += tip + " " +
sel.options[prod].text + '\n';
TxtTotal.value = prc + parseInt(TxtTotal.value);
}
}
else
alert("Nenhum Produto selecionado!");
}