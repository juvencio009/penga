const header = document.getElementById('m-header'),
imgProfile = document.querySelector('.profile-pic'),
imagem = document.querySelector('.imagem'),
meDev = document.querySelector('.m-1');
let isscroling;

window.addEventListener("scroll",()=>{
    header.classList.add("active");
    if(scrollY==0){
        header.classList.remove("active");
    }else if(scrollY<60){
         imgProfile.classList.remove("active")
         imagem.classList.remove("active")
        meDev.classList.remove("active")
    }
    else if(scrollY>30){
        imgProfile.classList.add("active")
        imagem.classList.add("active")
        meDev.classList.add("active")
    }
    
});

const m = document.querySelector('.m')
const l = document.querySelector('.l')
const nav = document.getElementById('nav')

m.addEventListener("click",()=>{
    l.classList.add('active')
    m.classList.add('active')
    nav.classList.add('active')
    localStorage.setItem('menuOpen','true')
});

l.addEventListener("click",()=>{
    l.classList.remove('active')
    m.classList.remove('active')
    nav.classList.remove('active')
    localStorage.setItem('menuOpen','false')
});


window.addEventListener('load',()=>{
    const menuOpen=localStorage.getItem('menuOpen');

    if(menuOpen==='true'){
            nav.classList.remove('active');
                l.classList.add('active')
                m.classList.add('active')
                nav.classList.add('active')
    }
});


const sectionInicio = document.getElementById("sectionInicio");
const sectionSobre = document.getElementById("sectionSobre");
const sectionProjectos = document.getElementById("sectionProjectos");
const sectionSkills = document.getElementById("sectionSkills");
const sectionContacts = document.getElementById("sectionContacts");

const btnInicio = document.getElementById("inicio");
const btnSobre = document.getElementById("sobre");
const btnProgectos = document.getElementById("projetos");
const btnSkills = document.getElementById("skills");
const btnContacts = document.getElementById("contactos");

btnInicio.addEventListener('click',()=>{
    sectionInicio.scrollIntoView({behavior:"smooth"});
});

btnSobre.addEventListener('click',()=>{
    sectionSobre.scrollIntoView({behavior:"smooth"});
});

btnProgectos.addEventListener('click',()=>{
    alert("SEM PROJECTOS INTEGRADOS...")
    sectionProjectos.scrollIntoView({behavior:"smooth"});
});

btnSkills.addEventListener('click',()=>{
    sectionSkills.scrollIntoView({behavior:"smooth"});
});

btnContacts.addEventListener('click',()=>{
    sectionContacts.scrollIntoView({behavior:"smooth"});
});


document.addEventListener("DOMContentLoaded",()=>{
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("accept-cookies");

    if(! localStorage.getItem("cookieAccepted")){
        banner.style.display="block";
    }
    btnAccept.addEventListener("click",()=>{
        localStorage.setItem("cookieAccepted","true");
        banner.style.display="none";
    });
});

const lap = document.querySelector(".lap");

lap.addEventListener("mouseenter",()=>{
    lap.classList.add("active");
});

lap.addEventListener("mouseleave",()=>{
    lap.classList.remove("active");
});

document.addEventListener('scroll',function(){
    const elements = document.querySelectorAll(".fade");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom>-40;

        if(inView){
            el.classList.add("show");
        }else{
            el.classList.remove("show");
        }
    });
});