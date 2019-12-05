exports.day = () => {
    let date = new Date();
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    return `${days[date.getDay() - 1]}`;
};