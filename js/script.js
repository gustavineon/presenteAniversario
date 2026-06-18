let pagina = 0;

const paginas =
document.querySelectorAll(".pagina");


function mostrar(){

paginas.forEach(p =>
p.classList.remove("ativa")
);


paginas[pagina].classList.add("ativa");

}



function proxima(){

if(pagina < paginas.length -1){

pagina++;

mostrar();

}

}



function voltar(){

if(pagina > 0){

pagina--;

mostrar();

}

}



function abrir(){

document
.getElementById("musica")
.play();


proxima();

}

function criarCoracoes(){


const area =
document.querySelector(".coracoes");


setInterval(()=>{


let coracao =
document.createElement("div");


coracao.className="coracao";


coracao.innerHTML="❤️";


coracao.style.left =
Math.random()*100+"vw";


coracao.style.animationDuration =
(3 + Math.random()*4)+"s";


coracao.style.fontSize =
(15 + Math.random()*30)+"px";



area.appendChild(coracao);



setTimeout(()=>{

coracao.remove();

},7000);



},400);


}



criarCoracoes();