// Declaração de variáveis da Bolinha , diametro e velocidade 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
//Função que desenha o plano de fundo do jogo
function setup() {
  createCanvas(600, 400);
}
//Função para interações da bolinha 
function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  // Identificando as bordas do plano de fundo 
  if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
}
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
}
  }