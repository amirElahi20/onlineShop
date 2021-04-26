export default carousel = function() {
    var span = document.getElementsByName("span");
    var div = document.getElementsByName("div");
    var l = 0;
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 0) {
            i.style.left = "-740px";
        }
        if (l == 0) {
            i.style.left = "-1480px";
        }
        if (l == 0) {
            i.style.left = "-220px";
        }
        if (l == 0) {
            i.style.left = "-2690px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}