function setupPopups() {
    var classname = document.getElementsByClassName("tays_popup2");

    for (let i = 0; i < classname.length; i++) {
        classname[i].addEventListener('mousedown', function(event) {
            //conole.log(event);
            //console.log(classname[i]);
            if (event.target === classname[i] || event.target.classList.contains('tays_popup2_close_button')) {
                this.style.display = "none";
            }
        }, false);
    }

}
setupPopups();