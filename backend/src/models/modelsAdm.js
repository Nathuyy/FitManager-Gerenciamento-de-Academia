const connection = require('./connection');
const bcrypt = require('bcrypt');



const newAdm = async (adm) => {
    const { nome, senha } = adm;

    const saltRounds = 10;


    try{

        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        const query = 'INSERT INTO administradores (nome, senha) VALUES (?, ?)';

        await connection.execute(query, [nome, hashedPassword]);
    }catch(error){
        console.log(error);
        throw error;
    }
    
}

const getAdms = async () => {
    const query = 'SELECT * FROM administradores';
    const [result] = await connection.execute(query);
    return result;
}
 




module.exports = {
    newAdm,
    getAdms
};