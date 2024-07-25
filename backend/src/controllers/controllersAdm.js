const models = require('../models/modelsAdm');

const newAdm = async (req, res) => {
    const adm = req.body;
    console.log(adm);

    try{
        await models.newAdm(adm);
        res.status(201).json({ message: 'Administrador criado com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar administrador:', error);
        res.status(500).json({ error: 'Erro ao criar administrador.' });
    }
}

const getAdms = async (req, res) => {
    const adm = await models.getAdms();
    res.status(200).json(adm);
}

module.exports = {
    newAdm,
    getAdms
}
