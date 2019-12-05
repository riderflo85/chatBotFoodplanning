const date = require('./commands/date');
const day = require('./commands/day');
const ip = require('./commands/ip');

exports.parser = (text) => {
    if (text.toLowerCase().includes("jour")) {
        return `Aujourd'hui nous somme le ${day.day()}`;

    } else if (text.toLowerCase().includes("date")) {
        return `Aujourd'hui nous somme le ${date.datenow()}`;

    } else if (text.toLowerCase().includes("ip")) {
        return `L'ip du serveur est: ${ip.checkIp()}`;

    } else {
        return `Votre message est le suivant: ${text}\nVoici la liste des mots reconnus dans une phrase:\n - ... jour...\n - ... date...\n - ... ip...`;
    }
};