import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useCliente from '../hook/useCliente'

export default function Home() {

  const { selecionarCliente, 
          excluirCliente, 
          cliente, 
          clientes, 
          novoCliente, 
          salvarCliente,
          tabelaVisivel,
         exibirTabela } = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo = "Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className = "flex justify-end">
            <Botao cor="green" className="mb-4" 
            onClick = {novoCliente}>
              Novo Cliente
              </Botao>
            </div>
            <Tabela clientes = {clientes} 
            clienteSelecionado = {selecionarCliente}
            clienteExcluido = {excluirCliente}></Tabela>
          </>
        ): (
          <Formulario 
          cliente = {cliente}
          clienteMudou = {salvarCliente}
          cancelado = {() => exibirTabela}/>
        )}
      </Layout>
    </div>
  )
}
