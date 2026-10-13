const d=new Date();
let y1=d.getFullYear();
let m1=d.getMonth();
let a1=d.getDate();
const b=new Date("2014-03-10");
let y2=b.getFullYear();
let m2=b.getMonth();
let a2=b.getDate();
let age=y1-y2;
if(m1<m2||(m1==m2&&a1<a2)){
age--
}
const y=document.getElementById("age");
y.innerHTML=age+" y/o probably"
//Windows
document.getElementById("inf").addEventListener('click',()=>{
 if (document.getElementById("binbow"))return;
 const w=document.createElement("div");
 w.id="binbow";
w.innerHTML = `
        <div class="titlebar">
            <button id="close"></button>
        </div>
        <div class="body">
            <h3>Country: Brazil</h3>
            <h3>Birthdate: Mar. 10th 2014</h3>
            <br>
            <p>Stuff i am and are very cool:</p>
            <p>- Autistic (Level 1)</p>
            <p>- Bilingual (Native Brazilian, Fluent in English.)</p>
            <p>- Absolute Nerd (I have really good scores in math)</p>
            <p>- Birthday is Coincidentally Mar10 Day</p>
            <p>- Varied Hobbyist (i cant believe i got musician skills)</p>
        </div>
    `;
    document.body.appendChild(w);
    document.getElementById('close').addEventListener('click',_=>{
        w.remove();
    });
})
document.getElementById("acc").addEventListener('click',()=>{
 if (document.getElementById("binbow"))return;
 const w=document.createElement("div");
 w.id="binbow";
w.innerHTML = `
        <div class="titlebar">
            <button id="close"></button>
        </div>
        <div class="body">
            <h3>I have quite alot of accounts.</h3>
            <!-- kinda hax i be doing for a gap of certain width in the text LOL -->
            <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
            <h4>Scratch!!!</h4>
            <span id="idkwhattonamethis">
            <a href="https://scratch.mit.edu/users/PauloPlayzVA/">PauloPlayzVA (main!!!)</a>
            <br>
            <a href="https://scratch.mit.edu/users/PauloTestes/">PauloTestes</a>
            <a href="https://scratch.mit.edu/users/PaulaPlayzVA/">PaulaPlayzVA</a>
            <a href="https://scratch.mit.edu/users/PaoloPlayzVA/">PaoloPlayzVA</a>
            <a href="https://scratch.mit.edu/users/PauloGamezVA/">PauloGamezVA</a>
            <a href="https://scratch.mit.edu/users/Greetings-Traveller/">Greetings-Traveller</a>
            </span>
            <h4>Youtuibe!!!</h4>
            <a href="https://www.youtube.com/channel/UClQ8PEm9_fgTl58DM6RGSAw">PauloIsntGaming</a>
            <h4>Gihub!!!</h4>
            <a href="https://github.com/PauloIsntReallyGaming">PauloIsntReallyGaming</a>
            <h4>Roadblocks!!!</h4>
            <a href="https://www.roblox.com/users/3589467949/profile">pauloinmobile2</a>
            <p>(i have a bunch of old accounts too...)</p>
        </div>
    `;
    document.body.appendChild(w);
    document.getElementById('close').addEventListener('click',_=>{
        w.remove();
    });
})
//music
//maybe i'll put the src on the github later, idk.
const playlist = [
    {title:"Plok! - Flame Thrower",src:"https://jetta.vgmtreasurechest.com/soundtracks/plok-snes/ltjnpjbe/14.%20Flame%20Thrower%20Theme.mp3"},
    {title:"Plok! - Cowboy",src:"https://jetta.vgmtreasurechest.com/soundtracks/plok-snes/rxnvqqju/15.%20Cowboy%20Theme.mp3"},
    {title:"Kevin Macleod - Aces High (incompetech.com)",src:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Aces%20High.mp3"},
    {title:"LEGO Island - Information Center",src:"https://vgmtreasurechest.com/soundtracks/lego-island-remastered-cassetes/vsbgbldh/information%20center%20looped%20edited.mp3"}
];
let ci = 0;
const player=document.getElementById('IAMSOAUDIO');
const playertxt=document.getElementById('nowplaying');
const playpause=document.getElementById('playPause');
function load(i) {
    ci=i;
    player.src=playlist[ci].src;
    playertxt.textContent=`hi so uhh currently we're playing "${playlist[ci].title}"!!!`;
}
function play(){
    if (player.paused){
        if (!player.src) {
            load(ci);
        }
        player.play();
        playpause.textContent="Pause";
    }else{
        player.pause();
        playpause.textContent="Play";
    }
}
playpause.addEventListener('click',play);
document.getElementById('next').addEventListener('click',()=>{
    ci=(ci+1)%playlist.length;
    load(ci);
    player.play();
    playpause.textContent="Pause";
});
document.getElementById('prev').addEventListener('click',()=>{
    ci=(ci-1+playlist.length)%playlist.length;
    load(ci);
    player.play();
    playpause.textContent="Pause";
});
player.addEventListener('ended',()=>{
    ci=(ci+1)%playlist.length;
    load(ci);
    player.play();
});