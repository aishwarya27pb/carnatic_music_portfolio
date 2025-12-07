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
const hireBtn=document.getElementById('hireBtn');

if(legacyBtn){
    legacyBtn.addEventListener('click',()=>{
        // show overlay using fold-in animation
        legacyOverlay.classList.add('active');
        // small delay so the class addition registers before animation
        setTimeout(()=>{
            legacyOverlay.classList.remove('page-turn-out','fold-out','fold-in');
            legacyOverlay.classList.add('fold-in');
        },10);
    });
}

if(hireBtn){
    hireBtn.addEventListener('click',()=>{
        // close overlay then show the hero section of the main portfolio
        legacyOverlay.classList.remove('fold-in');
        legacyOverlay.classList.add('fold-out');
        setTimeout(()=>{
            legacyOverlay.classList.remove('active','fold-out');
            const hero = document.querySelector('#hero');
            if(hero){
                hero.scrollIntoView({behavior:'smooth'});
            } else {
                // fallback: scroll to top
                window.scrollTo({top:0,behavior:'smooth'});
            }
        },720);
    });
}

/* Close legacy overlay on Escape key */
document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'&&legacyOverlay.classList.contains('active')){
        legacyOverlay.classList.remove('fold-in');
        legacyOverlay.classList.add('fold-out');
        setTimeout(()=>{
            legacyOverlay.classList.remove('active','fold-out');
        },720);
    }
});
