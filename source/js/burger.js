const burgerButton = document.querySelector('[header-burger-button]');
const headerList = document.querySelector('[header-list]');

function init () {
  burgerButton.addEventListener('click', () => {
    document.body.classList.toggle('page-body--darken');
    headerList.classList.toggle('hero__menu--opened');
    burgerButton.classList.toggle('hero__menu-button--active');
    headerList.addEventListener('click', switchMenuCategoryState)
    document.addEventListener('click', closeHeaderMenu)
  })
}

function switchMenuCategoryState (event) {
  if (event.target.hasAttribute('header-category-title')) {
    event.target.classList.toggle('hero__menu-category-title--active');
    event.target.nextElementSibling.classList.toggle('hero__menu-category-list--opened');
  }
}

function closeHeaderMenu (event) {
  if (!event.target.hasAttribute('header-list') && !event.target.hasAttribute('header-category-title') && !event.target.hasAttribute('header-inner-list') && !event.target.hasAttribute('header-burger-button')) {
    document.body.classList.remove('page-body--darken');
    headerList.classList.remove('hero__menu--opened');
    burgerButton.classList.remove('hero__menu-button--active');

    headerList.removeEventListener('click', switchMenuCategoryState)
    document.removeEventListener('click', closeHeaderMenu)
  }
}

export { init as BurgerInit };
