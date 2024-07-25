-- Active: 1718567955594@@127.0.0.1@3306@fitmanager

USE  fitmanager;


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

CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL
)


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

CREATE TABLE presenca_aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    aula_id INT,
    data_presenca DATE NOT NULL,
    presenca ENUM('Presente', 'Ausente'),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (aula_id) REFERENCES aulas(id)
);


-- Inserir funcionários na tabela funcionarios
INSERT INTO funcionarios (id, nome, cargo, salario, data_contratacao, telefone, endereco, cidade, estado, cep, data_nascimento, sexo, email, status)
VALUES
(1, 'aaa Teste', 'Treinador', 8500.00, NULL, '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', NULL, 'Masculino', 'aaa.aaa@example.com', 'Ativo'),
(2, 'asdasd Teste', 'Treinador', 8500.00, '2024-07-01', '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', NULL, 'Masculino', 'asdasd.aaa@example.com', 'Ativo'),
(3, 'Nathália Cericatto', 'Treinador', 8500.00, '2024-07-01', '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', '2006-02-17', 'Feminino', 'nathalia.aaa@example.com', 'Ativo'),
(4, 'Elaibe Cericatto', 'Treinador', 8500.00, NULL, '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', NULL, 'Feminino', 'Elaibe.aaa@example.com', 'Ativo'),
(5, 'hmm Cericatto', 'Treinador', 8500.00, '2024-07-01', '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', '2006-02-17', 'Feminino', 'hmm.aaa@example.com', 'Ativo'),
(6, 'Gabriel Ceratti Cabral', 'Treinador', 8500.00, '2024-07-01', '+5511999999999', 'Rua das Flores, 123', 'Teste', 'RS', '90000-000', '2003-11-20', 'Masculino', 'gabriel.uau@example.com', 'Ativo');

-- Inserir horários na tabela horarios
INSERT INTO horarios (id, dia_semana, hora_abertura, hora_fechamento)
VALUES
(1, 'Segunda-feira', '08:00:00', '10:00:00'),
(2, 'Segunda-feira', '10:00:00', '12:00:00'),
(3, 'Segunda-feira', '12:00:00', '14:00:00'),
(4, 'Segunda-feira', '14:00:00', '16:00:00'),
(5, 'Segunda-feira', '16:00:00', '18:00:00'),
(6, 'Segunda-feira', '18:00:00', '20:00:00'),
(7, 'Segunda-feira', '20:00:00', '22:00:00'),
(8, 'Segunda-feira', '22:00:00', '00:00:00'),
(9, 'Segunda-feira', '00:00:00', '02:00:00');

-- Inserir aulas na tabela aulas
INSERT INTO aulas (id, nome_aula, instrutor_id, horario_id, sala, dia_semana)
VALUES
(1,'Treino Geral', 1, 1, 'Sala 1', 'Segunda-feira'),
(2,'Treino Geral', 2, 2, 'Sala 2', 'Segunda-feira'),
(3,'Treino Geral', 3, 3, 'Sala 3', 'Segunda-feira'),
(4,'Treino Geral', 4, 4, 'Sala 4', 'Segunda-feira'),
(5,'Treino Geral', 5, 5, 'Sala 5', 'Segunda-feira'),
(6,'Treino Geral', 6, 6, 'Sala 6', 'Segunda-feira');
