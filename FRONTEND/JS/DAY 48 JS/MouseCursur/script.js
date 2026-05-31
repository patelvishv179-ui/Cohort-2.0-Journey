const box = document.querySelector(".box");

window.addEventListener("mousemove", (e) => {

    box.style.transform =
    `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;

});
