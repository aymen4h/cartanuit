function placehere(dv){

    let t7ot = document.createElement("audio");
    t7ot.src = "./im/t7ot.mp3";
    t7ot.setAttribute("controls", "");
    t7ot.setAttribute("autoplay", "");
    t7ot.hidden = true;
    t7ot.id = "t7ot";
    let bodyplace = document.getElementsByTagName("body");
    if(document.getElementById("thez") != null){
        bodyplace[0].removeChild(document.getElementById("thez"));
    }
    bodyplace[0].appendChild(t7ot);
    let lkol = document.getElementsByClassName("lkol");
    lkol[0].style.cursor = "default";
    document.getElementById("cur").hidden = true;


    var car = document.getElementsByClassName("carta");
    for (let i = 0; i < car.length; i++) {
        if(car[i].getAttribute("onclick") == "placehere(this)") {
            car[i].setAttribute("onclick", "");
        }
        
    }





    var ma91 = document.createElement("img");
    ma91.id="ma91";
    ma91.src="./img/ma9.png" ;
    ma91.alt="t";


    var ma92 = document.createElement("img");
    ma92.id="ma92";
    ma92.src="./img/ma9.png" ;
    ma92.alt="t";


    

        var ima = document.createElement("img");
        ima.id = TV.toString();
        ima.src = "./img/" + TV.toString() + ".png";
        ima.alt = "t";
        
        /*<img id="14" src="./img/14.png" alt="t">*/


        if((document.getElementById("T1").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">" ) && (T1.length > 0)){
            document.getElementById("T1").removeChild(document.getElementById(TV));
            
            
            document.getElementById("T1").appendChild(ma91);
            
        }
        else if((document.getElementById("T1").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">" ) && (T1.length == 0)){
            document.getElementById("T1").removeChild(document.getElementById(TV));
        }


        else if((document.getElementById("T2").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">") && (T2.length > 0)){
            document.getElementById("T2").removeChild(document.getElementById(TV));
            
            var im2 = document.createElement("img");
            im2.id = T2[T2.length-1].toString();
            im2.src = "./img/" + T2[T2.length-1].toString() + ".png";
            im2.alt = "t";
            document.getElementById("T2").appendChild(im2);
            
        }


        else if((document.getElementById("T2").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">" ) && (T2.length == 0)){
            document.getElementById("T2").removeChild(document.getElementById(TV));
        }



        else if((document.getElementById("T3").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">") && (T3.length > 0)){
            document.getElementById("T3").removeChild(document.getElementById(TV));
            
            document.getElementById("T3").appendChild(ma92);
            
        }



        else if((document.getElementById("T3").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">" ) && (T3.length == 0)){
            document.getElementById("T3").removeChild(document.getElementById(TV));
        }







        else if((document.getElementById("T4").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">") && (T4.length > 0)){
            document.getElementById("T4").removeChild(document.getElementById(TV));
            
            var im4 = document.createElement("img");
            im4.id = T4[T4.length-1].toString();
            im4.src = "./img/" + T4[T4.length-1].toString() + ".png";
            im4.alt = "t";
            document.getElementById("T4").appendChild(im4);
            
        }




        else if((document.getElementById("T4").innerHTML == "<img id=\"" + TV.toString() + "\" src=\"" + "./img/" + TV.toString() + ".png\"" + " alt=\"t\">" ) && (T4.length == 0)){
            document.getElementById("T4").removeChild(document.getElementById(TV));
        }










        if(dv.id == "T5"){
            if(T5.length > 0){
                dv.removeChild(document.getElementById(T5[T5.length - 1]));
                T5.push(TV);

                dv.appendChild(ima);
            }
            else{
                T5.push(TV);

                dv.appendChild(ima);
            }
        }


        else if(dv.id == "T6"){
            if(T6.length > 0){
                dv.removeChild(document.getElementById(T6[T6.length - 1]));
                T6.push(TV);

                dv.appendChild(ima);
            }
            else{
                T6.push(TV);

                dv.appendChild(ima);
            }
        }


        else if(dv.id == "T7"){
            if(T7.length > 0){
                dv.removeChild(document.getElementById(T7[T7.length - 1]));
                T7.push(TV);

                dv.appendChild(ima);
            }
            else{
                T7.push(TV);

                dv.appendChild(ima);
            }
        }



        else if(dv.id == "T8"){
            if(T8.length > 0){
                dv.removeChild(document.getElementById(T8[T8.length - 1]));
                T8.push(TV);

                dv.appendChild(ima);
            }
            else{
                T8.push(TV);

                dv.appendChild(ima);
            }
        }



        else if(dv.id == "T2"){
            if(T2.length > 0){
                dv.removeChild(document.getElementById(T2[T2.length - 1]));
                T2.push(TV);

                dv.appendChild(ima);
            }
            else{
                T2.push(TV);

                dv.appendChild(ima);
            }
        }


        else if(dv.id == "T4"){
            if(T4.length > 0){
                dv.removeChild(document.getElementById(T4[T4.length - 1]));
                T4.push(TV);

                dv.appendChild(ima);
            }
            else{
                T4.push(TV);

                dv.appendChild(ima);
            }
        }
    




        /*declarer le gagnant*/

        if((T1.length == 0) && (T2.length == 0)){
            document.getElementById("commentaire").innerHTML = "joueur1 est le gagnant";
        }
        else if((T3.length == 0) && (T4.length == 0)){
            document.getElementById("commentaire").innerHTML = "joueur2 est le gagnant";
        }







        if ((document.getElementById("commentaire").innerHTML == "joueur2")&&(dv.id == "T4")){
            document.getElementById("commentaire").innerHTML = "joueur1"
        }
        else if ((document.getElementById("commentaire").innerHTML == "joueur1")&&(dv.id == "T2")){
            document.getElementById("commentaire").innerHTML = "joueur2"
        }
    
        if (document.getElementById("commentaire").innerHTML == "joueur1"){
            if(!(T1.length == 0)){document.getElementById("T1").setAttribute("onclick", "select1(this)");}
            if(!(T2.length == 0)){
                if(T2[T2.length - 1] %10 == 0){document.getElementById("T2").setAttribute("onclick", "select2(this)");}
                else if((T2[T2.length - 1] % 10 == T4[T4.length - 1] % 10 +1) || ((T2[T2.length - 1]<= 9) && (T2[T2.length-1] - 1 == T5[T5.length-1]) )
                || ((T2[T2.length - 1] > 10) && (T2[T2.length - 1] <= 19) && (T2[T2.length-1] - 1 == T6[T6.length-1]) )
                || ((T2[T2.length - 1] > 20) && (T2[T2.length - 1] <= 29) && (T2[T2.length-1] - 1 == T7[T7.length-1]) )
                || ((T2[T2.length - 1] > 30) && (T2[T2.length - 1] <= 39) && (T2[T2.length-1] - 1 == T8[T8.length-1]) )
                ){
                    document.getElementById("T2").setAttribute("onclick", "select2(this)");
                }
            }
            if((T1.length == 0) && (!(T2.length == 0)) && (!(T2[T2.length - 1]% 10 == 0)) && (!(T2[T2.length - 1] % 10 - 1 == T4[T4.length - 1] % 10)) &&
            (
                ((T2[T2.length - 1] <= 9) && (!(T2[T2.length - 1] - 1 == T5[T5.length - 1])))
                || ((T2[T2.length - 1] > 10) && (T2[T2.length - 1] <= 19) && (!(T2[T2.length-1] - 1 == T6[T6.length-1])) )
                || ((T2[T2.length - 1] > 20) && (T2[T2.length - 1] <= 29) && (!(T2[T2.length-1] - 1 == T7[T7.length-1])) )
                || ((T2[T2.length - 1] > 30) && (T2[T2.length - 1] <= 39) && (!(T2[T2.length-1] - 1 == T8[T8.length-1])) )
            )
            ){
                for (let i = T2.length - 1; i >= 0 ; i--) {
                    T1.push(T2[i]); 
                }
                
                
                document.getElementById("T1").appendChild(ma91);
                document.getElementById("T2").removeChild(document.getElementById(T2[T2.length - 1]));
                T2 = [];
                document.getElementById("T1").setAttribute("onclick", "select1(this)");
    
            }
        }
        else if (document.getElementById("commentaire").innerHTML == "joueur2"){
            if(!(T3.length == 0)){document.getElementById("T3").setAttribute("onclick", "select3(this)");}
            if(!(T4.length == 0)){/*là ou iy a problem*/
                if(T4[T4.length - 1] %10 == 0){document.getElementById("T4").setAttribute("onclick", "select4(this)");}
                else if((T4[T4.length - 1] % 10 == T2[T2.length - 1] % 10 +1) || ((T4[T4.length - 1]<= 9) && (T4[T4.length-1] - 1 == T5[T5.length-1]) )
                || ((T4[T4.length - 1] > 10) && (T4[T4.length - 1] <= 19) && (T4[T4.length-1] - 1 == T6[T6.length-1]) )
                || ((T4[T4.length - 1] > 20) && (T4[T4.length - 1] <= 29) && (T4[T4.length-1] - 1 == T7[T7.length-1]) )
                || ((T4[T4.length - 1] > 30) && (T4[T4.length - 1] <= 39) && (T4[T4.length-1] - 1 == T8[T8.length-1]) )
                ){
                    document.getElementById("T4").setAttribute("onclick", "select4(this)");
                }
            }
            if((T3.length == 0) && (!(T4.length == 0)) && (!(T4[T4.length - 1]% 10 == 0)) && (!(T4[T4.length - 1] % 10 - 1 == T2[T2.length - 1] % 10)) &&
            (
                ((T4[T4.length - 1] <= 9) && (!(T4[T4.length - 1] - 1 == T5[T5.length - 1])))
                || ((T4[T4.length - 1] > 10) && (T4[T4.length - 1] <= 19) && (!(T4[T4.length-1] - 1 == T6[T6.length-1])) )
                || ((T4[T4.length - 1] > 20) && (T4[T4.length - 1] <= 29) && (!(T4[T4.length-1] - 1 == T7[T7.length-1])) )
                || ((T4[T4.length - 1] > 30) && (T4[T4.length - 1] <= 39) && (!(T4[T4.length-1] - 1 == T8[T8.length-1])) )
            )
            ){
                for (let i = T4.length - 1; i >= 0 ; i--) {
                    T3.push(T4[i]); 
                }
                
                
                document.getElementById("T3").appendChild(ma92);
                document.getElementById("T4").removeChild(document.getElementById(T4[T4.length - 1]));
                T4 = [];
                document.getElementById("T3").setAttribute("onclick", "select3(this)");
                
            }
        }
    
}