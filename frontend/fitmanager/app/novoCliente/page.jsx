"use client";

import { useState } from 'react';
import axios from 'axios';

const urlNewClient = 'http://localhost:3030/novoCliente';



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
        <div>
         <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
            </div>
     
        </header>
        <div className='flex items-center justify-center min-h-screen'>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:max-w-2xl">
            <h1 className='text-center text-black font-bold text-2xl pb-8'>Cadastro de Clientes</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col'>
                            <label className='text-black text-sm font-semibold'>
                                Nome:
                                <input
                                    type="text"
                                    value={nomeCliente}
                                    onChange={(e) => setNomeCliente(e.target.value)}
                                    className='p-1 border border-gray-300 ml-1'
                                    required
                                />
                            </label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-black text-sm font-semibold'>
                                Sobrenome:
                                <input
                                    type="text"
                                    value={sobrenomeCliente}
                                    onChange={(e) => setSobrenomeCliente(e.target.value)}
                                    className=' p-1 border border-gray-300 ml-1'
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    Data de Nascimento:
                    <input 
                    type="date"
                    value={nascimentoCliente}
                    onChange={(e) => setNascimentoCliente(e.target.value)} className='p-1 border border-gray-300 ml-1'
                    required
                    />
                </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    Sexo:
                    <select
                        value={sexoCliente}
                        onChange={(e) => setSexoCliente(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </label>
                </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    Email:
                    <input
                        type="email"
                        value={emailCliente}
                        onChange={(e) => setEmailCliente(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    />
                </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    Telefone:
                    <input
                        type="tel"
                        value={telefoneCliente}
                        onChange={(e) => setTelefoneCliente(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    />
                </label>
                </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    Endereço:
                    <input
                        type="text"
                        value={enderecoCliente}
                        onChange={(e) => setEnderecoCliente(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    />
                </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold'>
                    PlanoID:
                    <select
                        value={plano_id}
                        onChange={(e) => setPlano_id(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="1">Plano 1</option>
                        <option value="2">Plano 2</option>
                        <option value="3">Plano 3</option>
                    </select>
                </label>
                </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                <div className="flex flex-col">
                <label className='text-black text-sm font-semibold'>
                    Status:
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </label>
                </div>
                <div className="flex flex-col">
                <label className='text-black text-sm font-semibold'>
                    Observações:
                    <input 
                        type='text'
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)} className="p-2 border border-gray-300 ml-1"
                    />
                </label>
                </div>
                </div>
                <div className='flex flex-col'>
                        <button
                            type="submit"
                            className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md '
                        >
                            Criar Cliente
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>

    );
}