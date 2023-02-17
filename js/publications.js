const switchButtons = document.querySelectorAll('.switch-buttons>.btn');

switchButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switchButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    })
    btn.classList.add('btn--active')
  })
})