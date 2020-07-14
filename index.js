const fs = require('fs');

async function file(name, data = '') {
    if (!fs.existsSync(name)) {
        fs.writeFileSync(name, data, 'utf-8');
    }
}

async function dir(name) {
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }
}

module.exports = {
    file,
    dir
};