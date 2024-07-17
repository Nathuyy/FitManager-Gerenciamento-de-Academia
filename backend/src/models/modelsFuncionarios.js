const connection = require('./connection');
const tools = require('../tools/tools');

const getEmployees = async () => {
    try {
        const [employees] = await connection.execute('SELECT * FROM funcionarios')
        return employees.map(employee => ({
            ...employee,
            data_cadastro: tools.convertDateToBrazilianFormat(employee.data_cadastro),
            data_nascimento: tools.convertDateToBrazilianFormat(employee.data_nascimento),
            data_contratacao: tools.convertDateToBrazilianFormat(employee.data_contratacao)
        }))
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error)
        throw error; 
    }
}

const newEmployee = async (newEmployee) => {
    try {
        const {
            nome,
            cargo,
            salario,
            data_contratacao,
            telefone,
            endereco,
            cidade,
            estado,
            cep,
            data_nascimento,
            sexo,
            email,
            status
        } = newEmployee

        const data_contratacaoISO = tools.convertDateToISO(data_contratacao)
        const data_nascimentoISO = tools.convertDateToISO(data_nascimento)

        const query = `INSERT INTO funcionarios (
            nome, cargo, salario, data_contratacao, telefone,
            endereco, cidade, estado, cep, data_nascimento,
            sexo, email, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await connection.execute(query, [
            nome,
            cargo,
            salario,
            data_contratacaoISO,
            telefone,
            endereco,
            cidade,
            estado,
            cep,
            data_nascimentoISO,
            sexo,
            email,
            status
        ])

        console.log('Novo funcionário criado com sucesso')
    } catch (error) {
        console.error('Erro ao criar novo funcionário:', error)
    }
}

const getEmployeeByName = async (employeeName) => {
    try {
        const [employeeResult] = await connection.execute('SELECT * FROM funcionarios WHERE nome = ?', [employeeName])
        console.log(employeeResult);

        return employeeResult.map(employee => ({
            ...employee,
            data_cadastro: tools.convertDateToBrazilianFormat(employee.data_cadastro),
            data_nascimento: tools.convertDateToBrazilianFormat(employee.data_nascimento),
            data_contratacao: tools.convertDateToBrazilianFormat(employee.data_contratacao)
        }))
    } catch (error) {
        console.error('Erro ao buscar funcionário:', error)
        throw error
    }
}

const deleteEmployees = async (idFunc) => {
    try {
        const deletedEmployee = await connection.execute('DELETE FROM funcionarios WHERE id = ?', [idFunc])
        return deletedEmployee
    } catch (error) {
        console.error('Erro ao deletar funcionário:', error)
        throw error
    }
}

const updateEmployees = async (idFunc, updatedEmployee) => {
    try{
        const {
            nome,
            cargo,
            salario,
            data_contratacao,
            telefone,
            endereco,
            cidade,
            estado,
            cep,
            data_nascimento,
            sexo,
            email,
            status
        } = updatedEmployee



        const query = 'UPDATE funcionarios SET nome = ?, cargo = ?, salario = ?, data_contratacao = ?, telefone = ?, endereco = ?, cidade = ?, estado = ?, cep = ?, data_nascimento = ?, sexo = ?, email = ?, status = ? WHERE id = ?'

        const [result] = await connection.execute(query, [
            nome,
            cargo,
            salario,
            data_contratacao,
            telefone,
            endereco,
            cidade,
            estado,
            cep,
            data_nascimento,
            sexo,
            email,
            status,
            idFunc
        ])
        return result
    } catch (error) {
        console.error('Erro ao atualizar funcionário:', error)
    }
}

module.exports = {
    getEmployees,
    newEmployee,
    getEmployeeByName,
    deleteEmployees,
    updateEmployees
}
