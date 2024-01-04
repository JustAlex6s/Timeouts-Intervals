console.log("WARNING! In exactly one second something will explode");
/*
var test = document.getElementById('test');
var chaine = "Wilson-3";
var nb_car = chaine.length;
var tableau = chaine.split("");
var texte = '';
var i = 0;

function changeMessage() {
    if (i < nb_car) {
        texte += tableau[i];
        test = texte;
        console.log(texte);
        i++;
    } if (i === nb_car) {
        clearInterval(intervalID);
    }
}


var intervalID = setInterval(changeMessage, 1000);*/

var chaine = "Wilson-3"; 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
document.getElementById("test").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}


setInterval("changeMessage()",1000) /* la vitesse de defilement (plus on a une valeur faible plus 
texte s'affiche rapidement) */