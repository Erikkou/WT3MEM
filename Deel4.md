Deel 4

De symfony backend geeft ook geaggregeerde data terug. Het idee hiervan is dat een administrator (ROLE_ADMIN) van deze endpoints gebruik kan maken om te zien hoeveel spellen er gespeeld zijn, wie zich heeft aangemeld (voor irritante direct-marketing-doeleinden bijvoorbeeld) en welke API's populair zijn. In deze opdracht moet je de pagina voor de administrator maken.

Maak gebruik van Angular om met behulp van de backend van de memory-game deze geaggregeerde data op te halen en in een fraaie visualisatie te tonen. Bekijk welke geaggregeerde data de backend teruggeeft om een idee te krijgen van de mogelijkheden (en als je een spannende toevoeging ziet, doe vooral een PR).

Niet opnieuw bouwen

Je hoeft dus niet het hele memory-spel opnieuw in Angular om te bouwen, maar je kunt hier natuurlijk wel een linkje naar de administrator-kant maken.

Je bent vrij in de uitwerking en layout van de applicatie, dus leef je uit! Er moet wel een visualisatie inzitten, dus niet gewoon een row-dump van de data. Je mag zelf de visualisatie bedenken, of gebruik maken van de standaarden die in Angular zitten.

Voor de angular-applicatie gelden voor de code dezelfde regels als voor het memory-spel zelf, dus gebruikersvriendelijkheid, responsiveness en mobile first. Zorg er ook voor dat je de applicatie voorziet van een fraaie vormgeving (wat 'fraai' is mag je zelf bedenken).

Bekijk de omschrijving van deze backend die vorige week gegeven is. Zorg er verder voor dat de volgende niet-functionele requirements in je applicatie verwerkt zitten:

    (Herhalende) functionaliteiten/onderdelen zijn op een logische manier gescheiden in verschillende components.

    Er worden services gebruikt voor het afhandelen van de API requests, JWT logica, en eventueel functionaliteiten en data die gedeeld worden door meerdere components.

    Indien daar een goede reden voor is mogen NgModules gebruikt worden, maar dit is niet noodzakelijk.

    Het Angular project gebruikt Typescript als taal, dus geen JavaScript.

    Het delen van data tussen componenten d.m.v. @Input(), @Output(), property binding en event binding komt voor in de applicatie.

    Directives *ngIf en *ngFor komen beiden voor in de applicatie.

    Tot slot is het MVC gedachtegoed aanwezig in de opbouw van de applicatie en worden de principes uit de Angular Style Guide toegepast.
