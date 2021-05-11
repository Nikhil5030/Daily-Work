$(() =>{
    $('#selected-list').addClass("special");
    $('#selected-list1').addClass("special");
    $('#selected-list2').addClass("special");
});


$(() => {
   $('td:contains(Tragedy)').addClass("special");
});

$(() => {
  
     $('td').parent().find('td:eq(2)').addClass('year');
});

