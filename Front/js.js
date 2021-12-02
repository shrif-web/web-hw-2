function change_gradiant() {
    r1 = Math.floor(Math.random() * 255)
    g1 = Math.floor(Math.random() * 255)
    b1 = Math.floor(Math.random() * 255)
    document.getElementById("wave_image").style = `background-image:linear-gradient(to bottom, rgba(${r1}, ${g1}, ${b1}, 0.52), rgba(${255-r1}, ${255-g1}, ${255-b1}, 0.73)), url(\"files/ITOpsKanban.jpg\");`

}
