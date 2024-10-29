# 365-L.A.C.

## _TagLine_ 
  Applicazione per la gestione dei contratti dei clienti per la prenotazione delle lenti a contatto e il controllo della vista.

## _Descrizione_
  Un applicazione in grado di gestire i contratti dei clienti che hanno deciso di firmare il 365 L.A.C. ovvero un contratto che fornisce una fornitura che dura un anno di lenti a contatto senza il bisogno di andare   in un negozio a prenotarle in quanto ci sono le forniture ogni 4 mesi. Questa applicazione è in grado di aggiungere un nuovo cliente o rimuoverlo, informare il negozio che sta per scadere un contratto o prenotare   le lenti a contatto per determinati clienti così da rimuovere tutti i fogli con sopra i clienti e rendere più veloce ed efficace il processo e da evitare eventuali dimenticanze. Inoltre nel contratto 365 L.A.C      c'è   una clausola che implica un controllo della vista gratuito che può essere effetuato solo dopo 6 mesi dalla sottoscrizione del contratto.

## _Target_
  Questa applicazione è particolarmente utile per tutti i negozi di ottica che hanno deciso di partecipare al progetto 365 L.A.C.

## _Problema_
  Il problema che va a risolvere questa applicazione è appunto la poca efficenza che viene usata in questo momento nella gestione dei contratti dei clienti visto che tutte le informazioni vengono tenute su fogli      aumentanto il rischio di errore o di dimenticanze nella prenotazione delle lenti a contatto.

## _Competitor_
  I competitor di questa applicazioni sono i gestionali che vengono forniti alle aziene e alcuni esempi possono essere:
  - Zendesk
  - Bitrix24

## _Tecnologie usate_
  Le tecnologie usate per sviluppare questo gesstionale sono:
  1. C#: Piattaforma di sviluppo con interfaccia grafica che semplifica l'utilizzo;
  2. ChatGPT: Supporto per risolvere eventuali problemi nello sviluppo del codice;
  3. File CSV: File in cui si memorizzano tutte le informazioni sui clienti.

## _Requisiti_

### 1. Requisiti funzionali
  I requisiti funzionali per questa applicazione sono: 
  - Aggiunta di un nuovo cliente;
  - Visuallizare clienti già registrati e le informazioni legate ad essi ed eventualmente eliminarli;
  - Aggiungere la data di ritiro di una fornitura;
  - Scadenza fornitura così da essere in grado di ordinare le lenti;
  - Scadenza controllo ovvero quando scade il controllo gratuito della visita;
  - Scadenza contratto per informare l'utente che bisogna rifarlo se si vuole continuare ad usufruire del contratto.

    https://yuml.me/d5fc5976.svg

### 2. Requisiti non funzionali
  I requisiti non funzionali sono:
   - Affidabilità: il programma dovrà essere affidabile ovvero non dovrà avere dei problemi che possono causare perdite di soldi all'azienda;
   - Efficente: il programma dovrà essere veloce nella risposta anche se dovrà analizzare tre diversi file e lavorarci su essi e dovrà occupare anche meno spazio possibile. In linea di massima la risposta dovrà        arrivare in un tempo massimo di 10 secondi;
   - Usabilità: Il prodotto dovrà essere semplice e facile da usare e capire e non richiede particolare formazione agli utenti che dovranno usarlo;
   - Sicurezza: La sicurezza del file sarà controllata tramite un login sia sui file contententi le informazioni dei contratti sia per l'uso del programma difatti ogni dipendente dell'azienda avrà con se un nome       utene e una password specifica,
### 3. Requisiti di dominio
  I requisiti di dominio sono: 
  - Validità del contratto: il contratto deve effettivamente essere in vigore e quelli vecchi devono essere cancellati;
  - Periodicità delle forniture di lenti: il programma deve informare il negozio della scadenza della fornitura delle lenti a contatto dei diversi clienti, difatti la fornitura dura 4 mesi e un mese prima dell'esaurimento bisogna informare il negozio
  - Controllo della vista gratuito: il programma deve verificare che il cliente possa effettivamente usufruire della visita oculistica gratis;
  - Normative sulla privacy e trattamento dei dati: L'applicazione deve gestire in maniera sicura i dati riguardanti i clienti e ai loro contratti;
  - Scadenza del contratto e procedure di rinnovo: Il programma deve garantire la possibilità di rinnovo del contratto di un cliente nel momento in cui va a scadere o la possibilità di eliminare il cliente se non rinnova.
