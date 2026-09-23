// ALTERE ESTES DOIS VALORES ANTES DE PUBLICAR
const EVENT_DATE = "2026-12-12T08:00:00-03:00";
const REGISTRATION_URL = "";

const hamburger=document.querySelector(".hamb");
const nav=document.querySelector("nav");
hamburger?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const btn=document.getElementById("register");
if(REGISTRATION_URL&&btn){btn.href=REGISTRATION_URL;btn.textContent="INSCREVA-SE →";btn.classList.remove("disabled");}

const target=new Date(EVENT_DATE).getTime();
function update(){
 const d=Math.max(0,target-Date.now());
 const vals={days:Math.floor(d/86400000),hours:Math.floor(d/3600000)%24,mins:Math.floor(d/60000)%60,secs:Math.floor(d/1000)%60};
 for(const [id,v] of Object.entries(vals)){const e=document.getElementById(id);if(e)e.textContent=String(v).padStart(2,"0");}
}
update();setInterval(update,1000);
