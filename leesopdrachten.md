Leesopdrachten

Week 1

1.  a Uit het artikel lijken er meerdere enorm belemmerende problemen te zijn. Auto-playing van audio en video terwijl je juist moet kunnen horen wat op de pagina staat lijkt mij in ieder geval het meest irritante. Als het echt om belemmerend gaat dan moet het toch wel de formulieren en CAPTCHA zijn waar je niet doorheen kan komen zonder hulp. Veel van wat je op het internet kan doen is mooi meegenomen, maar dit heb je op het internet echt nodig om belangrijke dingen te regelen. Zeker nu tegenwoordig meer en meer enkel digitaal moet, waarbij het zelfs via de telefoon heel lastig wordt gemaakt. 

    b Het niet aanwezig zijn van dark-mode is heel vervelend, maar opzich niet belemmerend. Zelf vind ik het enorm belemmerend als een website enkel voor mobile is bedacht of zelfs wijst op het gebruik van hun app. Er zijn zaken die je gewoon niet op een telefoon of via een app wil uitvoeren. Wat mij betreft moet er ruimte blijven voor het gebruik van desktops en moet dit apploos kunnen.  

2. Ik heb in de vorige vraag hier blijkbaar per ongeluk ook wat over gezegd. Ik heb de applicaties tot nu toe blijkbaar altijd desktop first gemaakt. Als ik het artikel lees begrijp ik echter wel het punt van de schrijver. Of anders gezegd, hij heeft mij overtuigd met zijn argumenten. Met name het feit dat je met mobile first met het simpele begint en het ingewikkelder maakt voor de uitzonderingen voelt voor mij logisch. Daardoor kan je algemeen maken wat voor beide geldt en het uitbreiden naar wat voor desktop nodig is. 

Week 2

1. De methode is het disablen van Javascript in de browser om zo te zien wat de impact is. Bij Reddit werkt de hele website nietmeer. Bij hanze.nl krijg je veel wits te zien en wat artikelen. Eigenlijk werkt nagenoeg niks meer tot dusver. Opvallend genoeg werkt darkmode specifiek ook niet meer. 

2. Een lastige vraag. Het lijkt uit het hoofdstuk juist dat dezelfde problemen zullen spelen bij de andere programmeertalen die hier voor worden overwogen? Hij noemt wel risico's, maar niet zozeer dat die opgelost gaan worden met een switch. Het gebruik van frameworks en libraries wat gaps to exploit over laat bijvoorbeeld en het feit dat het een interpreted language is. Volgens mij geeft de schrijver geen reden waarvoor het wordt gewijzigd, behalve dat programmers gewoon graag nieuwe talen gebruiken en er daarmee meer opties zullen zijn. Dat ligt alleen lastig omdat je daarmee de browsers ook moet aanpassen.  

Week 3

JWT token worden gebruikt voor authenticatie. Dit is een lastig onderwerp, maar deze tokens geven een manier die makkelijker te implementeren is. Een voordeel is dat je geen wachtwoorden hoeft op te slaan in localStorage. Je hoeft daarnaast ook minder queries naar de database te sturen. 

De tokens zijn echter niet encrypted. Het Claims gedeelte is niet hidden. Er zijn echter wel encrypted versies van JWTs. Een ander nadeel is dat je Javascript nodig hebt. Je kan het bijna niet ontwijken dat Javascript toegang nodig heeft tot de tokens. Als laatste hebben JWTs te maken met de size constraints van cookies en localStorage. 

Het gebruik van JWT tokens is een vereiste binnen de opdracht en het project. Het geeft ons een mogelijkheid om van authenticatie gebruik te maken zonder dat het buitengewoon lastig is om dit te doen. 


