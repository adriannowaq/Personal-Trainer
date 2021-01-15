jQuery("form").submit(function(e){
    e.preventDefault();  
    alert("Dziekujemy za wiadomość, wkrótce się do Ciebie odezwiemy");
  });


  jQuery("#firstaccordion").click(function(e){
    $("#offer2").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer3").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer1").toggleClass("d-none").fadeOut(0).fadeIn(500);
    $("#secondaccordion .card").removeClass("tile-active");
    $("#thirdaccordion .card").removeClass("tile-active");
    $("#firstaccordion .card").toggleClass("tile-active").fadeOut(0).fadeIn(500);
    
  });


  jQuery("#secondaccordion").click(function(e){
    $("#offer1").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer3").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer2").toggleClass("d-none").fadeOut(0).fadeIn(500);
    $("#firstaccordion .card").removeClass("tile-active");
    $("#thirdaccordion .card").removeClass("tile-active");
    $("#secondaccordion .card").toggleClass("tile-active").fadeOut(0).fadeIn(500);
  });

  jQuery("#thirdaccordion").click(function(e){
    $("#offer1").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer2").addClass("d-none").fadeOut(500).fadeIn(0);
    $("#offer3").toggleClass("d-none").fadeOut(0).fadeIn(500);
    $("#firstaccordion .card").removeClass("tile-active");
    $("#secondaccordion .card").removeClass("tile-active");
    $("#thirdaccordion .card").toggleClass("tile-active").fadeOut(0).fadeIn(500);
  });

  jQuery(".button-buy").click(function(e){
    alert("Przepraszamy obecnie opcja jest niedostępna, prosimy o kontakt telefoniczny");
    
  });
