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
