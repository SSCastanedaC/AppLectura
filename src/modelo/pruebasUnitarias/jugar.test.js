import {
  generarRespuestas,
  generarListaPalabras,
} from 'AppGlennDoman/src/modelo/logicaNegocio/jugar';

const lista = [
  {
    titulo: 'Mamá',
    contenido: 'mamá',
  },
  {
    titulo: 'Papá',
    contenido: 'papá',
  },
  {
    titulo: 'Perro',
    contenido: 'perro',
  },
  {
    titulo: 'Gato',
    contenido: 'gato',
  },
  {
    titulo: 'Mano',
    contenido: 'mano',
  },
  {
    titulo: 'Ojo',
    contenido: 'ojo',
  },
  {
    titulo: 'Camisa',
    contenido: 'camisa',
  },
  {
    titulo: 'Pelota',
    contenido: 'pelota',
  },
  {
    titulo: 'Jugar',
    contenido: 'jugar',
  },
  {
    titulo: 'Llorar',
    contenido: 'llorar',
  },
];

const arbol = [
  {
    titulo: 'Mamá y Papá',
    completo: false,
    opciones: [
      {
        titulo: 'Mamá',
        contenido: 'mamá',
        imagen: true,
      },
      {
        titulo: 'Papá',
        contenido: 'papá',
        imagen: true,
      },
    ],
  },
  {
    titulo: 'Mi Cuerpo',
    completo: false,
    opciones: [
      {
        titulo: '4 letras',
        completo: false,
        opciones: [
          {
            titulo: 'Mano',
            contenido: 'mano',
            imagen: true,
          },
          {
            titulo: 'Pelo',
            contenido: 'pelo',
            imagen: true,
          },
        ],
      },
      {
        titulo: '5 letras',
        completo: false,
        opciones: [
          {
            titulo: 'Nariz',
            contenido: 'nariz',
            imagen: true,
          },
          {
            titulo: 'Oreja',
            contenido: 'oreja',
            imagen: true,
          },
        ],
      },
    ],
  },
  {
    titulo: 'Mis Palabras',
    completo: false,
    opciones: [
      {
        titulo: 'Ajedrez',
        contenido: 'ajedrez',
      },
      {
        titulo: 'Mascota',
        contenido: 'mascota',
      },
      {
        titulo: 'Piano',
        contenido: 'piano',
      },
    ],
  },
  {
    titulo: 'Mi Entorno',
    completo: false,
    opciones: [
      {
        titulo: 'Familia',
        completo: false,
        opciones: [
          {
            titulo: 'Abuelo',
            contenido: 'abuelo',
            imagen: true,
          },
          {
            titulo: 'Tía',
            contenido: 'tía',
            imagen: true,
          },
        ],
      },
      {
        titulo: 'Acciones',
        completo: false,
        opciones: [
          {
            titulo: 'Saltar',
            contenido: 'saltar',
            imagen: true,
          },
          {
            titulo: 'Jugar',
            contenido: 'jugar',
            imagen: true,
          },
        ],
      },
    ],
  },
];

describe('generarRespuestas', () => {
  it('Genera respuestas de forma aleatoria indicando cuál es la correcta', () => {
    const indice = 0;
    const resultadoPrueba = generarRespuestas(lista, indice);
    expect(resultadoPrueba.length).toBe(3);
    expect(resultadoPrueba).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          contenido: 'mamá',
          correcta: true,
        }),
      ]),
    );
  });
  it('Genera respuestas de forma aleatoria indicando cuál es la correcta', () => {
    const indice = 3;
    const resultadoPrueba = generarRespuestas(lista, indice);
    expect(resultadoPrueba.length).toBe(3);
    expect(resultadoPrueba).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          titulo: 'Gato',
          correcta: true,
        }),
      ]),
    );
  });
});

describe('generarListaPalabras', () => {
  it('Obtiene los nodos inferiores de una estructura recursiva tipo árbol cuando los nodos tienen el elemento "imagen"', () => {
    const resultadoPrueba = generarListaPalabras(arbol, []);
    expect(resultadoPrueba.length).toBe(10);
  });
});
