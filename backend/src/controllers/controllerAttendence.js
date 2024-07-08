const modelsAttendance = require('../models/modelsAttendence');
const clientModel = require('../models/modelsClient');

const registerAttendanceClient = async (req, res) => {
    try {
        const { nomeCliente, aulaId, dataPresenca, presenca } = req.body;

        const clientResult = await clientModel.getClientByName(nomeCliente);

        if (clientResult.length === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
        }

        const clientId = clientResult[0].id;

        // Chame a função convertendo a data corretamente
        await modelsAttendance.registerAttendanceClient({
            cliente_id: clientId,
            aula_id: aulaId,
            data_presenca: dataPresenca, // Não precisa mais converter aqui
            presenca: presenca
        });

        res.status(200).json({ message: 'Presença registrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao registrar presença:', error);
        res.status(500).json({ error: 'Erro ao registrar presença. Por favor, tente novamente mais tarde.' });
    }
};

module.exports = {
    registerAttendanceClient
};
