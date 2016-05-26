$(document).ready(function(){
  $("#blanks").submit(function(event){
    var full_nameInput = $("input#full_name").val();

    $(".full_name").text(full_nameInput);

    $("#story").show();

    event.preventDefault();

});//closes out submit function on line 2

}); //closes out document ready on line 1
