const wordSoul = document.querySelector('#word-soul');
if (wordSoul) {
  let resetTimer;
  const play = () => {
    wordSoul.classList.remove('is-playing');
    void wordSoul.offsetWidth;
    wordSoul.classList.add('is-playing');
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => wordSoul.classList.remove('is-playing'), 2600);
  };
  wordSoul.addEventListener('click', play);
  wordSoul.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      play();
    }
  });
}
