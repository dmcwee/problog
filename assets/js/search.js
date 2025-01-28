function search(googleApiKey, googleSearchEngineId, searchboxElementId, callbackFunction = mapResults) {
    $("#searchresults").hide();
    var q = $(`#${searchboxElementId}`).val();

    fetch(`https://customsearch.googleapis.com/customsearch/v1?cx=${googleSearchEngineId}&key=${googleApiKey}&q=${q}`)
        .then(response => response.json())
        .then(json => {
            callbackFunction(json);
        })
        .catch(console.error);
    return false;
}

function mapResults(results) {
    if(!Handlebars.helpers['getImageUrl']){
        Handlebars.registerHelper('getImageUrl', function(array) {
            return array && array.length ? array[0]["twitter:image"] : "../assets/images/jekyll_featured_theme.jpg";
        });
    }
    if(!Handlebars.helpers['getImageAlt']) {
        Handlebars.registerHelper('getImageAlt', function(array) {
            return array && array.length ? array[0]["twitter:image:alt"] : "Alt Text";
        });
    }

    var template = $("#searchresults-template").html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(results);

    $("#searchresults").html(html);
    $("#searchresults").show();
}

function closeResults() {
    $("#searchresults").hide();
}