function change_gradiant() {
    r1 = Math.floor(Math.random() * 255)
    g1 = Math.floor(Math.random() * 255)
    b1 = Math.floor(Math.random() * 255)
    document.getElementById("wave_image").style = `font-family: pFont; background-image:linear-gradient(to right, rgba(${r1}, ${g1}, ${b1}, 0.52), rgba(${255 - r1}, ${255 - g1}, ${255 - b1}, 0.73)), url(\"./files/ITOpsKanban.jpg\");`
}

function toast() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
    console.log("on click" + toastList)
}

function small_gallery() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 600) {
        document.getElementById("Gallery_600").style.display = "block";
        document.getElementById("Gallery").style.display = "none";
    } else {
        document.getElementById("Gallery_600").style.display = "none";
        document.getElementById("Gallery").style.display = "block";

    }
}

small_gallery()
window.onresize = small_gallery