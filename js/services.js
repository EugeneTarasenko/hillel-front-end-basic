const mainBtn = document.querySelector('.main-btn');
const popupContainer2 = document.querySelector('.popup-container-2 ');
const popupWindow2 = document.querySelector('.popup-window-2 ');
const closeBtn2 = document.querySelector('.close-btn-2');

mainBtn.addEventListener(
  "click",
  () => {
    popupContainer2.addEventListener('animationend', () => {
      popupContainer2.classList.remove('fade-in');
    }, { once: true });
    popupContainer2.style.display = "block";
    popupContainer2.classList.add('fade-in');
    body.classList.add('no-scroll');
  }
);


popupContainer2.addEventListener('click', (e) => {
  // console.log(e.target.className)
  // console.log(e.target.nodeName)
  if (e.target.nodeName === 'DIV' && e.target.className === 'popup-container-2') {

    popupContainer2.addEventListener('animationend', () => {
      popupContainer2.style.display = 'none';
      popupContainer2.classList.remove('fade-out');
    }, { once: true });

    popupContainer2.classList.add('fade-out');
    body.classList.remove('no-scroll');

  }
}
)

closeBtn2.addEventListener('click', () => {
  popupContainer2.addEventListener('animationend', () => {
    popupContainer2.style.display = 'none';
    popupContainer2.classList.remove('fade-out');
  }, { once: true });

  popupContainer2.classList.add('fade-out');
  body.classList.remove('no-scroll');
})