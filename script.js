let menu = document.getElementById("menu");
let isVisibleOptions = false;
let options = document.getElementById("navbar-menu-option");
let cross = document.getElementById("cross");


cross.addEventListener('click',()=>{
    isVisibleOptions = true;
    options.style.display = "none";
});

menu.addEventListener("click",(e)=>{
    if(!isVisibleOptions){
        options.style.display = "flex";
        isVisibleOptions = true;
    }else{
        options.style.display = "none";
        isVisibleOptions = false;
    }
});


let txt = document.getElementById('txt');
txt.innerHTML = "";
const str = "Java Developer ,Frontend Developer ,Backend Developer ,Student ";

function typeString() {
    let i = 0;
    function typeCharacter() {
        if (i < str.length) {
            if (str[i] === ',') {
                txt.innerText = ''; 
            } else if (str[i] === ' ') {
                txt.innerHTML += '&nbsp;'; 
            } else {
                txt.innerText += str[i]; 
            }
            i++;
            if (i == str.length) {
                i = 0;
                txt.innerText = ""; 
            }
            setTimeout(typeCharacter, 160); 
        }
    }
    typeCharacter(); 
}

typeString();  
