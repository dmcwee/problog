function search(googleApiKey, googleSearchEngineId, searchboxElementId, callbackFunction = mapResults) {
    var container = document.getElementById('searchresults');
    container.classList.add('d-none');
    var q = document.getElementById(searchboxElementId).value;

    fetch(`https://customsearch.googleapis.com/customsearch/v1?cx=${googleSearchEngineId}&key=${googleApiKey}&q=${q}`)
        .then(response => response.json())
        .then(json => {
            callbackFunction(json);
        })
        .catch(console.error);
    return false;
}

function getImageUrl(metatags) {
    return metatags && metatags.length ? metatags[0]['twitter:image'] : '../assets/images/jekyll_featured_theme.jpg';
}

function getImageAlt(metatags) {
    return metatags && metatags.length ? metatags[0]['twitter:image:alt'] : 'Alt Text';
}

function renderResultItem(item) {
    var template = document.getElementById('searchresults-template');
    var clone = template.content.cloneNode(true);

    var link = clone.querySelector('[data-field="link"]');
    link.href = item.link;
    link.textContent = item.title;

    clone.querySelector('[data-field="snippet"]').textContent = item.snippet;

    var imgCol = clone.querySelector('[data-field="image-col"]');
    if (item.pagemap && item.pagemap.metatags && item.pagemap.metatags.length) {
        var img = imgCol.querySelector('img');
        img.src = getImageUrl(item.pagemap.metatags);
        img.alt = getImageAlt(item.pagemap.metatags);
    } else {
        imgCol.remove();
    }

    return clone;
}

function mapResults(results) {
    var container = document.getElementById('searchresults');
    var body = container.querySelector('.modal-body');
    body.innerHTML = '';

    if (results.items) {
        results.items.forEach(function(item) {
            body.appendChild(renderResultItem(item));
        });
    }

    container.classList.remove('d-none');
}

function closeResults() {
    document.getElementById('searchresults').classList.add('d-none');
}