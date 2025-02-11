const produtos =[
    {nome: "Produto 1", preco : 10.00, image: "/image/Produto 1.jpg"},
    {nome: "Produto 1", preco : 15.00, image: "/image/Produto 2.png"},
    {nome: "Produto 1", preco : 25.00, image: "/image/Produto 4.jpg"}
];

const carrinho = [];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

//Função para exibir os produtos na Tela
function exibirProdutos(){
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtosDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclik="adicionarApCarrinho('${produto.nome}', ${produto.preco})">
        `;
        produtoDiv.appendChild(produtoDiv);
    });
}

//Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco){
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

//Função pra atualizar a exibição do carrinho e o total
function atualizarCarrinho(){
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach(item =>{
        const itemLista = document.createElement("li");
        itemLista.texttextContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
}

//Inicializa a exibição dos produtos
exibirProdutos();