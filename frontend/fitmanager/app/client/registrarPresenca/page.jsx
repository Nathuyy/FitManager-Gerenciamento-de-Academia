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
            <form onSubmit={handleSubmit}>
                <label htmlFor="nomeCliente">Nome do cliente:</label>
                <input
                    type="text"
                    id="nomeCliente"
                    value={nomeCliente}
                    onChange={(event) => setNomeCliente(event.target.value)}
                />
                <br />
                <label htmlFor="aulaId">Id da aula:</label>
                <input
                    type="text"
                    id="aulaId"
                    value={aulaId}
                    onChange={(event) => setAulaId(event.target.value)}
                />
                <br />
                <label htmlFor="dataPresenca">Data da presença:</label>
                <input
                    type="date"
                    id="dataPresenca"
                    value={dataPresenca}
                    onChange={(event) => setDataPresenca(event.target.value)}
                />
                <br />
                <label htmlFor="presenca">Presença:</label>
                <input
                    type="text"
                    id="presenca"
                    value={presenca}
                    onChange={(event) => setPresenca(event.target.value)}
                />
                <br />
                <button type="submit">Registrar presença</button>
            </form>
        </>
    );
}
