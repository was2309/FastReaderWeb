$(document).ready(function() {
    $("#playbtn").click(function(){
        let vred = $("#textinput").val();
        let vred1 = vred.split(" ");
        for(let i=0; i<vred1.length(); i++){
            console.log(vred1[i]);
        }
    }); 
});

