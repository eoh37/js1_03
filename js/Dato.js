class Dato {
	constructor(descripcion, valor) {
  	this._descripcion = descripcion;
    this._valor = valor;
  }
  
  set descripcion(descripcion) {
  	this._descripcion = descripcion;
  }
  
  get descripcion() {
  	return this._descripcion;
  }
  
  set valor(valor) {
  	this._valor = valor;
  }
  
  get valor() {
  	return this._valor;
  }
}