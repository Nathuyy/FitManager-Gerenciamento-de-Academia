const moment = require('moment');

const convertDateToISO = (dateString) => {
    if (!dateString) return null;

    const [day, month, year] = dateString.split('/'); // Assuming dateString is in DD/MM/YYYY format
    return `${year}-${month}-${day}`;
};


function convertDateToBrazilianFormat(dateISO) {
    // Converte formato ISO8601 para dia/mês/ano
    return moment(dateISO).format('DD/MM/YYYY');
}

module.exports = {
    convertDateToISO,
    convertDateToBrazilianFormat
};
