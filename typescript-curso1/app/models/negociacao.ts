export class Negociacao {
  constructor(
    private _data: Date,
    private _quantidade: Number,
    private _valor: Number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data;
  }

  get quantidade(): Number {
    return this._quantidade;
  }

  get valor(): Number {
    return this._valor;
  }

  get volume(): Number {
    return Number(this._quantidade) * Number(this._valor);
  }
}
