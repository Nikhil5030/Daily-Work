$(() => {
    $('#switcher-default') 
    .addClass('selected') 
    .on('click', function() { 
    $('body')
    .removeClass('narrow')
    .removeClass('large'); 
    }); 
    $('#switcher-narrow')
    .on('click', () => { 
    $('body')
    .addClass('narrow')
    .removeClass('large'); 
    }); 
    $('#switcher-large')
    .on('click', () => {  $('body')
    .removeClass('narrow')
    .addClass('large'); 
    }); 
    $('#switcher button')
    .on('click', function() { 
    $('#switcher button')
    .removeClass('selected'); 
    $(this)
    .addClass('selected'); 
    }); 
   });
   

   $(() => { 
    $('#switcher h3,h2')
    .hover(function() { 
    $(this).addClass('hover'); 
    }, function() { 
    $(this).removeClass('hover'); 
    }); 
   });

   $(() => {
    $('#switcher')
    .click(() => {
    $('#switcher button').toggleClass('hidden'); 
    }); 
   });
   