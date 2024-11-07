;(() => {
    document.addEventListener("DOMContentLoaded", () => {

        // ++++++++++++++++
        // Nav Spinner Re-locating
        // ++++++++++++++++

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

        // ++++++++++++++++
        // Account Dropdown Logic
        // ++++++++++++++++

        const accountButton = document.querySelector('.cmp-nav__account-btn');
        const accountDropdown = document.querySelector('.cmp-account-dropdown');

        /**
         * Toggle Show Dropdown
         * @param {*} event 
         */
        const toggleShowDropdown = () => {
            if (accountDropdown.classList.contains('cmp-account-dropdown--hide')) {
                accountDropdown.classList.remove('cmp-account-dropdown--hide');
            } else {
                accountDropdown.classList.add('cmp-account-dropdown--hide');
            }
        }

        accountButton.addEventListener('click', toggleShowDropdown);
        accountButton.addEventListener('blur', () => {
            // Need to use a timeout to actually detect the document.activeElement for some reason :,)
            setTimeout(() => {
                if (!document.activeElement.id.includes('customer_login_link') &&
                    !document.activeElement.id.includes('customer_register_link') &&
                    !document.activeElement.id.includes('customer_logoff_link')) {
                    toggleShowDropdown();
                }
            }, 0);
        });

        // ++++++++++++++++
        // Search Results Accordion
        // ++++++++++++++++

        const searchResultButtons = document.querySelectorAll('.cmp-search-page__result');

        /**
         * Toggle Show Product Description
         * @param {*} event 
         */
        const toggleShowProductDesc = (event) => {
            const searchResultsButton = event.currentTarget;
            if (searchResultsButton.classList.contains('cmp-search-page__result--tray-hidden')) {
                searchResultsButton.classList.remove('cmp-search-page__result--tray-hidden');
            } else {
                searchResultsButton.classList.add('cmp-search-page__result--tray-hidden');
            }
        }

        if (searchResultButtons.length > 0) {
            for (const searchResultButton of searchResultButtons) {
                searchResultButton.addEventListener('click', (event) => {
                    if (event.target.classList.contains('cmp-search-page__result-row') ||
                        event.target.classList.contains('cmp-search-page__result') ||
                        event.target.classList.contains('cmp-search-page__result-chev')) {
                        toggleShowProductDesc(event);
                    }
                });
            }
        }

        // ++++++++++++++++
        // Displaying Reset Button on Search Bar
        // ++++++++++++++++

        const searchBar = document.querySelector('.cmp-search-bar__input');
        const searchBarResetButton = document.querySelector('.cmp-search-bar__reset-btn');

        /**
         * Determine If Reset Button Should Display
         * @param {*} event 
         */
        const determineIfResetButtonShouldDisplay = () => {
            const searchValue = searchBar.value;
            if (searchValue.length > 0) {
                searchBarResetButton.classList.remove('cmp-search-bar__reset-btn--hidden');
            } else {
                searchBarResetButton.classList.add('cmp-search-bar__reset-btn--hidden');
            }
        }

        /**
         * Reset Search Value
         * @param {*} event 
         */
        const resetSearchValue = (event) => {
            event.preventDefault();
            searchBar.value = '';
            searchBarResetButton.classList.add('cmp-search-bar__reset-btn--hidden');
        }

        searchBar.addEventListener('change', determineIfResetButtonShouldDisplay);
        searchBarResetButton.addEventListener('click', resetSearchValue);

        determineIfResetButtonShouldDisplay();

        // ++++++++++++++++
        // Results-Per-Page Select Logic
        // ++++++++++++++++

        const resultsPerPageDropdown = document.querySelector('select[name="results-per-page"]');

        /**
         * Update results per page
         * @param {*} event 
         */
        const updateResultsPerPage = (event) => {
            event.preventDefault();
            const resultsPerPage = event.currentTarget.options[event.currentTarget.selectedIndex].value;
            console.log(resultsPerPage);
            var url = new URL(window.location.href);
            url.searchParams.set('limit', resultsPerPage);
            window.location.href = url.toString();
        }

        //resultsPerPageDropdown.addEventListener('change', updateResultsPerPage);
    });
})();
