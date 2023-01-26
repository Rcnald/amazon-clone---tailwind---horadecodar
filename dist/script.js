const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const searchCategories = document.getElementById('searchCategories')

function searchOutline(){
    searchForm.classList.add('outline-custom')
}

searchButton.addEventListener('click', function(){
    searchButton.classList.add('outline-custom')
})

searchInput.addEventListener('focusout', function(){
    searchForm.classList.remove('outline-custom')
});

searchCategories.addEventListener('click', function(){
    searchCategories.classList.add('outline-custom')
})

searchCategories.addEventListener('focusout', function(){
    searchCategories.classList.remove('outline-custom')
});


