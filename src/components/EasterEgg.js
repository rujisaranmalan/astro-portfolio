if (typeof window !== 'undefined') {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let input = [];

  window.addEventListener('keydown', (e) => {
    input.push(e.key);
    if (input.length > konamiCode.length) input.shift();

    if (input.join(',') === konamiCode.join(',')) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
  });
}
