const connection = require('./connection');
const tools = require('../tools/tools');

const registerAttendanceClient = async (attendance) => {
    const { cliente_id, aula_id, data_presenca, presenca } = attendance;

    const data_presencaISO = tools.convertDateToISO(data_presenca);

    const query = `
        INSERT INTO presenca_aulas (cliente_id, aula_id, data_presenca, presenca) 
        VALUES (?, ?, ?, ?)
    `;

    try {
        await connection.execute(query, [cliente_id, aula_id, data_presencaISO, presenca]);
    } catch (error) {
        console.error('Erro ao registrar presença:', error);
        throw error;     }
};

module.exports = {
    registerAttendanceClient
};
