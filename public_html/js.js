var passwords=["bez pracy nie ma kołaczy","i tak tego nie zgadniesz","test1 test2 test3","polacy trzeęsą ligą europy","jest zajebiście ciepło"];
var number=Math.floor(Math.random() * 5); 
var password=passwords[number];
password=password.toUpperCase();
var password1="";
var length=password.length;
var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

for(i=0;i<length;i++)
{
    if(password.charAt(i)===" ")
    {
        password1+= " ";
    }else
    {
        password1+="-";
    }
}
      
function show_password(){
   let ps=document.querySelector(".password");
    ps.innerHTML=password1;
}
window.onlad=start();

function start(){
    var boxes="";
    for(i=0;i<35;i++)
    {
        var id_box=i;
        boxes+='<div class="char" id="'+id_box+'"onclick="check('+id_box+')">'+litery[i]+'</div>';
    }
    document.querySelector("#box").innerHTML=boxes;
    show_password();
}


String.prototype.changeChar=function(position,char){
    if(position>this.length-1){
        return this.toString();
    }else
    {
        return this.substr(0,position)+char+this.substr(position+1);
    }
};

 var mistakes=1;
function check(id){
   var good=false;
   
    for(i=0;i<length;i++){
        if(password.charAt(i)===litery[id]){
            password1=password1.changeChar(i,litery[id]);
            good=true;
        }
    }
            if(good===true){
                    var id_box=id;
                    document.getElementById(id_box).style.background="green";
                    document.getElementById(id_box).style.color="black";
                    document.getElementById(id_box).style.border="3px solid #fff";
                    document.getElementById(id_box).style.cursor="default";
                    show_password();
                    
                }else 
                    {
                    var id_box=id;
                    document.getElementById(id_box).style.background="red";
                    document.getElementById(id_box).style.color="white";
                    document.getElementById(id_box).style.border="3px solid #fff";
                    document.getElementById(id_box).style.cursor="default";
                    document.getElementById(id_box).setAttribute("onclick",";");
                    mistakes++;
                    var img="img/s"+mistakes+".png";
                    document.getElementById("a").innerHTML='<img src="'+img+'" alt=""/>';
                    
                    }
               //win
               if(password===password1){
                  document.getElementById("box").innerHTML  = "Podano prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
               }
	
                
                if (mistakes>=8)
                document.getElementById("box").innerHTML  = "Przegrana! Prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
                    
    
   
}

