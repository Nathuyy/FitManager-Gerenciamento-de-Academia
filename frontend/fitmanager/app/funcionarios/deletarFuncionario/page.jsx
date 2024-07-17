"use client";
import axios from 'axios';
import { useState } from 'react';

const urlDeleteEmployee = 'http://localhost:3030/deletarFuncionario/';

export default function DeletarFuncionario({funcionario}) {
    const [idFuncionario, setIdFuncionario] = useState(funcionario?.id||'');
    const [deletar, setDeletar] = useState(false);

    const handleDelete = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.delete(`${urlDeleteEmployee}${idFuncionario}`);
            setDeletar(true);
            console.log('Funcionário deletado com sucesso:', response.data);
            alert('Funcionário deletado com sucesso!');
        } catch(error) {
            console.error('Erro ao deletar funcionário:', error);
        }
    }
    return (
        <div>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
            </div>
     
            </header>
            <div className="bg-gray-200 p-6 justify-center items-center text-center">
            <form onSubmit={handleDelete}>
                <label className='font-bold'>
                    ID do funcionário:
                    <input
                        type="text"
                        value={idFuncionario}
                        onChange={(event) => setIdFuncionario(event.target.value)}
                        className='border border-gray-300 rounded-md p-1 ml-2'
                    />
                </label>
                <button type="submit" className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md ml-3'>Deletar</button>
            </form>
            {deletar && <p>Funcionário deletado com sucesso!</p>}
            </div>

        </div>
    );
}
