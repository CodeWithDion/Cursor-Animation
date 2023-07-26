const cursorEL = document.querySelector(".cursor");
let timeout;

/*====== CURSOR MOVEMENT ====== */
document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;

    cursorEL.style.top = y + "px";
    cursorEL.style.left = x + "px";
    cursorEL.style.display = "block";

    //STOP ANIMATION FUNCTION
    function mouseStopped() {
        cursorEL.style.display = "none";
    }

    //HIDE ANIMATION
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 2000);
});


/*====== STOP ANIMATION OFF THE SCREEN ===== */
document.addEventListener("mouseout", () => {
    cursorEL.style.display = "none";
});