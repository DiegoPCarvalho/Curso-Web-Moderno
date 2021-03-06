import ClienteRepositorio from "../core/ClienteRepositorio"
import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Cliente from '../core/Cliente'
import useTabelOuForm from "./useTabelOuForm"

export default function useCliente() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, 
            formularioVisivel, 
            exibirTabela, 
            exibirFormulario} = useTabelOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela
        })
    }
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente(cliente: Cliente) {
        setCliente(Cliente.vazio())
        exibirFormulario
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        exibirTabela
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        selecionarCliente,
        excluirCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}