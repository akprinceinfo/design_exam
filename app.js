// Get the modal
var icon = document.querySelector(".abc");

icon.addEventListener("click", function() {
    alert("hi");
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
icon.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}