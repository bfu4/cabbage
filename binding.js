const HEAD = '{ \"targets\": [';

/**
 * Turn modules into JSON valid for binding.gyp
 *
 * @param modules
 * @returns {string} JSON string
 */
function objectify(modules) {
    let str = HEAD;

    modules.forEach(mod => {
        str += JSON.stringify(mod);
    })

    return JSON.stringify(JSON.parse(str += ']}'), null, 2);
}

module.exports = {
    objectify
}
