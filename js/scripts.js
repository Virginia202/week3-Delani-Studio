// The toggle effect----Users-interface
$(document).ready(function(){
    $("#image1").click(function(){
        $("#image1").slideDown("fast").hide("1000");
        $(".our").show("fast")
    });
    $(".our").click(function(){
        $(".our").slideUp("fast");
        $("#image1").slideDown("fast")
    });

    $("#image2").click(function(){
        $("#image2").slideDown("fast").hide("1000");
        $(".all").show("fast")
    });
    $(".all").click(function(){
        $(".all").slideUp("fast");
        $("#image2").slideDown("fast")
    });

    $("#image3").click(function(){
        $("#image3").slideDown("fast").hide("1000");
        $(".planning").show("fast")
    });
    $(".planning").click(function(){
        $(".planning").slideUp("fast");
        $("#image3").slideDown("fast")
    });
});


// section four portfolio
$(document).ready(function(){

});

