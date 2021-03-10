let xBolinha = 300;
let yBolinha = 200;
let raio = 10;
let diametro = 2 * raio;
let velocidade = 6;
let velocidadeXBolinha = velocidade;
let velocidadeYBolinha = velocidade;
let raqueteLargura = 10;
let raqueteAltura = 90;

// Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;
//Placar dos pontos
let meusPontos = 0;
let pontosOponente = 0;
// sons do jogo
let trilha;
let raquetada;
let ponto;

function preload(){
  trilha =loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada= loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBordaDeColisaoTela();
  raqueteDoJogador(xRaquete, yRaquete);
  raqueteDoJogador(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verioficaColisaoComARaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  console.log(xBolinha);
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaBordaDeColisaoTela() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }

}

function raqueteDoJogador(x, y) {
  rect(x, y, raqueteLargura, raqueteAltura);

}


function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;

  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;

  }
}

function verioficaColisaoComARaquete() {
  if ((xBolinha - raio < xRaquete + raqueteLargura) && (yBolinha - raio < yRaquete + raqueteAltura) && (yBolinha + raio > yRaquete)) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }

}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura / 2 - 30;
 yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar();
}

function incluiPlacar() {

  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);

  fill(color(255,140,0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosOponente, 450, 26)
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();

  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
