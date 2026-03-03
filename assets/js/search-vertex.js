function search(googleProjectId, googleApiKey, googleAppId, searchboxElementId, callbackFunction = mapResults) {
    var query = document.getElementById(searchboxElementId).value;
    var url = `https://discoveryengine.googleapis.com/v1/projects/${googleProjectId}/locations/global/collections/default_collection/engines/${googleAppId}/servingConfigs/default_search:searchLite?key=${googleApiKey}`;
    var context = `projects/${googleProjectId}/locations/global/collections/default_collection/engines/${googleAppId}/servingConfigs/default_search`;
    var requestBody = {
        "query": query,
        "servingConfig": context
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => { console.log('Response:', JSON.stringify(data)); return data; })
    .then(data => callbackFunction(data))
    .catch(error => {
        console.error('Error:', error);
    });
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
    link.href = item.document.derivedStructData.link;
    link.textContent = item.document.derivedStructData.title;

    var snippet = clone.querySelector('[data-field="snippet"]');
    snippet.textContent = item.document.derivedStructData.snippets[0].snippet;

    var imgCol = clone.querySelector('[data-field="image-col"]');
    if (item.document.derivedStructData.pagemap && item.document.derivedStructData.pagemap.metatags && item.document.derivedStructData.pagemap.metatags.length) {    
        var img = imgCol.querySelector('img');
        img.src = getImageUrl(item.document.derivedStructData.pagemap.metatags);
        img.alt = getImageAlt(item.document.derivedStructData.pagemap.metatags);
    } else {
        imgCol.remove();
    }

    return clone;
}

function mapResults(data) {
    var container = document.getElementById('searchresults');
    var body = container.querySelector('.modal-body');
    body.innerHTML = '';

    if (data.results.length > 0) {
        data.results.forEach(function(result) {
            body.appendChild(renderResultItem(result));
        })
        // results.items.forEach(function(item) {
        //     body.appendChild(renderResultItem(item));
        // });
    }

    container.classList.remove('d-none');
}

function closeResults() {
    document.getElementById('searchresults').classList.add('d-none');
}