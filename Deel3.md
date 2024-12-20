Deel 3

Voor dit oplevermoment moet het mogelijk zijn met een backend te communiceren. Hiervoor maken we gebruik van dezelfde backend als die we bij het practicum hebben gebruikt. Het is hierbij niet de bedoeling dat je aanpassingen aan deze backend gaat doen (maar zie de opmerking bij het practicum zelf), maar dat je alles regelt vanaf de voorkant.

    Zorg ervoor dat de top vijf (of hoeveel je maar laat zien) die je bij het memory-spel laat zien daarwerkelijk de top vijf is die op de backend geregisteerd is.

    Maak een pagina waarmee een speler zich bij deze backend kan registeren.

    Maak een andere pagina waarop de speler zich kan aanmelden. De backend geeft bij correcte gegevens een JWT token terug dat standaard een TTL heeft van 3600 seconden.

    Sla het JWT op in de localStorage en zorg ervoor dat dit bij elke request naar de backend in de header wordt meegestuurd. Overload hierbij de globalde functie fetch, zoals tijdens het practicum is gedemonstreerd.

    Maak een nieuwe pagina waarop de speler zijn of haar voorkeuren kan opgeven. Deze voorkeuren bestaan uit de favoriete plaatjes-API, de kleur voor gevonden kaartjes en de kleur voor gesloten kaarten.

    Het moet voor de speler ook mogelijk zijn het opgegeven e-mailadres te wijzigen. Dat kun je op dezelfde pagina doen als waar de voorkeuren worden bijgehouden, of je kunt hier weer een nieuwe pagina voor maken.

    Als de TTL van het JWT verlopen is, moet de speler een melding krijgen en naar de loginpagina verwezen worden. Tip: om dit te testen kun je de TTL in symfony aanpassen. Voeg daarvoor in config/packages/lexik_jwt_authentication.yaml een key token_ttl toe met een waarde in seconden:

lexik_jwt_authentication:
    secret_key: '%env(resolve:JWT_SECRET_KEY)%'
    public_key: '%env(resolve:JWT_PUBLIC_KEY)%'
    pass_phrase: '%env(JWT_PASSPHRASE)%'
    token_ttl: 300

Bestudeer eventueel de documentatie van de LexikJWTAuthenticationBundle om een beeld te krijgen van de werking hiervan.