function visible() {
    document.getElementById("visible").style.display= "block"
}

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("visible").style.display= "none"
})