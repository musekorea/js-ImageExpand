const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeAllexpand();
    panel.classList.add('expand');
  });
});

function removeAllexpand() {
  panels.forEach((panel) => {
    panel.classList.remove('expand');
  });
}
