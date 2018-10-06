// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
//btn.onclick = function() {
  //  modal.style.display = "block";
//}

function load(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}

//-------------------------------------------------------------modal^^^
//-------------------------------------------------------------count amount

$("#vote").val('0');
// Create a click handler for your increment button
$("#increaseButton").click(function () {
    var newValue = 1 + parseInt($("#vote").val());
    $("#vote").val(newValue);
});
// .. and your decrement button
$("#decreaseButton").click(function () {
    var newValue = parseInt($("#vote").val()) - 1;
    $("#vote").val(newValue);
});


var counter = 0;

$("#plus").click(function(){
  counter++;
  $("#count").text(counter);
});

$("#minus").click(function(){
    if(counter>=1){
        counter--; 
    }   
  $("#count").text(counter);
});

