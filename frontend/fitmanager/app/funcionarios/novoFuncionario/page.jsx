"use client";
import axios from "axios";
import { useState } from 'react';

const urlNewEmployee = 'http://localhost:3030/novoFuncionario';

export default function NovoFuncionario() {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const data = {
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
            };
            const response = await axios.post(urlNewEmployee, data);
            console.log(response.data);

        } catch (error) {
            console.error('Erro ao criar novo funcionário:', error);
            alert('Erro ao criar novo funcionário: ');
        };
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
            <h1 className='text-center text-black font-bold text-2xl pb-8'>Cadastro de Funcionário</h1>
            <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Nome Completo:
                        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Cargo:
                        <input type="text" value={cargo} onChange={(event) => setCargo(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Salário:
                        <input type="text" value={salario} onChange={(event) => setSalario(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Data de Contratação:
                        <input type="text" value={data_contratacao} onChange={(event) => setData_contratacao(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Telefone:
                        <input type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Endereço:
                        <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Cidade:
                        <input type="text" value={cidade} onChange={(event) => setCidade(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Estado:
                        <input type="text" value={estado} onChange={(event) => setEstado(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'> 
                <label className='text-black text-sm font-semibold mb-3'>
                CEP:
                        <input type="text" value={cep} onChange={(event) => setCep(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Data de Nascimento: 
                        <input type="text" value={data_nascimento} onChange={(event) => setData_nascimento(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Sexo:
                    <select
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)} className='p-1 border border-gray-300 ml-1'
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </label>
                </div>
                <div className='flex flex-col'>
                <label className='text-black text-sm font-semibold mb-3'>
                Email:
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className='p-1 border border-gray-300 ml-1' required/>
                    </label>
                </div>
            </div>
            <label className='text-black text-sm font-semibold mb-3'>
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

                <div className='flex flex-col'>
                        <button
                            type="submit"
                            className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-3 '
                        >
                            Criar Funcionário
                        </button>
                    </div>
            </form>
        </div>
        </div>

        
        </>
    )
}
