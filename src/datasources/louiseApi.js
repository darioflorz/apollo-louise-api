import fetch from 'node-fetch';

// cannot use enviroment variables here for some reason.

async function getExposure(exposureId){
    return get(`exposures/${exposureId}`);
}

async function getMedia(mediaId){
    return get(`media/${mediaId}`);
}

async function getProduct(productId){
    return get(`products/${productId}`);
}

async function getProductBroadcasts(productId){
    return get(`products/${productId}/broadcasts`);
}

async function getProductExposures(productId){
    return get(`Products/${productId}/exposures`);
}

async function getProductVersions(productId){
    return get(`products/${productId}/versions`);
}

async function getVersion(versionId){
    return get(`versions/${versionId}`);
}

async function getVersionMedias(versionId){
    return get(`versions/${versionId}/media`);
}

async function getVersionSubtitles(versionId){
    return get(`versions/${versionId}/subtitles`);
}

async function get(url) {
    // code to get data from db / other source
    const headers = { 'x-api-key': process.env.LOUISE_KEY };
    const louiseUrl = process.env.LOUISE_URL;
    var url = louiseUrl + '/' + url;
    console.log(url);
    const res = await fetch(url, { headers: headers });
    return res.json();
}

export {
    get,
    getProduct,
    getProductVersions,
    getProductExposures,
    getProductBroadcasts,
    getExposure,
    getMedia,
    getVersion,
    getVersionMedias,
    getVersionSubtitles
}