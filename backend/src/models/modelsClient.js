const connection = require('./connection')
const tools = require('../tools/tools')

const getClients = async () => {
    try {
        const [clients] = await connection.execute('SELECT * FROM cliente')
        return clients.map(client => ({
            ...client,
            nascimentoCliente: tools.convertDateToBrazilianFormat(client.nascimentoCliente),
            data_cadastro: tools.convertDateToBrazilianFormat(client.data_cadastro)
        }))
    } catch (error) {
        console.error('Erro ao buscar clientes:', error)
        throw error; 
    }
}

const getClientByName = async (clientName) => {
    try {
        const [clientResult] = await connection.execute('SELECT * FROM cliente WHERE nomeCliente = ?', [clientName])
        return clientResult.map(client => ({
            ...client,
            data_cadastro: tools.convertDateToBrazilianFormat(client.data_cadastro)
        }))
    } catch (error) {
        console.error('Erro ao buscar clientes:', error)
        throw error

    }
}

const newClient = async (newClient) => {
    const {
        nomeCliente,
        sobrenomeCliente,
        nascimentoCliente,
        sexoCliente,
        emailCliente,
        telefoneCliente,
        enderecoCliente,
        plano_id,
        status,
        observacoes
    } = newClient

    const nascimentoISO = tools.convertDateToISO(nascimentoCliente);
    const currentDate = new Date() // Current date and time in UTC format

    const query = `
        INSERT INTO cliente (
            nomeCliente, sobrenomeCliente, nascimentoCliente, sexoCliente, emailCliente,
            telefoneCliente, enderecoCliente, data_cadastro, plano_id, status, observacoes
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
        await connection.execute(query, [
            nomeCliente, sobrenomeCliente, nascimentoISO, sexoCliente, emailCliente,
            telefoneCliente, enderecoCliente, currentDate, plano_id, status, observacoes
        ])
    } catch (error) {
        console.error('Erro ao criar novo cliente:', error)
        throw error
    }
}

const updateClient = async (clientId, updatedClient) => {
    const {
        nomeCliente,
        sobrenomeCliente,
        nascimentoCliente,
        sexoCliente,
        emailCliente,
        telefoneCliente,
        enderecoCliente,
        plano_id,
        status,
        observacoes
    } = updatedClient

    const nascimentoISO = tools.convertDateToISO(nascimentoCliente)

    const query = `
        UPDATE cliente 
        SET nomeCliente = ?, sobrenomeCliente = ?, nascimentoCliente = ?, sexoCliente = ?, emailCliente = ?, telefoneCliente = ?, enderecoCliente = ?, plano_id = ?, status = ?, observacoes = ?
        WHERE id = ?`

    const [result] = await connection.execute(query, [
        nomeCliente,
        sobrenomeCliente,
        nascimentoISO,
        sexoCliente,
        emailCliente,
        telefoneCliente,
        enderecoCliente,
        plano_id,
        status,
        observacoes,
        clientId 
    ])
    return result
}

const deleteClient = async (clientId) => {
    const query = 'DELETE FROM cliente WHERE id = ?'
    const [result] = await connection.execute(query, [clientId])
    return result
}











module.exports = { 
    getClients,
    getClientByName,
    newClient,
    updateClient,
    deleteClient
}