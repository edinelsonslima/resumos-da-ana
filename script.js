const messages = {
  1: 'Independente dos seus resultados não se abale por isso, sempre haverá outras oportunidades e você é capaz de alcançar tudo o que deseja e muito mais ainda! Boa sorte! ❤️',

  2: 'Os obstáculos existem para que possamos aprender como superá-los e nos tornamos mais fortes. fique calmo(a) e siga em frente com determinação! 🤩',

  3: 'Aprender com os erros é a forma de como você terá mais chances de acertar na próxima, então pra que tanta ansiedade? Aproveite o momento e siga em frente! 🤗',

  4: 'Boa sorte na sua trajetória, muita calma no coração, acredite em você mesmo e na sua capacidade em alcançar todos os objetivos que deseja! 💜',

  5: 'Sonhos exigem paciência no resultado e dedicação no processo! Acredite em você e siga em frente com determinação! 🩵',
};

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal > header > h2');
const modalContent = document.querySelector('.modal > div > p');
const btnMessages = document.querySelectorAll('.btn-message');
const btnCloseModal = document.querySelector('.btn-close-modal');

function handleClose() {
  modal?.close();
}

function handleOpen() {
  modal?.showModal();
}

modal?.addEventListener('click', function ({ target }) {
  if (target !== modal) return;
  handleClose();
});

btnCloseModal?.addEventListener('click', handleClose);

btnMessages?.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalContent.textContent = messages[btn.dataset.index];
    modalTitle.textContent = `Mensagem ${btn.dataset.index}`;
    handleOpen();
  });
});
