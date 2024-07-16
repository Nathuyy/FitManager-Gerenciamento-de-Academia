export default function home() {
    return (
        <>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold"><a href="/home">FitManager</a></h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/home" className="text-white hover:text-gray-400">Home</a></li>
                        
                    </ul>
                </nav>
            </header>
            <main className="p-6">
            <div className="bg-gray-300 p-4 rounded-md shadow-md w-full max-w-md">
            <h1 className="text-gray-900 text-lg font-bold text-center pb-3">FitManager | Área do Cliente</h1>
            <div className="text-center">
            <a href="/clientes" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Lista de Clientes</a>
            <a href="/novoCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Novo Cliente</a>
            <a href="/procurarCliente" className="block  text-gray-600 font-bold hover:text-gray-400 py-2">Procurar Clientes</a>
            <a href="/atualizarCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Atualizar Clientes</a>
            <a href="/deletarCliente" className="block text-gray-600 font-bold hover:text-gray-400 py-2">Deletar Clientes</a>
            </div>
            </div>
            </main>


        </>
    );
}
