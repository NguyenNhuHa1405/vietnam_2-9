

document.addEventListener("DOMContentLoaded", (event) => {
    var div1 = document.querySelector(".div1");
    var div2 = document.querySelector(".div2");
    var div3 = document.querySelector(".div3");
    var div4 = document.querySelector(".div4");
    var div5 = document.querySelector(".div5");
    var img = document.querySelector("img");
    var delay = 2900;
    var sleep = () => new Promise((resolve) => setTimeout(resolve, delay));
    
    (async () => {
        div2.style.animation = "width ease " + (delay / 1000) + "s" 
        div2.style.width = "100%";
        await sleep();
        div3.style.animation = "Height ease " + (delay / 1000) + "s"
        div3.style.height = "100%";
        await sleep();
        div4.style.animation = "width ease " + (delay / 1000) + "s";
        div4.style.width = "100%";
        await sleep();
        div5.style.animation = "Height ease " + (delay / 1000) + "s";
        div5.style.height = "100%";
        await sleep();
        div1.style.backgroundColor = "red"
        img.style.opacity = "1"
    })();

    fetch("https://localhost:7216/danh-sach-gio-hang/?shipping_id=shipping_economical")
    .then(res => res.text())
    .then(res => {
        console.log(res);
    })
});
