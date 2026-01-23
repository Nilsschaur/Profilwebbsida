function toggleDarkMode(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
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