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
    // Nessun titolo qui: sparisce dopo Va bene/Non mi va e torna nella prossima scena.
    title: '',
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
    icon: { src: 'defilippi.png', alt: 'Maria De Filippi' },
    body: 'Sarà stato tre anni fa. Io sono ancora Maria De Filippi, tu sei ancora il destinatario. C\'era posta per te. Qualcuno ha dedicato un passo del suo libro a te, e vorrebbe leggertelo.',
    type: 'letter',
    buttonLabel: 'Leggi',
    letterText: "A lungo ho pensato che le più grandi disdette delle nostre vite potessero abbatterci davvero per giorni, mesi interi. Di lasciarci incapaci di alzarsi dal letto, di uscire di casa. Ma bastò quella notte, quella notte insonne, sanguinante dal petto nell'abisso del dolore, che dilagava dalla mente al cuore, e quel dolore sul petto così opprimente da togliere il respiro. Bastò quella notte a togliermi completamente le forze, tanto che mi addormentai in preda allo sfinimento, per poi svegliarmi il giorno successivo privo di ogni segno della stanchezza, della svogliatezza, di quello stesso dolore. Se la sera prima questo era un grande vaso in frantumi, quella mattina ne restavano solo i frammenti più piccoli. Piccoli, sì, ma ancora in grado di tagliare. Bastò quella mattina per farmi capire che possiamo ancora camminare sui cocci sottili, e che certo, fa male, ma non è impossibile. Dopo un po' ci si abitua ai tagli. E così, quella mattina, iniziai a camminare sulle schegge. Non era facile, ma il metodo era semplice: camminare. E poi ancora camminare, e ancora, e ancora.<br><br>Daniele Pezzuoli,<br><i>Il viandante sul mare di sabbia</i>",
    next: 'dedica'
  },
  dedica: {
    background: '#d6eaff',
    title: '',
    body: "Quando dico che ti amo, intendo che stai lentamente diventando una parte di me, un capitolo indimenticabile della mia vita, al punto che trovo più che ragionevole, anzi necessario, trasporti nelle mie aspiranti opere. Che tu in queste sia Klara, che sia Sachi, che sia una parte della coscienza stessa del protagonista, non ha importanza. Sei e sarai quella persona a cui un'opera è dedicata tra le righe, a cui un passo in particolare cerca di parlare direttamente, a cui le lettere esprimono la gratitudine.",
    type: 'choice',
    options: [
      { label: 'Continua', next: 'miglioverde' }
    ]
  },
  miglioverde: {
    background: '#C12E26',
    theme: {
      font: "'Lora', serif",
      textColor: '#000000',
      btnBg: '#000000',
      btnText: '#ffffff'
    },
    icon: { src: 'miglioverde.png', alt: 'Il Miglio Verde' },
    title: "Fuori dalla penna non c'è salvezza",
    body: 'Già che ci siamo, parliamo di libri. Parto subito con una domanda bruciapelo: una volta ti ho detto che se tu fossi un libro, saresti Il miglio verde, di Stephen King. Perché?',
    type: 'quiz',
    options: [
      { label: 'Perché io e te avremo un epilogo drammatico, come il libro', correct: false },
      { label: 'Perché tra noi si frappongono troppe ingiustizie che vanno punite', correct: false },
      { label: 'Perché il nostro viaggio insieme sembra lungo, ma nel mentre scalda il cuore', correct: true },
      { label: 'Perché il topolino del carcere è uno dei protagonisti, e tu sei la mia topa', correct: false }
    ]
  }
};

const app = document.getElementById('app');
let cardEl = null;

const DEFAULT_THEME = {
  font: "'Quicksand', sans-serif",
  textColor: '#243085',
  btnBg: '#b7c9ff',
  btnText: '#243085'
};

function applyTheme(theme) {
  const t = Object.assign({}, DEFAULT_THEME, theme || {});
  const root = document.documentElement.style;
  root.setProperty('--font-family', t.font);
  root.setProperty('--text-color', t.textColor);
  root.setProperty('--btn-bg', t.btnBg);
  root.setProperty('--btn-text', t.btnText);
}

function buildCardContent(container, scene, variant) {
  container.innerHTML = '';

  if (scene.icon) {
    const icon = document.createElement('img');
    icon.className = 'card__icon';
    icon.src = scene.icon.src;
    icon.alt = scene.icon.alt || '';
    icon.style.opacity = '0';
    container.appendChild(icon);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        icon.style.opacity = '1';
      });
    });
  }

  if (scene.title) {
    const title = document.createElement('p');
    title.className = 'card__title';
    title.textContent = scene.title;
    title.style.opacity = '0';
    container.appendChild(title);
    // Doppio rAF: garantisce che il browser registri opacity:0 prima di
    // passare a 1, altrimenti la transizione a volte viene "saltata".
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        title.style.opacity = '1';
      });
    });
  }

  const body = document.createElement('p');
  body.className = 'card__body';
  body.textContent = (scene.variants && variant && scene.variants[variant])
    ? scene.variants[variant]
    : scene.body;
  container.appendChild(body);

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
          setTimeout(() => renderScene(option.next, option.variant), 300);
        }
      });
      optionsWrap.appendChild(btn);
    });

    container.appendChild(optionsWrap);
  }

  if (scene.type === 'quiz') {
    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'card__options';

    scene.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option.label;
      btn.addEventListener('click', () => {
        const allBtns = optionsWrap.querySelectorAll('.option-btn');
        allBtns.forEach((b, i) => {
          b.disabled = true;
          b.classList.add(scene.options[i].correct ? 'is-correct' : 'is-incorrect');
        });
      });
      optionsWrap.appendChild(btn);
    });

    container.appendChild(optionsWrap);
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

    container.appendChild(optionsWrap);
  }
}

function renderScene(sceneId, variant) {
  const scene = scenes[sceneId];
  if (!scene) return;

  document.body.style.backgroundColor = scene.background;
  applyTheme(scene.theme);

  // Primo caricamento: nessuna animazione, si costruisce e basta.
  if (!cardEl) {
    cardEl = document.createElement('div');
    cardEl.className = 'card';
    app.appendChild(cardEl);
    buildCardContent(cardEl, scene, variant);
    return;
  }

  const swapContent = () => {
    // Blocca l'altezza attuale per poter animare verso quella nuova.
    const startHeight = cardEl.getBoundingClientRect().height;
    cardEl.style.height = startHeight + 'px';
    void cardEl.offsetHeight; // forza il reflow

    buildCardContent(cardEl, scene, variant);

    const endHeight = cardEl.scrollHeight;
    requestAnimationFrame(() => {
      cardEl.style.height = endHeight + 'px';
    });

    cardEl.addEventListener('transitionend', function onHeightDone(e) {
      if (e.propertyName === 'height') {
        cardEl.style.height = 'auto'; // torna fluido per il resize del telefono
        cardEl.removeEventListener('transitionend', onHeightDone);
      }
    });
  };

  const oldTitle = cardEl.querySelector('.card__title');
  const oldIcon = cardEl.querySelector('.card__icon');
  if (oldTitle || oldIcon) {
    // Titolo/icona vecchi spariscono prima di ricostruire il resto sotto.
    if (oldTitle) oldTitle.style.opacity = '0';
    if (oldIcon) oldIcon.style.opacity = '0';
    setTimeout(swapContent, 250);
  } else {
    swapContent();
  }
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
  });
  box.appendChild(continueBtn);

  overlay.appendChild(box);
  app.appendChild(overlay);
}

renderScene('start');