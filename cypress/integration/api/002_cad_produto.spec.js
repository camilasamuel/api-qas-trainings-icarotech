import { EndpointsApi } from "../../support/helpers/endpoints-envs";
const endpoint = new EndpointsApi();
import { CriarProduto } from "../../support/steps/api/003_criar_produto_POST_";
const criar = new CriarProduto();
import { ListarProduto } from "../../support/steps/api/004_listar_produto_GET_";  
const listar = new ListarProduto();

console.log(ListarProduto);



describe('Desafio Completo - API Produtos', () => {
    let produto;
    let produtoId;

    before(() => {
        produto = {
            name: `Produto Teste ${Date.now()}`,
            brand: "Marca Teste",
            price: 99.97,
            endpoint: '/products' 
        };
    });

    it('001 - Criar novo Produto', () => {
        criar.criarProduto(produto) 
            .then((res) => {
                produtoId = res.body.id; 
                expect(res.status).to.eq(201);
                expect(res.body).to.have.property('id');
                expect(res.body.name).to.eq(produto.name);
            });
    });

    it('2. Listar os Produtos e Confirmar Criação', () => {
        listar.listarProduto({
            endpoint: '/products'
        }, {
            name: produto.name,
            id: produtoId,
            price: produto.price,
            brand: produto.brand
            
        });
    });
});

        