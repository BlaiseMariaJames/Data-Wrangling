function toggle() {
    let content = document.querySelector("#blur");
    content.classList.toggle("active");

    let popup = document.querySelector("#popup");
    popup.classList.toggle("active");
}

let messageBtn = document.querySelectorAll(".message");

for (btn of messageBtn) {
    btn.addEventListener("click", toggle);
}