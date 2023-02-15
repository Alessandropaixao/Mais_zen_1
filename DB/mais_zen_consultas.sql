USE mais_zen
SELECT * FROM Cliente;
SELECT * FROM desc_cliente;
SELECT * FROM plano;
SELECT * FROM Servico;
SELECT * FROM produto;

SELECT produto.*, desc_cliente.descricao
FROM produto
JOIN desc_cliente ON produto.id_cliente = desc_cliente.id_cpf_cnpj;


SELECT produto.*, desc_cliente.descricao, Cliente.Nome
FROM produto
JOIN desc_cliente ON produto.id_cliente = desc_cliente.id_cpf_cnpj 
JOIN Cliente ON produto.id_cliente = Cliente.CPF_CNPJ

SELECT produto.produto_id, cliente.nome, desc_cliente.descricao, servico.tipo_servico
FROM produto
JOIN cliente ON produto.id_cliente = cliente.cpf_cnpj
JOIN desc_cliente ON produto.id_cliente = desc_cliente.id_cpf_cnpj
JOIN servico ON produto.id_servico = servico.servico_id
WHERE servico.servico_id = 1;