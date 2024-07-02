const models = require('../models/modelsClient')

const getClients = async (req, res) => {
    const clients = await models.getClients()
    res.status(200).json(clients)
} 

const getClientByName = async (req, res) => {
    const { clientName } = req.body;

    try {
        const clientInfos = await models.getClientByName(clientName);

        if (clientInfos.length === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
        } else {
            return res.status(200).json(clientInfos);
        }
    } catch (error) {
        console.error("Erro ao buscar cliente por nome: ", error);
        return res.status(500).json({ error: 'Erro ao buscar cliente por nome. Por favor, tente novamente mais tarde.' });
    }
};

const newClient = async (req, res) => {
    const newClient = req.body

    try{

        await models.newClient(newClient)
        res.status(201).json({ message: 'Cliente criado com sucesso!' })

        } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ error: 'Erro ao criar cliente. Por favor, tente novamente mais tarde.' });
    }
}

const updateClient = async (req, res) => {

    try{
        const { clientId } = req.params
        await models.updateClient(clientId, req.body)
        res.status(200).json({ message: 'Cliente atualizado com sucesso!' })

    }catch(error){
        console.error('Erro ao atualizar cliente:', error)
}
}

const deleteClient = async (req, res) => {

    try{
        const { clientId } = req.params
        await models.deleteClient(clientId)
        res.status(200).json({ message: 'Cliente deletado com sucesso!' })

    }catch(error){
        console.error('Erro ao deletar cliente:', error);
}
}



module.exports = {
    getClients,
    getClientByName,
    newClient,
    updateClient,
    deleteClient
}