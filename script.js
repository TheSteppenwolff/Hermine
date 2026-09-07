// Ogni "scena" è una domanda/schermata. Aggiungere le prossime domande
// significa aggiungere un nuovo oggetto qui dentro, non riscrivere il resto.
const scenes = {
  start: {
    background: '#d6eaff',
    title: 'Ai miei prossimi mille baci, poi cento, poi ancora mille',
    body: "Ciao Bea. Ti saluto così, con le due parole più semplici che conosco. Ascolta, il periodo è un po' quello che è, quindi vado al punto: in questi giorni ti ho preparato una sorpresa. Eccola. Ti va di fare un gioco?",
    type: 'choice',
    options: [
      { label: 'Va bene', next: null },
      { label: 'Non mi va', next: null }
    ]
  }
};

const app = document.getElementById('app');

function renderScene(sceneId) {
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
  body.textContent = scene.body;
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
        // Qui in futuro: passare a option.next quando avremo la prossima domanda
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
  }

  app.innerHTML = '';
  app.appendChild(card);
}

renderScene('start');
