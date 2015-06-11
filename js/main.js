
function wordcount(){

var wc = document.getElementById("wordcount");
var b = window.document.body;
var count = b.innerHTML.split(' ').length;
if(wc)
  wc.innerHTML = "Word Count: " + count;
  var lrm = document.getElementById("Litrature review map:");
  if(lrm) alert("hoy");

}
