import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector(`#valor`);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao)
    this.limparFormulario();
  }
  criaNegociacao(): Negociacao {
    const date = new Date(this.inputData.value.replace(`-`, `,`));
    const quantidadeNumber = new Number(this.inputQuantidade);
    const valorNumber = new Number(this.inputValor);

    return new Negociacao(date, quantidadeNumber, valorNumber);
  }

  limparFormulario(): void {
    this.inputData.value = ``;
    this.inputValor.value = ``;
    this.inputQuantidade.value = ``;
    this.inputData.focus();
  }
}
