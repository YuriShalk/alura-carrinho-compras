
let valorTotal = 0;
limpar();

function adicionar() {
  let produtoSelecionado = document.getElementById("produto").value;
  let qtyNoCarrinho = document.getElementById("quantidade").value;

  if(qtyNoCarrinho <= 0 || isNaN(qtyNoCarrinho)) {
    alert("A quantidade deve ser maior que zero.");
    return;
  } else if (!produtoSelecionado || produtoSelecionado.trim() === "") {
    alert("Selecione um produto para adicionar ao carrinho.");
    return;
  }

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

// Atividades extras
function adicionarCliente() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let clienteInfo = document.getElementById("cliente-info");

  alert(`Cliente ${nome} de ${idade} anos cadastrado com sucesso!`);
  console.log(`Cliente ${nome} de ${idade} anos cadastrado com sucesso!`);

  clienteInfo.textContent = `Cliente: ${nome}, Idade: ${idade} anos`;
}

function somarNumeros() {
  let num1 = parseFloat(document.getElementById("primeiro-numero").value);
  let num2 = parseFloat(document.getElementById("segundo-numero").value);
  let resultado = num1 + num2;

  console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);
}

function splitFrase() {
  let frase = document.getElementById("frase-input").value;
  let frases = frase.split(";");
  console.log(`primeira frase: ${frases[0]}, segunda frase: ${frases[1]}`);
}

function splitNumeros() {
  let numeros = document.getElementById("input-numeros").value;
  let numerosArray = numeros.split(",");

  for (let i = 0; i < numerosArray.length; i++) {
    numerosArray[i] = parseFloat(numerosArray[i].trim());
    console.log(`Número ${i + 1}: ${numerosArray[i]}`);
  }
}