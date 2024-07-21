export default function Home() {
    return (
        <>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
                </div>
                
            </header>
            <main className="p-6 flex justify-center">
                <div className="flex space-x-6">
                    <div className="bg-gray-300 p-4 rounded-md shadow-md w-full max-w-md">
                        <h1 className="text-gray-900 text-lg font-bold text-center pb-3">FitManager | Área do Cliente</h1>
                        <div className="text-center">
                            <a href="/client/clientes" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Lista de Clientes</a>
                            <a href="/client/novoCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Novo Cliente</a>
                            <a href="/client/procurarCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Procurar Cliente</a>
                            <a href="/client/atualizarCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Atualizar Clientes</a>
                            <a href="/client/deletarCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Deletar Clientes</a>
                            <a href="/client/registrarPresenca" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Registrar Presença</a>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded-md shadow-md w-full max-w-md">
                        <h1 className="text-gray-900 text-lg font-bold text-center pb-3">FitManager | Área do Funcionário</h1>
                        <div className="text-center">
                            <a href="/funcionarios/funcionarios" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Lista de Funcionários</a>
                            <a href="/funcionarios/novoFuncionario" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Novo Funcionário</a>
                            <a href="/funcionarios/procurarFuncionario" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Procurar Funcionário</a>
                            <a href="/funcionarios/atualizarFuncionario" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Atualizar Funcionários</a>
                            <a href="/funcionarios/deletarFuncionario" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Deletar Funcionários</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
