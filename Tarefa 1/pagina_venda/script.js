const produtos = [
    {nome: "Sonic Frontiers PS5", preco: 229.90, imagem: "Produto 5.jpg"},
    {nome: "Controle PS5", preco: 399.90, imagem: "Produto 7.jpg"},
    {nome: "Playstation 5", preco: 4500.00, imagem: "Produto 6.jpg"}
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

let carrinho = [];

//Função para exibir os produtos na Tela
function exibirProdutos(){
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

//Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco){
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

function removerDoCarrinho(index){
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

//Função pra atualizar a exibição do carrinho e o total
function atualizarCarrinho(){
    carrinhoLista.innerHTML = "";
    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = "<li>Carrinho vazio</li>";
    } else {
        let total = 0;
        carrinho.forEach((item, index ) => {
            const itemLista = document.createElement("li");
            itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => removerDoCarrinho(index);
            itemLista.appendChild(botaoRemover);
            carrinhoLista.appendChild(itemLista);
            total += item.preco;
        });
        totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
}

//Inicializa a exibição dos produtos
exibirProdutos();