const burgerButton = document.querySelector('[header-burger-button]');
const headerList = document.querySelector('[header-list]');
const headerCategoryTitleList = headerList.querySelectorAll('[header-category-title]');
// const headerInnerList = document.querySelector('[header-inner-list]');

function init () {
  burgerButton.addEventListener('click', () => {
    document.body.classList.toggle('page-body--darken');
    headerList.classList.toggle('hero__menu--opened');
    burgerButton.style.width = `${headerList.offsetWidth}px`;
    burgerButton.classList.toggle('hero__menu-button--active');

    // document.addEventListener('click', (event) => {
    //   if (!event.target.classList.contains('hero__menu') && !event.target.classList.contains('hero__menu-button') && !event.target.parentElement.classList.contains('hero__menu')) {
    //     document.body.classList.remove('page-body--darken');
    //     headerList.classList.remove('hero__menu--opened');
    //     burgerButton.style.width = `${headerList.offsetWidth}px`;
    //     burgerButton.classList.remove('hero__menu-button--active');
    //   }
    // })
  })

  headerCategoryTitleList.forEach((title) => {
    title.addEventListener('click', () => {
      title.classList.toggle('hero__menu-category-title--active');
      title.nextElementSibling.classList.toggle('hero__menu-category-list--opened');
    })
  })
}

export { init as BurgerInit };
