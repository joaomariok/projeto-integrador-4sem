const RETRY_CONNECTION_TIMER = 10 * 1e3;
const MAX_CONNECTION_RETRY_COUNT = 100;

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

module.exports = { sleep, RETRY_CONNECTION_TIMER, MAX_CONNECTION_RETRY_COUNT };