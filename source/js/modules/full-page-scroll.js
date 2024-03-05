import throttle from 'lodash/throttle';
import variables from '../../scss/general/variables.scss';

export default class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 1000;
    this.scrollFlag = true;
    this.timeout = null;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);

    this.activeScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(`wheel`, throttle(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true}));
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    if (this.scrollFlag) {
      this.reCalculateActiveScreenPosition(evt.deltaY);
      const currentPosition = this.activeScreen;
      if (currentPosition !== this.activeScreen) {
        this.changePageDisplay();
      }
    }
    this.scrollFlag = false;
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.timeout = null;
      this.scrollFlag = true;
    }, this.THROTTLE_TIMEOUT);
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.changePageDisplay();
  }

  changePageDisplay() {
    this.changeVisibilityDisplay();
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
  }

  changeVisibilityDisplay() {
    const activeScreenElement = document.querySelector(`.screen.active`);
    const activeScreenIndex = Array.from(this.screenElements).findIndex(screen => screen === activeScreenElement);
    const backgroundLayerElement = document.querySelector(`.background-layer`);
    const prizeFooterWrapperElement = document.querySelector(`.screen--prizes .screen__footer-wrapper`);
    const rulesDisclaimerElement = document.querySelector(`.screen--rules .disclaimer`);
    const changeScreenDelay = parseFloat(variables[`change-screen-delay`]) || 0;
    const setActiveClass = () => {
      setTimeout(() => {
        this.screenElements[this.activeScreen].classList.add(`active`);
      });
    };
    const toggleScreenHiddenClass = () => {
      this.screenElements.forEach((screen) => {
        screen.classList.add(`screen--hidden`);
      });
      this.screenElements[this.activeScreen].classList.remove(`screen--hidden`);
    };

    this.screenElements.forEach((screen) => {
      screen.classList.remove(`active`);
    });

    if (activeScreenElement) {
      if (activeScreenIndex === 1 && this.activeScreen === 2) {
        backgroundLayerElement.classList.remove(`background-layer_initial`);
      }

      if (activeScreenIndex === 2 && this.activeScreen === 3 || activeScreenIndex === 3 && this.activeScreen === 2) {
        prizeFooterWrapperElement.classList.add(`screen__footer-wrapper_hidden`);
        rulesDisclaimerElement.classList.add(`disclaimer_hidden`);
      }

      setTimeout(() => {
        backgroundLayerElement.classList.add(`background-layer_initial`);

        setTimeout(() => {
          if (activeScreenIndex === 2 && this.activeScreen === 3 || activeScreenIndex === 3 && this.activeScreen === 2) {
            prizeFooterWrapperElement.classList.remove(`screen__footer-wrapper_hidden`);
            rulesDisclaimerElement.classList.remove(`disclaimer_hidden`);
          }
        });

        setActiveClass();
        toggleScreenHiddenClass();
      }, changeScreenDelay);
    } else {
      setActiveClass();
      toggleScreenHiddenClass();
    }
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find((item) => item.dataset.href === this.screenElements[this.activeScreen].id);
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      activeItem.classList.add(`active`);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        screenId: this.activeScreen,
        screenName: this.screenElements[this.activeScreen].id,
        screenElement: this.screenElements[this.activeScreen],
      }
    });

    document.body.dispatchEvent(event);
  }

  reCalculateActiveScreenPosition(delta) {
    if (delta > 0) {
      this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }
}
