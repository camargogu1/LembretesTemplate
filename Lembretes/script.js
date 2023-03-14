
botao=document.querySelector('.botao')
botao.onclick = enviar
vetor = JSON.parse(localStorage.getItem("lembretes")) || []

vetor.forEach(element => {
    div = document.createElement('h2')
    div.classList.add('individual')
    div.innerHTML = element
    document.querySelector('.lembrete').appendChild(div) 
});

function enviar (){
    lembrete = document.querySelector('.texto').value
    div = document.createElement('h2')
    div.classList.add('individual')
    div.innerHTML = lembrete
    document.querySelector('.lembrete').appendChild(div)
    vetor.push(lembrete)
    localStorage.setItem("lembretes",JSON.stringify(vetor))

    document.querySelector('.texto').value = " "

}

