// $(document).ready(function() {
//     $("#playbtn").click(function(){
//         let vred = $("#textinput").val();
//         let vred1 = vred.split(" ");
//         for(let i=0; i<vred1.length(); i++){
//             console.log(vred1[i]);
//         }
//     }); 
// });

let function1 = () => {
    let vred = document.getElementById("textinput").value;
    let vred1 = vred.split(" ")
    vred1.map(elm => console.log(elm))
}