// imagens e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
// som
let somDaTrilha;
let somDaColisao;
let somDoPonto

function preload() {  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemDoCarro,imagemDoCarro2,imagemDoCarro3,imagemDoCarro,imagemDoCarro2,imagemDoCarro3]
  somDaTrilha=loadSound("Sons/trilha.mp3");
  somDaColisao=loadSound("Sons/colidiu.mp3");
  somDoPonto=loadSound("Sons/pontos.wav");
}
