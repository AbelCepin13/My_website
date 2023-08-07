
let pokemondropdown=document.getElementById("color_dropdown");
let nav=document.getElementById("nav1");
let description=document.getElementById("descriptions")
let banner=document.getElementById("banner")
let container=document.getElementById("text_container")
let image = document.getElementById("image");
let fam = document.getElementById("Family");
let ach=document.getElementById("Achievements");
let ed=document.getElementById("Education");
let extra=document.getElementById("Extracurriculars")
let changePokemon=(e) => {
    e.preventDefault();
    const userChoice=pokemondropdown.value;
    nav.style.backgroundColor="dark"+userChoice;
    description.style.backgroundColor=userChoice;
    banner.style.backgroundColor=userChoice;
    container.style.backgroundcolor=userChoice;
    image.style.backgroundColor=userChoice;
    fam.style.backgroundcolor=userChoice;
    ach.style.backgroundcolor=userChoice;
    ed.style.backgroundcolor=userChoice;
    extra.style.backgroundcolor=userChoice;
    


};

pokemondropdown.addEventListener("change",changePokemon)