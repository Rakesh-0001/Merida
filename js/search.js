function performSearch() {
    var searchInput = document.getElementById('searchField').value.toLowerCase();
    var pageUrl = getPageUrl(searchInput);
    window.location.href = pageUrl;
}

function showSearchResults() {
    var searchInput = document.getElementById('searchField').value.toLowerCase();
    var suggestions = getSuggestions(searchInput);

    var autocompleteDropdown = document.getElementById('autocompleteDropdown');
    autocompleteDropdown.innerHTML = '';

    if (suggestions.length > 0) {
        suggestions.forEach(function (suggestion) {
            var option = document.createElement('div');
            option.textContent = suggestion;
            option.addEventListener('click', function () {
                document.getElementById('searchField').value = suggestion;
                autocompleteDropdown.style.display = 'none';
            });
            autocompleteDropdown.appendChild(option);
        });

        autocompleteDropdown.style.display = 'block';
    } else {
        autocompleteDropdown.style.display = 'none';
    }
}

function getSuggestions(searchInput) {
    // You can customize this array with your page names or keywords
    var suggestionsArray = ['tamil', 'english', 'about', 'biology', 'blog', 'cbsc', 'Chemistry', 'contact', 'Englsih', 'French', 'Geography', 'Hindi', 'History', 'icsc', 'index', 'isc', 'Kannada', 'Maths', 'Physics', 'Project', 'Services', 'State-board'];

    return suggestionsArray.filter(function (suggestion) {
        return suggestion.toLowerCase().includes(searchInput);
    });
}

function getPageUrl(searchQuery) {
    var pageUrl = searchQuery === 'tamil' ? 'tamil.html' :
                  searchQuery === 'english' ? 'english.html' :
                  searchQuery === 'about' ? 'about.html' :
                  searchQuery === 'biology' ? 'biology.html' :
                  searchQuery === 'blog' ? 'blog.html' :
                  searchQuery === 'cbsc' ? 'cbsc.html' :
                  searchQuery === 'Chemistry' ? 'Chemistry.html' :
                  searchQuery === 'contact' ? 'contact.html' :
                  searchQuery === 'Englsih' ? 'Englsih.html' :
                  searchQuery === 'French' ? 'French.html' :
                  searchQuery === 'Geography' ? 'Geography.html' :
                  searchQuery === 'Hindi' ? 'Hindi.html' :
                  searchQuery === 'History' ? 'History.html' :
                  searchQuery === 'icsc' ? 'icsc.html' :
                  searchQuery === 'index' ? 'index.html' :
                  searchQuery === 'isc' ? 'isc.html' :
                  searchQuery === 'Kannada' ? 'Kannada.html' :
                  searchQuery === 'Maths' ? 'Maths.html' :
                  searchQuery === 'Physics' ? 'Physics.html' :
                  searchQuery === 'Project' ? 'Project.html' :
                  searchQuery === 'Services' ? 'Services.html' :
                  searchQuery === 'State-board' ? 'State-board.html' :
                  'notfound.html';

    return pageUrl;
}