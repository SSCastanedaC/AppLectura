import abecedario from './abecedario';
import cuerpo from './cuerpo';
import entorno from './entorno';
import frases from './frases';
import libro from './libro';
import padres from './padres';
import palabras from './palabras';

const contenido = [
  {
    id: 1,
    titulo: 'Mamá y Papá',
    completo: false,
    opciones: padres,
  },
  {
    id: 2,
    titulo: 'Mi Cuerpo',
    completo: false,
    opciones: cuerpo,
  },
  {
    id: 3,
    titulo: 'Mi Entorno',
    completo: false,
    opciones: entorno,
  },
  {
    id: 4,
    titulo: 'Mis Palabras',
    completo: false,
    opciones: palabras,
  },
  {
    id: 5,
    titulo: 'Mis Primeras Frases',
    completo: false,
    opciones: frases,
  },
  {
    id: 6,
    titulo: 'Mi Primer Libro',
    completo: false,
    opciones: libro,
  },
  {
    id: 7,
    titulo: 'Abecedario',
    completo: false,
    opciones: abecedario,
  },
];

export default contenido;
