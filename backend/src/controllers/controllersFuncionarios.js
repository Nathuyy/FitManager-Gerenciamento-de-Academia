const models = require('../models/modelsFuncionarios')


const getEmployees = async (req, res) => {
    try{
        const employees = await models.getEmployees()
        res.status(200).json(employees)
    } catch {
        return res.status(500).json({ error: 'Erro ao buscar funcionários. Por favor, tente novamente mais tarde.' });

    }   
}

const newEmployee = async (req, res) => {
    const newEmployee = req.body
    try{
        await models.newEmployee(newEmployee)
        res.status(201).json({ message: 'Funcionário criado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar funcionaário. Por favor, tente novamente mais tarde.' });
    }
}

const getEmployeeByName = async (req, res) => {
    const { employeeName } = req.body
    try{
        const employeeInfos = await models.getEmployeeByName(employeeName)

        if (employeeInfos.length === 0) {
            return res.status(404).json({ message: 'Funcionário não encontrado.' })
        } else {
            return res.status(200).json(employeeInfos)
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar funcionaário. Por favor, tente novamente mais tarde.' });
    }
}

const deleteEmployees = async (req, res) => {
    try {
        const { idFunc } = req.params
        await models.deleteEmployees(idFunc)
        res.status(200).json({ message: 'Funcionário deletado com sucesso!' })
    }catch (error) {
        res.status(500).json({ error: 'Erro ao deletar funcionaário. Por favor, tente novamente mais tarde.' })
    }
}

const updateEmployees = async (req, res) => {
    try{
        const { idFunc } = req.params
        await models.updateEmployees(idFunc, req.body)
        res.status(200).json({ message: 'Funcionário atualizado com sucesso!' })
    }catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar funcionaário. Por favor, tente novamente mais tarde.' })
    }
}


module.exports = {
    getEmployees,
    newEmployee,
    getEmployeeByName,
    deleteEmployees,
    updateEmployees
}