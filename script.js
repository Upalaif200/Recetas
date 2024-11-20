let elem = document.getElementById("tapa");
function change(s) {
    elem.style.animation = s
    bye("none");
  }
function bye(z){
    setTimeout(() => { elem.style.display = z; }, 5250);
}
