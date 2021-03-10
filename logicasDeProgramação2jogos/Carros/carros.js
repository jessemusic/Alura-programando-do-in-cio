let xCarros = [600, 600,600, 600, 600, 600];
let yCarros = [40, 98, 150, 210, 265, 318];
let velocidadeCarros = [2, 2.3, 3.6, 5, 3.9, 4];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (var i = 0; i < imagemCarros.length; i++) {

    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }

}

function voltaPosicaoInicialDoCarro() {
  for (i = 0; i < xCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}