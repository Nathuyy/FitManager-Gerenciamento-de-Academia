use fitmanager;


----------DDL----------
show tables;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeCliente VARCHAR(45) NOT NULL,
    sobrenomeCliente VARCHAR(45) NOT NULL,
    nascimentoCliente DATE NOT NULL,
    sexoCliente ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    emailCliente VARCHAR(45) NOT NULL,
    telefoneCliente VARCHAR(45) NOT NULL,
    enderecoCliente VARCHAR(45) NOT NULL,
    data_cadastro DATE NOT NULL,
    plano_id INT,
    status ENUM('Ativo', 'Inativo') NOT NULL DEFAULT 'Ativo',
    observacoes TEXT,
    FOREIGN KEY (plano_id) REFERENCES plano(id)
);

CREATE TABLE plano (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomePlano VARCHAR(45) NOT NULL,
    valorPlano DECIMAL(10, 2) NOT NULL,
    duracaoMeses INT NOT NULL
);

CREATE TABLE aparelhos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeAparelho VARCHAR(60) NOT NULL,
    tipoAparelho VARCHAR(60) NOT NULL,
    marcaAparelho VARCHAR(60) NOT NULL,
    modeloAparelho VARCHAR(60) NOT NULL,
    data_aquisicao DATE,
    ultima_manutencao DATE NOT NULL,
    proxima_manutencao DATE NOT NULL,
    frequencia_manutencao INT NOT NULL,
    status ENUM('Disponível', 'Em Manutenção', 'Indisponível') DEFAULT 'Disponível'
);

CREATE TABLE manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aparelho_id INT,
    data_manutencao DATE NOT NULL,
    descricao TEXT,
    custo DECIMAL(10, 2),
    FOREIGN KEY (aparelho_id) REFERENCES aparelhos(id)
);

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100),
    salario DECIMAL(10, 2),
    data_contratacao DATE,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    cidade VARCHAR(100),
    estado VARCHAR(50),
    cep VARCHAR(20),
    data_nascimento DATE,
    sexo ENUM('Masculino', 'Feminino', 'Outro'),
    email VARCHAR(255) UNIQUE,
    status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo'
);



CREATE TABLE horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dia_semana ENUM('Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'),
    hora_abertura TIME,
    hora_fechamento TIME
);


CREATE TABLE aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_aula VARCHAR(100) NOT NULL,
    instrutor_id INT,
    horario_id INT,
    sala VARCHAR(100),
    dia_semana ENUM('Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'),
    FOREIGN KEY (instrutor_id) REFERENCES funcionarios(id),
    FOREIGN KEY (horario_id) REFERENCES horarios(id)
);


CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento DATE NOT NULL,
    metodo_pagamento VARCHAR(100),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);


CREATE TABLE presenca_aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    aula_id INT,
    data_presenca DATE NOT NULL,
    presenca ENUM('Presente', 'Ausente'),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (aula_id) REFERENCES aulas(id)
);

CREATE TABLE historico_acessos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_acesso DATETIME NOT NULL,
    tipo_acesso ENUM('Entrada', 'Saída'),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
----------DDL----------

