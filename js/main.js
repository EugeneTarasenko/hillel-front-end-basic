const hamburgerBtn = document.querySelector('.nav-button--hamburger');
const closeBtn = document.querySelector('.nav-button--close');
const popupContainer = document.querySelector('.popup-container ');
const popup = document.querySelector('.nav__popup ');
const body = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.add('transparent');
  popupContainer.addEventListener('animationend', () => {
    popupContainer.classList.remove('fade-in');
    popup.classList.remove('slide-up');
  }, { once: true });
  popup.classList.add('slide-up');
  popupContainer.classList.add('fade-in');
  popupContainer.style.display = 'block';
  body.classList.add('no-scroll');
})

closeBtn.addEventListener('click', () => {
  popupContainer.classList.add('fade-out');
  popup.classList.add('slide-down');
  hamburgerBtn.classList.remove('transparent');
  popupContainer.addEventListener('animationend', () => {
    popupContainer.style.display = 'none';
    popupContainer.classList.remove('fade-out');
    popup.classList.remove('slide-down');
    body.classList.remove('no-scroll');
  }, { once: true });
})


popupContainer.addEventListener('click', (e) => {
  console.log(e.target.className)
  console.log(e.target.nodeName)
  if (e.target.nodeName === 'NAV' && e.target.className === 'nav header__nav popup-container') {
    popupContainer.classList.add('fade-out');
    popup.classList.add('slide-down');
    hamburgerBtn.classList.remove('transparent');
    popupContainer.addEventListener('animationend', () => {
      popupContainer.style.display = 'none';
      popupContainer.classList.remove('fade-out');
      popup.classList.remove('slide-down');
      body.classList.remove('no-scroll');
    }, { once: true });
  }
}
)

// ====================================== //


const datasetTitle = document.querySelector('title').dataset.titleName;
const headertitleName = document.querySelector('.header__page-name');

headertitleName.textContent = datasetTitle;
if (!datasetTitle) {
  document.querySelector('.header__slash').style.display = 'none';
}

// ====================================== //


const languageButtons = document.getElementsByName('language-switch');
let userLanguage = sessionStorage.getItem("userLanguage");

languageButtons.forEach((item) => {
  if (!userLanguage) document.querySelector('#en-language-switch').checked = true;
  if (item.value === userLanguage) item.checked = true;
})

languageButtons.forEach((item) => {
  item.addEventListener('change', () => {
    sessionStorage.setItem("userLanguage", item.value);
    userLanguage = item.value;
  })
})

// ====================================== //


const navLinks = document.querySelectorAll("[data-page-name]");
navLinks.forEach((link) => {
  if (link.dataset.pageName === datasetTitle) link.classList.add('current-page');;
})

// ====================================== //


const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach(tab => tab.classList.remove('gradient-text'));
    tabContents.forEach(tabContent => tabContent.style.display = "none");
    target.style.display = "block";
    tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    tab.classList.add('gradient-text');
  })
})
