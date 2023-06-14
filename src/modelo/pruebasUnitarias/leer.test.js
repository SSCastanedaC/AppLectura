import {
  agregarPalabra,
  removerPalabra,
  cambiarEstadoPalabra,
} from 'AppGlennDoman/src/modelo/logicaNegocio/leer';

describe('agregarPalabra', () => {
  it('Agrega un objeto al final de un array', () => {
    const lista = [];
    const palabraNueva = 'Prueba';
    const salidaEsperada = [
      {
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
    ];
    const resultadoPrueba = agregarPalabra(lista, palabraNueva);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Agrega un objeto al final de un array', () => {
    const lista = [
      {
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
    ];
    const palabraNueva = 'Test';
    const salidaEsperada = [
      {
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        completo: false,
        contenido: 'Test',
        titulo: 'Test',
      },
    ];
    const resultadoPrueba = agregarPalabra(lista, palabraNueva);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Agrega un objeto al final de un array', () => {
    const lista = [
      {
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        completo: false,
        contenido: 'Test',
        titulo: 'Test',
      },
    ];
    const palabraNueva = 'Final';
    const salidaEsperada = [
      {
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        completo: false,
        contenido: 'Test',
        titulo: 'Test',
      },
      {
        completo: false,
        contenido: 'Final',
        titulo: 'Final',
      },
    ];
    const resultadoPrueba = agregarPalabra(lista, palabraNueva);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
});

describe('removerPalabra', () => {
  it('Elimina un elemento de una lista basado en el índice', () => {
    const lista = ['Prueba'];
    const indice = 0;
    const salidaEsperada = [];
    const resultadoPrueba = removerPalabra(lista, indice);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Elimina un elemento de una lista basado en el índice', () => {
    const lista = ['Prueba', 'Test', 'Final'];
    const indice = 1;
    const salidaEsperada = ['Prueba', 'Final'];
    const resultadoPrueba = removerPalabra(lista, indice);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Elimina un elemento de una lista basado en el índice', () => {
    const lista = ['Prueba', 'Final'];
    const indice = 0;
    const salidaEsperada = ['Final'];
    const resultadoPrueba = removerPalabra(lista, indice);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
});

describe('cambiarEstadoPalabra', () => {
  it('Cambia el estado de un elemento de un array basado en su ID', () => {
    const lista = [
      {
        id: 1,
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        id: 2,
        completo: true,
        contenido: 'Test',
        titulo: 'Test',
      },
      {
        id: 3,
        completo: true,
        contenido: 'Final',
        titulo: 'Final',
      },
    ];
    const idPalabra = 3;
    const salidaEsperada = {
      id: 3,
      completo: false,
      contenido: 'Final',
      titulo: 'Final',
    };
    const resultadoPrueba = cambiarEstadoPalabra(lista, idPalabra);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Cambia el estado de un elemento de un array basado en su ID', () => {
    const lista = [
      {
        id: 1,
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        id: 2,
        completo: false,
        contenido: 'Test',
        titulo: 'Test',
      },
      {
        id: 3,
        completo: true,
        contenido: 'Final',
        titulo: 'Final',
      },
    ];
    const idPalabra = 1;
    const salidaEsperada = {
      id: 1,
      completo: true,
      contenido: 'Prueba',
      titulo: 'Prueba',
    };

    const resultadoPrueba = cambiarEstadoPalabra(lista, idPalabra);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
  it('Cambia el estado de un elemento de un array basado en su ID', () => {
    const lista = [
      {
        id: 1,
        completo: false,
        contenido: 'Prueba',
        titulo: 'Prueba',
      },
      {
        id: 2,
        completo: false,
        contenido: 'Test',
        titulo: 'Test',
      },
      {
        id: 3,
        completo: false,
        contenido: 'Final',
        titulo: 'Final',
      },
    ];
    const idPalabra = 2;
    const salidaEsperada = {
      id: 2,
      completo: true,
      contenido: 'Test',
      titulo: 'Test',
    };
    const resultadoPrueba = cambiarEstadoPalabra(lista, idPalabra);
    expect(resultadoPrueba).toStrictEqual(salidaEsperada);
  });
});
