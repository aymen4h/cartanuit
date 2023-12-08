var T = [];
while (T.length < 40) {
    let newInt = Math.floor(Math.random() * 40);
    if (!T.includes(newInt)) {
        T.push(newInt);
    }
}

console.log(T);
var TV ;
var T1 = [];
var T2 = [];
var T3 = [];
var T4 = [];
var T5 = [];
var T6 = [];
var T7 = [];
var T8 = [];
for (let i = 0; i < 20; i++) {
    T1.push(T[i]);  
}
for (let i = 20; i < 40; i++) {
    T3.push(T[i]);  
}
//console.log(T1);
//console.log(T3);

function f1(){
    let bod = document.getElementsByTagName("body");
    bod[0].style.backgroundImage = "url(./im/back1.png)";
    bod[0].removeChild(document.getElementById("music11"));
    let gif3 = document.createElement("img");
    let gif2 = document.createElement("img");
    let fgif3 = document.createElement("audio");
    let fgif2 = document.createElement("audio");
    let lkol = document.createElement("div");
    
    let haut = document.createElement("div");
    let center = document.createElement("div");
    let bas = document.createElement("div");
    let t1 = document.createElement("div");
    let t2 = document.createElement("div");
    let t3 = document.createElement("div");
    let t4 = document.createElement("div");
    let t5 = document.createElement("div");
    let t6 = document.createElement("div");
    let t7 = document.createElement("div");
    let t8 = document.createElement("div");
    let comment = document.createElement("div");
    let imag1 = document.createElement("img");
    imag1.src = "./img/ma9.png";
    imag1.alt = "fff";
    imag1.id = "ma911";

    let imag2 = document.createElement("img");
    imag2.src = "./img/ma9.png";
    imag2.alt = "fff";
    imag2.id = "ma921";
    setTimeout(() => {
        
        gif3.id = "gif3";
        gif3.src = "./im/gif3.gif";
        gif3.alt = "hh";
        bod[0].appendChild(gif3);
        gif3.style.position = "absolute";
        gif3.style.top = "50%";
        gif3.style.left = "50%";
        gif3.style.transform = "translate(-50%, -50%)";
        gif3.style.width = "1150px";
        gif3.style.height = "646.3px";
        gif3.style.borderRadius = "10% 10% 40% 10%";

        fgif3.src = "./im/fgif3.mp3";
        fgif3.id = "fgif3";
        fgif3.setAttribute("controls", "");
        fgif3.setAttribute("autoplay", "");
        bod[0].appendChild(fgif3);
        fgif3.hidden = true;
      }, 1000);
    setTimeout(() => {
        bod[0].removeChild(gif3);
        bod[0].removeChild(fgif3);
    }, 3050);
    setTimeout(() => {
        gif2.id = "gif2";
        gif2.src = "./im/gif2.gif";
        gif2.alt = "hh";
        bod[0].appendChild(gif2);
        gif2.style.position = "absolute";
        gif2.style.top = "50%";
        gif2.style.left = "50%";
        gif2.style.transform = "translate(-55%, -50%)";
        gif2.style.width = "1100px";
        gif2.style.height = "700px";
        gif2.style.borderRadius = "10% 10% 40% 10%";

        fgif2.src = "./im/fgif2.mp3";
        fgif2.id = "fgif2";
        fgif2.setAttribute("controls", "");
        fgif2.setAttribute("autoplay", "");
        fgif2.hidden = true;
    }, 3600);


    setTimeout(() => {
        bod[0].removeChild(gif2);
        //bod[0].removeChild(fgif2);
        bod[0].style.backgroundImage = "url(./im/6800.jpg)";
        lkol.className = "lkol";
        bod[0].appendChild(lkol);
        haut.className = "haut";
        center.className = "center";
        bas.className = "bas";
        lkol.appendChild(haut);
        lkol.appendChild(center);
        lkol.appendChild(bas);
        lkol.setAttribute("onmousemove" , "curs(event)");
        let cur = document.createElement("div");
        cur.id = "cur";
        cur.hidden = true;
        lkol.appendChild(cur);
        t1.className = "carta";
        t2.className = "carta";
        t3.className = "carta";
        t4.className = "carta";
        t5.className = "carta";
        t6.className = "carta";
        t7.className = "carta";
        t8.className = "carta";
        t1.id = "T1";
        t2.id = "T2";
        t3.id = "T3";
        t4.id = "T4";
        t5.id = "T5";
        t6.id = "T6";
        t7.id = "T7";
        t8.id = "T8";
        t1.setAttribute("onclick", "select1(this)");
        
        t6.appendChild(imag1);
       
        t7.appendChild(imag2);
        haut.appendChild(t1);
        haut.appendChild(t2);
        center.appendChild(t5);
        center.appendChild(t6);
        center.appendChild(t7);
        center.appendChild(t8);
        bas.appendChild(t3);
        bas.appendChild(t4);


        haut.style.display = "flex";
        haut.style.justifyContent = "center";
        center.style.display = "flex";
        center.style.justifyContent = "center";
        bas.style.display = "flex";
        bas.style.justifyContent = "center";
        bod[0].style.display = "block"
        bod[0].style.margin = "8px";
        comment.id = "commentaire";
        comment.innerHTML= "joueur1";
        bod[0].appendChild(comment);
        comment.hidden = true;

    }, 8100);
    setTimeout(() => {
        t6.removeChild(imag1);
        t7.removeChild(imag2);
        imag1.id = "ma91";
        imag2.id = "ma92"; 
        t1.appendChild(imag1);
        t3.appendChild(imag2);
        
        
    },10680);
    
    
}

function backsize(){
    let largeur = window.innerWidth;
    let longueur = window.innerHeight;
    let bod = document.getElementsByTagName("body");
    bod[0].style.backgroundSize = largeur + "px " + longueur + "px";
    
}
setInterval(backsize , 300);


function playmusic(){
    document.getElementById("music11").play();
    let bodyy = document.getElementsByTagName("body");
    bodyy[0].removeChild(document.getElementsByTagName("h1")[0]);
    setTimeout(f1 , 9500);
}

