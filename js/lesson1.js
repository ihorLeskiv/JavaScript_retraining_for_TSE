function addData() {
    var input = document.getElementById("myInput").value;
    var e = document.createElement('li'),
        a = document.createElement('a');
    a.innerHTML = ' X ';
    a.onclick = function(){
        var el = this.parentNode;
        removeEl(el);
    };
    e.innerHTML = input;
    e.appendChild(a);
    document.getElementById("result").appendChild(e);
    document.getElementById("myInput").value = "";
}
    
function removeEl(el){
    el.parentNode.removeChild(el);
}