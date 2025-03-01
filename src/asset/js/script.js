/*A imagem atual começa em 0 pq a primeira imagem 
assim que for clicado no avançar eu preciso mais 0 ao contador de umagens 
*/


const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*Função esconder imanges*/
function escoderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');

    });
}
/*Função mostra imagens*/
function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');

};
    /*Quando clicar na seta para avançar temos que esconder todas as imagens e
e mostrar a proxima imagem.*/
setaAvancar.addEventListener('click', function () {
    //testa-se o contador da imagemAtual é iguaç ao total de imagens.
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }


    /*A imagem atual começa em 0 pq é a primeira imagem 
    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    para poder saber qye agora eu vou mostrar a segunda imagem. */
    imagemAtual++;
    /*Esconder todas as imagens
     pegar tpdas as imagens usando o DOM e removera classe mostrar */
    
    escoderImagens();


    /* Mostar a proxima imagem
    pegar todas as imagens, descobir qual é a proxima, e colocar a classe mostrar nela.*/
    mostrarImagens();


});
/*Quando clicar na seta voltar temos que esconder todas as imagens e
e mostrar a imagem anterior.*/

setaVoltar.addEventListener('click',function(){
        if(imagemAtual=== 0) {
            return;
        }
        imagemAtual--;
        /*Esconder todas as imagens
        pegar tpdas as imagens usando o DOM e removera classe mostrar */
        escoderImagens();
        
        /* Mostar a imagem anterior
        pegar todas as imagens, descobir qual é a anterior, e colocar a classe mostrar nela.*/
        mostrarImagens();
        
        
        
    });





