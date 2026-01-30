function toggleDarkMode(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
        localStorage.setItem("lastVisit", Date.now());
    }else{
        localStorage.setItem("theme", "light");
    }
}

document.querySelector("#darkBtn").addEventListener("click", toggleDarkMode);

function loadTheme(){
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
        document.body.classList.add("dark");
    }
}

loadTheme();

window.onload = loadTheme();

const One_MINUTE= 1000 * 60 * 1;

const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
    const now = Date.now();
    const timePassed = now - lastVisit;

    if (timePassed > One_MINUTE) {
        localStorage.removeItem("theme");
        localStorage.removeItem("lastVisit");
    }
}

