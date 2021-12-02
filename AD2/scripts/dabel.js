var tabprod = [
    ["", "", "Vazio", 0],
    ["Flores Silvestres", "350g", "MelSilvestre100", 20],
    ["Eucalipto ", "450g", "MelEucalipto100", 25],
    ["Flor de Laranjeira", "750g", "MelLaranja100", 40],
    ["Extrato ", "30ml", "Propol100", 16],
    ["Spray", "35ml", "Spray100", 9] ];
function Mostra(ind) {
     var titu = document.getElementById("titDes");
     var foto = document.getElementById("imgDes");
     var prec = document.getElementById("prcDes");
     titu.innerHTML = "<p>" + tabprod[ind][0] + "<br/>"
     + tabprod[ind][1] + "</p><br/>";
     foto.src = "Imagens/" + tabprod[ind][2] + ".jpg";
     prec.innerHTML = "<br/>Preço: R$ <span class='preco'>" +
    tabprod[ind][3] + ",00</span>";
}