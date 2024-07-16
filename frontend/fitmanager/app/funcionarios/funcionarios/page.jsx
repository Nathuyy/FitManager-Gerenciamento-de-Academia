"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const UrlGetEmployees = 'http://localhost:3030/funcionarios';

export default function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {    
        const fetchFuncionarios = async () => {
            try {
                const response = await axios.get(UrlGetEmployees);
                setFuncionarios(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching funcionarios:', error);
            }
        };
        fetchFuncionarios();

    }, []); 

    return (
        <>
         <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
            </div>
        </header>
        <div className='w-full mt-8'>
            <table className='w-full border-collapse border border-slate-500'>
                <thead>
                    <tr>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Id</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Nome</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Cargo</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Salário</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Contratação</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Nascimento</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Telefone</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Sexo</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Endereço</th>
                        <th className='text-white p-2 text-left bg-gray-800 border-b border-gray-700'>Status</th>
                    </tr>  
                    </thead>

                    <tbody>
                        {funcionarios.map((funcionarios) => (
                            <tr key={funcionarios.id} className='even:bg-gray-300 even:text-zinc-900 even:font-semibold hover:bg-gray-400 '>

                                <td className='p-2 border-b border-gray-300'>{funcionarios.id}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.nome}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.cargo}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.salario}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.data_contratacao}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.data_nascimento}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.telefone}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.sexo}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.endereco}</td>
                                <td className='p-2 border-b border-gray-300'>{funcionarios.status}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
        </div>   
        </> 
     )

}


