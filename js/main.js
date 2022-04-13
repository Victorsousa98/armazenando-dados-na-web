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

    const existe = itens.find(elemento => elemento.nome === nomeDoElemento.value);//verifica se o elemento já existe

    const itemAtual = {
        nome: nomeDoElemento.value,
        quantidade: quantidadeDoElemento.value
    }

    if(existe){
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);
        itens[existe.id] = itemAtual;
    }else{
        itemAtual.id = itens.length;
        criaElemento(itemAtual);

        itens.push(itemAtual);
    
    }
      

    
  
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
    quantidadeItem.dataset.id = item.id //adiciona o id

    novoItem.appendChild(quantidadeItem);//adiciona o elemento strong ao elemento li
    novoItem.innerHTML += item.nome;//adiciona o texto ao elemento li

    novoItem.appendChild(botaoDeleta(item.id));//adiciona o botão ao elemento li

    lista.appendChild(novoItem);//adiciona o elemento li a lista


}

function atualizaElemento(item) {
    const quantidadeItem = document.querySelector('[data-id="'+item.id+'"]');
    quantidadeItem.innerHTML = item.quantidade;
}


function botaoDeleta(id){
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML = "X";

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentElement, id);
    });

    return elementoBotao;
}

function deletaElemento(tag, id){

    tag.remove();
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}