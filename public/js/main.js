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

alert($("input[name='component1']:checked").parent('label').text());
alert($("input[name='component2']:checked").parent('label').text());
alert($("input[name='component3']:checked").parent('label').text());

function compOneText() {
    var checkbox = document.querySelector('input[name="component1"]:checked');
    var text = checkbox.nextSibling.textContent;
}
function compTwoText() {
    var checkbox = document.querySelector('input[name="component2"]:checked');
    var text = checkbox.nextSibling.textContent;
}
function compThreeText() {
    var checkbox = document.querySelector('input[name="component3"]:checked');
    var text = checkbox.nextSibling.textContent;
}

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

