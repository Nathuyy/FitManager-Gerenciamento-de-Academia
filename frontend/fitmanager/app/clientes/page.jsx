"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
const urlGetClients = 'http://localhost:3030/clientes';

export default function Clientes() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get(urlGetClients);
                setClients(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []); 

    return (
        <>
        <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
            </div>
     
        </header>
            <div className='text-center'>
            </div>
            <div className='w-full mt-8'>
                <table className='w-full border-collapse border border-slate-500'>
                    <thead>
                        <tr>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Id</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Nome</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Sobrenome</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Data Nascimento</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Sexo</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Email</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Telefone</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Endereço</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Cadastrado em</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Plano</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Status</th>
                            <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id} className='even:bg-gray-300 even:text-zinc-900 even:font-semibold hover:bg-gray-400 '>
                                <td className='p-2 border-b border-gray-300'>{client.id}</td>
                                <td className='p-2 border-b border-gray-300'>{client.nomeCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.sobrenomeCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.nascimentoCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.sexoCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.emailCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.telefoneCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.enderecoCliente}</td>
                                <td className='p-2 border-b border-gray-300'>{client.data_cadastro}</td>
                                <td className='p-2 border-b border-gray-300'>{client.plano_id}</td>
                                <td className='p-2 border-b border-gray-300'>{client.status}</td>
                                <td className='p-2 border-b border-gray-300'>{client.observacoes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
