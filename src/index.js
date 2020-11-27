const get = require('./createGetRequest');

/**
 * random fgo lewd
 * @returns {Promise<string>} promise
 */
function lewd() {
    return new Promise((resolve, reject) => {
        get('https://mashu.sinkaroid.org/yande/?tags=fate%2Fgrand_order').then(res => {
            resolve(res.body.file);
        }).catch(reject);
    });
}

module.exports = Object.assign(lewd, {get});