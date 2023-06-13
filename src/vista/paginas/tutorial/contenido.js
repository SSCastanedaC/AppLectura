import img1 from 'AppGlennDoman/src/vista/recursos/tutorial/img1.png';
import img2 from 'AppGlennDoman/src/vista/recursos/tutorial/img2.png';
import img3 from 'AppGlennDoman/src/vista/recursos/tutorial/img3.png';
import img4 from 'AppGlennDoman/src/vista/recursos/tutorial/img4.png';

const contenido = [
  {
    id: 1,
    titulo: 'Introducción',
    texto: `
  ¿Te gustaría enseñar a tu niño a leer desde una edad temprana y ayudarle a desarrollar su capacidad cognitiva desde los primeros meses de vida? Si es así, ¡has llegado al lugar correcto!\n
  El método de enseñanza presentado en esta aplicación está basado en el libro "Cómo enseñar a leer a su bebé" de Glenn Doman, quien propone que los bebés son capaces de aprender a leer mediante un proceso natural de asociación de palabras con imágenes.\n
  La aplicación presenta de forma ordenada una serie de tarjetas con palabras de varias categorías, desde palabras básicas como "mamá" y "papá" hasta acciones, objetos cotidianos e incluso un pequeño cuento.
      `,
    imagen: img1,
  },
  {
    id: 2,
    titulo: 'Reglas',
    texto: `
  El método establece dos reglas sencillas:\n
  1. Leer es un juego, no un castigo: Esta regla se basa en la idea de que los niños aprenden mejor cuando están motivados y disfrutan del proceso de aprendizaje. En lugar de forzar a los niños a aprender a leer, se busca despertar su interés y curiosidad mediante actividades y juegos que fomenten su creatividad y su imaginación. Este sentimiento positivo debe transmitirse desde los tutores hacia los niños.\n
  2. El tiempo de "jugar a leer" debe ser corto: Esta regla se basa en la idea de que los niños tienen una capacidad de atención limitada y necesitan tomar descansos frecuentes para procesar y asimilar la información. Además, se busca hacer que el aprendizaje sea atractivo y divertido, para mantener el interés y la motivación del niño. Las sesiones cortas y frecuentes son una forma efectiva de lograr esto.
      `,
    imagen: img2,
  },
  {
    id: 3,
    titulo: '¿Cómo deben presentarse las palabras?',
    texto: `
  Cada una de las tarjetas deben presentarse por 10 o 15 segundos mientras se lee el contenido en voz alta. Este proceso se repite 3 veces por sesión, teniendo en cuenta que la cantidad sugerida de sesiones diarias son cinco.\n
  Las palabras deben presentarse una por una, asegurándose que el niño aprenda a leer la tarjeta antes de continuar con la siguiente palabra.\n
  Inicialmente se aconseja preguntar al niño por el contenido de la tarjeta cada dos días, pero se recomienda ajustar el tiempo en función de la velocidad de aprendizaje del niño, ya que cada niño aprende a un ritmo diferente dependiendo de diferentes factores.
  Por último, se recomienda que los tutores sean pacientes y siempre aborden de manera positiva las respuestas del niño, incluso si estas son erróneas, ya que de esta manera no se transmitirán sentimientos negativos al niño que puedan perjudicar su aprendizaje.
  
      `,
    imagen: img3,
  },
  {
    id: 4,
    titulo: '¿En qué orden presentar las palabras?',
    texto: `
  Primero deben presentarse las palabras "mamá" y "papá". Cuando el niño las haya aprendido, se debe continuar con las palabras del cuerpo: primero las de 4 letras, luego las de 3 letras, luego las de 5 letras y finalmente las de 6 letras. Mientras las palabras se muestran y se pronuncian, el niño debe tocar la parte del cuerpo correspondiente.
  Luego se debe continuar con el vocabulario doméstico, adaptando las palabras del vocabulario al entorno que sea familiar para el niño.\n
  Después se deben enseñar las primeras frases, que deben ser cortas y contener las palabras que el niño ya ha aprendido. Cuando el niño ya haya aprendido las frases, estará listo para leer su primer libro, aprendiendo a leer página por página.\n
  Finalmente, el niño debe aprender las letras del abecedario.
      `,
    imagen: img4,
  },
];

export default contenido;
