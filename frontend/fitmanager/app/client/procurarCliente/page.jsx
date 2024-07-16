"use client"
import axios from "axios";
import { useState } from 'react';

const urlGetClientName = 'http://localhost:3030/cliente/nome';

export default function ProcurarCliente() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [dataCliente, setDataCliente] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.post(urlGetClientName, { clientName: nomeCliente });
            setDataCliente(response.data);
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            setDataCliente(null);
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
        <h1 className="text-lg font-bold text-gray-800 pb-2">Buscar Cliente</h1>
            <input className="rounded-md p-1"
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Nome do Cliente"
            />
            
            <button className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md ml-3' onClick={handleSearch}>
                Procurar
            </button>
            </div>

            <ul className=" p-6 flex flex-col items-center space-y-4">
    {dataCliente && dataCliente.map((client) => (
        <li key={client.id} className="bg-gray-100 p-4 rounded-md shadow-md w-full max-w-md">
            <p className="font-bold">Id: <span className="font-normal">{client.id}</span></p>
            <p className="font-bold">Nome: <span className="font-normal">{client.nomeCliente}</span></p>
            <p className="font-bold">Sobrenome: <span className="font-normal">{client.sobrenomeCliente}</span></p>
            <p className="font-bold">Email: <span className="font-normal">{client.emailCliente}</span></p>
            <p className="font-bold">Telefone: <span className="font-normal">{client.telefoneCliente}</span></p>
            <p className="font-bold">Endereço: <span className="font-normal">{client.enderecoCliente}</span></p>
            <p className="font-bold">Plano: <span className="font-normal">{client.plano_id}</span></p>
        </li>
    ))}
</ul>

            </div>
    );
}
