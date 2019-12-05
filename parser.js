exports.parser = (text) => {
    if (text.includes("jours")) {
        return `Aujourd'hui nous somme le ${Date()}`;
    } else {
        return `Votre message est le suivant: ${text}`;
    }
};