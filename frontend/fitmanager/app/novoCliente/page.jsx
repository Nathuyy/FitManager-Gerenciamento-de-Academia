"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from './novoCliente.module.css';

const urlNewClient = 'http://localhost:3030/novoCliente';

const formatDateForInput = (dateISO) => {
    if (!dateISO) return ''; // Handle case where dateISO is undefined or null

    const date = new Date(dateISO);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};


export default function NovoCliente() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [sobrenomeCliente, setSobrenomeCliente] = useState('');
    const [nascimentoCliente, setNascimentoCliente] = useState('');
    const [sexoCliente, setSexoCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [plano_id, setPlano_id] = useState('');
    const [status, setStatus] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                nomeCliente,
                sobrenomeCliente,
                nascimentoCliente,
                sexoCliente,
                emailCliente,
                telefoneCliente,
                enderecoCliente,
                plano_id,
                status,
                observacoes
            };
            console.log(nascimentoCliente);
            const response = await axios.post(urlNewClient, data);
            console.log(data);
        } catch (error) {
            console.error('Erro ao criar novo cliente:', error); 
            alert('Erro ao criar novo cliente: ' + error.message);
        }
    };

    return (
        <div className={styles['client-form']}>
            <h1>Cadastro de Clientes</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nomeCliente}
                        onChange={(e) => setNomeCliente(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Sobrenome:
                    <input
                        type="text"
                        value={sobrenomeCliente}
                        onChange={(e) => setSobrenomeCliente(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Data de Nascimento:
                    <input
    type="date"
    value={nascimentoCliente}
    onChange={(e) => setNascimentoCliente(e.target.value)}
    required
/>
                </label>
                <label>
                    Sexo:
                    <select
                        value={sexoCliente}
                        onChange={(e) => setSexoCliente(e.target.value)}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={emailCliente}
                        onChange={(e) => setEmailCliente(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Telefone:
                    <input
                        type="tel"
                        value={telefoneCliente}
                        onChange={(e) => setTelefoneCliente(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type="text"
                        value={enderecoCliente}
                        onChange={(e) => setEnderecoCliente(e.target.value)}
                        required
                    />
                </label>
                <label>
                    PlanoID:
                    <select
                        value={plano_id}
                        onChange={(e) => setPlano_id(e.target.value)}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="1">Plano 1</option>
                        <option value="2">Plano 2</option>
                        <option value="3">Plano 3</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </label>
                <label>
                    Observações:
                    <textarea
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                </label>
                <button type="submit">Criar Cliente</button>
            </form>
        </div>
    );
}