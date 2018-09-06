var i = 1;
function addLabels(boolean){
    if(boolean){
        changeTagName(i-1);
    }
    $(".my-label").append(
        "<div id='div"+ i +"'>"+
        "<input type='text' class='label' id='label"+i+"' onkeyup='followToChange("+i+")'/>"+"<button onclick='remove(" + i + ")'>"+"&times;"+"</button>"+
        "</div>"
    );
    document.getElementById("label"+ i).focus();
    i++;
}

function remove (id) {
    $("#div"+id).remove();
}

function changeTagName (id) {
    let str = document.getElementById("label"+ id).value;
    //$(document).ready(function () {
    //    var $input = $("#label" + id);
    //    console.log($input);
    //    var html = $input.get(0).outerHTML;
    //    html = html.replace(/^<input/,"<div");
    //    html = html.replace(/\/>$/,"/div>");
    //    $input.replaceWith(html);
    //});
    let element = $("<div id='label"+ id +"' class='label'></div>").html($('#label'+id).html());
    $("#label"+ id).prop('outerHTML',element.prop('outerHTML'));
    document.getElementById("label"+id).innerHTML = str;
}
function followToChange (id) {
    console.log(event);
    if(event.keyCode === 13){
        addLabels(true);
        return;
    }
    if(event.keyCode === 32){
        changeLen(id);
        return;
    }
    changeLen(id);
}
function changeLen (id){
    let minLen = 0,
        len = getLen(document.getElementById("label"+id).value);
    if(len > minLen){
        document.getElementById("label"+id).style.width = ""+len*7+"px";
    }
}
function getLen (str) {
    var l = 0;
    var a = str.split("");
    for (var i=0;i<a.length;i++) {
        if (a[i].charCodeAt(0)<299) {
            l++;
        } else {
            l+=2;
        }
    }
    return l;
}