const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('retorna a média de idade dos elefante', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Retorna Undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna Localização dos Elephants', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Retorna Popularidade', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('D eve retornar um array de dias da semana que não contém Monday;', () => {
    expect(handlerElephants('availability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  it('Deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('stringEstranha')).toEqual(null);
  });
});
