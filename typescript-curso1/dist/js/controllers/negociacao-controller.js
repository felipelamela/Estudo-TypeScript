import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector(`#valor`);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace(`-`, `,`));
        const quantidadeNumber = new Number(this.inputQuantidade);
        const valorNumber = new Number(this.inputValor);
        return new Negociacao(date, quantidadeNumber, valorNumber);
    }
    limparFormulario() {
        this.inputData.value = ``;
        this.inputValor.value = ``;
        this.inputQuantidade.value = ``;
        this.inputData.focus();
    }
}
