
// importa as classes e instancia das classes
import { EndpointsApi } from "../../support/helpers/endpoints-envs";
const endpoint = new EndpointsApi

import { CriarUsuario } from "../../support/steps/api/001_criar_novo_usuario_POST_";
const criar = new CriarUsuario

import { ListarUsuario } from "../../support/steps/api/002_listar_todos_usuarios_GET_";
const listar = new ListarUsuario


// Bloco de testes 
describe('Validar criação de usuário e listagem', () => {

    // primeiro caso de teste 
    it('001 - Criar novo usuario', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointUsuario(),
            id: 97,
            name: 'Bruno',
            last_name: 'Amadeu',
            email:'bruno@teste.com'
        }

        // criar um objeto de "Assert"
        var assert = {
            status: 201,
            id: 97,
            name: 'Bruno',
            last_name: 'Amadeu',
            email:'bruno@teste.com'
        }

        // chama a função para criar nosso usuário
        criar.criarUsuario(dados, assert)
    })


    it('002 - Criar novo usuario sem inserir o nome', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointUsuario(),
            id: 97,
            name: '',
            last_name: 'Amadeu',
            email:'bruno@teste.com'
        }

        // criar um objeto de "Assert"
        var assert = {
            status: 400,
            id: 97,
            name: 'Bruno',
            last_name: 'Amadeu',
            email:'bruno@teste.com'
        }

        // chama a função para criar nosso usuário
        criar.criarUsuario(dados, assert)
    })


    it('003 - Listar usuario criado', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointUsuario(),
        }

        // criar um objeto de "Assert"
        var assert = {   
            status: '200',
            id: 97,
            name: 'Bruno',
            last_name: 'Amadeu',
            email:'bruno@teste.com'
        }

        // chama a função para listar usuário
        listar.listarUsuario(dados, assert)
    })

})