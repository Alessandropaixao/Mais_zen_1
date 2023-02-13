--criando banco
CREATE DATABASE mais_zen;
USE mais_zen;

-- criando tabela cliente
CREATE TABLE Cliente (
    CPF_CNPJ VARCHAR(20) PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Cidade VARCHAR(30) NOT NULL,
    Estado CHAR(2) NOT NULL
);

-- inserindo dados na tabela cliente
INSERT INTO Cliente (CPF_CNPJ, Nome, Telefone, Email, Cidade, Estado) 
VALUES
 ('12345678901', 'João Silva', '11 98765-4321', 'joao.silva@email.com', 'São Paulo', 'SP'),
 ('23456789012', 'Maria Santos', '11 98765-1234', 'maria.santos@email.com', 'Rio de Janeiro', 'RJ'),
 ('12345678901234', 'Empresa A', '11 98765-4321', 'contato@empresaA.com', 'São Paulo', 'SP'),
 ('23456789012345', 'Empresa B', '11 98765-1234', 'contato@empresaB.com', 'Rio de Janeiro', 'RJ'),
 ('34567890123', 'José Oliveira', '11 98765-5678', 'jose.oliveira@email.com', 'Belo Horizonte', 'MG'),
 ('34567890123456', 'Empresa C', '11 98765-5678', 'contato@empresaC.com', 'Belo Horizonte', 'MG'),
 ('45678901234567', 'Empresa D', '11 98765-9101', 'contato@empresaD.com', 'Brasília', 'DF'),
 ('45678901234', 'Ana Paula', '11 98765-9101', 'ana.paula@email.com', 'Brasília', 'DF');

-- criando tabela descricao cliente
CREATE TABLE desc_cliente (
  desc_id INT IDENTITY(1,1) PRIMARY KEY,
  descricao NVARCHAR(500) NOT NULL,
  id_cpf_cnpj VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_cpf_cnpj) REFERENCES cliente(cpf_cnpj)
);

-- inserindo dados na tabela cliente descricao cliente
INSERT INTO desc_cliente (descricao, id_cpf_cnpj) 
VALUES
('Estou procurando o serviço para o meu escritório em casa.Quero criar um ambiente de trabalho confortável e inspirador que me ajude a me concentrar e aumentar minha produtividade. Acredito que a combinação de luz natural, cores e materiais naturais podem fazer uma grande diferença.', '12345678901');

INSERT INTO desc_cliente (descricao, id_cpf_cnpj)
VALUES
('Estou interessada para criar quartos acolhedores e estimulantes para meus filhos. Quero garantir que eles tenham um espaço seguro e saudável para descansar e brincar, e acredito que a aplicação de conceitos de neuroarquitetura e biofilia pode ajudar nisso' , '23456789012'),
('Estamos renovando nossa área de Help Desk e queremos criar um ambiente de trabalho que seja acolhedor e eficiente para nossos funcionários. Acreditamos que a Neuroarquitetura e a Biofilia podem ajudar a criar um ambiente de trabalho ideal para o sucesso de nossa equipe.', '12345678901234'),
('Nós queremos criar uma área de lazer no nosso prédio para os funcionários, para que eles possam se desconectar e relaxar durante o dia. Acreditamos que isso pode melhorar o bem-estar e o desempenho dos funcionários, por isso estamos interessados em contratar os serviços da Mais Zen para ajudar na criação deste espaço.', '45678901234567'),
('Procuto um serviço para renovar meu banheiro. Quero criar um ambiente relaxante e acolhedor para o meu momento de cuidado pessoal, e acredito que a combinação de iluminação, materiais e design de interiores pode ajudar a alcançar esse objetivo' , '34567890123'),
('Nós queremos renovar nossa recepção do escritório principal para criar uma primeira impressão positiva para nossos clientes e visitantes. Acreditamos que a Neuroarquitetura e a Biofilia podem ajudar a criar um ambiente acolhedor e agradável para todos que entram no nosso escritório.', '34567890123456'),
('Estamos desenvolvendo três escritórios em diferentes locais e queremos que cada um tenha um ambiente único e confortável para os funcionários. Acreditamos que a Neuroarquitetura e a Biofilia podem ajudar a criar um ambiente de trabalho positivo e motivador para nossos colaboradores.', '23456789012345'),
('Estou interessada em contratar um serviço de Neuroarquitetura e Biofilia para a minha área de visitas, meu quarto de casal e area de churras. Quero criar um ambientes acolhedores e confortávés, e acredito que a aplicação deste conceito pode ajudar' , '45678901234');

-- criando a tabela plano
CREATE TABLE plano (
    plano_id INT PRIMARY KEY, 
    tipo_plano VARCHAR(20), 
    desc_plano VARCHAR(100)
);

-- inserindo dados na tabela plano
INSERT INTO Plano (plano_id, tipo_plano, desc_plano) 
VALUES 
(001, 'ametista', 'areas menores de 1 a 2 abientes'), 
(002, 'jade', 'areas intermediarias de 3 a 4 ambientes'), 
(003, 'diamante', 'areas grandes todo o imovel');

-- criando a tabela serviço
CREATE TABLE Servico (
  servico_id INT PRIMARY KEY,
  tipo_servico VARCHAR(255)
);

-- inserindo dados na tabela serviço
INSERT INTO Servico (servico_id, tipo_servico)
VALUES (1, 'para você'), (2, 'para empresa');

 
-- criando a tabela produto
CREATE TABLE produto (
   produto_id INT IDENTITY(1,1) PRIMARY KEY,
   id_cliente VARCHAR(20),
   id_servico INT,
   id_plano INT,
   FOREIGN KEY (id_cliente) REFERENCES Cliente(CPF_CNPJ),
   FOREIGN KEY (id_servico) REFERENCES Servico(servico_id),
   FOREIGN KEY (id_plano) REFERENCES Plano(plano_id)
);

-- inserindo dados na tabela produto
INSERT INTO produto(id_cliente, id_servico, id_plano)
VALUES
('12345678901' , 1 , 1),
('23456789012', 1 , 1),
('12345678901234', 2 , 3),
('45678901234567', 2 , 1),
('34567890123', 1 , 1),
('34567890123456', 2 , 1),
('23456789012345', 2 , 2),
('45678901234', 1 , 2);

