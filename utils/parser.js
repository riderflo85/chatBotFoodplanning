const date = require('../commands/date');
const day = require('../commands/day');
const ip = require('../commands/ip');


const days = {
    "lundi": "monday",
    "mardi": "tuesday",
    "mercredi": "wednesday",
    "jeudi": "thursday",
    "vendredi": "friday",
    "samedi": "saturday",
    "dimanche": "sunday",
};
const moment_day = {
    "midi": "am",
    "soir": "pm"
};


// Sans indiquer le jour de la semiane
const regexp1 = /^(.)*(mange)(.)+(ce|se)\s(midi|soir)/ig;
// Détermine si la demande concerne le midi ou le soir
const regexp2 = /(midi|soir)/ig;
// Avec indiquation du jour de la semaine
const regexp3 = /^(.)*(mange)(.)+(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\s(midi|soir)/ig;
// Détermine le jour de la semaine
const regexp4 = /(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)/ig;


exports.parser = (text) => {
    if (text.toLowerCase().includes("jour")) {
        return `Aujourd'hui nous somme ${day.day()}`;

    } else if (text.toLowerCase().includes("date")) {
        return `Aujourd'hui nous somme le ${date.datenow()}`;

    } else if (text.toLowerCase().includes("ip")) {
        const myRequest = ip.checkIp();
        return myRequest;

    }  else if (regexp1.test(text)) {
        let today = days[day.day().toLowerCase()]; // Détermine le jour de la requete
        let moment = moment_day[text.match(regexp2)[0]];
        return `La requete est pour aujourd'hui (en: ${today}) et pour le (en: ${moment})`;

    } else if (regexp3.test(text)) {
        let response;
        let day = days[text.match(regexp4)[0]];
        let moment = moment_day[text.match(regexp2)[0]];
        // for (i in days) { // i == 'lundi'...
        //     if (text.toLowerCase().includes(i)) {
        //         console.log("Good");
        //         console.log(days[i]); // days[i] == days['lundi']
        //         day = days[i];
        //         // faire la requete à l'api avec le bon jour (days[i])
        //         // response = réponse de la requete à l'api
        //     }
        // }
        // return response;
        return `La requete est pour le jour: (en) ${day} et pour le moment de la journée: (en) ${moment}`;

    } else {
        return `Votre message est le suivant: ${text}\nVoici la liste des mots reconnus dans une phrase:\n - ... jour...\n - ... date...\n - ... ip...`;
    }
};