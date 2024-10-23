;(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const location = window.location.pathname;
        const navigationLinksList = document.querySelectorAll('.cmp-nav__container a');
    
        const spinningImg = document.createElement('div');
        spinningImg.classList.add('cmp-nav__spinner');

        /**
         * Add Spinner To Nav Element
         * @param {HTMLElement} navElement 
         * @param {HTMLElement} spinnerElement 
         */
        const addSpinnerToNavElement = (navElement, spinnerElement) => {
            navElement.classList.add('cmp-nav__nav-link--selected');
            navElement.append(spinnerElement);
        } 
    
        if (navigationLinksList.length > 0 && location === '/') {
            addSpinnerToNavElement(navigationLinksList[0], spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/collections/all') {
            addSpinnerToNavElement(navigationLinksList[1], spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/pages/contact') {
            addSpinnerToNavElement(navigationLinksList[2], spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/cart') {
            addSpinnerToNavElement(navigationLinksList[3], spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/account') {
            addSpinnerToNavElement(navigationLinksList[4], spinningImg);
        }
    });
})();
