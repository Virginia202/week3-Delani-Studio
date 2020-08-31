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


// the form section
$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if(display1 && display2 != ''){
            //user-interface
            alert ('Thank you ' + display1 + ' your message has been received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});


$( "#port1" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port1" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });
  

  $( "#port2" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port2" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

  $( "#port3" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port3" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });
  
  $( "#port4" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port4" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

  $( "#port5" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port5" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

  $( "#port6" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port6" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

  $( "#port7" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port7" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

  $( "#port8" ).hover(
    function() {
        $( this ).append( $( "<span>portfolio</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "#port8" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });



  

  

  


  
