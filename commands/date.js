exports.datenow = () => {
    let date = new Date();
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    return `${days[date.getDay() - 1]} ${date.getDate()} ${month[date.getMonth()]}`;
};