exports.parser = (text) => {
    let date = new Date();
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    if (text.includes("jour")) {
        return `Aujourd'hui nous somme le ${days[date.getDay() - 1]}`;

    } else if (text.includes("date")) {
        return `Aujourd'hui nous somme le ${days[date.getDay() - 1]} ${date.getDate()} ${month[date.getMonth()]}`;

    } else {
        return `Votre message est le suivant: ${text}\nVoici la liste des mots reconnus dans une phrase:\n - ... jour...\n - ... date...`;
    }
};