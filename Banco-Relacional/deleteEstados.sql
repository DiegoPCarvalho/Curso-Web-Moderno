--exemplos de estados para excluir

insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54)

insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51)

select * from estados

--deletar estados

delete from estados
where sigla = 'MN'

select * from estados

delete from estados
where id >= 1000