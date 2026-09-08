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
    // Nessun titolo qui: sparisce dopo Va bene/Non va e torna nella prossima scena.
    title: '',
    variants: {
      accept: 'Questa piccola esperienza sarà un viaggio che cercherà di congiungere passato e futuro. Ci sarà musica, ci saranno date da ricordare, brani e battute. Andiamo?',
      decline: 'Non ti preoccupare, assolutamente. Giochiamo lo stesso. Dicevo: questa piccola esperienza sarà un viaggio che cercherà di congiungere passato e futuro. Ci sarà musica, ci saranno date da ricordare, brani e battute. Andiamo?'
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
    body: 'Sarà stato tre, quasi quattro anni fa. Io sono ancora Maria De Filippi, tu sei ancora il destinatario. C\'era posta per te e c\'è tutt\'oggi. Qualcuno ha dedicato un passo del suo libro a te, e vorrebbe leggertelo.',
    type: 'letter',
    buttonLabel: 'Leggi',
    letterText: "A lungo ho pensato che le più grandi disdette delle nostre vite potessero abbatterci davvero per giorni, mesi interi. Di lasciarci incapaci di alzarsi dal letto, di uscire di casa. Ma bastò quella notte, quella notte insonne, sanguinante dal petto nell'abisso del dolore, che dilagava dalla mente al cuore, e quel dolore sul petto così opprimente da togliere il respiro. Bastò quella notte a togliermi completamente le forze, tanto che mi addormentai in preda allo sfinimento, per poi svegliarmi il giorno successivo privo di ogni segno della stanchezza, della svogliatezza, di quello stesso dolore. Se la sera prima questo era un grande vaso in frantumi, quella mattina ne restavano solo i frammenti più piccoli. Piccoli, sì, ma ancora in grado di tagliare. Bastò quella mattina per farmi capire che possiamo ancora camminare sui cocci sottili, e che certo, fa male, ma non è impossibile. Dopo un po' ci si abitua ai tagli. E così, quella mattina, iniziai a camminare sulle schegge. Non era facile, ma il metodo era semplice: camminare. E poi ancora camminare, e ancora, e ancora.<br><br>Daniele Pezzuoli,<br><i>Il viandante sul mare di sabbia</i>",
    next: 'dedica'
  },

  dedica: {
    background: '#d6eaff',
    title: '',
    body: "Quando dico che ti amo, intendo che stai lentamente diventando una parte di me, una parte che negli anni verrà assimilata in modo permanente e irreversibile; un capitolo indimenticabile della mia vita, al punto che trovo più che ragionevole, anzi necessario, trasporti nelle mie aspiranti opere. Che tu in queste ti chiami Klara, Sachi, che tu sia la voce stessa del protagonista in alcuni passi, come quello che hai appena letto, non ha importanza. Sei e sarai quella persona a cui un'opera è dedicata tra le righe e nel modo in cui è scritta, a cui un passo in particolare cerca di parlare direttamente, a cui le lettere esprimono la gratitudine.",
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
    bodyHtml: 'Già che ci siamo, parliamo di libri. Parto subito con una domanda bruciapelo: una volta ti ho detto che se tu fossi un libro, saresti <i>Il miglio verde</i>, di Stephen King. Perché?',
    type: 'quiz',
    options: [
      { label: 'Perché io e te avremo un epilogo drammatico, come il libro', correct: false },
      { label: 'Perché tra noi si frappongono troppe ingiustizie che vanno punite', correct: false },
      { label: 'Perché il nostro viaggio insieme sembra lungo, ma nel mentre scalda il cuore', correct: true },
      { label: 'Perché il topolino del carcere è uno dei protagonisti, e tu sei la mia topa', correct: false }
    ],
    next: 'alice'
  },

  alice: {
    background: '#C12E26',
    theme: {
      font: "'Lora', serif",
      textColor: '#000000',
      btnBg: '#000000',
      btnText: '#ffffff'
    },
    icon: { src: 'alice.png', alt: 'Alice nel Paese delle Meraviglie' },
    title: 'Fuori dalla penna non c\'è salvezza',
    bodyHtml: 'Quando, per il tuo compleanno, ti ho regalato il volume di <i>Alice nel Paese delle Meraviglie</i> e <i>Attraverso lo specchio</i>, a che pagina si trovavano le due lettere che ti ho scritto?',
    type: 'quiz',
    options: [
      { label: '118, perché sei diventata grande', correct: true },
      { label: '333, come piace a Dante', correct: false },
      { label: '64, come in Minecraft', correct: false },
      { label: '666, perché sei un diavoletto', correct: false }
    ],
    next: 'ladro'
  },

  ladro: {
    background: '#C12E26',
    theme: {
      font: "'Lora', serif",
      textColor: '#000000',
      btnBg: '#000000',
      btnText: '#ffffff'
    },
    icon: { src: 'ladro.png', alt: 'Il ladro di anime' },
    title: 'Fuori dalla penna non c\'è salvezza',
    bodyHtml: 'Perché hai prima amato e poi odiato così tanto <i>Il ladro di anime</i>, di Sebastian Fitzek?',
    type: 'quiz',
    options: [
      { label: 'La scrittura era ottima all\'inizio, ma poi si è appesantito', correct: false },
      { label: 'La trama era promettente, ma mi ha delusa alla fine', correct: false },
      { label: 'Non mi piacciono i thriller e l\'ho trovato prevedibile', correct: false },
      { label: 'Non capisco niente di quello che leggo', correct: true }
    ],
    next: 'lupodellasteppa'
  },

  lupodellasteppa: {
    background: '#C12E26',
    theme: {
      font: "'Lora', serif",
      textColor: '#000000',
      btnBg: '#000000',
      btnText: '#ffffff'
    },
    icon: { src: 'lupo.png', alt: 'Il lupo della steppa' },
    title: "Fuori dalla penna non c'è salvezza",
    bodyHtml: 'Parliamo ora di una delle opere più emblematiche del nostro rapporto e che, con mio grande apprezzamento, hai cercato di comprendere. Anche se, con tutta sincerità, non è che tu ne sia rimasta così entusiasta. Ti ricordi cosa mi hai detto in merito a <i>Il lupo della steppa</i>, di Hermann Hesse?',
    type: 'quiz',
    options: [
      { label: 'Mi ci rivedo tantissimo, mi ha aiutata a capirmi meglio', correct: false },
      { label: 'È stato pesante, ma ne è valsa la pena', correct: false },
      { label: "Che coglioni, stava proprio fissato con l'arucaria", correct: true },
      { label: 'Ogni volta che siamo insieme mi sento nel teatro magico del finale', correct: false }
    ],
    next: 'dorian'
  },

  dorian: {
    background: '#C12E26',
    theme: {
      font: "'Lora', serif",
      textColor: '#000000',
      btnBg: '#000000',
      btnText: '#ffffff'
    },
    icon: { src: 'gray.png', alt: 'Il ritratto di Dorian Gray' },
    title: 'Fuori dalla penna non c\'è salvezza',
    bodyHtml: '“stavo riguardando le nostre foto e mi sono ritrovata a guardarle con la stessa meraviglia con cui basil hallward contemplava il ritratto di dorian gray appena terminato, con quello stupore quasi incredulo che si prova davanti a qualcosa di così bello da sembrare irreale. ma, a differenza di dorian, la cui bellezza rimane intatta mentre è il ritratto a consumarsi e a riflettere il tempo e le sue colpe, tu sembri diventare ogni giorno più bello.<br>ADORO il fatto che ogni versione di te che conosco non fa che rendere ancora più bella quella che verrà, come se il tempo, invece di portarti via qualcosa, continuasse ad aggiungere meraviglia” (Beatrice)',
    type: 'quiz',
    options: [
      { label: 'Lo stesso discorso vale anche per te', correct: false },
      { label: 'Taci, sei meravigliosa e non voglio sentire altro', correct: true },
      { label: 'Ti sbagli, sei oggettivamente più bella tu', correct: false },
      { label: 'Hai ragione, sono oggettivamente più bello di te', correct: false }
    ],
    next: 'possibiliscenari'
  },

  possibiliscenari: {
    background: 'linear-gradient(135deg, #1D0F44, #364A7D)',
    theme: {
      font: "'Quicksand', sans-serif",
      textColor: '#ffffff',
      btnBg: '#96CFC0',
      btnText: '#153229',
      cardBg: '#D96043'
    },
    icon: { src: 'possibiliscenari.png', alt: 'Cesare Cremonini, Possibili Scenari' },
    title: 'Cesare Cremonini, Possibili Scenari',
    body: 'Adesso basta, passiamo alla musica. Completa i versi di queste canzoni, vediamo se te le ricordi. La prima è facile.',
    type: 'lyrics',
    lines: [
      { text: 'E poi succede' },
      { blank: 'che ci sentiamo bene' },
      { text: 'Senza nessun perché' }
    ],
    next: 'poetica'
  },

  poetica: {
    background: 'linear-gradient(135deg, #1D0F44, #364A7D)',
    theme: {
      font: "'Quicksand', sans-serif",
      textColor: '#ffffff',
      btnBg: '#96CFC0',
      btnText: '#153229',
      cardBg: '#D96043'
    },
    // Nessuna nuova immagine indicata, riuso la copertina dell'album.
    icon: { src: 'possibiliscenari.png', alt: 'Cesare Cremonini, Poetica' },
    title: 'Cesare Cremonini, Poetica',
    body: 'Restiamo tra le stesse corde, ancora un po\':',
    type: 'lyrics',
    lines: [
      { text: 'Anche quando poi' },
      { blank: 'saremo stanchi' },
      { blank: 'troveremo il modo' },
      { text: 'Per camminare nel buio' }
    ],
    next: 'enjoythesilence'
  },

  enjoythesilence: {
    background: '#AB1E2E',
    theme: {
      font: "'Quicksand', sans-serif",
      textColor: '#ffffff',
      btnBg: '#ffffff',
      btnText: '#AB1E2E',
      cardBg: '#000000'
    },
    icon: { src: 'violator.png', alt: 'Depeche Mode, Violator' },
    title: 'Depeche Mode, Enjoy the Silence',
    body: "Torniamo su note un po' più vecchie.",
    type: 'lyrics',
    lines: [
      { text: "Can't you understand" },
      { text: 'Oh my little girl' },
      { blank: 'all I ever wanted' },
      { text: 'All I ever needed' },
      { blank: 'is here in my arms' },
      { text: 'Words are very unnecessary' },
      { text: 'They can only do harm' }
    ],
    next: 'ridere'
  },

  ridere: {
    background: '#FE5905',
    theme: {
      font: "'Quicksand', sans-serif",
      textColor: '#000000',
      btnBg: '#F5A00A',
      btnText: '#000000',
      cardBg: '#ECD6C8'
    },
    icon: { src: 'hype.png', alt: 'Pinguini Tattici Nucleari, Ridere' },
    title: 'Pinguini Tattici Nucleari, Ridere',
    body: 'Vediamo se penserai a me quando ci lasceremo. Io a te, sicuro.',
    type: 'lyrics',
    lines: [
      { text: 'Però tu fammi una promessa' },
      { text: 'Che un giorno, quando sarai persa' },
      { blank: 'ripenserai ogni tanto a cosa siamo stati noi' },
      { blank: 'alle giornate al mare, a tutte le mie pare' },
      { text: 'Alle cucine che non abbiam potuto comprare' },
      { text: "Lo shampoo all'albicocca," },
      { blank: 'i tuoi capelli in bocca' },
      { text: "Alla tua testa dura, all'ansia alla paura" },
      { text: 'Giuro che un po\' mi fa ridere' }
    ]
  }
};

const app = document.getElementById('app');
let cardEl = null;

const DEFAULT_THEME = {
  font: "'Quicksand', sans-serif",
  textColor: '#243085',
  btnBg: '#b7c9ff',
  btnText: '#243085',
  cardBg: '#ffffff'
};

function applyTheme(theme) {
  const t = Object.assign({}, DEFAULT_THEME, theme || {});
  const root = document.documentElement.style;
  root.setProperty('--font-family', t.font);
  root.setProperty('--text-color', t.textColor);
  root.setProperty('--btn-bg', t.btnBg);
  root.setProperty('--btn-text', t.btnText);
  root.setProperty('--card-bg', t.cardBg);
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

  if (scene.bodyHtml) {
    body.innerHTML = scene.bodyHtml;
  } else {
    body.textContent = (scene.variants && variant && scene.variants[variant])
      ? scene.variants[variant]
      : scene.body;
  }

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
          b.classList.add(
            scene.options[i].correct ? 'is-correct' : 'is-incorrect'
          );
        });

        if (scene.next) {
          setTimeout(() => renderScene(scene.next), 700);
        }
      });

      optionsWrap.appendChild(btn);
    });

    container.appendChild(optionsWrap);
  }

  if (scene.type === 'lyrics') {
    const lyricsWrap = document.createElement('div');
    lyricsWrap.className = 'lyrics';
    const blanks = []; // { input, answer }

    scene.lines.forEach(line => {
      if (line.blank !== undefined) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'lyrics__input';
        input.placeholder = '···';
        input.autocomplete = 'off';
        lyricsWrap.appendChild(input);
        blanks.push({ input, answer: line.blank });
      } else {
        const p = document.createElement('p');
        p.className = 'lyrics__line';
        p.textContent = line.text;
        lyricsWrap.appendChild(p);
      }
    });

    container.appendChild(lyricsWrap);

    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'card__options';

    const submitBtn = document.createElement('button');
    submitBtn.className = 'option-btn';
    submitBtn.textContent = 'Indovina';

    submitBtn.addEventListener('animationend', () => {
      submitBtn.classList.remove('shake');
    });

    const normalize = s => s.trim().toLowerCase().replace(/,/g, '').replace(/\s+/g, ' ');

    const trySubmit = () => {
      const allCorrect = blanks.every(b =>
        normalize(b.input.value) === normalize(b.answer)
      );

      if (allCorrect) {
        blanks.forEach(b => { b.input.disabled = true; });
        submitBtn.disabled = true;
        submitBtn.classList.add('is-correct');
        submitBtn.textContent = 'Esatto!';

        if (scene.next) {
          setTimeout(() => renderScene(scene.next), 700);
        }
      } else {
        submitBtn.classList.remove('shake');
        void submitBtn.offsetWidth; // reflow, per poter far ripartire l'animazione
        submitBtn.classList.add('shake');
      }
    };

    submitBtn.addEventListener('click', trySubmit);
    blanks.forEach(b => {
      b.input.addEventListener('keydown', e => {
        if (e.key === 'Enter') trySubmit();
      });
    });

    optionsWrap.appendChild(submitBtn);
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

  document.body.style.background = scene.background;
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