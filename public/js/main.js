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


function change(input)
{
    if ($(input).val() === "NOT READY") {
        getReadData(input, '/admin/payment/');
    }
    else {
        getReadData(input, '/admin/payment2/');
    }
    //getRealData(input);
}
function send(input)
{
    if ($(input).val() === "NOT READY") {
        input.value="READY"
    }
    else {
        input.value="NOT READY"
    }
    //getRealData(input);
}
// function track(input){
//     if (input.value=="NOT READY") {
//         document.getElementById("track").disabled = true;
//     }
//     else if (input.value=="READY"){
//         document.getElementById("track").disabled = false;
//     }
// }

// function edit(input){
//     if (input.value=="READY") {
//         input.value="NOT READY";
//     }
//     else if (input.value=="NOT READY"){
//         input.value="READY"
//     }
// }
function edit_a(input){
    if (input.value=="EDIT") {
        document.getElementById("edit_amount").disabled = true;
    }
    else if (input.value=="NO"){
        document.getElementById("edit_amount").disabled = false;
    }
}

function getReadData(input, path) {
    //console.log(input);
    //console.log('xhr: ', path + $(input).attr("num"));
    $.ajax({
        url: path + $(input).attr("num"),
        method: "POST",
        cache: false,
        success: function(data) { 
            if ($(input).val() == "READY") {
                $(input).removeClass("status2");
                $(input).addClass("status");
                $(input).val("NOT READY");
            } else if ($(input).val() == "NOT READY") {
                $(input).removeClass("status");
                $(input).addClass("status2");
                $(input).val("READY");
            }
         },
        error: function(data) { console.error(data) }
    })
}

function getReadDataSend(input, path) {
    //console.log(input);
    //console.log('xhr: ', path + $(input).attr("num"));
    $.ajax({
        url: path + $(input).attr("num"),
        method: "POST",
        cache: false,
        success: function(data) { 
            if ($(input).val() == "READY") {
                $(input).removeClass("status2");
                $(input).addClass("status");
                $(input).val("NOT READY");
                const num = $(input).attr("num");
                const appened = $(`td#b_r[num="${$(input).attr("num")}"]`);
                const appenedinput = $('<input type="text", placeholder="Tracking No.", name="trackingnum" class="inputbox">');
                const toAppend = $(`<input onclick='submitnum("${num}","/admin/tracking/")' type='submit' value='SUBMIT' class='status'>`)
                const appenedtrack = $(`td#texttest[num="${$(input).attr("num")}"]`);
                $(appened).removeClass("status");
                $(appened).addClass("status2");
                $(appenedtrack).addClass("inputbox");
                // const appenedinput = $('<input type="text", placeholder="Tracking No.", name="trackingnum" class="inputbox" disabled="true">');
                // const appenedtrack = $(`td#texttest[num="${$(input).attr("num")}"]`);
                // $(appenedtrack).append(appenedinput);
            } else if ($(input).val() == "NOT READY") {
                $(input).removeClass("status");
                $(input).addClass("status2");
                $(input).val("READY");
                //alert( "Handler for .click() called." );

                const num = $(input).attr("num");
                const appened = $(`td#b_r[num="${$(input).attr("num")}"]`);
                const appenedinput = $('<input type="text", placeholder="Tracking No.", name="trackingnum" class="inputbox">');
                const toAppend = $(`<input onclick='submitnum("${num}","/admin/tracking/")' type='submit' value='SUBMIT' class='status'>`)
                const appenedtrack = $(`td#texttest[num="${$(input).attr("num")}"]`);
                //console.log(appened, toAppend);
                $(appened).append(toAppend);
                $(appened).removeClass("status2");
                $(appened).addClass("status");
                $(appenedtrack).append(appenedinput);
                //track(input)
                //const appenedinput = $(`td#b_r[num="${$(input).attr("num")}"]`);
                // $( $(input).val()).click(function() {
                //     alert( "Handler for .click() called." );
                // });
            }
         },
        error: function(data) { console.error(data) }
    })
}

// function submitnum(input, path) {
//     //console.log(input);
//     //console.log('xhr: ', path + $(input).attr("num"));
//     $.ajax({
//         url: path + $(input).attr("num") + '/' + $(input).attr("numid"),
//         method: "POST",
//         cache: false,
//         success: function(data) { 
//             console.log("yah")
//         }
//     })
// }

function msg(input) {
    swal({  title: "ARE YOU SURE?",
    text: "Do you really want to delete this formula?",     
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Remove formula!",   
    cancelButtonText: "Cancel",   
    closeOnConfirm: false,   
    closeOnCancel: false })
    .then((result) => {
    if (result.value) {
        $.post('/admin/delete/' + $(input).attr("num"))
        swal({
        title: 'Deleted!',
        title:'Formula has been deleted.',
        type: 'success',
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "OK!",
        })
        .then((result) =>{
            if(result.value){
                //console.log("test")
                location.reload();
            }
        })
    }
    })
}


function deletemsg(input){
    swal({  title: "ARE YOU SURE?",
    text: "Do you really want to delete this order?",     
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Remove Order!",   
    cancelButtonText: "Cancel",   
    closeOnConfirm: false,   
    closeOnCancel: false })
    .then((result) => {
    if (result.value) {
        $.post('/cart/' + $(input).attr("num") + '/' + $(input).attr("numid"))
        swal({
        title: 'Deleted!',
        title:'Order has been deleted.',
        type: 'success',
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "OK!",
        })
        location.reload();
    }
    })
}

function loading(input){
    $(modal).hide();
    swal({
    title: 'Loading...',
    //imageUrl: '/img/custom_bg.jpg',
    background: "#ccc",
    confirmButtonColor: "#666",
    onOpen: () => {
        swal.showLoading()
    }
    })
}

// function postdisease(input, path) {
//     $.ajax({
//         url: path + $(input).attr("num") + '/' + $(input).attr("id") ,
//         method: "POST",
//         cache: false,
//         success: function(data) { 
//             console.log("yay")
//             //$("#modal .close").click()
//             // $(modal).remove();
//             // if (data.checksurgery==1 && (data.component1 == 'Tomato' || data.component1 == 'Ripe Mango' || data.component1 == 'Pumpkin' || data.component1 == 'Banana'))
//             //     console.log("true")
//             // else
//             //     console.log("false")
//             // //data-dismiss=="modal"
//             // //$('.modal').removeClass('show');
//             // //$(input).addClass("");
//          },
//         error: function(data) { console.error(data) }
//     })
// }
