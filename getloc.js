const fetch = require('node-fetch')
function getSloc(repo, tries) {

    //repo is the repo's path
    if (!repo) {
        return Promise.reject(new Error("No repo provided"));
    }

    //GitHub's API may return an empty object the first time it is accessed
    //We can try several times then stop
    if (tries === 0) {
        return Promise.reject(new Error("Too many tries"));
    }

    let url = "https://api.github.com/repos" + repo + "/stats/code_frequency";

    return fetch(url)
        .then(x => x.json())
        .then(x => x.reduce((total, changes) => total + changes[1] + changes[2], 0))
        .catch(err => getSloc(repo, tries - 1));
}
getSloc('/mithrayls/smd-js/', 10)
