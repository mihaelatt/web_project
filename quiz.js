let url  = "http://localhost:3000/intrebari";
let xhr  = new XMLHttpRequest();
let intrebari = [];
let raspunsuri = [];

xhr.open('GET', url, true);
xhr.onload = function () {
	if (xhr.readyState == 4 && xhr.status == "200") {
		intrebari = xhr.responseText;
		
		let url2  = "http://localhost:3000/raspunsuri";
		let xhr2  = new XMLHttpRequest();
		xhr2.open('GET', url2, true);
		xhr2.onload = function () {
			if (xhr2.readyState == 4 && xhr2.status == "200") {
				raspunsuri = xhr2.responseText;
				
				creareIntrebari(intrebari, raspunsuri);
			}
		}
		xhr2.send();

	}
}
xhr.send();

function creareIntrebari(intrebari, raspunsuri){
	let intrebariJSON = JSON.parse(intrebari);
	let raspunsuriJSON = JSON.parse(raspunsuri);
	console.log(intrebariJSON);
	console.log(raspunsuriJSON);

	let listaIntrebari = document.getElementById("lista_intrebari");
	for(let j = 0; j < intrebariJSON.length; j++) {

		let listaRaspunsuri = document.createElement("ul");
		if(j < 5) {
			for(let i =j*3; i < j*3+3; i++) {
				let raspuns1 = document.createElement("li");
				raspuns1.innerHTML = "<input type='radio' value='"+ raspunsuriJSON[i].corectitudine +"' name='r"+ (j+1) +"'>"+ raspunsuriJSON[i].nume +"</input>";
	
				listaRaspunsuri.appendChild(raspuns1);
			}
		}
		
		let titluIntrebare = document.createElement("h3");
		let titluIntrebareText = document.createTextNode(intrebariJSON[j].nume);
		titluIntrebare.appendChild(titluIntrebareText);

		let stergeIntrebare = document.createElement('BUTTON');
		stergeIntrebare.onclick = function () { stergeIntrebareFunc(j + 1); };;
		let textStergere = document.createTextNode('Sterge intrebare');
		stergeIntrebare.appendChild(textStergere);

		let modificaIntrebare = document.createElement('INPUT');
		modificaIntrebare.type = "text";
		modificaIntrebare.placeholder = "Modifica intrebare";
		modificaIntrebare.name = "modifIntr";
		modificaIntrebare.id = "numeNou";
		let modificare = document.createElement('BUTTON');
		let textModificare = document.createTextNode('Modifica');
		modificare.onclick = function () { modificaEnunt(j + 1); };;
		modificare.appendChild(textModificare);
		
		let intrebareMare = document.createElement("li");
		intrebareMare.id = "i" + (j+1);
		intrebareMare.appendChild(titluIntrebare);
		intrebareMare.appendChild(listaRaspunsuri);

		if(j > 4)
		{
			intrebareMare.appendChild(stergeIntrebare);
			intrebareMare.appendChild(modificaIntrebare);
			intrebareMare.appendChild(modificare);
		}

		listaIntrebari.appendChild(intrebareMare);
	}
	
}

let xhr3 = new XMLHttpRequest();
function Help()
{
alert("Bifeaza cerculetul din dreptul raspunsului corect apoi apasa butonul:valideaza test sa vezi daca ai raspuns corect.");
}
function verificaRasp()
{
	let textDisplay1="";
	for(let j = 0; j < 5; j++){
		 let rasp1 = document.getElementsByName("r" + (j+1));
 		let numarRadio1 = rasp1.length;

		for(let i = 0; i < numarRadio1; i++)
		{
			if(rasp1[i].checked)
			{
				if(rasp1[i].value=="corect")
				{
					text = (j+1) + "." + "Corect\n";
					textDisplay1 = textDisplay1 + text;
				}
			else
				{
					text = (j+1) + "." + "Incorect\n";
					textDisplay1 = textDisplay1 + text;
				}
			break;
			}
		}
	}
	alternativ.cutieRaspunsuri.value= textDisplay1;
}
 
//Post
function adaugaIntrebare(){
	let altaIntrebare = document.getElementById("intrebareNoua").value;

	let data = {};
	data.id = intrebari[intrebari.length - 1].id + 1;
	data.nume = altaIntrebare;
	let json = JSON.stringify(data);
	let url = "http://localhost:3000/intrebari";
	var xhr4 = new XMLHttpRequest();
	xhr4.open("POST", url, true);
	xhr4.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr4.onload = function () {
		
		let us = JSON.parse(xhr4.responseText);
		if (xhr4.readyState == 4 && xhr4.status == "201") {
			alert("Intrebare adaugata cu success!");
			console.table(us);
			window.location.reload(); 
		} else {
			console.error(us);
		}
	}
	xhr4.onerror = function () {
		alert('Nu s-a adaugat intrebarea!');
	}
	xhr4.send(json);            
}
 

function resetare(){
	window.location.reload();
}


//Update PUT
function modificaEnunt(id){
	let numeNou = document.getElementById("numeNou").value
	
	let data = {};
	data.id = id;
	data.nume  = numeNou;

	let url = "http://localhost:3000/intrebari";
	let json = JSON.stringify(data);

	let xhr5 = new XMLHttpRequest();
	xhr5.open("PUT", url + "/" + id, true);
	xhr5.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr5.onload = function () {
		let us = JSON.parse(xhr5.responseText);
		if (xhr5.readyState == 4 && xhr5.status == "200") {
			alert("Intrebare modificata cu success!");
			console.table(us);
			window.location.reload();
		} else {
			console.error(us);
		}
	}
	xhr5.onerror = function () {
		alert('Nu s-a modificat intrebarea!');
	}
	xhr5.send(json);
}


// Delete
function stergeIntrebareFunc(id){
	//alert(id);
	let url = "http://localhost:3000/intrebari";
	//alert(url);
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", url + "/" + id, true);
	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			document.getElementById("i" + id).remove();
			alert("Intrebare stearsa");
		} 
	}
	xhr.send();

	
	for(let i = (id-1)*3; i < (id-1)*3+3; i++) {
		let url = "http://localhost:3000/raspunsuri/" + (i+1);
		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", url, true);
		xhr.send();
	}

}
