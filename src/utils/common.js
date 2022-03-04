const AlertWin = function(text){
    var newNode = document.createElement("div");
    newNode.id="mask_f";
    newNode.innerHTML ="<span>"+text+"</span>";
    document.body.appendChild(newNode);
    setTimeout(function(){
        document.body.removeChild(document.getElementById("mask_f"));
    },2000)
}
export {AlertWin}