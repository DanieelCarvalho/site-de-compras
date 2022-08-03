const imagem = document.querySelector('.imagem')
const titulo = document.querySelector('.nome')
const preco = (document.querySelector('.preco'))
let contador = '0'

function muda() {
	if (contador === '0') {
		imagem.src="img/intensity.png"
		contador = '1'
        titulo.innerHTML = "PASSION"
        preco.innerHTML = "$20"
	} else {
		imagem.src="img/cosiness.png"
		contador = '0'
        titulo.innerHTML = "COSINESS"
        preco.innerHTML = "R$15"
	}
}

let numero = document.querySelector(".numero")
let cont = 0;



function Soma() {
    if(numero.innerHTML <  5 ){
    numero.innerHTML= cont+=1
    } 

    }


function Subtracao(){
    if (cont > 1) {
        numero.innerHTML = cont-=1
    }
}