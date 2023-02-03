export default class Partida {
  siglaTimeA;
  golsTimeA;
  siglaTimeB;
  golsTimeB;
  constructor(siglaTimeA, golsTimeA, siglaTimeB, golsTimeB) {
    this.siglaTimeA = siglaTimeA.toUpperCase();
    this.golsTimeA = golsTimeA;
    this.siglaTimeB = siglaTimeB.toUpperCase();
    this.golsTimeB = golsTimeB;
  }
}
