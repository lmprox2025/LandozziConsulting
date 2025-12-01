# Sito Landozzi Consulting Srl

Questo repository contiene l’implementazione completa del sito one‑page per **Landozzi Consulting Srl**, comprensivo di codice front‑end (HTML, CSS, JavaScript) e di un semplice back‑end Node/Express per la gestione del modulo contatti.

## Struttura delle cartelle

```
landozzi-site/
├── index.html          # Pagina principale del sito
├── css/
│   └── styles.css      # Foglio di stile con la palette, layout e animazioni
├── js/
│   ├── main.js         # Script principale per FAQ, animazioni e invio form
│   └── chatbot.js      # Script dedicato al chatbot interattivo
├── assets/
│   ├── hero.png        # Immagine di copertina per l’hero section
│   ├── team1.png       # Ritratti dei membri del team
│   ├── team2.png
│   ├── team3.png
│   └── team4.png
├── server/
│   ├── server.js       # Server Node/Express per l’endpoint `/api/contact`
│   └── package.json    # Definizione delle dipendenze e script di avvio
└── README.md           # Questo file
```

## Come ospitare il front‑end su GitHub Pages

1. Crea un nuovo repository su GitHub e carica l’intero contenuto della cartella `landozzi-site` (eccetto la cartella `server/` se non vuoi includere il back‑end).
2. All’interno delle impostazioni del repository, abilita **GitHub Pages** scegliendo il branch principale (solitamente `main` o `master`) e come cartella root `/` (root del progetto).
3. Salva le impostazioni: dopo qualche minuto la pagina sarà disponibile all’URL indicato da GitHub.
4. Assicurati che il file `index.html` si trovi nella radice del repository, così da essere utilizzato come pagina iniziale. I file CSS e JS sono referenziati con percorsi relativi (`css/styles.css`, `js/main.js`, `js/chatbot.js`).

## Come eseguire il back‑end localmente

Il front‑end interagisce con un endpoint `/api/contact` che non è disponibile su GitHub Pages perché si tratta di hosting statico. Per testare l’invio del modulo contatti devi eseguire localmente il server Node/Express incluso nella cartella `server/`.

1. Assicurati di avere [Node.js](https://nodejs.org/) installato sulla tua macchina.
2. Apri un terminale e naviga nella cartella `server/`:
   ```bash
   cd landozzi-site/server
   ```
3. Installa le dipendenze dichiarate nel `package.json`:
   ```bash
   npm install
   ```
4. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà in ascolto sulla porta `3000` (o quella indicata nella variabile d’ambiente `PORT`). L’endpoint `/api/contact` riceverà i dati del modulo e stamperà le informazioni nel terminale.

5. Se vuoi testare il modulo dal front‑end ospitato su GitHub Pages, dovrai configurare un reverse proxy o aggiornare l’URL della fetch nel file `js/main.js` per puntare all’indirizzo del tuo server (ad esempio `https://tuodominio.example.com/api/contact`).

## Chatbot

Il chatbot incluso nel sito è del tutto front‑end: risponde con messaggi predefiniti alle domande più frequenti e non invia dati all’esterno. Il file `js/chatbot.js` centralizza tutta la logica della chat e può essere ampliato integrandolo con un servizio AI o modificando la funzione `botResponse()`.

## Suggerimenti per animazioni e palette

Nel progetto sono state utilizzate transizioni CSS e l’`IntersectionObserver` per creare semplici animazioni di rivelazione. Se desideri effetti più avanzati, puoi includere librerie come [AOS.js](https://michalsnik.github.io/aos/) o [GSAP](https://greensock.com/gsap/) direttamente nel file `index.html` con uno `<script>` esterno e configurare gli attributi data‑aos sugli elementi da animare. Puoi inoltre visitare [Coolors.co](https://coolors.co/) per generare nuove combinazioni cromatiche coerenti con l’immagine aziendale.

## Licenza

Questo progetto è fornito a scopo dimostrativo e può essere utilizzato come base per lo sviluppo di siti aziendali simili. Le immagini generate sono di fantasia e non raffigurano persone reali.