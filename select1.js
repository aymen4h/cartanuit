function select1(dt1){

    let thez = document.createElement("audio");
    thez.src = "./im/thez.mp3";
    thez.setAttribute("controls", "");
    thez.setAttribute("autoplay", "");
    thez.hidden = true;
    thez.id = "thez";
    let bodyselect1 = document.getElementsByTagName("body");
    if(document.getElementById("t7ot") != null){
        bodyselect1[0].removeChild(document.getElementById("t7ot"));
        
    }
    bodyselect1[0].appendChild(thez);



    setTimeout(() => {

    dt1.removeChild(document.getElementById("ma91"));

    TV = T1[T1.length - 1];
    var ima = document.createElement("img");
    ima.id = TV.toString();
    ima.src = "./img/" + TV.toString() + ".png";
    ima.alt = "t";
    dt1.appendChild(ima);
    
    T1.pop();


    dt1.setAttribute("onclick", "");
    var car = document.getElementsByClassName("carta");
    for (let i = 0; i < car.length; i++) {
        if((car[i].getAttribute("onclick") == "select1(this)") || (car[i].getAttribute("onclick") == "select2(this)") || (car[i].getAttribute("onclick") == "select3(this)") || (car[i].getAttribute("onclick") == "select4(this)") ){
            car[i].setAttribute("onclick", "");
        }
        
    }

    document.getElementById("T2").setAttribute("onclick", "placehere(this)");
    console.log(T1.length+" -- T1=" + T1);
    console.log(TV);


    if(TV == 0){document.getElementById("T5").setAttribute("onclick", "placehere(this)");}
    else if(TV > 0 && TV <= 9 && (TV - 1) == T5[T5.length - 1]){
        document.getElementById("T5").setAttribute("onclick", "placehere(this)");
    }

    if(TV == 10){document.getElementById("T6").setAttribute("onclick", "placehere(this)");}
    else if(TV > 10 && TV <= 19 && (TV - 1) == T6[T6.length - 1]){
        document.getElementById("T6").setAttribute("onclick", "placehere(this)");
    }

    if(TV == 20){document.getElementById("T7").setAttribute("onclick", "placehere(this)");}
    else if(TV > 20 && TV <= 29 && (TV - 1) == T7[T7.length - 1]){
        document.getElementById("T7").setAttribute("onclick", "placehere(this)");
    }

    if(TV == 30){document.getElementById("T8").setAttribute("onclick", "placehere(this)");}
    else if(TV > 30 && TV <= 39 && (TV - 1) == T8[T8.length - 1]){
        document.getElementById("T8").setAttribute("onclick", "placehere(this)");
    }

    if(T4.length > 0){
        if(TV % 10 > 0 && (TV % 10 - 1) == (T4[T4.length - 1] % 10)){
            document.getElementById("T4").setAttribute("onclick", "placehere(this)");
        }
    }


    let lkol = document.getElementsByClassName("lkol");
    lkol[0].style.cursor = "none";
    
    let cur = document.getElementById("cur");
    cur.style.left = dt1.clientX - 65 + 'px';
    cur.style.top = dt1.clientY - 90 + 'px';
    cur.hidden = false;
    cur.style.backgroundImage = "url(\"./img/" + TV.toString() + ".png\")";



    }, 300);



    


}
function curs(event){
    let cur = document.getElementById("cur");
    cur.style.left = event.clientX - 65 + 'px';
    cur.style.top = event.clientY - 90 + 'px';
    
}
