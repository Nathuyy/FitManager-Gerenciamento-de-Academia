"use client";
import axios from "axios";
import { useState } from 'react';

const urlUpdateFuncionario = 'http://localhost:3030/atualizarFuncionario/';

export default function AtualizarFuncionario() {
    const [funcionarioId, setFuncionarioId] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [salario, setSalario] = useState('');
    const [data_contratacao, setData_contratacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${urlUpdateFuncionario}${funcionarioId}`, {
                nome,
                cargo,
                salario,
                data_contratacao,
                telefone,
                endereco,
                cidade,
                estado,
                cep,
                data_nascimento,
                sexo,
                email,
                status
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao atualizar funcionário:', error);
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
                    <h1 className='text-center text-black font-bold text-2xl pb-8'>Atualizar Funcionário</h1>
                    <form onSubmit={handleUpdate} className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    ID do funcionário:
                                    <input
                                        type="text"
                                        value={funcionarioId}
                                        onChange={(event) => setFuncionarioId(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Nome:
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Cargo:
                                    <input
                                        type="text"
                                        value={cargo}
                                        onChange={(event) => setCargo(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Salário:
                                    <input
                                        type="text"
                                        value={salario}
                                        onChange={(event) => setSalario(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Data de Contratação:
                                    <input
                                        type="date"
                                        value={data_contratacao}
                                        onChange={(event) => setData_contratacao(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Telefone:
                                    <input
                                        type="tel"
                                        value={telefone}
                                        onChange={(event) => setTelefone(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
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
                                        value={endereco}
                                        onChange={(event) => setEndereco(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Cidade:
                                    <input
                                        type="text"
                                        value={cidade}
                                        onChange={(event) => setCidade(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Estado:
                                    <input
                                        type="text"
                                        value={estado}
                                        onChange={(event) => setEstado(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    CEP:
                                    <input
                                        type="text"
                                        value={cep}
                                        onChange={(event) => setCep(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
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
                                        value={data_nascimento}
                                        onChange={(event) => setData_nascimento(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Sexo:
                                    <select
                                        value={sexo}
                                        onChange={(e) => setSexo(e.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
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
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black text-sm font-semibold'>
                                    Status:
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className='p-1 border border-gray-300 ml-1'
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Ativo">Ativo</option>
                                        <option value="Inativo">Inativo</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md'
                            >
                                Atualizar Funcionário
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
