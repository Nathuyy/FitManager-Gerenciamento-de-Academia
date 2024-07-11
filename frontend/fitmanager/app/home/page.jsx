export default function home() {
    return (
        <>
            <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">FitManager</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/home" className="text-white hover:text-gray-400">Home</a></li>
                        <li><a href="/clientes" className="text-white hover:text-gray-400">Clientes</a></li>
                        <li><a href="/novoCliente" className="text-white hover:text-gray-400">Novo Cliente</a></li>
                        <li><a href="/procurarCliente" className="text-white hover:text-gray-400">Procurar Clientes</a></li>
                        <li><a href="/atualizarCliente" className="text-white hover:text-gray-400">Atualizar Clientes</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
