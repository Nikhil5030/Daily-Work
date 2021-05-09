$(document).ready(function(){
    $('#hide').click(()=>{
    
      $("p").hide();
    });

    $('#show').click(()=>{
          $("p").addClass("add-color");
          $("p").show();
        });

        $('#show/hide').click(()=>{
            $("p").addClass("add-color");
            $("p").toggle();
          });

});