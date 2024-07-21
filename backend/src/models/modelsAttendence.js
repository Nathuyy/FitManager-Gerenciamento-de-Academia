const connection = require('./connection');

const registerAttendanceClient = async (attendance) => {
    const { cliente_id, aula_id, data_presenca, presenca } = attendance;

 const query = `
        INSERT INTO presenca_aulas (cliente_id, aula_id, data_presenca, presenca) 
        VALUES (?, ?, ?, ?)
    `;

    try {
        await connection.execute(query, [cliente_id, aula_id, data_presenca, presenca]);
    } catch (error) {
        console.error('Erro ao registrar presença:', error);
        throw error;     }
};

const getAttendanceClient = async (cliente_id) => {
    try{
        const [resultAttendence] = await connection.execute('SELECT * FROM presenca_aulas WHERE cliente_id = ?', [cliente_id]);
        console.log(resultAttendence);
        return resultAttendence;
    }catch(error){
        console.error('Erro ao buscar presenças:', error);
        throw error;
    }
}
    

       

module.exports = {
    registerAttendanceClient,
    getAttendanceClient
};
