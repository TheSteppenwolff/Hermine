// Ogni "scena" è una domanda/schermata. Aggiungere le prossime domande
// significa aggiungere un nuovo oggetto qui dentro, non riscrivere il resto.
const TITLE = 'Ai miei prossimi mille baci, poi cento, poi ancora mille';

const scenes = {
  start: {
    background: '#d6eaff',
    title: TITLE,
    body: "Ciao Bea. Ti saluto così, con le due parole più semplici che conosco. Ascolta, il periodo è un po' quello che è, quindi vado al punto: in questi giorni ti ho preparato una sorpresa. Eccola. Ti va di fare un gioco?",
    type: 'choice',
    options: [
      { label: 'Va bene', next: 'invito', variant: 'accept' },
      { label: 'Non mi va', next: 'invito', variant: 'decline' }
    ]
  },
  invito: {
    background: '#d6eaff',
    title: TITLE,
    // Il testo cambia in base a come si è arrivati qui, ma da qui in poi
    // il percorso è lo stesso per tutti: niente più pulsante per rifiutare.
    variants: {
      accept: 'Questa piccola esperienza sarà un viaggio che cercherà di congiungere passato e futuro. Ci sarà musica, ci saranno date da ricordare, battute. Andiamo?',
      decline: 'Non ti preoccupare, assolutamente. Giochiamo lo stesso. Dicevo: questa piccola esperienza sarà un viaggio che cercherà di congiungere passato e futuro. Ci sarà musica, ci saranno date da ricordare, battute. Andiamo?'
    },
    type: 'choice',
    options: [
      { label: 'Andiamo', next: 'posta' }
    ]
  },
  posta: {
    background: '#d6eaff',
    title: "C'è posta per te",
    body: 'Sarà stato tre anni fa. Io sono ancora Maria De Filippi, tu sei ancora il destinatario. C\'era posta per te. Qualcuno ha dedicato un passo del suo libro a te, e vorrebbe leggertelo.',
    type: 'letter',
    buttonLabel: 'Leggi',
    // Sostituisci questo testo con quello che vuoi dedicarle.
    letterText: "A lungo ho pensato che le più grandi disdette delle nostre vite potessero abbatterci davvero per giorni, mesi interi. Di lasciarci incapaci di alzarsi dal letto, di uscire di casa. Ma bastò quella notte, quella notte insonne, sanguinante dal petto nell'abisso del dolore, che dilagava dalla mente al cuore, e quel dolore sul petto così opprimente da togliere il respiro. Bastò quella notte a togliermi completamente le forze, tanto che mi addormentai in preda allo sfinimento, per poi svegliarmi il giorno successivo privo di ogni segno della stanchezza, della svogliatezza, di quello stesso dolore. Se la sera prima questo era un grande vaso in frantumi, quella mattina ne restavano solo i frammenti più piccoli. Piccoli, sì, ma ancora in grado di tagliare. Bastò quella mattina per farmi capire che possiamo ancora camminare sui cocci sottili, e che certo, fa male, ma non è impossibile. Dopo un po' ci si abitua ai tagli. E così, quella mattina, iniziai a camminare sulle schegge. Non era facile, ma il metodo era semplice: camminare. E poi ancora camminare, e ancora, e ancora.<br><br>Daniele Pezzuoli,<br><i>Il viandante sul mare di sabbia</i>",
    next: null
  }
};

const app = document.getElementById('app');

function renderScene(sceneId, variant) {
  const scene = scenes[sceneId];
  if (!scene) return;

  document.body.style.backgroundColor = scene.background;

  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('p');
  title.className = 'card__title';
  title.textContent = scene.title;
  card.appendChild(title);

  const body = document.createElement('p');
  body.className = 'card__body';
  body.textContent = (scene.variants && variant && scene.variants[variant])
    ? scene.variants[variant]
    : scene.body;
  card.appendChild(body);

  if (scene.type === 'choice') {
    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'card__options';

    scene.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option.label;
      btn.addEventListener('click', () => {
        btn.classList.toggle('is-pressed');
        if (option.next) {
          // Piccola pausa per far vedere lo scambio di colore prima di cambiare schermata
          setTimeout(() => renderScene(option.next, option.variant), 300);
        }
        // Se non c'è un "next" (fine catena attuale), il pulsante resta
        // solo come feedback visivo in attesa della prossima domanda.
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
  }

  if (scene.type === 'letter') {
    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'card__options';

    const openBtn = document.createElement('button');
    openBtn.className = 'option-btn';
    openBtn.textContent = scene.buttonLabel || 'Leggi';
    openBtn.addEventListener('click', () => {
      openBtn.classList.toggle('is-pressed');
      openLetter(scene);
    });
    optionsWrap.appendChild(openBtn);

    card.appendChild(optionsWrap);
  }

  app.innerHTML = '';
  app.appendChild(card);
}

function openLetter(scene) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const box = document.createElement('div');
  box.className = 'letter-box';

  const text = document.createElement('p');
  text.className = 'letter-box__text';
  text.innerHTML = scene.letterText || '';
  box.appendChild(text);

  const continueBtn = document.createElement('button');
  continueBtn.className = 'option-btn';
  continueBtn.textContent = 'Continua';
  continueBtn.addEventListener('click', () => {
    overlay.remove();
    if (scene.next) {
      renderScene(scene.next);
    }
    // Se non c'è un "next" (fine catena attuale), l'overlay si chiude
    // e resta la schermata sotto, in attesa della prossima domanda.
  });
  box.appendChild(continueBtn);

  overlay.appendChild(box);
  app.appendChild(overlay);
}

renderScene('start');