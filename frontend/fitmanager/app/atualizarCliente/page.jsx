"use client";
import axios from "axios";
import { useState } from 'react';

const urlUpdateCliente = 'http://localhost:3030/atualizarCliente/';

export default function AtualizarCliente() {
    const [clientId, setClientId] = useState('');
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

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${urlUpdateCliente}${clientId}`, {
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
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label>
                    ID do cliente:
                    <input
                        type="text"
                        value={clientId}
                        onChange={(event) => setClientId(event.target.value)}
                    />
                </label>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nomeCliente}
                        onChange={(event) => setNomeCliente(event.target.value)}
                    />
                </label>
                <label>
                    Sobrenome:
                    <input
                        type="text"
                        value={sobrenomeCliente}
                        onChange={(event) => setSobrenomeCliente(event.target.value)}
                    />
                </label>
                <label>
                    Nascimento:
                    <input
                        type="text"
                        value={nascimentoCliente}
                        onChange={(event) => setNascimentoCliente(event.target.value)}
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
                        type="text"
                        value={emailCliente}
                        onChange={(event) => setEmailCliente(event.target.value)}
                    />
                </label>
                <label>
                    Telefone:
                    <input
                        type="text"
                        value={telefoneCliente}
                        onChange={(event) => setTelefoneCliente(event.target.value)}
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type="text"
                        value={enderecoCliente}
                        onChange={(event) => setEnderecoCliente(event.target.value)}
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
                    <input
                        type="text"
                        value={observacoes}
                        onChange={(event) => setObservacoes(event.target.value)}
                    />
                </label>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}
