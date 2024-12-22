Deel 2

Voor dit toetsmoment moeten alle functionele eisen die in week drie besproken zijn gerealiseerd zijn.

Tot nu toe had het memory spel nog geen interactie en functionaliteit: het ziet er wel mooi uit, maar de kaarten kunnen nog niet omgedraaid worden en de score wordt nog niet bijgehouden. Maar dat ga je vanaf nu veranderen; je gaat met Javascript aan de slag. Voeg de volgende functionaliteiten toe aan het spel:

    XBij het begin van het spel worden in eerste instantie willekeurig letters uit het alfabet gekozen (later zullen we dit nog aanpassen). Zorg ervoor dat er de helft zoveel willekeurige letters worden gekozen als er kaarten zijn.

    XWanneer het spel start begint de tijd te lopen. Je kunt voor het starten van het spel een knop gebruiken, of gewoon de tijd starten wanneer op de eerste kaart geklikt wordt.

    XDe speler klikt op een gesloten kaart: de kleur van de kaart verandert in de kleur die bij open hoort en de letter die bij deze kaart hoort wordt weergegeven.

    XVervolgens klikt de speler op een andere gesloten kaart. Ook deze kaart verandert van kleur en de bijhorende letter wordt getoond.

    XAls beide letters gelijk zijn worden de letters in deze cellen permanent getoond. De kleur van de kaarten wordt weer veranderd, om duidelijk te maken dat ze gevonden zijn.

    XAls beide kaarten verschillende letters bevatten, blijven de kaarten open staan.

    XWanneer er op dat moment op een andere kaart geklikt wordt, worden beide geopende verschillende kaarten weer omgedraaid en de nieuwe kaart getoond.

    XWanneer een speler op een al omgedraaide kaart klikt gebeurt er niets.

    XAls alle kaarten zijn omgedraaid, is het spel voorbij en wordt de speler gefeliciteerd. Bedenk zelf een fijne manier om dit te doen.

    XWanneer het spel voorbij is, wordt het totaal aantal seconden dat hiervoor nodig was op de één of andere manier aan de speler getoond. Later zullen we dit ook nog in de backend opslaan. Bij dit spel is het zo dat een lagere score een betere score is.


X Toevoeging voor deze week is om afbeeldingen uit externe API's te gebruiken, in plaats van letters uit het alfabet. Denk hierbij bijvoorbeeld aan:

    Lorem Picsum

    DogAPI

    The CATAAS

Maar andere externe api's zijn natuurlijk ook mogelijk. Voeg een keuze-optie toe waarmee de speler kan kiezen wat voor soort plaatjes hij of zij op de kaartjes wil zien:

X Maak gebruik van een select-box voor het selecteren van plaatjes

X Maak gebruik van Promise en fetch voor het ophalen van de afbeeldingen.

Zorg er voor dat de gesloten kaarten ook de kleur krijgen die de speler met de color picker heeft uitgezocht. Ook tijdens het spelen moet je deze kleur kunnen aanpassen.

Beoordeling

Naast de functionaliteit worden ook de leesbaarheid en netheid van je code beoordeeld. Ook blijft accessibility en responsiveness belangrijk. Gebruik geen libraries en frameworks.

Zorg ervoor dat je code is opgeslagen in verschillende bestanden (dus niet al je JavaScript-code in één bestand); maak gebruik van *JavaScript Modules*.
