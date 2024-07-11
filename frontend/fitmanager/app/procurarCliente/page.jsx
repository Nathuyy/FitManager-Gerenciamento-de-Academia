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
             <header class="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
                <h1 class="text-2xl font-bold">FitManager</h1>
            </div>
            <nav>
                <ul class="flex space-x-4">
                <li><a href="/home" className="text-white hover:text-gray-400">Home</a></li>
                <li><a href="/clientes" class="text-white hover:text-gray-400">Clientes</a></li>
                    <li><a href="/novoCliente" class="text-white hover:text-gray-400">Novo Cliente</a></li>
                    <li><a href="/procurarCliente" class="text-white hover:text-gray-400">Procurar Clientes</a></li>
                    <li><a href="/atualizarCliente" class="text-white hover:text-gray-400">Atualizar Clientes</a></li>
                </ul>
            </nav>
        </header>

            
            <h1>Buscar Cliente</h1>
            <input
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Nome do Cliente"
            />
            <button onClick={handleSearch}>Procurar</button>
            <ul>
                {dataCliente && dataCliente.map((client) => (
                    <li key={client.id}>
                        <p>Nome: {client.nomeCliente}</p>
                        <p>Sobrenome: {client.sobrenomeCliente}</p>
                        <p>Email: {client.emailCliente}</p>
                        <p>Telefone: {client.telefoneCliente}</p>
                        <p>Endereço: {client.enderecoCliente}</p>
                        <p>Plano: {client.plano_id}</p>
                    </li>
                ))}
            </ul>
            </div>
    );
}
