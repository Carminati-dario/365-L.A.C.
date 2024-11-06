# 365-L.A.C. - Dario Carminati

## _TagLine_ 
  Applicazione per la gestione dei contratti dei clienti per la prenotazione delle lenti a contatto e il controllo della vista.

## _Descrizione_
  Un applicazione in grado di gestire i contratti dei clienti che hanno deciso di firmare il 365 L.A.C. ovvero un contratto che fornisce una fornitura che dura un anno di lenti a contatto senza il bisogno di     andare in un negozio a prenotarle in quanto ci sono le forniture ogni 4 mesi. Questa applicazione è in grado di aggiungere un nuovo cliente o rimuoverlo, informare il negozio che sta per scadere un contratto o    prenotare le lenti a contatto per determinati clienti così da rimuovere tutti i fogli con sopra i clienti e rendere più veloce ed efficace il processo e da evitare eventuali dimenticanze. Inoltre nel contratto 365 L.A.C c'è una clausola che implica un controllo della vista gratuito che può essere effetuato solo dopo 6 mesi dalla sottoscrizione del contratto.

## _Target_
  Questa applicazione è particolarmente utile per tutti i negozi di ottica che hanno deciso di partecipare al progetto 365 L.A.C.

## _Problema_
  Il problema che va a risolvere questa applicazione è appunto la poca efficenza che viene usata in questo momento nella gestione dei contratti dei clienti visto che tutte le informazioni vengono tenute su fogli      aumentanto il rischio di errore o di dimenticanze nella prenotazione delle lenti a contatto.

## _Competitor_
  I competitor di questa applicazioni sono i gestionali che vengono forniti alle aziene e alcuni esempi possono essere:
  - Zendesk;
  - Bitrix24.

## _Tecnologie usate_
  Le tecnologie usate per sviluppare questo gesstionale sono:
  1. C#: Piattaforma di sviluppo con interfaccia grafica che semplifica l'utilizzo;
  2. ChatGPT: Supporto per risolvere eventuali problemi nello sviluppo del codice;
  3. File CSV: File in cui si memorizzano tutte le informazioni.

## _Requisiti_

### 1. Requisiti funzionali
  I requisiti funzionali per questa applicazione sono divisi nel seguente modo:
  - Login: solo le persone autorizzate possono accedere al servizio;
  - Gestione clienti:
    - Aggiunta di un nuovo cliente: per inserire un nuovo cliente all'interno del software;
    - Visuallizare clienti già registrati: visualizzando le informazioni legate ad essi ed eventualmente eliminarli e aggiornare le informazioni;
      
  - Gestione lenti a contatto:
    - Aggiungere la data di ritiro di una fornitura: per segnare che le lenti sono state ritirate;
    - Scadenza fornitura: avvisa quando sta scadendo la fornitura così e la possibilità di ordinarle;
    - Possibilità di controllo della visita: vedere quando si ha la possibilità di usufruire del controllo della vista e la possibilità di prenotarla;

  - Gestione contratto:
    - Scadenza contratto: visualizzare i clienti a cui sta scadendo il contratto con la possibilità di aggiornarlo o di cancellare il cliente se non lo rinnova;
    - Cancellazione automatica: se selezionato il programma cancella in maniera automatica eventuali clienti vecchi che non hanno rinnovato il contratto e li segnala a video.

  Inoltre il propietario o comunque chi gestisce il software ha anche questi requisiti:
  - Gestione venditori:
    - Aggiunta nuovi venditori: aggiunta di nuovi utenti che possono accedere al sito;
    - Modificare le password: il propietario ha la possibilità di modificare le password di tutti i dipendenti.
    ![Diagramma UML dei casi d'uso](https://yuml.me/6bd70785.svg)

### 2. Requisiti non funzionali
  I requisiti non funzionali sono:
   - Affidabilità: il programma dovrà essere affidabile ovvero non dovrà avere dei problemi che possono causare perdite di soldi all'azienda;
   - Efficente: il programma dovrà essere veloce nella risposta anche se dovrà analizzare tre diversi file e lavorarci su essi e dovrà occupare anche meno spazio possibile. In linea di massima la risposta dovrà        arrivare in un tempo massimo di 10 secondi;
   - Usabilità: il prodotto dovrà essere semplice e facile da usare e capire e non richiede particolare formazione agli utenti che dovranno usarlo;
   - Manutenibilità: il programma deve essere facilmente manutenuto e permettere aggiornamenti facili;
   - Scalabilità: il software deve garantire sempre una buona efficenza anche in caso di molti dati da gestire;
   - Backup e recupero dei dati: il programma deve garantire un meccanismo di backup e in caso di guasti o problemi esterni deve essere in grado di ripristinare i dati;
   - Sicurezza: la sicurezza del file sarà controllata tramite un login sia sui file contententi le informazioni dei contratti sia per l'uso del programma difatti ogni dipendente dell'azienda avrà con se un nome       utene e una password specifica.
### 3. Requisiti di dominio
  I requisiti di dominio sono: 
  - Validità del contratto: il contratto deve effettivamente essere in vigore e quelli vecchi devono essere cancellati;
  - Periodicità delle forniture di lenti: il programma deve informare il negozio della scadenza della fornitura delle lenti a contatto dei diversi clienti, difatti la fornitura dura 4 mesi e un mese prima dell'esaurimento bisogna informare il negozio;
  - Controllo della vista gratuito: il programma deve verificare che il cliente possa effettivamente usufruire della prova della vista gratuita;
  - Normative sulla privacy e trattamento dei dati: L'applicazione deve gestire in maniera sicura i dati riguardanti i clienti e ai loro contratti;
  - Sistema di Autorizzazioni e Ruoli: in base al ruolo che ogni utente ha potrà eseguire determinate operazioni;
  - Scadenza del contratto e procedure di rinnovo: Il programma deve garantire la possibilità di rinnovo del contratto di un cliente nel momento in cui va a scadere o la possibilità di eliminare il cliente se non è intenzionato al rinnovo.

## _Modello di Business_
  Il modello di business scelto per questo progetto è il modello Software as a service.

## _Elevator pitch_ 
  
