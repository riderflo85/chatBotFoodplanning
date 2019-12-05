const date = require('./commands/date');
const day = require('./commands/day');
const ip = require('./commands/ip');

exports.parser = (text) => {
    if (text.toLowerCase().includes("jour")) {
        return `Aujourd'hui nous somme ${day.day()}`;

    } else if (text.toLowerCase().includes("date")) {
        return `Aujourd'hui nous somme le ${date.datenow()}`;

    } else if (text.toLowerCase().includes("ip")) {
        const onSuccess = body => {
            return `L'ip du serveur est: ${body}`;
        }
        const onFailure = err => {
            return `Impossible de trouver l'ip du serveur\n${err}`;
        }
        const myRequest = ip.checkIp();
        myRequest.then(onSuccess).catch(onFailure);

    } else {
        return `Votre message est le suivant: ${text}\nVoici la liste des mots reconnus dans une phrase:\n - ... jour...\n - ... date...\n - ... ip...`;
    }
};