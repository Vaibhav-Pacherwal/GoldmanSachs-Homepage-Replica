let wd1 = document.querySelector("#wd1");
let wd2 = document.querySelector("#wd2");
let wd3 = document.querySelector("#wd3");
let wd4 = document.querySelector("#wd4");
let Outer = document.querySelector(".outer-1");
let Outer1 = document.querySelector(".outer-2");
let Outer2 = document.querySelector(".outer-3");
let Outer3 = document.querySelector(".outer-4");
wd1.addEventListener("mouseenter",()=>{
    Outer.classList.add("O1");
})
wd1.addEventListener("mouseleave", () => {
    if (getChecked1()) {
        console.log('TRUE')
    } else {
        Outer.classList.remove("O1");
    }
});

function getChecked1() {
    Outer.addEventListener("mouseenter",()=>{
        Outer.classList.add("O1");
    })
    Outer.addEventListener("mouseleave",()=>{
        Outer.classList.remove("O1");
    })
}

wd2.addEventListener("mouseenter",()=>{
    Outer1.classList.add("O2");
})
wd2.addEventListener("mouseleave", () => {
    if (getChecked2()) {
        console.log('TRUE')
    } else {
        Outer1.classList.remove("O2");
    }
});

function getChecked2() {
    Outer1.addEventListener("mouseenter",()=>{
        Outer1.classList.add("O2");
    })
    Outer1.addEventListener("mouseleave",()=>{
        Outer1.classList.remove("O2");
    })
}

wd3.addEventListener("mouseenter",()=>{
    Outer2.classList.add("O3");
})
wd3.addEventListener("mouseleave", () => {
    if (getChecked3()) {
        console.log('TRUE')
    } else {
        Outer2.classList.remove("O3");
    }
});

function getChecked3() {
    Outer2.addEventListener("mouseenter",()=>{
        Outer2.classList.add("O3");
    })
    Outer2.addEventListener("mouseleave",()=>{
        Outer2.classList.remove("O3");
    })
}

wd4.addEventListener("mouseenter",()=>{
    Outer3.classList.add("O4");
})
wd4.addEventListener("mouseleave", () => {
    if (getChecked4()) {
        console.log('TRUE')
    } else {
        Outer3.classList.remove("O4");
    }
});

function getChecked4() {
    Outer3.addEventListener("mouseenter",()=>{
        Outer3.classList.add("O4");
    })
    Outer3.addEventListener("mouseleave",()=>{
        Outer3.classList.remove("O4");
    })
}

let Outer4 = document.querySelector("#outer-5");
let search = document.querySelector("#toSearch");
let img1 = document.querySelector("#close");
search.addEventListener("click",()=>{
    Outer4.classList.add("search-anime");
});
img1.addEventListener("click",()=>{
    Outer4.classList.remove("search-anime");
});

let menu = document.querySelector("#lines");
let respage = document.querySelector(".response-page");
let menuSrc = "menu_24dp_000_FILL0_wght400_GRAD0_opsz24.png";
let closeSrc = "close_24dp_000_FILL0_wght400_GRAD0_opsz24.png";

menu.addEventListener("click", () => {
    if (menu.src.includes(menuSrc)) {
        respage.style.display = "block";
        respage.classList.add("getresponse");
        menu.src = closeSrc;
    } else if (menu.src.includes(closeSrc)) {
        respage.classList.remove("getresponse");
        respage.style.display = "none"; 
        menu.src = menuSrc;
    }
})

function adjustLayout() {
    if(window.innerWidth > 1286.40) {
        respage.classList.remove("getresponse");
        if(menu.src.includes(closeSrc)) {
            menu.src = menuSrc;
        }
    }
}

window.addEventListener("resize", adjustLayout);

let vid = document.querySelector(".background-video");
let play = document.querySelector(".controlVid");
let img = document.querySelector("#play");
img.addEventListener("click",()=>{
    if(img.src.includes("pause_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png")) {
        vid.pause()
        img.src = "play_arrow_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
    }
    if(img.src.includes("play_arrow_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png")) {
        vid.play()
        img.src = "play_arrow_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
    }
})

let corausal = document.querySelector(".corausal");
corausal.scroll({
    left: 4500,
    behavior: "smooth",
});

