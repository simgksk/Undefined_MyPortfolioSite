document.addEventListener("DOMContentLoaded", function () {
    const content = "Welcome to my portfolio site!";
    const text = document.querySelector(".typing-text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200);
});
