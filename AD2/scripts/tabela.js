var tabProd = new Array(5);
tabProd[0] = [ "Iogurte", "Natural com mel", 130, "IogurteNatMel100", 8];
tabProd[1] = [ "Iogurte", "Zero lactose", 130, "Iogurtezerolac100", 8];
tabProd[2] = [ "Balas", "de Gengibre e Mel", 60, "BalaGengibre100", 6];
tabProd[3] = [ "Balas", "de Mel e Anis", 60, "BalaAnis100", 6];
tabProd[4] = [ "Barra de Cereal", "de Mel e Granola", 60, "BarraGranAveiaMel100", 5];

function MostraProd(tipo) {
    var jan = open("", tabProd[tipo][0], "location=no,status=no," + "width=320,height=455");

with (jan.document) {
 write("<!DOCTYPE html>");
 write("<html><head><title>Produto Amigo Urso</title>");
 write("<link rel='stylesheet' type='text/css'");
 write(" href='AmigoUrso.css'>");
 write("<link rel='stylesheet' type='text/css' href=");
 write("'https://fonts.googleapis.com/css?family=Lato|Rubik'>");
 write("</head><body class='janInfo'>");
 write("<h2>", tabProd[tipo][0], "</h2>");
 write("<div class='janInfoImg'>");
 write("<p><img src='Imagens/",
 tabProd[tipo][3], ".jpg' /></p></div>");
 write("<div class='janInfoDetalhe'>");
 write("<p>Tipo: ", tabProd[tipo][1], "</p>" );
 write("<p>Qtd: ", tabProd[tipo][2], "g</p>" );
 write("<p>Preço: R$ ");
 write("<span class='preco'>");
 write(tabProd[tipo][4], ",00</p></span></div>" );
 write("<form>");
 write("<input type='button' value='Fechar' ");
 write("onClick='window.close();'/>");
 write("</form>");
 write("</body></html>");
 close();
 }
}