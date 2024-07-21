"use client"
import axios from "axios";
import { useState } from 'react';

const urlRegisterPresence = 'http://localhost:3030/clientes/aulas/presenca';

export default function RegistrarPresenca() {
    
    const [nomeCliente, setNomeCliente] = useState('');
    const [aulaId, setAulaId] = useState('');
    const [dataPresenca, setDataPresenca] = useState('');
    const [presenca, setPresenca] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(urlRegisterPresence, {
                nomeCliente: nomeCliente,
                aulaId: aulaId,
                dataPresenca: dataPresenca,
                presenca: presenca
            });
            console.log(response.data);
            setNomeCliente('');
            setAulaId('');
            setDataPresenca('');
            setPresenca('');
        } catch (error) {
            console.error('Erro ao registrar presença:', error);
        }
    }
    

    return (
        <>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
                </div>
            </header>
            <div className='flex items-center justify-center min-h-screen'>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:max-w-2xl">
                    <h1 className='text-center text-black font-bold text-2xl pb-8'>Registrar Presença na Aula</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="nomeCliente">Nome do cliente:</label>
                                <input
                                    type="text"
                                    id="nomeCliente"
                                    value={nomeCliente}
                                    onChange={(event) => setNomeCliente(event.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="aulaId">Id da aula:</label>
                                <select
                                    id="aulaId"
                                    value={aulaId}
                                    onChange={(event) => setAulaId(event.target.value)}
                                    required>
                                    <option value="">Selecione uma aula</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="dataPresenca">Data da presença:</label>
                                <input
                                    type="date"
                                    id="dataPresenca"
                                    value={dataPresenca}
                                    onChange={(event) => setDataPresenca(event.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="presenca">Presença:</label>
                                <select
                                    id="presenca"
                                    value={presenca}
                                    onChange={(event) => setPresenca(event.target.value)}
                                    required>
                                    <option value="">Selecione uma opção</option>
                                    <option value="presente">Presente</option>
                                    <option value="ausente">Ausente</option>
                                </select>
                            </div>
                            <button type="submit" className='col-span-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2  rounded-md '>Registrar presença</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}