function Help()
{
alert("Bifeaza cerculetul din dreptul raspunsului corect apoi apasa butonul:valideaza test sa vezi daca ai raspuns corect.");
}



function verificaRasp()
{
 var rasp1 = document.getElementsByName("r1");
 var numarRadio1 = rasp1.length;
 var textDisplay1="";

 for(var i = 0; i < numarRadio1; i++)
 {
	if(rasp1[i].checked)
	{
	 if(rasp1[i].value=="corect")
	  {
	 textDisplay1 = "1." + "Corect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
	  }
	 else
		{
	 textDisplay1 = "1." + "Incorect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
		}
	 break;
	}
 }

 var rasp2 = document.getElementsByName("r2");
 var numarRadio2 = rasp2.length;
 for(var i = 0; i < numarRadio2; i++)
 {
	if(rasp2[i].checked)
	{
	 if(rasp2[i].value=="corect")
	  {
	 textDisplay1 = textDisplay1 + "2." + "Corect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
	  }
	 else
		{
	 textDisplay1 = textDisplay1 + "2." + "Incorect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
		}
	 break;
	}
 }
var rasp3 = document.getElementsByName("r3");
 var numarRadio3 = rasp3.length;
 for(var i = 0; i < numarRadio3; i++)
 {
	if(rasp3[i].checked)
	{
	 if(rasp3[i].value=="corect")
	  {
	 textDisplay1 = textDisplay1 + "3." + "Corect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
	  }
	 else
		{
	 textDisplay1 = textDisplay1 + "3." + "Incorect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
		}
	 break;
	}
 }
var rasp4 = document.getElementsByName("r4");
 var numarRadio4 = rasp4.length;
 for(var i = 0; i < numarRadio4; i++)
 {
	if(rasp4[i].checked)
	{
	 if(rasp4[i].value=="corect")
	  {
	 textDisplay1 = textDisplay1 + "4." + "Corect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
	  }
	 else
		{
	 textDisplay1 = textDisplay1 + "4." + "Incorect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
		}
	 break;
	}
 }
var rasp5 = document.getElementsByName("r5");
 var numarRadio5 = rasp5.length;
 for(var i = 0; i < numarRadio5; i++)
 {
	if(rasp5[i].checked)
	{
	 if(rasp5[i].value=="corect")
	  {
	 textDisplay1 = textDisplay1 + "5." + "Corect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
	  }
	 else
		{
	 textDisplay1 = textDisplay1 + "5." + "Incorect\n";
	 alternativ.cutieRaspunsuri.value= textDisplay1;
		}
	 break;
	}
 }
}

