
var container = document.getElementById("container");

	var kleur = ["green", "red", "purple", "blue", "black", "white"]

for(var i=0; i<30; i++){
	var knopjes = document.createElement("button");
	knopjes.innerText = "knop " + (i+1);
	knopjes.style.backgroundColor = kleur[0];
	knopjes.id = i+1;
		knopjes.onclick = function(){
			knopjesAchtergrond(this, kleur);
		}
	container.appendChild(knopjes);
}

function knopjesAchtergrond(inhoudKnoppie, kleur){
	var goeieKleur = kleur.indexOf(inhoudKnoppie.style.backgroundColor);
	inhoudKnoppie.style.backgroundColor = kleur[goeieKleur+1]
		if(inhoudKnoppie.style.backgroundColor == "white"){
			inhoudKnoppie.style.display = "none";
		}
}