const pages = [
    { title: 'Tamil', link: 'Tamil.html' },
    { title: 'English', link: 'English.html' },
    { title: 'Maths', link: 'Maths.html' },
    { title: 'Physics', link: 'Physics.html' },
    // Add more pages as needed
];

function showSearchResults() {
    const searchField = document.getElementById('searchField');
    const searchResults = document.getElementById('searchResults');
    const query = searchField.value.toLowerCase(); // Convert query to lowercase

    const matchingPages = pages.filter(page => page.title.toLowerCase().includes(query));

    if (matchingPages.length > 0) {
        searchResults.innerHTML = matchingPages.map(page => `<a href="${page.link}">${page.title}</a>`).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }
}

function performSearch() {
    const searchField = document.getElementById('searchField');
    const query = searchField.value.toLowerCase(); // Convert query to lowercase

    const matchingPage = pages.find(page => page.title.toLowerCase() === query);

    if (matchingPage) {
        window.location.href = matchingPage.link;
    } else {
        // Handle case when no exact match is found
        alert('No matching page found.');
    }
}
