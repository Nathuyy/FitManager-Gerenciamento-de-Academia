const connection = require('./connection')
const tools = require('../tools/tools')

const getClients = async () => {
    try {
        const [clients] = await connection.execute('SELECT * FROM cliente');
        return clients
    } catch (error) {
        console.error('Erro ao buscar clientes:', error)
        throw error; 
    }
}

const getClientByName = async (clientName) => {

    try {

        const [clientResult] = await connection.execute(
            'SELECT * FROM cliente WHERE nomeCliente = ?',[clientName])
        return clientResult;


    } catch (error) {
        console.error('Erro ao buscar clientes:', error)
        throw error
    }
}

const newClient = async(newClient) => {
    const {
        nomeCliente,
        sobrenomeCliente,
        nascimentoCliente,
        sexoCliente,
        emailCliente,
        telefoneCliente,
        enderecoCliente,
        data_cadastro,
        plano_id,
        status,
        observacoes
    } = newClient;

    const nascimentoISO = tools.convertDateToISO(nascimentoCliente);
    const dataCadastroISO = tools.convertDateToISO(data_cadastro);

    const query = `
        INSERT INTO cliente (
            nomeCliente, sobrenomeCliente, nascimentoCliente, sexoCliente, emailCliente,
            telefoneCliente, enderecoCliente, data_cadastro, plano_id, status, observacoes
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    await connection.execute(query, [
        nomeCliente, sobrenomeCliente, nascimentoISO, sexoCliente, emailCliente,
        telefoneCliente, enderecoCliente, dataCadastroISO, plano_id, status, observacoes
    ])
}



module.exports = { 
    getClients,
    getClientByName,
    newClient
    

}