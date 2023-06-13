import {removerPalabra} from '../logicaNegocio/leer';

describe('removerPalabra', () => {
  it('Elimina una palabra de una lista basado en el índice', () => {
    const listaPrueba = ['Prueba'];
    const indicePrueba = 0;
    const resultadoPrueba = removerPalabra(listaPrueba, indicePrueba);
    expect(resultadoPrueba).toStrictEqual([]);
  });
  it('Elimina una palabra de una lista basado en el índice', () => {
    const listaPrueba = ['Prueba', 'Test', 'Final'];
    const indicePrueba = 1;
    const resultadoPrueba = removerPalabra(listaPrueba, indicePrueba);
    expect(resultadoPrueba).toStrictEqual(['Prueba', 'Final']);
  });
});
