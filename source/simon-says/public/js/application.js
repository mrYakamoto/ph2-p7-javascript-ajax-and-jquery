$(document).ready(function(){

  $( "#get_color" ).click(function(event){
    event.preventDefault();
    $.post('/color').done(function(string){
      var cell = parseInt(string[0]);
      var color = string.slice(1);
      $( "ul li:nth-child(" + cell + ")" ).css("background-color", color);
    });
  });

});
