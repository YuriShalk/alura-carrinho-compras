
let valorTotal = 0;
limpar();

function adicionar() {
  let produtoSelecionado = document.getElementById("produto").value;
  let qtyNoCarrinho = document.getElementById("quantidade").value;
  let produtoPrecoTotal = adicionarProdutoNoCarrinho(produtoSelecionado, qtyNoCarrinho);
  calcularValorTotal(produtoPrecoTotal);
  document.getElementById("quantidade").value = 0;
}

function adicionarProdutoNoCarrinho(produtoSelecionado, qtyNoCarrinho) {
  let sessaoCarrinho = document.getElementById("lista-produtos");
  let nome = produtoSelecionado.split("-")[0].trim(); // primeiro elemento
  let precoUnitario = produtoSelecionado.split("R$")[1].trim(); // segundo elemento
  let preco = (parseFloat(precoUnitario) * qtyNoCarrinho).toFixed(2);

  sessaoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${qtyNoCarrinho}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
  </section>`;

  return parseFloat(preco);
}

function calcularValorTotal(produtoPrecoTotal) {
  valorTotal += produtoPrecoTotal;
  let sessaoValorTotal = document.getElementById("valor-total");  
  sessaoValorTotal.innerHTML = `R$ ${valorTotal.toFixed(2)}`;
}

function limpar() {
  let total = document.getElementById("valor-total");
  let carrinhoDeProdutos = document.getElementById("lista-produtos");

  total.innerHTML = "R$ 0,00";
  carrinhoDeProdutos.innerHTML = "";
  valorTotal = 0;
}