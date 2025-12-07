/* Theme Toggle */
const themeToggle=document.getElementById('themeToggle');
const body=document.body;
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='light'){body.classList.add('light-mode');themeToggle.textContent='☀️';}
themeToggle.addEventListener('click',()=>{
    body.classList.toggle('light-mode');
    const isLight=body.classList.contains('light-mode');
    themeToggle.textContent=isLight?'☀️':'🌙';
    localStorage.setItem('theme',isLight?'light':'dark');
});

/* Mobile Menu */
const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('navMenu');
hamburger.addEventListener('click',()=>navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link=>{
    link.addEventListener('click',()=>navMenu.classList.remove('active'));
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

/* Nav Background on Scroll */
window.addEventListener('scroll',()=>{
    const nav=document.querySelector('nav');
    nav.style.background=window.scrollY>50
        ?(body.classList.contains('light-mode')?'rgba(255,255,255,.95)':'rgba(10,10,10,.95)')
        :'var(--glass-bg)';
});

/* Legacy Portfolio Iframe Overlay */
const legacyBtn=document.getElementById('legacyBtn');
const legacyOverlay=document.getElementById('legacyOverlay');
const legacyCloseBtn=document.getElementById('legacyCloseBtn');

if(legacyBtn){
    legacyBtn.addEventListener('click',()=>{
        legacyOverlay.classList.add('active');
        setTimeout(()=>{
            legacyOverlay.classList.add('slide-in');
        },10);
    });
}

if(legacyCloseBtn){
    legacyCloseBtn.addEventListener('click',()=>{
        legacyOverlay.classList.remove('slide-in');
        legacyOverlay.classList.add('slide-out');
        setTimeout(()=>{
            legacyOverlay.classList.remove('active','slide-out');
        },600);
    });
}

/* Close legacy overlay on Escape key */
document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'&&legacyOverlay.classList.contains('active')){
        legacyOverlay.classList.remove('slide-in');
        legacyOverlay.classList.add('slide-out');
        setTimeout(()=>{
            legacyOverlay.classList.remove('active','slide-out');
        },600);
    }
});
