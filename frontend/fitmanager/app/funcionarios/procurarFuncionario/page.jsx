"use client";
import axios from "axios";
import { useState } from 'react';

const urlGetEmployeeName = 'http://localhost:3030/funcionario/nome';

export default function ProcurarFuncionario(){
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [dataFuncionario, setDataFuncionario] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.post(urlGetEmployeeName, { employeeName: nomeFuncionario });
            setDataFuncionario(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar funcionário:', error);
            setDataFuncionario(null);
            alert('Erro ao buscar funcionário');
        }
    }

    return (
        <>
        <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
            </div>
        </header>
        <div className="bg-gray-200 p-6 justify-center items-center text-center">
            <h1 className="text-lg font-bold text-gray-800 pb-2">Buscar Funcionário</h1>
            <input className="rounded-md p-1"
                type="text"
                value={nomeFuncionario}
                onChange={(e) => setNomeFuncionario(e.target.value)}
                placeholder="Nome do Funcionário"
            />
            <button className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md ml-3' onClick={handleSearch}>
                Procurar
            </button>
        </div>

        <ul className="p-6 flex flex-col items-center space-y-4">
            {dataFuncionario && dataFuncionario.map((funcionario) => (
                <li key={funcionario.id} className="text-lg font-bold text-gray-800 pb-2">
                    <p className="font-bold">Id: <span className="font-normal">{funcionario.id}</span></p>
                    <p className="font-bold">Nome: <span className="font-normal">{funcionario.nome}</span></p>
                    <p className="font-bold">Cargo: <span className="font-normal">{funcionario.cargo}</span></p>
                    <p className="font-bold">Salário: <span className="font-normal">{funcionario.salario}</span></p> 
                    <p className="font-bold">Data de Admissão: <span className="font-normal">{funcionario.data_contratacao}</span></p> 
                    <p className="font-bold">Telefone: <span className="font-normal">{funcionario.telefone}</span></p>  
                    <p className="font-bold">Endereço: <span className="font-normal">{funcionario.endereco}</span></p>
                    <p className="font-bold">Cidade: <span className="font-normal">{funcionario.cidade}</span></p>
                    <p className="font-bold">Estado: <span className="font-normal">{funcionario.estado}</span></p>
                    <p className="font-bold">CEP: <span className="font-normal">{funcionario.cep}</span></p>
                    <p className="font-bold">Sexo: <span className="font-normal">{funcionario.sexo}</span></p>
                    <p className="font-bold">Data de Nascimento: <span className="font-normal">{funcionario.data_nascimento}</span></p>
                    <p className="font-bold">Email: <span className="font-normal">{funcionario.email}</span></p>
                </li>
            ))}
        </ul>
        </>
    );
}
