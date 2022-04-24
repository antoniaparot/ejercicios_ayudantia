
$(document).ready(function(){
    var foto1 = $("#foto1");


    foto1.mouseenter(function(){
        $(this).hide();
    });

    foto1.mouseleave(function(){
        $(this).show();

    });

    var segundo = $("#texto3");
    
    segundo.mouseenter(function(){
        this.style.backgroundColor = "orange" ;
    });
    segundo.mouseleave(function(){
        this.style.backgroundColor = "yellowgreen" ;
    });


    var texto2 = $("#texto2")
    texto2.mouseenter(function(){
        this.textContent= "NUEVO TEXTOOO";
    });
    texto2.mouseleave(function(){
        this.textContent= "Espero que te haya gustado!! Muchas graciiiaaasssss";
    });
    
});







