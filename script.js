const headerTitle = document.getElementById('header-title');
const searchForm = document.getElementById('search-form');
const searchIcon = document.getElementById('search-icon');
const searchButton = document.getElementById('search-button');

function displayForm() {
    searchIcon.hidden = true;
    headerTitle.hidden = true;
    searchForm.hidden = false;
}
function hideFormOnSearchButtonClick() {
    searchIcon.hidden = false;
    headerTitle.hidden = false;
    searchForm.hidden = true;
}

searchIcon.addEventListener('click', displayForm);
searchButton.addEventListener('click', hideFormOnSearchButtonClick)