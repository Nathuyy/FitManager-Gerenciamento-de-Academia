"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './clients.module.css'; 
const urlGetClients = 'http://localhost:3030/clientes';

export default function Clientes() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get(urlGetClients);
                setClients(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []); 

    return (
        <>
            <div className={styles.h1}>
                <h1>Lista de Clientes</h1>
            </div>
            <div className={styles['table-container']}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Data Nascimento</th>
                            <th>Sexo</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Cadastrado em</th>
                            <th>Plano</th>
                            <th>Status</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.nomeCliente}</td>
                                <td>{client.sobrenomeCliente}</td>
                                <td>{client.nascimentoCliente}</td>
                                <td>{client.sexoCliente}</td>
                                <td>{client.emailCliente}</td>
                                <td>{client.telefoneCliente}</td>
                                <td>{client.enderecoCliente}</td>
                                <td>{client.data_cadastro}</td>
                                <td>{client.plano_id}</td>
                                <td>{client.status}</td>
                                <td>{client.observacoes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
