function convertDateToISO(dateStr) {
    // Converte formato dia/mês/ano para ISO8601
    const [day, month, year] = dateStr.split('/')
    return `${year}-${month}-${day}`
}

function convertDateToBrazilianFormat(dateISO) {
    // Converte formato ISO8601 para dia/mês/ano
    return moment(dateISO).format('DD/MM/YYYY')
}

module.exports = {
    convertDateToISO,
    convertDateToBrazilianFormat
}