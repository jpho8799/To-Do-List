import './styles.css';

const navbarIcon = document.querySelector("#navIcon");
const newprojectIcon = document.querySelector("#new-project");


navbarIcon.addEventListener('click', ()=>{
    const navBar = document.querySelector('nav');
    
    if(navBar.classList.contains('navbar---toggleLtoR')){
        navBar.classList.remove('navbar---toggleLtoR');
        navBar.classList.add('navbar---toggleRtoL');
    }else{
        navBar.classList.remove('navbar---toggleRtoL');
        navBar.classList.add('navbar---toggleLtoR');
    }

    
})

newprojectIcon.addEventListener('click', ()=>{

})


