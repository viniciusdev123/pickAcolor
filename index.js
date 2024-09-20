const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color') //document.querySelector -> vai retornar para a minha página HTML, o primeiro item que for passado para ele. Sendo assim, se eu colocar ele junto com o número randomico que está gerando, ele vai pegar o número randomico e vai voltar para a minha página.


                 //Dentro da propriedade .addEventListener(), coloque o tipo de evento. Neste caso vai ser o evento de click, ou seja, 'quando alguém clicar, o que que ele vai fazer? Em seguida coloque uma function(), para definir as ações.
btn.addEventListener('click', function(){//a variável btn vai escutar por um evento, neste caso, o click do usuário no botão. Poderíamos também fazer outra forma: Criar uma função, relacionar ela dentro do html, e dentro dessa função colocar as ações que eu quero que aconteça dentro do meu html.
    //Basicamente, aqui dentro, vou ter que pegar 1 cor da lista 'cores', e colocar como background no body do meu HTML. Eu não pedi para ele pegar qualquer cor, irei dizer qual cor ele deve pegar.
    const randomColor = getRandomColor() // coloquei dentro de uma variável, pois deta forma, vou facilitar a chamada dessa função à outros lugares.
    document.body.style.background = colors[randomColor] //vai la no documento e, no body, troca o style do meu background para: Um valor aleatório (que eu defini dentro da minha function) presente dentro da minha Array Colors.
    color.textContent = colors[randomColor] //textContent serve para obtermos o valor de no TEXT_NODE . Text_node são aqueles que possuem apenas texto. Por exemplo, usar textContent em um h2 , span ou div retorna o conteúdo textual deles.
}) // textContent vai fazer com que retorne um conteúdo textual aleatório presente dentro de colors para onde está a minha marcação que fiz em 'color'.


function getRandomColor () { //sempre precisar utilizar algo haver com matemática, utilize a propriedade Math.
    return Math.floor(Math.random() * colors.length) //A função Math. floor(x) retorna o menor número inteiro dentre o número "x", ou seja, vai arredondar os meus valores aleatórios, evitando assim dizímas periódicas. Math.random -> Gerando um número aleatório entre dois valores (0 à 99). colors.length -> vai me retornar o tamanho da lista. Ou seja, basicamente estou dizendo o seguinte: Retorne um valor inteiro aleatório do tamanho da minha Array 'colors' (quando eu multipliquei pelo tamanho da minha Array, significa que o valor aleatório vai ir de acordo com o tamanho da minha Array) 
}






