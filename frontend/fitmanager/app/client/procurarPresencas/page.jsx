"use client"
import axios from "axios";
import { useState } from 'react';

const urlPresenca = 'http://localhost:3030/clientes/presencas';

const convertISOToBrazilianFormat = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export default function ProcurarPresencas() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [presencas, setPresencas] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post(urlPresenca, { nomeCliente });
            if (response.data && Array.isArray(response.data.result)) {
                setPresencas(response.data.result);
            } else {
                setPresencas([]);
                console.error('Response data is not an array:', response.data);
            }
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching presencas:', error);
            setPresencas([]);
        }
    };

    return (
        <>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
                </div>
            </header>

            <div className="bg-gray-200 p-6 justify-center items-center text-center">
                <h1 className="text-lg font-bold text-gray-800 pb-2">Buscar Presenças do Cliente</h1>
                <input
                    className="rounded-md p-1"
                    type="text"
                    value={nomeCliente}
                    onChange={(e) => setNomeCliente(e.target.value)}
                    placeholder="Nome do Cliente"
                />
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md ml-3"
                    onClick={handleSearch}
                >
                    Procurar
                </button>
            </div>
            <div className='w-full mt-8'>
            <table className='w-full border-collapse border border-slate-500'>
                <thead>
                    <tr>
                    <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Id Client</th>
                    <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Id Aula</th>
                    <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Data</th>
                    <th className="text-white p-2 text-left bg-gray-800 border-b border-gray-700">Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {presencas.map((presenca) => (
                        <tr key={presenca.id}>
                            <td className='p-2 border-b border-gray-300'>{presenca.cliente_id}</td>
                            <td className='p-2 border-b border-gray-300'>{presenca.aula_id}</td>
                            <td className='p-2 border-b border-gray-300'>{convertISOToBrazilianFormat(presenca.data_presenca)}</td>
                            <td className='p-2 border-b border-gray-300'>{presenca.presenca}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>

         
        </>
    );
}
