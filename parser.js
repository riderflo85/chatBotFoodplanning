exports.parser = (text) => {
    if (text.includes("jour")) {

        let date = new Date();
        let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

        return `Aujourd'hui nous somme le ${days[date.getDay() - 1]} ${date.getDate()}`;

    } else {

        return `Votre message est le suivant: ${text}\nVoici la liste de commande:\n - ... jour...\n - ... date...`;

    }
};