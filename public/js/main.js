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


var counter = 0;

$("#plus").click(function(){
  counter++;
  $("#count").text(counter);
});

$("#minus").click(function(){
    console.log("minus");
    if(counter>=1){
        counter--; 
    }   
  $("#count").text(counter);
});


/*
var c = 0;
var count = document.getElementById("count");
function plus(){
    c++;
    count.value = c;
}
function minus(){
  if (c > 0) {
    c--;
    count.value = c;
  }  
}
*/

function change(input)
{
    if (input.value=="NOT READY") {
        input.value = "READY";
    }
    else{
        input.value = "NOT READY";
    }
}
function track(input){
    if (input.value=="NOT READY") {
        document.getElementById("track").disabled = true;
    }
    else if (input.value=="READY"){
        document.getElementById("track").disabled = false;
    }
}

function edit(input){
    if (input.value=="EDIT") {
        input.value="NO";
    }
    else if (input.value=="NO"){
        input.value="EDIT"
    }
}
function edit_a(input){
    if (input.value=="EDIT") {
        document.getElementById("edit_amount").disabled = true;
    }
    else if (input.value=="NO"){
        document.getElementById("edit_amount").disabled = false;
    }
}
function checkdisease(checksurgery,checkliver,checkhypertension,checkdiabetes,checkpregnant,checkkidney,component1){
    console.log('com' + component1);
    if (checksurgery==1 && (component1 == 'Tomato' || component1 == 'Ripe Mango' || component1 == 'Pumpkin' || component1 == 'Banana'))
        return true;
    else if (checkliver==1 && (component1 == 'Ripe Mango'))
        return true;
    else if (checkhypertension==1 && (component1== 'Kale' || component1 == 'Carrot' || component1 == 'Tomato'))
        return true;
    else if (checkdiabetes==1 && (component1 == 'Mixed berry' || component1 == 'Kiwi' || component1== 'Avocado'))
        return true;
    else if (checkpregnant==1 && (component1 == 'Carrot' || component1 == 'Kale' || component1 == 'Pumpkin' || component1 == 'Apricot'))
        return true;
    else if (checkkidney==1 && (component1 == 'Avocado' || component1 == 'Kale' || component1 == 'Banana' || component1 == 'Spinach'))
        return true;
    else
        return false;
}
function check_test(){
    return "It's working!"
}