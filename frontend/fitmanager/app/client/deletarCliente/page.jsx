"use client";
import axios from 'axios';
import { useState } from 'react';

const urlDeleteClient = 'http://localhost:3030/deletarCliente/';

export default function DeletarCliente({ cliente }) {
    const [idCliente, setIdCliente] = useState(cliente?.id || '');
    const [deletar, setDeletar] = useState(false);

    const handleDelete = async (event) => {
        event.preventDefault();

        
        try {
            const response = await axios.delete(`${urlDeleteClient}${idCliente}`);
            setDeletar(true);
            console.log('Cliente deletado com sucesso:', response.data);

        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

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
                    ID do cliente:
                    <input
                        type="text"
                        value={idCliente}
                        onChange={(event) => setIdCliente(event.target.value)}
                        className='border border-gray-300 rounded-md p-1 ml-2'
                    />
                </label>
                <button type="submit" className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md ml-3'>Deletar</button>
            </form>
            {deletar && <p>Cliente deletado com sucesso!</p>}
            </div>

        </div>
    );
}
