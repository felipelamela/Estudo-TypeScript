import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  listaNegociacao(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
