const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');//pega a lista


form.addEventListener('submit', function(event) {
    event.preventDefault();//previne o comportamento padrão do formulário
    const nomeDoElemento = event.target.elements["nome"].value;//pega o valor do input nome
    const quantidadeDoElemento = event.target.elements["quantidade"].value;//pega o valor do input quantidade
    
  
    criaElemento(nomeDoElemento, quantidadeDoElemento);
});

//cria o elemento na tabela
function criaElemento(nomeDoElemento, quantidadeDoElemento) {
    //<li class="item"><strong>7</strong>roupas</li>

    console.log(nomeDoElemento, quantidadeDoElemento);

    const novoItem = document.createElement('li');//cria o elemento li
    novoItem.classList.add('item');//adiciona a classe item

    const quantidadeItem = document.createElement('strong');//cria o elemento strong
    quantidadeItem.innerHTML = quantidadeDoElemento;//adiciona o texto

    novoItem.appendChild(quantidadeItem);//adiciona o elemento strong ao elemento li
    novoItem.innerHTML += nomeDoElemento;//adiciona o texto ao elemento li

    lista.appendChild(novoItem);//adiciona o elemento li a lista

    console.log(novoItem)
}