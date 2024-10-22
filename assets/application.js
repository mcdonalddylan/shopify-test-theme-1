;(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const location = window.location.pathname;
        const navigationLinksList = document.querySelectorAll('.cmp-nav__container a');
    
        console.log(location);
        console.log(navigationLinksList);
    
        const spinningImg = document.createElement('div');
        spinningImg.classList.add('cmp-nav__spinner');
    
        if (navigationLinksList.length > 0 && location === '/') {
            navigationLinksList[0].append(spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/collections/all') {
            navigationLinksList[1].append(spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/pages/contact') {
            navigationLinksList[2].append(spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/cart') {
            navigationLinksList[3].append(spinningImg);
        } else if (navigationLinksList.length > 0 && location === '/account') {
            navigationLinksList[4].append(spinningImg);
        }
    });
})();
