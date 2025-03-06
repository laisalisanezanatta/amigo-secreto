let amigos= []
function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    listarAmigos(amigos)
    limparCampo()

}

function listarAmigos(amigos){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function limparCampo(){
    let adcionaAmigo = document.querySelector('input')
    adcionaAmigo.value = ''
}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    resultado(amigoSorteado)
    
}

function resultado(amigoSorteado){
    let resultado = document.getElementById('resultado')
    resultado.textContent = 'Amigo sorteado: ' + amigoSorteado

}
