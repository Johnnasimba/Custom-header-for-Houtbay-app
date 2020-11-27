const headerTitle = document.getElementById('header-title');
const searchForm = document.getElementById('search-form');
const searchIcon = document.getElementById('search-icon');

function displayForm() {
    searchIcon.hidden = true;
    headerTitle.hidden = true;
    searchForm.hidden = false;
}

searchIcon.addEventListener('click', displayForm);
