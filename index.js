var number1 = Math.ceil(Math.random()*3);


if(number1===1){
    document.querySelector("h1").innerHTML="hamdan Will Go";
}
else if(number1===2){
    document.querySelector("h1").innerHTML="Azam will GO";
}
else{
    document.querySelector("h1").innerHTML="Adnan will Go";
}

var dic1= "./images/image"+ number1 +".jpg";

document.getElementById("im").setAttribute("src",dic1);
