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
            <div className='text-center'>
                <h1 className='text-black text-3xl p-0 m-0 font-bold mt-6'>Lista de Clientes</h1>
            </div>
            <div className='w-full mt-10'>
                <table className='w-full border-collapse border border-slate-500'>
                    <thead>
                        <tr>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Id</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Nome</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Sobrenome</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Data Nascimento</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Sexo</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Email</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Telefone</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Endereço</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Cadastrado em</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Plano</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Status</th>
                            <th className='p-2 text-left bg-gray-500 border-b border-gray-700'>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id} className='even:bg-gray-400 even:text-zinc-900 even:font-semibold hover:bg-gray-500 '>
                                <td className='p-2 border-b border-gray-500'>{client.id}</td>
                                <td className='p-2 border-b border-gray-500'>{client.nomeCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.sobrenomeCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.nascimentoCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.sexoCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.emailCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.telefoneCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.enderecoCliente}</td>
                                <td className='p-2 border-b border-gray-500'>{client.data_cadastro}</td>
                                <td className='p-2 border-b border-gray-500'>{client.plano_id}</td>
                                <td className='p-2 border-b border-gray-500'>{client.status}</td>
                                <td className='p-2 border-b border-gray-500'>{client.observacoes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
