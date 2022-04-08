const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');//pega a lista
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(elemento => {
    criaElemento(elemento);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();//previne o comportamento padrão do formulário
    const nomeDoElemento = event.target.elements["nome"];//pega o valor do input nome
    const quantidadeDoElemento = event.target.elements["quantidade"];//pega o valor do input quantidade

    const itemAtual = {
        nome: nomeDoElemento.value,
        quantidade: quantidadeDoElemento.value
    }
      
    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));//salva o item no localStorage e converte para string
  
    nomeDoElemento.value = "";
    quantidadeDoElemento.value = "";
    console.log(itens)
});

//cria o elemento na tabela
function criaElemento(item) {

    const novoItem = document.createElement('li');//cria o elemento li
    novoItem.classList.add('item');//adiciona a classe item

    const quantidadeItem = document.createElement('strong');//cria o elemento strong
    quantidadeItem.innerHTML = item.quantidade//adiciona o texto

    novoItem.appendChild(quantidadeItem);//adiciona o elemento strong ao elemento li
    novoItem.innerHTML += item.nome;//adiciona o texto ao elemento li

    lista.appendChild(novoItem);//adiciona o elemento li a lista


}