function test() {
    document.getElementById('imgplus').style.display = 'none'
    document.getElementById('imgminus').style.display = 'block'

}

function testminus() {
    document.getElementById('imgminus').style.display = 'none'
    document.getElementById('imgplus').style.display = 'block'

}
function testone() {
    document.getElementById('imgplusone').style.display = 'none'
    document.getElementById('imgminusone').style.display = 'block'
    
    

}

function testminusone() {
    document.getElementById('imgminusone').style.display = 'none'
    document.getElementById('imgplusone').style.display = 'block'

}
function testtwo() {
    document.getElementById('imgplustwo').style.display = 'none'
    document.getElementById('imgminustwo').style.display = 'block'

}

function testminustwo() {
    document.getElementById('imgminustwo').style.display = 'none'
    document.getElementById('imgplustwo').style.display = 'block'

}
function testthree() {
    document.getElementById('imgplusthree').style.display = 'none'
    document.getElementById('imgminusthree').style.display = 'block'

}

function testminusthree() {
    document.getElementById('imgminusthree').style.display = 'none'
    document.getElementById('imgplusthree').style.display = 'block'

}
function testfour() {
    document.getElementById('imgplusfour').style.display = 'none'
    document.getElementById('imgminusfour').style.display = 'block'

}

function testminusfour() {
    document.getElementById('imgminusfour').style.display = 'none'
    document.getElementById('imgplusfour').style.display = 'block'

}

//form validation

$('#contactform').validate({
    rules:{
        fname:{
            required:true,
            minlength:4,
            
        },
        number:{
            required:true,
            minlength:10,
            maxlength:10,
            number:true
            
        },
        email:{
            required:true,
            minlength:5,
            email:true
        },
        link:{
            required:true,
            url:true
        },
        aboutyou:{
            required:true,
            minlength:140,
            maxlength:1000
        }

    },
    messages:{
        fname:{
            required:'Name is required'
        },
        number:{
            required:'Contact Number is required',

        },
        email:{
            required:'Email is required'
        },
        link:{
            required:'Social media link is required'
        },
        aboutyou:{
            required:'Tell us more about you'
        }

    },submitHandler:function(contactform){
        $('#sub-button').hide()
        $.ajax({
            url:contactform.action,
            method:"post",
            data:$('#contactform').serialize(),
            success:function(response){
                $('#send-confirm-text').show()
                setTimeout(function(){location.reload()},3000)
                
                
            },
            error:function (err)
              {
          alert("Something went wrong")
              }

        })

    }


})