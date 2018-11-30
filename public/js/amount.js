$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    postamount(this,'/cart/confirm/',valueCurrent)
});

function postamount(input, path, value) {
    $.ajax({
        url: path + $(input).attr("num") + '/' + $(input).attr("numid") ,
        method: "POST",
        data:{
            amount : value,
        } ,
        cache: false,
        success: function() { 
            
            console.log(value)
            
            //$("#modal .close").click()
            // $(modal).remove();
            // if (data.checksurgery==1 && (data.component1 == 'Tomato' || data.component1 == 'Ripe Mango' || data.component1 == 'Pumpkin' || data.component1 == 'Banana'))
            //     console.log("true")
            // else
            //     console.log("false")
            // //data-dismiss=="modal"
            // //$('.modal').removeClass('show');
            // //$(input).addClass("");
         },
        error: function(data) { console.error(data) }
    })
}