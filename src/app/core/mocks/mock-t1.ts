import { Question } from '../models/question.model';

export const QUESTIONS_TEMA_1: Question[] = [
  {
    id: 'tema-1-1',
    statement:
      'En una recta de calibrado de concentraciones 1 - 2 - 5  - 10 - 25 - 50 ng/mL, los controles de calidad más  adecuados serían:',
    options: ['3 - 20 - 40 ng/mL', '1 - 10 - 20 ng/mL', '1 - 5 - 45 ng/mL', '4 - 8 - 16 ng/Ml'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-2',
    statement: 'El objetivo de la calidad de un laboratorio es  responsabilidad de:',
    options: [
      'El Jefe del laboratorio.',
      'Supervisor del laboratorio.',
      'Todo el personal del laboratorio.',
      'Unidad de calidad del Hospital.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-3',
    statement:
      'Al conjunto de operaciones que se realizan a un  instrumento analítico o equipo de medida para que  nos garantice la exactitud de sus especificaciones, se  denomina:',
    options: ['Control de calidad.', 'Calibración.', 'Verificación.', 'Mantenimiento.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-4',
    statement: '¿Qué es lo primero que hay que hacer cuando llega  la muestra al laboratorio?:',
    options: [
      'Comprobar que la petición médica, y el etiquetado  de las muestras sean correctos.',
      'Centrifugar la muestra.',
      'Registrar la muestra.',
      'Procesar la muestra en los distintos servicios del  laboratorio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-5',
    statement: 'Al conjunto de normas Internacionales sobre calidad  y su gestión, se le denomina:',
    options: [
      'Normas Políticas.',
      'Normas ISO.',
      'Normas de responsabilidades.',
      'Normas Jurídicas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-6',
    statement: 'El control de calidad externo consiste en:',
    options: [
      'Analizar unas muestras conociendo los resultados  esperados.',
      'Analizar muestras de las cuales se desconocen los  resultados que debemos obtener.',
      'Pasarlo cada día, antes de empezar la rutina de  trabajo.',
      'No se emplean controles externos, salvo los  internos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-7',
    statement:
      'Una vez implementado un sistema de seguridad y  certificado, las revisiones mínimas que se tendrían  que hacer de dicho sistema serían:',
    options: [
      'Cada 6 meses.',
      'Una vez acreditado y certificado por ENAC, no haría  falta.',
      'Al menos una vez al año.',
      'Cada 3 años.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-8',
    statement: 'Se denominan Interferencias:',
    options: [
      'La aparición de errores no programados en la  realización de una prueba.',
      'La presencia de sustancias que alteran la  determinación de un analito específico.',
      'La disminución de la sensibilidad de una prueba.',
      'La mala utilización de un método.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-10',
    statement: 'Atendiendo a los motivos de rechazo de muestras,  ¿Cuál sería una causa?',
    options: [
      'Tubos sin etiquetas o mal identificados.',
      'Peticiones incompletas.',
      'No correspondencia de tubo y petición.',
      'Todos serían motivos de rechazo.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-11',
    statement:
      'En la organización en el trabajo de un laboratorio.  ¿Qué crees que sería beneficioso para un buen  funcionamiento?',
    options: [
      'Optimización de recursos.',
      'Coordinación de las actividades.',
      'A y B son correctas.',
      'Ninguna es correcta',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-12',
    statement: 'El servicio de recepción de muestras deberá rechazar  una orina cuando:',
    options: [
      'Venga debidamente etiquetada e identificada.',
      'Que se haya recogido tras lavar los genitales.',
      'Que venga de un niño pequeño y haya sido recogida  en bolsa de polietileno.',
      'Cuando venga en cualquier recipiente con  tapadera.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-13',
    statement:
      'A la recepción llegan muestras de toda índole, ¿Qué  tipo de muestras en tubo no debería de centrifugar  Carlos?',
    options: [
      'Tubo para hemograma.',
      'Tubo para bioquímica.',
      'Tubo de coagulación.',
      'Se centrifugan todos los tubos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-14',
    statement:
      'Para realizar el estudio basal bioquímico de sangre,  el paciente debe estar en ayunas durante:',
    options: ['6 horas.', '4 horas.', '10 horas.', 'No hace falta estar en ayunas.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-15',
    statement: 'Una solución al 10% (p/v) contiene:',
    options: [
      '10 g del soluto + 100 ml del disolvente.',
      '10 ml del soluto + 100 ml del disolvente.',
      '10 g del soluto + 90 g del disolvente.',
      '10 g del soluto en un volumen final de 100 ml de  solución.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-16',
    statement: 'La desviación típica o desviación estándar es un  parámetro que indica:',
    options: [
      'La precisión de una serie de resultados analíticos.',
      'La exactitud de una serie de resultados analíticos.',
      'La precisión y la exactitud de una serie de  resultados analíticos.',
      'El intervalo total de variabilidad de una serie de  resultados analíticos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-17',
    statement:
      'Las gráficas de control estadístico o gráficas de Levy Jenning para los resultados analíticos son imprescindibles en el laboratorio clínico para  conocer:',
    options: [
      'La exactitud y precisión entre pruebas de los  resultados analíticos obtenidos con un mismo suero  control.',
      'La exactitud y precisión día a día de los resultados  analíticos obtenidos con un mismo suero control.',
      'La precisión día a día de los resultados analíticos  obtenidos con un mismo suero control.',
      'La exactitud día a día de los resultados analíticos  obtenidos con un mismo suero control.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-18',
    statement:
      'La forma más sencilla de registrar los datos de un  control de calidad (QC) es a través de gráficos. Entre  los no utilizados está:',
    options: ['Levy-Jennings.', 'Bayes.', 'Youden.', 'CuSum.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-19',
    statement:
      'La probabilidad de la existencia de un tumor entre un  grupo de control heterogéneo, ante un resultado  positivo de la prueba analítica, se denomina:',
    options: [
      'Valor predictivo positivo.',
      'Valor predictivo negativo.',
      'Especificidad.',
      'Sensibilidad.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-20',
    statement: '¿Qué gráfica está especialmente diseñada para el  control externo de calidad?',
    options: [
      'Gráfica de CuSum.',
      'Gráfica de Youden.',
      'Gráfica de Levey-Jennings.',
      'Gráfica externa.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-21',
    statement:
      '¿Cuál de las siguientes determinaciones se ve más  afectada por la hemólisis de la muestra?',
    options: ['Proteínas totales.', 'LDH.', 'Calcio.', 'Magnesio.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-22',
    statement:
      'De los siguientes tubos ¿cuál es el más adecuado para  recoger una muestra de sangre en la que queremos  determinar lactato?',
    options: ['De tapón rojo.', 'De tapón azul.', 'De tapón gris.', 'De tapón amarillo.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-23',
    statement: 'La existencia de una inexactitud constante se  denomina:',
    options: ['Error aleatorio.', 'Sesgo.', 'Variabilidad.', 'Distribución normal.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-24',
    statement: 'El grado en que una medida obtenida se aproxima al  valor real se denomina:',
    options: ['Especificidad.', 'Precisión.', 'Sensibilidad.', 'Exactitud.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-25',
    statement: 'Acreditación es:',
    options: [
      'Procedimiento mediante el cual un organismo  independiente y reconocido garantiza por escrito que  un producto, proceso o servicio cumple los requisitos  especificados.',
      'procedimiento mediante el cual un organismo  autorizado reconoce formalmente que una  organización es competente para llevar a cabo unas  tareas específicas.',
      'Actividad encaminada a adaptar los procesos de  una organización a las directrices dadas en los  documentos normativos pertinentes.',
      'Reconocimiento legal del laboratorio por parte de  la administración, con el fin de asegurar que reúne las  condiciones adecuadas y garantizar a los potenciales  usuarios un nivel correcto de calidad asistencial.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-26',
    statement:
      'Para cuantificar el tiempo de respuesta se pueden  usar los parámetros estadísticos siguientes,  EXCEPTO:',
    options: [
      'Percentiles (generalmente 90 o 95)',
      'Proporción de resultados entregados en un tiempo  inferior al marcado',
      'Desviación típica',
      'Mediana',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-27',
    statement: '¿Cuál es la finalidad del control de calidad externo?',
    options: [
      'Es la misma que la del control de calidad interno,  pero realizado por personal ajeno al laboratorio.',
      'Conseguir sueros control fiables para validar  metodologías.',
      'Obtener factores de corrección aplicables a los  resultados de pacientes, a partir de una evaluación de  la inexactitud.',
      'Evaluar el programa de calidad interno, la  dispersión de resultados entre laboratorios, así como  ayudar a la selección de nuevas metodologías.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-28',
    statement: 'La especificidad de una prueba se calcula:',
    options: [
      'Verdaderos positivos divididos por total de  pacientes con la enfermedad.',
      'Verdaderos negativos divididos por total de  pacientes sin la enfermedad.',
      'Verdaderos positivos dividido por total de pacientes  con o sin la enfermedad.',
      'Verdaderos negativos por total de pacientes con o  sin enfermedad.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-29',
    statement: 'Cuál de las siguientes afirmaciones es FALSA. Las  curvas de ROC expresan:',
    options: [
      'El rendimiento diagnóstico de una magnitud  bioquímica',
      'La relación entre la sensibilidad y la especificidad  diagnóstica de una prueba bioquímica',
      'La capacidad discriminante de una magnitud  bioquímica',
      'Rangos de referencia de una magnitud bioquímica',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-30',
    statement: 'La validación técnica no incluye:',
    options: [
      'La comprobación de la realización del control de  calidad interno',
      'Comprobar las alarmas de los equipos',
      'Decidir la ampliación de pruebas, si procede',
      'Aceptación de los resultados de los controles de  acuerdo con las reglas establecidas',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-31',
    statement:
      'En un sistema de gestión de la calidad, el documento  que especifica la política de calidad, los objetivos de  la organización, la gestión del equipamiento,  fungibles, política medio-ambiental, etc que debe de  hacerse en el laboratorio, se conoce como:',
    options: [
      'Plan de calidad',
      'Manual de calidad',
      'Guía de calidad',
      'Procedimientos de calidad',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-32',
    statement:
      'Según la norma ISO 9001, el principio fundamental  que debe guiar la gestión de la calidad en una  organización es:',
    options: [
      'El liderazgo de la Dirección.',
      'La participación del personal.',
      'El enfoque basado en procesos.',
      'El enfoque al cliente.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-33',
    statement: '¿Cuál de las siguientes afirmaciones sobre pruebas  diagnósticas es cierta?',
    options: [
      'La sensibilidad es la probabilidad de que un  individuo sano presente la prueba positiva.',
      'El valor predictivo negativo es la probabilidad de  que un individuo enfermo tenga la prueba negativa.',
      'La especificidad es una probabilidad post-prueba.',
      'El valor predictivo positivo aumenta cuando la  prevalencia de la enfermedad aumenta.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-34',
    statement: 'La desviación estándar de una distribución es una  medida de',
    options: ['Posición', 'Tendencia central', 'Dispersión', 'Apuntamiento'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-35',
    statement:
      'En relación con la calibración de equipos, ¿cuál de las  siguientes afirmaciones es correcta?',
    options: [
      'Se entiende por calibración la comparación de un  sistema de medición frente a estándares conocidos.',
      'Tiene que haber un plan de calibración de equipos  que defina la actividad a realizar y su periodicidad.',
      'Deberán calibrarse los equipos de medición y  ensayo que lo precisan antes de su puesta en servicio.',
      'Todas las respuestas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-36',
    statement:
      'Una vez obtenidos los resultados del analizador,  observamos que uno de los parámetros, a pesar de  haber sido diluido automáticamente por el  analizador, sigue estando fuera de rango, por lo cual  procedemos a realizar una dilución manual de la  muestra al 1/20 con suero fisiológico, ¿cuál de las siguientes proporciones serían las correctas?',
    options: [
      '10 microl de muestra + 200 microl de suero  fisiológico.',
      '100 microL de muestra + 100 microL de suero  fisiológico.',
      '10 microL de muestra + 190 microL de suero  fisiológico.',
      '190 microL de muestra + 10 microL de suero  fisiológico.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-37',
    statement: 'Respecto al error sistemático, señale la RESPUESTA  CORRECTA:',
    options: [
      'Afecta a la precisión.',
      'Se corrige con la calibración.',
      'Es impredecible.',
      'Muestra la concordancia de nuestro resultado con  el valor verdadero',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-38',
    statement: 'La precisión de un resultado analítico es:',
    options: [
      'Reproducibilidad',
      'Aproximación al valor verdadero',
      'Capacidad de un método de determinar  únicamente el componente que se pretende medir.',
      'Resultado más pequeño que puede medirse',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-39',
    statement:
      'Si se realizan 20 determinaciones de glucosa de una  única muestra de plasma, los resultados no serán  todos exactamente iguales debido a:',
    options: [
      'Error aleatorio.',
      'Error sistemático.',
      'Inexactitud.',
      'Una variación sistemática',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-40',
    statement:
      'En relación con la calidad en el laboratorio clínico,  todos los enunciados son ciertos EXCEPTO:',
    options: [
      'Se centra únicamente en la fase analítica',
      'Se encuentra integrada con la gestión clínica',
      'Implica a todos los profesionales',
      'Abarca todo el proceso',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-41',
    statement:
      'Según qué NORMA ISO se han acreditado o están en  proceso de acreditación los laboratorios clínicos:',
    options: [
      'NORMA UNE-EN ISO 17025:1999',
      'NORMA UNE-EN ISQ 15189:2022',
      'NORMA UNE-EN ISO 9001:2000.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-42',
    statement: 'El transporte de muestras al laboratorio debe  hacerse:',
    options: [
      'En un periodo de tiempo apropiado a la naturaleza  de la petición.',
      'De una manera que asegure la seguridad para el  personal que la transporta y para el público en general.',
      'Dentro de un rango de temperatura especificado  (en el manual de toma de muestras) y con los conservadores adecuados.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-43',
    statement: 'La fase preanalítica es un subproceso del laboratorio  que incluye, entre otros:',
    options: [
      'El transporte de las muestras hasta el laboratorio.',
      'La emisión del informe de laboratorio.',
      'La validación técnica de los resultados.',
      'Todas son falsas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-44',
    statement: 'Señale la respuesta correcta:',
    options: [
      'El EDTA constituye actualmente un anticoagulante  de elección en hematología.',
      'Es aconsejable mantener a 4° C las muestras de  sangre durante su transporte, para preservar los  niveles de potasio.',
      'La hemólisis es la salida de componentes de los  eritrocitos, al plasma o al suero, por lo que aumentan  las concentraciones de sodio.',
      'Todas las respuestas son correctas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-45',
    statement: 'Es motivo de rechazo.',
    options: [
      'Una muestra mal rotulada.',
      'Una muestra derramada.',
      'Un volante no cumplimentado.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-46',
    statement: 'Indique cuál de las siguientes no es una medida de  tendencia central:',
    options: ['Coeficiente de variación.', 'Moda.', 'Media.', 'Mediana'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-47',
    statement:
      'En una distribución de variables cuantitativas el valor  que se repite con mayor frecuencia se denomina:',
    options: ['Media.', 'Coeficiente de variación.', 'Mediana.', 'Moda.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-48',
    statement:
      'Obtenemos un resultado de glucosa en orina con una  alarma de absorbancia; en el manual de la técnica  nos indican que realicemos una dilución 1/20. ¿Cómo  realizaríamos la dilución?',
    options: [
      'Con 19 volúmenes de orina más 1 volumen de agua  destilada.',
      'Con volúmenes iguales de orina yagua destilada.',
      'Con 1 volumen de orina más 19 volúmenes de agua  destilada.',
      'Con 1 volumen de orina y 20 volúmenes de agua  destilada.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-49',
    statement:
      'El error que se debe a causas accidentales difíciles de  determinar y que puede influir en cualquier resultado, se denomina:',
    options: ['Error aleatorio.', 'Error sistemático.', 'Error casual.', 'Error total.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-50',
    statement:
      'Los gráficos de control que habitualmente se  emplean en el laboratorio clínico para evaluar el control de calidad interno se conocen como:',
    options: [
      'Graficas de Levey-Jennings.',
      'Cartas de control.',
      'Graficas de Ishikawa.',
      'Diagramas de dispersión.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-51',
    statement: 'Un error sistemático en el laboratorio viene  determinado por:',
    options: [
      'La precisión y la exactitud.',
      'La inexactitud y la precisión.',
      'La exactitud e imprecisión.',
      'La inexactitud y la imprecisión.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-53',
    statement:
      'En los resultados de un control de calidad durante  cinco días consecutivos, hemos obtenido los siguientes resultados: 2,10/2,00/2,05/2,07/2,00.  ¿Cuál es su modalidad?',
    options: ['2,01.', '2,00.', '2,04.', '2,02.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-54',
    statement:
      'Una de las siguientes afirmaciones sobre los  indicadores de calidad es falsa, ¿cuál?',
    options: [
      'Deben ser simples, pertinentes, reproducibles y  fiables.',
      'Debe especificarse claramente la fórmula utilizada  para su cálculo.',
      'Sólo se refieren a los procesos operativos.',
      'El número de indicadores a definir depende de los  puntos fuertes y débiles del laboratorio.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-55',
    statement:
      'El PNT (procedimiento Normalizados de trabajo) de  una técnica analítica debe contar con los siguientes  apartados salvo uno, ¿cuál?',
    options: [
      'Capítulo de la Norma ISO 9001:2008 aplicada.',
      'Objeto.',
      'Descripción del procedimiento.',
      'Responsabilidades.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-56',
    statement: 'La especificidad de un test refleja:',
    options: [
      'Lo cerca que está del valor verdadero.',
      'La proporción de resultados positivos en personas  que padecen el proceso.',
      'La proporción de resultados positivo en personas  que no padecen el proceso.',
      'La proporción de resultados negativos en personas  sin enfermedad.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-57',
    statement:
      'Cuál de los siguientes tipos de muestras, considera el  más indicado para determinación de la glucosa en  cualquier circunstancia:',
    options: [
      'Plasma con heparina de litio',
      'Suero en tubo con gel separador',
      'Plasma con EDTA',
      'Plasma con oxalato-fluoruro',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-58',
    statement:
      'En una técnica fotométrica, una mala asignación de  los valores de los calibradores produce en la  obtención de los resultados:',
    options: [
      'Un error aleatorio',
      'Un error sistemático',
      'Un error proporcional',
      'Un error constante',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-59',
    statement: 'Se considera criterio de rechazo de una muestra:',
    options: [
      'Una muestra que no viene identificada  correctamente',
      'Una muestra de suero hemolizada para la  determinación de Lactato deshidrogenada (LDH)',
      'Una muestra para cultivo de orina recogida en un  recipiente no estéril',
      'Todos los anteriores son criterios de rechazo',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-60',
    statement:
      'Para preparar una solución acuosa 1 Molar de  hidróxido sódico (NaOH) sabiendo que el peso  molecular del mismo es 40:',
    options: [
      'Tenemos que pesar 80 g de NaOH, ponerlo en un  matraz y disolver con agua hasta 1000 ml de solución',
      'Tenemos que pesar 40 g de NaOH, ponerlo en un matraz y disolver con agua hasta 1000 ml de solución',
      'Tenemos que pesar 120 g de NaOH, ponerlo en un  matraz y disolver con agua hasta 1500 ml de solución',
      'Tenemos que pesar 40 g de NaOH, ponerlo en un  matraz y disolver con agua hasta 100 ml de solución',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-61',
    statement: 'La unidad de densidad es:',
    options: [
      'Es la unidad de longitud dividida por la unidad de  segundo',
      'Es la unidad de masa dividida por la unidad de  tiempo',
      'Es la unidad de longitud dividida por la unidad de  tiempo',
      'Es la unidad de masa dividida por la unidad de  volumen',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-62',
    statement: 'La diferencia principal entre suero y plasma es:',
    options: [
      'La presencia en plasma de fibrinógeno, que no está  presente en suero',
      'La concentración de colesterol que es un 20% más  elevado en plasma',
      'La presencia en plasma de una mayor  concentración de triglicéridos',
      'No existen diferencias significativas',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-64',
    statement:
      'El programa de aseguramiento de calidad en un  laboratorio de diagnóstico clínico debe incluir una  serie de pautas. Señale la respuesta correcta:',
    options: [
      'Han de describirse los procedimientos  documentados de las técnicas que se llevan a cabo en  el laboratorio.',
      'Cualquier trabajador que se incorpore por primera  vez precisa un periodo de adaptación y formación.',
      'Seguir un plan de mantenimiento periódico y  controles de calidad.',
      'Todas están incluidas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-65',
    statement:
      'La siguiente definición “medida de dispersión de un  conjunto de datos con respecto al promedio”,  corresponde a:',
    options: ['Mediana', 'Varianza', 'Sesgo', 'Desviación estándar'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-66',
    statement: 'Cuando hablamos de un volumen de una lambda,  estamos haciendo referencia a:',
    options: ['Un decilitro', 'Un milímetro', 'Un microlitro', 'Un hectolitro'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-67',
    statement: '¿Qué anticoagulante presenta el tubo de suero?:',
    options: ['Heparina sódica.', 'Citrato sódico.', 'EDTA.', 'Ninguno.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-68',
    statement:
      'El valor de un control para un determinado  parámetro tiene una media de 50 y una DE de 5. Tomando como límite de confianza el 95%, ¿cuál de  los siguientes valores debería ser rechazado?:',
    options: ['47', '58', '62', '41'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-69',
    statement:
      '¿Cuál de los siguientes no es un objetivo directo de  un sistema de gestión de la calidad según la norma  ISO en un laboratorio?',
    options: [
      'Disminución del gasto.',
      'Mejora de la satisfacción de los clientes.',
      'Detección y corrección de errores.',
      'Determinar las funciones de cada uno de los  miembros del laboratorio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-70',
    statement:
      'El manual de calidad de un laboratorio según la  norma ISO debe contener obligatoriamente los  siguientes documentos, excepto:',
    options: [
      'Política de calidad.',
      'Responsabilidades de cada área del laboratorio.',
      'Identificación de los documentos del sistema de  calidad.',
      'Los manuales de los distintos aparatos del  laboratorio, proporcionados por las casas comerciales.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-71',
    statement: 'No es causa de pérdida de precisión analítica una de  las siguientes opciones:',
    options: [
      'Un pipeteo inadecuado de muestras y controles',
      'Una mala homogeneización de los controles',
      'Una mala reconstitución de los calibradores',
      'Variaciones de temperatura.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-72',
    statement: 'Por mantenimiento preventivo de un equipo  entendemos:',
    options: [
      'Las operaciones encaminadas a corregir fallos o  averías.',
      'Las operaciones encaminadas a corregir deterioros.',
      'Las operaciones de mantenimiento periódico y  programado.',
      'Todas ellas se encuadran dentro del  mantenimiento preventivo.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-73',
    statement: 'El coeficiente de variación de un conjunto de  resultados analíticos expresa:',
    options: [
      'El error típico o error estándar de la media  expresada en porcentaje.',
      'El error de la desviación expresada en porcentaje.',
      'La extrapolación de la desviación típica de una serie  de resultados cuando la media de esta serie se lleva  desde su concentración a una concentración de 100.',
      'El error en precisión de una serie de resultados  analíticos para una desviación típica de 100.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-74',
    statement: 'Los métodos analíticos deben ser:',
    options: [
      'Precisos e inexactos.',
      'Inexactos e imprecisos.',
      'Precisos y exactos.',
      'Imprecisos y exactos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-75',
    statement: '¿Cuál de estas causas no interfiere en la analítica?',
    options: ['Suero lipémico', 'Fármacos', 'Hemólisis', 'Color de la piel'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-76',
    statement:
      'Para realizar una dilución 1:10 de un espécimen de  suero, se toma un volumen de espécimen de 0,1 ml  ¿Qué volumen de diluyente añadiríamos?',
    options: ['9 microlitos', '10 microlitos', '900 microlitos', '1,0 microlitos'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-77',
    statement:
      'Si queremos obtener suero de una muestra de  sangre, ¿qué anticoagulante usaremos?:',
    options: ['Heparina.', 'EDTA.', 'Citrato sódico.', 'Ninguno.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-78',
    statement: 'Es un gráfico de control:',
    options: [
      'Gráfico de CuSum.',
      'Líneas de Yensen.',
      'Gráficos de convergencia de Youns.',
      'Todas son ciertas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-79',
    statement: 'En cuanto al transporte de muestras entre  laboratorios:',
    options: [
      'Es recomendable hacerlo en cajas herméticas o  neveras transportadoras.',
      'El medio de transporte debe ser flexible para evitar  dañar el agente en caso de caída.',
      'Se etiquetará e identificarán para poder ser  utilizadas para otros fines.',
      'Se transportarán en las manos para tener un mayor  control del agente.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-80',
    statement:
      'El grado en que una medición proporciona resultados  similares cuando se lleva a cabo en más de una  ocasión en las mismas condiciones es la:',
    options: ['Validez.', 'Inmediatez.', 'Precisión.', 'Repetitividad.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-81',
    statement:
      'La certificación que da fe de que una empresa cumple  los requisitos con una norma concreta es:',
    options: ['ISO 3500.', 'ISO 9001.', 'ISO 7500.', 'ISO 2000'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-82',
    statement: 'La fiabilidad es sinónimo de:',
    options: ['Reproducibilidad.', 'Precisión.', 'Estabilidad.', 'Todas son correctas'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-83',
    statement: 'Las calibraciones:',
    options: [
      'El conjunto de operaciones que establecen la  relación entre los valores de una magnitud indicados  por un equipo de medida y los valores de esa  magnitud realizados por patrones.',
      'La relación entre el valor real de una muestra y el  valor obtenido en la maquinaria utilizada.',
      'La puesta en marcha diaria necesaria en todo el  aparataje del laboratorio.',
      'Todas son ciertas',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-84',
    statement: 'La reproducibilidad de un método se define como:',
    options: ['Dispersión', 'Precisión', 'Exactitud', 'Intervalo de confianza'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-85',
    statement: 'La desviación estándar de una población es:',
    options: [
      'La varianza',
      'El cuadrado de la varianza',
      'La raíz cuadrada de la varianza',
      'La suma de las diferencias respecto de la media',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-86',
    statement: 'Uno de los atributos de la calidad es la eficiencia.  Señale de qué se trata:',
    options: [
      'Grado de consecución de los objetivos propuestos  al mínimo coste posible.',
      'Mide lo apropiado de los servicios que se ofertan en relación a las necesidades.',
      'Grado de consecución de los objetivos propuestos  sin tener en cuenta el coste empleado.',
      'Se refiere a la posibilidad real de disponer del personal o del servicio que se presta en el momento en el que se precise.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-87',
    statement:
      'Para preparar una disolución 1 Molar con ácido  sulfúrico (SO4H2) sabiendo que el peso molecular del  mismo es aproximadamente 98:',
    options: [
      'Tenemos que pesar 49 gramos de SO4H2, ponerlo  en un matraz y disolver con agua hasta conseguir 1000  ml de disolución.',
      'Tenemos que pesar 98 gramos de SO4H2, ponerlo en un matraz y disolver con agua hasta conseguir 1000 ml de disolución.',
      'Tenemos que pesar 196 gramos de SO4H2, ponerlo  en un matraz y disolver con agua hasta conseguir 1000  ml de disolución.',
      'Tenemos que pesar 98 gramos de SO4H2, ponerlo en un matraz y disolver con agua hasta conseguir 500 ml de disolución.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-88',
    statement:
      'Se realiza una determinación de glucosa y el  autoanalizador nos ha dado un resultado de 1,1 g/l.  ¿Cuál será el resultado expresado en mg/dl?:',
    options: ['11,00mg/dl', '110mg/dl', '0,11mg/dl', '1,10mg/dl'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-89',
    statement:
      '¿Cuál de las siguientes definiciones se corresponde  con el concepto \"precisión\" dentro de un resultado?:',
    options: [
      'Cercanía de una serie de mediciones alrededor del  valor promedio.',
      'La variabilidad de una medida en torno a su valor verdadero.',
      'Conjunto de valores dentro de los cuales está  situado el valor verdadero.',
      'Lo cerca que se encuentra el valor real del valor promedio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-90',
    statement:
      'Ante la situación de un fallo de control interno de  calidad, la medida a tomar más oportuna sería:',
    options: [
      'Repetir el control hasta que se sitúe en valores aceptables.',
      'Entregar todos los resultados de lasseries previas al  control lo antes posible.',
      'Suspender la entrega de resultados hasta averiguar  y corregir la causa de error.',
      'Llamar al servicio técnico.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-91',
    statement:
      'El anticoagulante que se utiliza preferentemente en  los estudios bioquímicos procedentes de urgencias  es:',
    options: ['Heparina de litio.', 'EDTA.', 'Citrato trisódico.', 'Heparina sódica.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-92',
    statement: '¿Cuál es el ángulo apropiado de inserción de la aguja  para la flebotomía?',
    options: ['5º.', '15º.', '30º.', '45º.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-93',
    statement: 'Es criterio de exclusión de una muestra biológica:',
    options: [
      'Envase no adecuado.',
      'Envase no identificado.',
      'Transporte inadecuado.',
      'Todas correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-94',
    statement: 'Las reglas de Westgard sirven para:',
    options: [
      'Detectar sólo el error aleatorio.',
      'Comparar la precisión de métodos.',
      'Detectar sólo el error sistemático.',
      'Detectar tanto el error aleatorio como el  sistemático.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-95',
    statement:
      'Entre las causas de hemolisis de muestras de suero,  están todas las siguientes, excepto:',
    options: [
      'La exposición a la luz.',
      'Extracción dificultosa.',
      'Permanencia prolongada de la muestra sin  centrifugar.',
      'Choque térmico.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-96',
    statement:
      'Antes de la centrifugación de la sangre para la  obtención de suero, se debe permitir la coagulación  completa para:',
    options: [
      'Evitar contaminación.',
      'Evitar formación de cristales.',
      'Evitar liberación de bilirrubina.',
      'Evitar formación de fibrina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-97',
    statement:
      'Todas las siguientes son características de los  sistemas POCT (Point Of Care Testing), excepto una.  Señálela:',
    options: [
      'Proporcionan resultados de manera rápida.',
      'Proporcionan resultados de mayor calidad analítica.',
      'Permiten el análisis en el lugar de la asistencia  médica.',
      'Pueden ser manipulados por personas no expertas  en procedimientos analíticos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-98',
    statement:
      'La relación entre los resultados obtenidos y los  recursos y costes empleados se denomina:',
    options: ['Equidad.', 'Eficacia.', 'Efectividad.', 'Eficiencia.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-99',
    statement:
      'Uno de los conceptos básicos del control de calidad  en el laboratorio es el error total. Este concepto se  calcula con:',
    options: [
      'La media ponderada.',
      'Índice de desviación estándar.',
      'El coeficiente de variación y el error sistemático del  método.',
      'La varianza.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-100',
    statement:
      '¿Cuál es el porcentaje de individuos normales que  tienen el valor de una magnitud analítica por encima  del valor de referencia superior?:',
    options: ['5%', '2,50%', '1,65%', '1%'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-101',
    statement:
      'El valor predictivo positivo de un resultado es:  (TP=total Pacientes; VP=verdaderos positivos; FN=falsos negativos):',
    options: ['VP/(VP+FP).', 'VP/(VP+FN).', 'VP/(TP-FN).', 'VP/(TP-FP)).'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-103',
    statement:
      'La especificidad de una prueba para diagnosticar una  enfermedad se calcula según el cociente:',
    options: ['VP/(VP+FP).', '(VP+VN)/(VP+FP).', 'VP/(VP+FN).', 'VN/(VN+FP).'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-104',
    statement:
      'La desviación estándar expresada en términos de  porcentaje de la media se denomina:',
    options: [
      'Coeficiente de correlación.',
      'Coeficiente de variación.',
      'Error sistemático.',
      'Inexactitud.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-105',
    statement: 'La ISO 15189:',
    options: [
      'La otorga cualquier entidad con capacidad  acreditadora.',
      'Puede ser otorgada Únicamente por ENAC.',
      'Puede ser otorgada por empresas con auditores  acreditados por ENAC.',
      'Puede ser otorgada por cualquier empresa  acreditada para ello por ENAC.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-106',
    statement:
      '¿Cuál de los siguientes procesos no forma parte de la  fase preanalítica del laboratorio?',
    options: [
      'Preparación del paciente',
      'Transporte de muestras',
      'Mantenimiento de analizadores',
      'Interferencias de la muestra',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-107',
    statement: '¿A qué hace referencia el término \"índice sérico\"?',
    options: [
      'Determinación cuantitativa de hemoglobina,  bilirrubina y lípidos presentes en una muestra de  suero.',
      'Un conjunto de pruebas que se pueden realizar en  un analizador de bioquímica.',
      'Un registro de calibraciones específicas de lote.',
      'Un listado de conservantes que se pueden utilizar  para mantener las muestras de suero durante más  tiempo.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-108',
    statement: 'La probabilidad de obtener un resultado positivo en  un individuo enfermo es:',
    options: [
      'La sensibilidad',
      'La especificidad',
      'El valor predictivo positivo',
      'El cociente de verosimilitud positivo',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-109',
    statement:
      'Para realizar un cribado o “screening” de una  enfermedad en una población, debemos elegir una  prueba diagnóstica que sea:',
    options: [
      'Altamente específica.',
      'Poco específica.',
      'Altamente sensible.',
      'Que tenga pocos resultados falsos positivos',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-110',
    statement: 'Los valores máximos y mínimos de lectura de un  equipo los define:',
    options: ['La fiabilidad.', 'El alcance.', 'El rango de medida.', 'La exactitud.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-111',
    statement: '¿Qué determinación no precisa una muestra con  anticoagulante?',
    options: [
      'Tiempo de Protrombina.',
      'Determinación de la V.S.G.',
      'Glucosa basal.',
      'Hemoglobina.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-112',
    statement: 'El ayuno provoca:',
    options: [
      'Aumento de la bilirrubina.',
      'Aumento de la glucosa.',
      'Disminución de los triglicéridos.',
      'Todas son correctas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-113',
    statement:
      '¿Qué alteraciones provocaría la extracción sanguínea  del mismo brazo de una vía heparinizada con  perfusión de suero glucosado?',
    options: [
      'Disminución de los valores iónicos.',
      'Resultados de la cefalina alargados.',
      'Aumento del valor de la glucosa.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-114',
    statement: 'La presencia de hemólisis originará una disminución  de…',
    options: ['LDH.', 'GOT.', 'GPT.', 'Ninguna es cierta.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-115',
    statement: '¿Qué característica deben cumplir los envases para la  toma de muestras?',
    options: [
      'Ser estériles',
      'Permitir recoger la muestra con la menor  manipulación posible',
      'Disponer de cierre hermético',
      'Todas las anteriores',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-116',
    statement: 'La recogida de sangre de una gasometría se realiza:',
    options: [
      'Con jeringa especial sin anticoagulante.',
      'Con jeringa con EDTA.',
      'Utilizando como anticoagulante heparina.',
      'Todas son falsas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-118',
    statement:
      'Con respecto a la calidad de las pruebas diagnósticas,  la probabilidad de que una persona clasificada como  negativa (sana) por la prueba esté realmente sana, es  el llamado:',
    options: [
      'Valor predictivo positivo',
      'Valor predictivo negativo',
      'Valor predictivo neutro',
      'Grado de satisfacción',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-119',
    statement: '¿Para qué se utiliza el protocolo de Westgard o  Multirregla de Shewart?:',
    options: [
      'Para valorar un proceso analítico fuera de control.',
      'Para realizar una intercomparativa de resultados  entre dos analizadores.',
      'Para realizar estudio estadístico sobre la calidad en  el laboratorio.',
      'para comparar la concentración exacta de un  analito entre diferentes autoanalizadores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-120',
    statement: 'Con respecto al Coeficiente de Variación (C.V.),  señale la RESPUESTA CORRECTA:',
    options: [
      'Es un índice de dispersión que permite comparar  dos variables. Se suele expresar en forma de  porcentaje.',
      'Su valor es igual a la raíz cuadrada positiva de la  varianza.',
      'Es una medida de posición.',
      'Al igual que la desviación típica, no permite  comparar variables distintas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-122',
    statement:
      'La calidad puede definirse desde tres puntos de vista  fundamentales. Señale el INCORRECTO:',
    options: ['Instrucción', 'Proceso', 'Estructura', 'Resultados'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-123',
    statement:
      'Generalmente, en muestras hemolizadas, ¿qué  debemos hacer si se nos solicita la determinación de  LDH?',
    options: [
      'Determinar solo sus isoenzimas.',
      'Añadir glutatión al suero.',
      'Pedir nueva muestra.',
      'Realizar la determinación a 37ºC.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-124',
    statement: 'Definimos la sensibilidad diagnóstica como:',
    options: [
      'Capacidad de la prueba para detectar la  enfermedad cuando está presente.',
      'Capacidad de la prueba para detectar la  enfermedad cuando no está presente.',
      'Probabilidad de que un paciente tenga la  enfermedad cuando se obtenga un resultado positivo.',
      'Probabilidad de que un sujeto con un resultado  negativo en la prueba esté realmente sano.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-125',
    statement: 'Respecto a los documentos de calidad, señale la  RESPUESTA CORRECTA:',
    options: [
      'No es requisito que el sistema de gestión de calidad  (SGC) esté documentado.',
      'El manual de calidad es el documento básico sobre  el que se articula todo el SGC. En él se resumen todos  los procedimientos y la interacción de los procesos  que se realizan.',
      'En un laboratorio acreditado no es necesario  disponer de procedimientos generales de gestión, ya  que es competencia propia de la dirección.',
      'Todas las anteriores respuestas son correctas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-126',
    statement:
      '¿Qué respuesta se ajusta más a la definición de un  procedimiento normalizado de trabajo (PNT)?',
    options: [
      'El PNT es una herramienta de armonización clave  para garantizar que se lleven a cabo todos los procesos  y procedimientos.',
      'El PNT es una técnica de gestión de costes  estandarizada para garantizar ahorros en los procesos  y procedimientos.',
      'El PNT es un protocolo de normalización innovador  que regula la independencia en los procesos y  procedimientos.',
      'El PNT es una herramienta de normalización que  establece una base estandarizada para todos los  procesos y procedimientos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-127',
    statement: 'La aplicación de la norma ISO en los laboratorios es:',
    options: [
      'Voluntaria.',
      'Obligatoria.',
      'Depende de la legislación actual autonómica.',
      'Es obligatoria en los laboratorios clínicos con gran  volumen analítico.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-129',
    statement: 'Los errores más frecuentes con muestras sanguíneas  se cometen en la fase:',
    options: ['Analítica', 'Preanalítica', 'Postanalítico', 'En toles sin diferencia'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-130',
    statement:
      'Para una rápida visualización de la validez de un  resultado de un control de calidad, ¿qué herramienta  podemos utilizar?',
    options: [
      'La gráfica Levey-Jennings',
      'El error aleatorio',
      'El coeficiente de variación',
      'La varianza',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-132',
    statement:
      'Si necesitamos realizar una prueba de cribado  (screening) para determinar anticuerpos contra VIH,  utilizaremos:',
    options: [
      'Una técnica con una sensibilidad del 98% y 80% de  especificidad.',
      'Una técnica con una especificidad del 100% y 75%  de sensibilidad.',
      'Es una técnica de alta resolución.',
      'Es una técnica de aglutinación en gel.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-134',
    statement:
      'El grado de consecución de los objetivos propuestos  sin tener en cuenta el coste empleado, se denomina:',
    options: ['Eficiencia.', 'Adecuación.', 'Equidad.', 'Eficacia.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-135',
    statement:
      'Las empresas que transportan las muestras  biológicas deben tener en cuenta tres variables  principales que son:',
    options: [
      'Trazabilidad, tiempo y temperatura.',
      'Temperatura, disposición y vehículos adecuados.',
      'Fase preanalítica, analítica y postanalítica.',
      'Solo es necesaria la acreditación correcta de la  empresa.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-136',
    statement:
      '¿Qué significan las siglas GLP en castellano dentro de  la acreditación en el laboratorio?:',
    options: [
      'Buenas prácticas de laboratorio.',
      'Gen libre de productos químicos.',
      'Productos generados libremente.',
      'Labores propias genéticas',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-137',
    statement: '¿Qué es el procesamiento de la muestra?:',
    options: [
      'Es el período comprendido entre la recogida de la  muestra y la llegada al laboratorio, incluyendo sus  actividades.',
      'Las actividades llevadas a cabo desde la información  dada al paciente para la recogida de la muestra y su  entrega en el laboratorio.',
      'Las actividades llevadas a cabo en el período  comprendido entre su obtención y su análisis real.',
      'Las respuestas B y C son correctas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-138',
    statement: 'Dentro del control de calidad, ¿qué es la exactitud?',
    options: [
      'La aproximación del valor a una medida de sí  mismo, cuando se realizan varias determinaciones  empleando el mismo método.',
      'La aproximación de una medida a su valor real.',
      'La reproductividad de un método.',
      'La variabilidad de una medida alrededor de su valor  verdadero.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-139',
    statement:
      'En una conexión unidireccional entre el Analizador y  el sistema informático del Laboratorio:',
    options: [
      'La información sólo puede pasar del sistema  informático del laboratorio al analizador.',
      'El analizador transmite primero el número de  identificación al sistema informático del laboratorio  para que este comunique las pruebas que han sido  solicitadas.',
      'La información sólo puede pasar del analizador al  sistema informático del laboratorio.',
      'La comunicación de los resultados desde el  analizador al sistema informático de laboratorio debe  hacerse siempre de forma manual.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-140',
    statement:
      'El color amarillo-verdoso característico de los sueros  ictéricos se debe a la presencia en la muestra de:',
    options: ['Triglicéridos.', 'Ácido úrico.', 'Hierro.', 'Bilirrubina.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-141',
    statement:
      'Evaluar la probabilidad de que un individuo, en una  población definida, se beneficie de la aplicación de  una tecnología sanitaria bajo condiciones reales de  aplicación, se denomina…',
    options: ['Eficacia.', 'Eficiencia.', 'Efectividad.', 'Utilidad.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-142',
    statement:
      'Un laboratorio ha recibido las siguientes  valoraciones de error al participar en un programa de  intercomparación para un mensurando dado, en  periodos consecutivos: 4.0%, 0.0%, -4.0 %, 3.0% y - 3.0% ¿Qué sesgo muestra el laboratorio?',
    options: ['3,50.', '2,80.', '0.', '-2,80.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-143',
    statement:
      'Para el cálculo de la especificidad diagnóstica de una  prueba, ¿cuál de las siguientes opciones es necesaria  para poder calcularla?',
    options: [
      'Verdaderos positivos y falsos positivos.',
      'Verdaderos negativos y falsos positivos.',
      'Falsos negativos y verdaderos positivos.',
      'Falsos negativos y verdaderos negativos',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-144',
    statement:
      'En cuanto a la preanalítica del tubo con citrato como  anticoagulante, es falso que',
    options: [
      'Se suele utilizar para estudios de coagulación.',
      'Se debe rellenar con la cantidad adecuada de  sangre de modo que se mantenga la proporción  anticoagulante/muestra: 1/9.',
      'En el orden de llenado correcto, se debe obtener  después del tubo con EDTA tripotásico.',
      'Tras la extracción debe mezclarse inmediatamente  la sangre con el citrato.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-145',
    statement:
      'El grado de consecución de los objetivos sin tener en  cuenta el coste empleado, ¿qué define?',
    options: ['La Eficiencia', 'La Eficacia', 'La Adecuación', 'La Equidad'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-146',
    statement:
      '¿Con qué indicador o parámetro estadístico se  debería medir un error que se produce por factores  incontrolables del procedimiento de medida?',
    options: [
      'Desviación estándar y coeficiente de variación',
      'Error aleatorio',
      'Error total',
      'Error sistemático',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-147',
    statement:
      'Según el código de colores de los tapones de tubos  de vacío, utilizaremos para el estudio de VSG  (velocidad de sedimentación globular) los de color:',
    options: ['Malva', 'Verde', 'Negro', 'Azul'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-148',
    statement:
      'Respecto a los tubos de recogida de muestras  sanguíneas, ¿cuál es la respuesta CORRECTA?',
    options: [
      'El tubo con el aditivo EDTA K3 se utiliza para  obtener suero y realizar pruebas bioquímicas.',
      'El tubo sin aditivos se utiliza para obtener plasma y  realizar pruebas de coagulación.',
      'El tubo con el aditivo de heparina se utiliza para  obtener sangre total y realizar pruebas de  hematimetría.',
      'El tubo con el aditivo citrato sódico se utiliza para  obtener plasma y realizar pruebas de coagulación.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-149',
    statement:
      'En pacientes con infusión parenteral de suero  glucosado u otros, y en relación a la toma de  muestras:',
    options: [
      'Existen técnicas definidas para la extracción de  muestras en estos casos, que deben seguirse  cuidadosamente para evitar la contaminación',
      'No afecta a la toma de muestras',
      'No hay modo de extraer bien la muestra si el  paciente tiene una vía',
      'Es mejor demorar la extracción hasta que se retire  la vía',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-150',
    statement:
      'Si hablamos de calidad en el laboratorio clínico, qué  dirías que es la especificidad:',
    options: [
      'La capacidad de una prueba de dar un resultado  negativo en un sujeto sano',
      'Es el porcentaje de verdaderos negativos',
      'La capacidad de una prueba de dar un resultado  positivo en un sujeto sano',
      'La A y la B',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-152',
    statement: 'En una disolución llamamos soluto a la sustancia:',
    options: [
      'Que se halla en menor proporción',
      'Que se halla en mayor proporción',
      'Que es líquida',
      'Que es disolvente',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-154',
    statement: '¿Cuál de las siguientes afirmaciones es verdadera?',
    options: [
      'La sensibilidad de una prueba diagnóstica mide su  capacidad para detectar sujetos sanos cuando dicha  enfermedad está presente',
      'La especificidad de un test diagnóstico mide su  capacidad para descartar la enfermedad que se  estudia cuando dicha enfermedad está ausente',
      'Cuanto mayor sea la sensibilidad de una prueba  diagnóstica menor será la proporción de falsos  positivos',
      'Todas las anteriores son correctas',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-155',
    statement:
      'Los requisitos de reproducibilidad, volumen pequeño  de reactivo, técnica rápida, sencilla, reactivos  estables antes y después de su reconstitución,  pertenecen a:',
    options: [
      'Fase pre-analítica',
      'Fase analítica',
      'Fase post-analítica',
      'Todas las anteriores son correctas',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-156',
    statement: '¿Con qué parámetro valoramos a la dispersión de la  muestra?:',
    options: ['Media', 'Mediana', 'P valor', 'Desviación estándar'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-157',
    statement: 'El citrato sódico se utiliza como anticoagulante en:',
    options: [
      'Pruebas bioquímicas',
      'Recuentos celulares',
      'Pruebas de coagulación',
      'En ninguna de ellas',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-159',
    statement: '¿Cuál de las siguientes afirmaciones es incorrecta?:',
    options: [
      'La actividad AST puede aumentar hasta tres veces  con el ejercicio intenso.',
      'Los niveles de AST no se afectan por la ingesta de  alimentos.',
      'La hemólisis no influye sobre los niveles de AST.',
      'Los valores inesperadamente elevados en alguna  aminotransferasa serán evaluados con nueva muestra',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-160',
    statement: '¿Que se obtiene centrifugando un tubo de sangre con  citrato como anticoagulante?:',
    options: ['Sangre total.', 'Plasma', 'Suero.', 'Botón de hematíes.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-161',
    statement:
      'Como se prepara 100 mL de disolución de sacarosa al  6% p/v partiendo de una disolución de sacarosa al  30% p/v:',
    options: [
      '18 mL de disolución de sacarosa al 30% p/v y hasta  100 mL de H2O',
      'No se puede hacer.',
      '20 gramos de sacarosa y 80 mL de H2O.',
      '20 mL de disolución de sacarosa al 30% y añadimos  hasta 100 mL de H2O.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-162',
    statement:
      'Qué cantidades emplearíamos para preparar una  disolución final de 200mL de lejía (NaClO), en agua  (H2O) a una concentración del 5% v/v: Peso atómico:  Na=23; Cl=35.5; O=16; H=1',
    options: [
      '10 mL de lejía y 200 mL de H2O.',
      '10 mL de lejía y hasta 200 mL de H2O.',
      '4,65 mL de lejía y hasta 200 mL de H2O.',
      '9,3 mL de lejía y hasta 200 mL de H2O.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-163',
    statement: '¿Cuál de las siguientes etapas tiene relación con el  proceso preanalítico?:',
    options: [
      'Solicitud de análisis y obtención del espécimen.',
      'Identificación y transporte al laboratorio.',
      'Recepción y clasificación.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-164',
    statement: 'Con respecto a los tipos de muestras, señale la opción  verdadera:',
    options: [
      'El tipo de muestra va a depender del tipo de  parámetro que se va a analizar y el método que se  vaya a utilizar.',
      'Hay ciertas muestras que presentan requisitos  especiales de conservación y de envío al laboratorio.',
      'En el laboratorio debe existir un protocolo  preanalítico de manejo de muestras.',
      'Todas son verdaderas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-165',
    statement:
      'La toma de muestra de sangre se obtiene por punción  venosa, arterial o capilar, aunque de forma general  se obtiene por punción venosa debido a',
    options: [
      'Causa un menor traumatismo para el paciente.',
      'Posibilidad de un volumen suficiente de sangre.',
      'Mayor facilidad de obtención.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-166',
    statement: 'Con respecto a las muestras sanguíneas',
    options: [
      'Un transporte rápido y una temperatura de  almacenaje adecuada mejoran la fiabilidad de los  resultados de laboratorio.',
      'La sangre capilar se utiliza en aquellos casos en que  la analítica se va a realizar por micrométodos, muy útil  sobre todo en niños.',
      'Para la punción venosa se suele elegir el miembro  superior y en éste, la zona de flexura del codo, donde  las venas son más accesibles y fijas. De fuera a dentro,  encontramos: vena cefálica, vena mediana y vena  basílica.',
      'Todas las respuestas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-167',
    statement: 'Durante la extracción sanguínea, señale la respuesta  falsa',
    options: [
      'El sitio de punción se limpia con un antiséptico.',
      'Se coloca una banda elástica alrededor de la parte  superior del brazo con el fin de aplicar presión en la  zona. Esto hace que la vena que está debajo se llene  de sangre para facilitar la venopunción.',
      'Para la punción venosa se suele elegir el miembro  superior y en este, la zona de flexura del codo, donde  las venas son más accesibles y fijas.',
      'La banda elástica colocada alrededor del brazo para  facilitar el llenado de la vena para la venopunción, no  se retira del brazo hasta que una vez retirada la aguja  el paciente deja de sangrar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-168',
    statement: 'En cuanto a los criterios de aceptación de muestras,  señale la respuesta correcta',
    options: [
      'Las muestras se reciben en el contenedor adecuado  para las determinaciones solicitadas.',
      'Las muestras cumplen el tiempo y las condiciones  de temperatura establecidas durante el transporte.',
      'Las muestras se encuentran debidamente  identificadas y etiquetadas.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-169',
    statement:
      'En el manual de laboratorio deben estar recogido los  siguientes aspectos acerca de la fase preanalítica',
    options: [
      'En qué tipo de contenedor se debe recibir la  muestra.',
      'Rango de temperatura en que se debe transportar  la muestra.',
      'Correcta preparación del paciente según la prueba  solicitada.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-170',
    statement: 'En la extracción de muestras de sangre, el tubo con  tapa verde nos indica que',
    options: [
      'El tubo contiene fluoruro oxalato como  anticoagulante.',
      'El tubo contiene EDTA como anticoagulante.',
      'El tubo contiene heparina de litio como  anticoagulante.',
      'El tubo contiene citrato sódico como  anticoagulante.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-171',
    statement: 'En cuanto a los criterios de rechazo de muestras,  señale la afirmación correcta',
    options: [
      'Tubos o contenedores de muestra sin  identificación.',
      'Muestra coagulada para determinaciones a realizar  en sangre total.',
      'Jeringa de gases con burbujas de aire.',
      'Todas las anteriores son criterios de rechazo de  muestras.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-172',
    statement: 'Para las pruebas de coagulación se emplea sangre',
    options: ['Con citrato 1:4.', 'Con citrato 1:9.', 'Con CPD y citrato.', 'Con Heparina.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-173',
    statement:
      'Ante la demora en la realización de los análisis, las  muestras de sangre generalmente han de  refrigerarse a una temperatura de',
    options: ['Entre 4-8 ºC.', 'Entre 10-15 ºC', 'Entre 15-20 ºC', 'Entre 0-5 ºC'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-174',
    statement:
      'En el laboratorio debe existir un registro actualizado  de todos los equipos de medición y ensayo. Este  registro se compone de los siguientes datos:',
    options: [
      'Nombre del equipo, del fabricante y ubicación  habitual.',
      'Fecha de recepción y puesta en servicio.',
      'Registro de mantenimientos preventivos y  correctivos.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-175',
    statement: 'Los beneficios de acreditar un laboratorio son',
    options: [
      'Reducir los riesgos, pues la acreditación va a  permitir determinar si se está realizando el trabajo  correctamente.',
      'Compromiso de todo el personal del laboratorio  con el cumplimiento de los requisitos de calidad.',
      'Evaluaciones periódicas del organismo de  acreditación que proporcionan un punto de referencia  para mantener la competencia.',
      'Todas las respuestas anteriores son verdaderas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-177',
    statement: 'La norma ISO 15189',
    options: [
      'Contiene los requisitos que los laboratorios clínicos  que analizan muestras humanas tienen que cumplir.',
      'Dentro de los requisitos está el control sobre los  procesos clave: preanalíticos, analíticos y  postanalíticos.',
      'Dentro de los requisitos está la evaluación y gestión  de riesgos.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-178',
    statement: 'La definición \"aseguramiento de la calidad\" incluye  las siguientes:',
    options: [
      'Acciones planificadas y sistemáticas necesarias para  proporcionar la confianza de que un producto  satisfaga los requisitos sobre calidad.',
      'Actividades llevadas a cabo por el laboratorio con la  finalidad de mejorar su funcionamiento.',
      'Actividades que incluyen la promoción del uso  rutinario del control de calidad interno.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-179',
    statement:
      'Un parámetro que representa una medida  cuantitativa para evaluar la calidad de aspectos  importantes de la gestión o de otros procesos es',
    options: [
      'Un indicador.',
      'Un registro.',
      'Un procedimiento de trabajo.',
      'Una instrucción técnica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-180',
    statement: 'La aproximación al valor verdadero de una magnitud  se conoce como',
    options: ['Precisión.', 'Exactitud.', 'Varianza.', 'Límite de detección.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-181',
    statement: 'El grado de cumplimiento de los objetivos  planificados se denomina',
    options: ['Garantía de calidad.', 'Eficacia.', 'Efectividad.', 'Eficiencia.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-182',
    statement:
      'El organismo delegado de evaluación de la  conformidad (certificación) en España se llama',
    options: ['ISO.', 'AENOR.', 'OEC.', 'ACNUR.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-183',
    statement: 'El mantenimiento de los analizadores',
    options: [
      'Se realizará de acuerdo con las instrucciones  escritas.',
      'No serán válidas las instrucciones suministradas por  el fabricante.',
      'Mantenimiento y calibración pueden ser  entendidas como dos actividades idénticas.',
      'Todas son correctas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-184',
    statement:
      'La norma que estandariza los recipientes de un solo  uso para la recogida de muestras de sangre venosa  es:',
    options: ['UNE-EN ISO 6710.', 'UNE-EN ISO 6170.', 'UNE-EN ISO 6711.', 'UNE-EN ISO 6715.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-186',
    statement: 'Señala la respuesta incorrecta:',
    options: [
      'El plasma constituye el 55-60% del volumen  sanguíneo.',
      'El suero sanguíneo contiene fibrinógeno.',
      'El plasma sanguíneo contiene los factores de la  coagulación.',
      'El suero contiene lipoproteínas que transportan  colesterol.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-187',
    statement:
      '¿Cuáles son los parámetros de calidad dentro de un  laboratorio de análisis clínico?:',
    options: [
      'La eficacia de la resolución de incidencias.',
      'El grado de cumplimiento de plazos.',
      'La fiabilidad de los resultados emitidos.',
      'Todas las respuestas son ciertas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-188',
    statement: 'Señale cuál de las siguientes es un error sistemático:',
    options: [
      'Desviación de todas las mediciones en +2  desviaciones estándar.',
      'Error de pipeteo en una muestra.',
      'Desviación de una medición en +2 desviaciones  estándar.',
      'Fallo mecánico del analizador con consiguiente  pérdida de la muestra.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-189',
    statement:
      'Cuando el suero tiene aspecto turbio, opalescente,  debido a la concentración de lipoproteínas se dice  que está:',
    options: [
      'Hemolizado.',
      'Lipémico.',
      'Ictérico.',
      'Si presenta ese aspecto es porque es plasma y no  suero.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-190',
    statement: '¿Cuál de estos no es un error preanalítico?:',
    options: [
      'Una aguja obstruida en el analizador en el  momento del pipeteo de la muestra.',
      'El no poner el código de identificación a la muestra.',
      'La congelación de una muestra de sangre cuando  solo tenía que ser refrigerada.',
      'El envío de la muestra en un recipiente inadecuado  (distinto anticoagulante o conservante…).',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-191',
    statement: '¿Cuál de estas normas es exclusiva de Laboratorio?:',
    options: ['ISO 9001.', 'ISO 15189.', 'ISO 17025.', 'ISO 45001.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-193',
    statement:
      'Para controlar los procesos de medida usando  materiales de control y decidir la conformidad o  disconformidad del proceso de medida, ¿qué gráfica  tendremos en cuenta?',
    options: [
      'Gráfica de Westgard.',
      'Gráfica de Levey-Jenings.',
      'Gráfica Cusum.',
      'La B y la C son verdaderas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-194',
    statement:
      'En estadística, el intervalo comprendido entre  aproximadamente dos desviaciones estándar  alrededor de la media se conoce como:',
    options: [
      'Intervalo de probabilidad del 99%.',
      'Intervalo de probabilidad del 95%.',
      'Intervalo de confianza del 95%.',
      'Intervalo de confianza del 99%.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-195',
    statement:
      'Los anticoagulantes empleados para la obtención de  plasma basan su acción en la combinación con el  calcio, excepto:',
    options: ['Fluoruro sódico.', 'Oxalato potásico.', 'EDTA.', 'Heparina.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-199',
    statement:
      'Cuando la concentración de un analito es tan alta que  queda fuera del intervalo lineal de la curva de  calibración:',
    options: [
      'Se puede preconcentrar el analito antes de  someterlo al experimento.',
      'Conviene diluirlo.',
      'No se le puede aplicar la técnica de la  espectrofotometría.',
      'Habrá que reducir el fondo espectral para que la  señal quede incluida en el espectro.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-200',
    statement: 'El procesamiento de muestras es:',
    options: [
      'El periodo comprendido entre la recepción de la  muestra y el envío de los resultados.',
      'El conjunto de pruebas realizadas en las muestras.',
      'El periodo comprendido entre la recepción de la  muestra y el análisis de la misma.',
      'El conjunto de normas estandarizadas para la toma  de muestra en urgencias.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-201',
    statement:
      'En una balanza se desea pesar 1 mM de NaCI (masa  molecular 36,5), ¿Qué debería indicar la misma?',
    options: ['36.5 g.', '0.0365 mg.', '0.0365 g.', '365 mg.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-202',
    statement:
      'Para diluir un suero añadimos 900 microlitros de  solución salina y 0.1 ml de suero problema al primer  tubo; se homogeniza, y se pasan 500 microlitros de  este tubo a un segundo tubo; se añaden otros 500  microlitros de solución salina al primer tubo ¿Qué  dilución final de suero hemos conseguido en el  primer tubo?',
    options: ['1:20.', '1:10.', '1:5.', '1:200.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-203',
    statement: 'No se considera como líquido corporal:',
    options: ['Sangre.', 'Orina.', 'Células.', 'LCR.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-204',
    statement: 'NO es un objetivo que se persiga al analizar las  muestras:',
    options: [
      'Realizar un correcto diagnóstico al proceso  patológico.',
      'Descartar posibles patologías que se creen  instauradas por la presencia de sintomatología típica.',
      'Obtener una alta calidad en la toma de muestras.',
      'Facilitar herramientas al facultativo para poder  prescribir correctamente los fármacos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-205',
    statement:
      'Tenemos una disolución de HCL 0,1 Molar y  queremos obtener 100 ml de disolución 0,1 Normal  ¿Qué volumen de disolución 0,1 Molar debemos  tomar?',
    options: [
      '1 litro.',
      '1 mililitro y enrasamos con agua hasta 100 ml.',
      '10 mililitros y enrasamos con agua hasta 100 ml.',
      '100 mililitros.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-206',
    statement: 'A la capacidad de un test para detectar la  enfermedad, se la denomina:',
    options: ['Especificidad.', 'Sensibilidad.', 'Eficacia.', 'Eficiencia.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-207',
    statement: '¿Qué es un PNT (Procedimiento normalizado de  trabajo)?',
    options: [
      'Es una revista sanitaria.',
      'Es un documento escrito que describen la secuencia  específica de operaciones y métodos que deben  aplicarse en el laboratorio para una finalidad  determinada.',
      'Son documentos complementarios al Manual de  Calidad cuya finalidad fundamental es establecer  cómo, quién, y cuándo debe realizarse una actividad  allí prevista.',
      'B y C son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-208',
    statement:
      'Necesitaremos utilizar una disolución de ácido  sulfúrico H₂SO₄ 0,05 Normal ¿cuál de las soluciones  que se indican a continuación podría servirnos, por  ser equivalente?',
    options: ['0,1 Molar.', '0,05 Molar.', '0,025 Molar.', '0,005 Molar.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-209',
    statement:
      'Al representar un control gráficamente, cuando en el  eje X se representa los días del mes y en el eje Y se  representa el valor de la media y sus desviaciones  estándar, ¿nos referimos al gráfico de?:',
    options: [
      'Gráfico de Levy-Jennings.',
      'Gráfico de CuSum.',
      'Gráfico de convergencia de Youden.',
      'Gráfico de control de atributos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-210',
    statement:
      '¿Cuál de los siguientes anticoagulantes actúa  inhibiendo la acción de la trombina?:',
    options: [
      'Las sales de EDTA.',
      'El citrato sódico.',
      'El ácido cítrico-citrato-dextrosa (ACD).',
      'La heparina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-212',
    statement:
      'Para establecer el nivel de precisión que los  laboratorios deben alcanzar, se han desarrollado  diversos criterios y métodos a lo largo del tiempo.  Señale cuál de los siguientes NO es uno de ellos:',
    options: ['Criterio de Tonks', 'Método de Youden', 'Método Six Sigma', 'Criterio de Aspen'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-213',
    statement:
      '¿Qué parámetro NO se determina mediante  dispositivos POCT (Point of Care Testing)?',
    options: ['Hematocrito.', 'Glucosa.', 'SO2.', 'Vitamina B12.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-215',
    statement: 'Entre las causas más frecuentes de rechazo de  muestras se encuentra:',
    options: ['Lipidemia.', 'Hemólisis.', 'Contenedor inapropiado.', 'Todas son ciertas.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-217',
    statement:
      'Respecto a los múltiplos y submúltiplos de las  unidades básicas, el prefijo “Pico” con abreviatura  “p” corresponde a la equivalencia:',
    options: ['10-3.', '10-6.', '10-9.', 'Ninguna de las anteriores es correcta.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-218',
    statement:
      'En relación con los criterios de obtención de  muestras, todas las afirmaciones son ciertas,  excepto:',
    options: [
      'Confirmar la identidad del paciente.',
      'No todas las muestras deben considerarse  contaminantes.',
      'Verificar que el paciente ha seguido las  instrucciones previas.',
      'Comprobar el cierre hermético de los  contenedores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-219',
    statement:
      'En la capacidad de una prueba analítica, para no dar  positividad, cuando se aplica al estudio de las  muestras que no contienen el analito, estamos  hablando de:',
    options: ['Especificidad.', 'Fiabilidad.', 'Sensibilidad.', 'Precisión.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-220',
    statement: 'Los controles internos y externos se encuentran  dentro de:',
    options: ['Fase preanalítica.', 'Fase analítica.', 'Fase postanalítica.', 'Fase cero.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-223',
    statement:
      '¿Qué ventaja tiene realizar las determinaciones  bioquímicas urgentes en una muestra de plasma en  lugar de en una muestra de suero?:',
    options: [
      'Los resultados son más fiables al disminuir la  variabilidad intraindividual.',
      'Impide la hemólisis de la muestra y por ello evita  interferencias entre los distintos tests.',
      'Disminuye el tiempo de respuesta de los resultados.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-224',
    statement: 'Señale la respuesta correcta. Respecto a los  documentos de calidad:',
    options: [
      'El manual de calidad es el documento básico sobre  el que se articula todo el Sistema de Gestión de  Calidad. En él se resumen todos los procedimientos y  la interacción de los procesos que se realizan.',
      'En los planes de calidad se debe dejar constancia de  que la organización y el Sistema de Gestión de Calidad existen y funcionan conforme a lo  establecido.',
      'Los procedimientos específicos explican cómo se  utiliza un determinado equipo y muestran la  estrategia de la organización.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-227',
    statement: 'Señala la correcta:',
    options: [
      'El personal técnico del laboratorio no tiene  competencias en el mantenimiento de equipos, ya  que corresponde esa tarea al coordinador o supervisor  en su caso.',
      'El mantenimiento de los equipos es competencia  exclusiva de los fabricantes de dichos equipos.',
      'La formación del personal en el mantenimiento de  equipos es vital para su correcto funcionamiento de  los mismos.',
      'B y c son correctas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-228',
    statement:
      'De la siguiente relación: 5, 2, 0, 6, 3, 1, 1, 3, 1, 4. ¿Cuál es la Mediana y la Moda?',
    options: [
      'La moda es 5 y la mediana 2,5.',
      'La moda es 1 y la mediana 2,5.',
      'La moda es 2,5 y la mediana 2,6.',
      'La moda es 1 y la mediana 2,6.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-229',
    statement: 'El grado de ausencia de error aleatorio se conoce  como:',
    options: ['Confiabilidad.', 'Fiabilidad.', 'Precisión.', 'Validez externa.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-230',
    statement:
      'La probabilidad de que una prueba resulte positiva  cuando existe una enfermedad, se conoce como:',
    options: ['Exactitud.', 'Sensibilidad.', 'Especificidad.', 'Valor predictivo positivo.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-231',
    statement:
      '¿Qué norma internacional de calidad para un  laboratorio de análisis y de calibración, tiene en  cuenta las fases de pre-analítica, analítica y post analítica?',
    options: ['ISO 17025.', 'ISO 15189.', 'ISO 14001.', 'ISO 9001.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-232',
    statement: 'La mezcla homogénea de dos o más sustancias es  conocida como:',
    options: [
      'Dilución',
      'Disolución',
      'Solubilidad',
      'Todas las respuestas anteriores son correctas',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-233',
    statement: 'Hablamos de error de método cuando:',
    options: [
      'Depende del técnico que está realizando el análisis.',
      'Depende del propio equipo.',
      'Es inherente al método que se está utilizando.',
      'Se produce de manera casual/ no pueden evitarse  ni medirse.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-234',
    statement: '¿Cómo hay que actuar para obtener el suero de una  muestra?',
    options: [
      'Centrifugar inmediatamente el tubo de sangre sin  aditivos.',
      'Centrifugar inmediatamente el tubo de sangre con  coagulante.',
      'Esperar a que se forme el coágulo y centrifugar el  tubo.',
      'Esperar una hora y no centrifugar el tubo.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-235',
    statement:
      '¿Cómo se denomina la capacidad de diferenciar dos  señales muy parecidas del mismo analito?',
    options: ['Sensibilidad.', 'Especificidad.', 'Selectividad.', 'Linealidad.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-236',
    statement: '¿De qué pasos consta la fase preanalítica?',
    options: [
      'Identificación y manipulación de muestras.',
      'Clasificación de muestras y alicuotado.',
      'Alicuotado y distribución de muestras.',
      'Identificación, manipulación, clasificación,  alicuotado y distribución de muestras.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-237',
    statement: 'La mayoría de los errores en el laboratorio se  producen...',
    options: [
      '...en la fase analítica.',
      '...en el laboratorio de urgencias.',
      '...en la fase preanalítica.',
      '...en el banco de sangre.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-238',
    statement: '¿Cómo se denomina el promedio de un conjunto  finito de datos?',
    options: ['Media.', 'Mediana.', 'Moda.', 'Varianza.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-239',
    statement: '¿Qué son las auditorias en los laboratorios?',
    options: [
      'Son procesos independientes.',
      'Es una técnica de control de la calidad.',
      'Pueden ser internas o externas.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-242',
    statement:
      '¿Qué tubo debe utilizarse para la determinación de  la hormona adrenocorticotrópica (ACTH)?',
    options: [
      'Suero.',
      'Plasma citratado.',
      'Plasma EDTA 3K y citrato.',
      'Plasma EDTA y aprotinina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-244',
    statement:
      'Entre los siguientes metabolitos, ¿Cuál se vería “Poco  Afectado” por la hemólisis?',
    options: ['LDH.', 'Calcio.', 'Potasio.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-245',
    statement: 'Los patrones de referencia:',
    options: [
      'Se utilizarán para la calibración de los equipos de  medida.',
      'No son utilizados nunca en los laboratorios.',
      'Serán calibrados por el Laboratorio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-246',
    statement: 'Señale la afirmación incorrecta:',
    options: [
      'En la evaluación del control de calidad interno, las  reglas Westgard permiten avisar y crear alarmas a fin  de evaluar y/o rechazar series analíticas.',
      'Las gráficas de Levey-Jennings se emplean para  evaluar el control de calidad externo.',
      'El control de calidad interno en el laboratorio nos  permite valorar la precisión de nuestro método.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-247',
    statement: '¿Qué es una curva de calibración?',
    options: [
      'Gráfica que relaciona la concentración de  soluciones de estándar de concentraciones conocidas,  con la absorbancia de cada uno de ellos a la longitud  de onda máxima.',
      'Gráfica que relaciona la dispersión de soluciones de  estándar de concentraciones conocidas, con la  absorbancia de cada uno de ellos a la longitud de onda  máxima.',
      'Ninguna de las anteriores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-248',
    statement:
      'La forma más sencilla de registrar los datos de un  control de calidad (QC) es a través de gráficos, ¿Qué  gráficos no son empleados habitualmente en los  laboratorios?',
    options: ['Bayes.', 'Youden.', 'Levey- Jennings.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-249',
    statement: 'Señale la respuesta correcta sobre la norma UNE EN  ISO 17025',
    options: [
      'Es la forma de acreditación de los laboratorios de  ensayo y calibración.',
      'Es la forma de acreditación de los laboratorios  clínicos.',
      'Es la forma de acreditación de los análisis POCT.',
      'Es la forma de acreditación de los laboratorios de  genética.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-250',
    statement: 'Señale la respuesta incorrecta sobre el error  aleatorio:',
    options: [
      'Se produce como consecuencia de la imprecisión  del proceso de medida.',
      'Puede ser ocasionado por un error en el manejo de  la pipeta.',
      'Disminuye al aumentar el número de análisis  repetidos de la muestra.',
      'Está causado por una calibración incorrecta.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-251',
    statement: 'De las siguientes definiciones señale la incorrecta:',
    options: [
      'Efecto matriz: Influencia de una propiedad de la  muestra distinta de la magnitud en la medición.',
      'Error de medida: Resultado de una medición menos  el valor verdadero del resultado',
      'Error sistemático: Error debido a factores  estructurales subyacentes que no pueden ser  controlados por el operador.',
      'Error cognitivo: Error producido por decisiones  incorrectas debidas a insuficiente conocimiento.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-252',
    statement:
      'En relación a parámetros estadísticos ¿Cuál de las  siguientes es una medida de tendencia central?',
    options: ['Varianza', 'Desviación típica o estándar', 'Moda', 'Covarianza o Pearson'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-253',
    statement: 'El objetivo de la formación de alícuotas es:',
    options: [
      'Clasificación de la muestra.',
      'Repartir la muestra para varios análisis',
      'Analizar la muestra inmediatamente',
      'Comprobar la adecuación de la muestra',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-254',
    statement: 'Poner a punto y verificar los equipos de análisis y  mantenimiento es un objetivo:',
    options: ['Del proceso analítico.', 'De la patología.', 'De gestión.', 'Específico.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-257',
    statement:
      'Indique como produce el EDTA  (etilendiaminotetraacetato) su efecto  anticoagulante:',
    options: [
      'Diluyendo la sangre',
      'Quelando el calcio',
      'Evita la transformación de protrombina en  trombina',
      'Pasando el factor X a factor Xa',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-258',
    statement:
      'Según la OMS las muestras biológicas transportadas  desde el punto de extracción hasta el laboratorio se  clasifican como ...',
    options: [
      'sustancias infecciosas de categoría A',
      'sustancias infecciosas de categoría B',
      'mercancía Biopeligrosa',
      'mercancía Peligrosa',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-259',
    statement: 'Indique cuál de los siguientes supuestos no justifica  el rechazo de una muestra:',
    options: [
      'Muestra de EDTA para hemograma coagulada',
      'Muestra sin identificar',
      'Muestra en tubo de citrato para coagulación lleno  por la mitad',
      'Muestra en tubo seco (tapón rojo) para bioquímica  coagulado',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-260',
    statement: '¿Qué es un laboratorio \"CORE\"?',
    options: [
      'Equipos portátiles en la cabecera del paciente',
      'Red de pequeños laboratorios especializados en  áreas especificas',
      'Un gran laboratorio central automatizado que  realiza la mayoría de las pruebas habituales',
      'Un laboratorio de urgencias operativo 24 horas al  día',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-261',
    statement: '¿Cuál es la diferencia entre acreditación y  certificación ISO?',
    options: [
      'La certificación informa sobre el sistema de gestión  de calidad de una organización, mientras que la  acreditación informa sobre la competencia técnica  para ejecutar actividades concretas',
      'La acreditación informa sobre el sistema de gestión  de calidad de una organización, mientras que la  certificación informa sobre la competencia técnica  para ejecutar actividades concretas',
      'Cuando una organización está certificada, también  está acreditada',
      'La acreditación se concede con la auditoría interna  y la certificación con la auditoría externa',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-262',
    statement: '¿En qué tipo de organizaciones se puede aplicar la  Norma ISO 15189:2022?',
    options: [
      'En laboratorios',
      'En organizaciones sanitarias',
      'En laboratorios clínicos',
      'En todas las organizaciones',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-263',
    statement: '¿Qué es un control externo?',
    options: [
      'Es un control de valor conocido con el que  comparamos los resultados con otros laboratorios con  condiciones iguales a las nuestras',
      'En un control de valor desconocido con el que  comparamos los resultados con otros laboratorios con  condiciones iguales a las nuestras',
      'Es una mezcla de varias muestras, que procesamos  repetidas veces para comprobar la precisión de una  técnica',
      'En un control de valor conocido que medimos  diariamente',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-264',
    statement:
      '¿Qué error de la fase post-analítica podría  comprometer la seguridad del paciente?',
    options: [
      'Muestra que llega al laboratorio sin identificar',
      'Mala preparación del paciente previo a la toma de  muestras',
      'Comunicación de resultados deficiente',
      'Trasvasar muestra de un paciente al contenedor de  otro paciente diferente',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-265',
    statement: 'Respecto al control de calidad interno, señale la  respuesta CORRECTA:',
    options: [
      'El laboratorio debe disponer de un programa de  control de calidad interno para evaluar de forma  continuada sus actividades.',
      'Los resultados de las muestras se podrán validar,  aunque los controles de calidad interno estén fuera de  los límites aceptables.',
      'La estabilidad de los materiales del control de  calidad interno permite su utilización posterior a la  fecha de caducidad.',
      'Las pruebas de control de calidad interno no  valoran la exactitud de los resultados.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-266',
    statement: 'Respecto al control de calidad externo, señale la  respuesta CORRECTA:',
    options: [
      'Al realizar los controles de calidad internos ya no  son necesarios los externos.',
      'Una entidad ·o institución independiente distribuye  material de control a los laboratorios participantes de  forma simultánea.',
      'Se conocerán por anticipado los resultados a  obtener de las muestras de control externo.',
      'No será necesario enviar los resultados obtenidos  a la entidad o institución que los envía.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-267',
    statement:
      'El procedimiento por el cual un organismo nacional  reconoce formalmente que una entidad o persona es  competente para realizar tareas específicas, se llama:',
    options: ['Validación.', 'Normalización.', 'Certificación.', 'Acreditación.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-268',
    statement:
      'Dentro del laboratorio de urgencias, ¿cuál de las  siguientes magnitudes biológicas NO se considera  urgente?',
    options: ['Troponina.', 'Drogas de abuso.', 'Hemograma.', 'Porfirinas.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-269',
    statement: 'En cuanto al error aleatorio, señale la respuesta  CORRECTA:',
    options: [
      'Es directamente proporcional a la precisión.',
      'Se produce por factores que son controlables. . .',
      'Representa el grado de discordancia entre medidas  repetidas de un mismo analito.',
      'Se soluciona con calibración.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-270',
    statement:
      'Entre las competencias profesionales, personales y  sociales de un Técnico Superior de Laboratorio de  Diagnóstico Clínico (TSLDC) está:',
    options: [
      'Proporcionar a los pacientes un ambiente  ordenado, limpio y seguro.',
      'Evaluar la coherencia y fiabilidad de los resultados  obtenidos en los análisis utilizando aplicaciones  informáticas.',
      'Tener a cargo el control de los archivos de las  historias clínicas.',
      'Para la realización de las técnicas no se seguirán los  protocolos normalizados de trabajo (PNT) ni se  cumplirán las normas de calidad.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-271',
    statement: '¿Cuál NO es una ventaja del autoanalizador?',
    options: [
      'Aumenta la precisión.',
      'Mayor rapidez.',
      'Reproductibilidad.',
      'Aumenta el error por factor humano.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-272',
    statement: '¿Qué valores críticos hay que informar después de  comprobarlos?',
    options: [
      'Hemoglobina por debajo de 5 mg/dl.',
      'Hiperglucemias e hipoglucemias.',
      'Hiperpotasemias.',
      'Todas las respuestas anteriores son ciertas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-273',
    statement:
      'Un concentrado de hematíes se puede hemolizar por  alguna de las siguientes causas:',
    options: [
      'Por una infusión simultánea con determinados  medicamentos.',
      'Por adición de sustancias hipotónicas como el agua  destilada.',
      'Por sobrecalentamiento a más de 50ºc.',
      'Por las tres causas anteriores.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-275',
    statement:
      'Respecto al Control de Calidad Interno (CCI), ¿cuál de  las siguientes afirmaciones es FALSA?',
    options: [
      'Se debe procesar a diario o siempre que midamos  esa magnitud en muestras de pacientes.',
      'Es mejor usar materiales control independientes del  proveedor de los reactivos.',
      'Es mejor utilizar los materiales control  proporcionados por el proveedor de los reactivos  porque están más ajustados.',
      'Es recomendable que el valor diana se obtenga por  métodos de referencia o por la media de otros  laboratorios que trabajen con nuestras mismas  condiciones.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-276',
    statement:
      'En relación a los conceptos estadísticos relacionados  con el control de calidad, elegir la respuesta correcta  con respecto al error aleatorio:',
    options: [
      'Es un concepto similar al error sistemático.',
      'Se produce como consecuencia de la imprecisión  del procedimiento.',
      'Viene determinados por factores controlables del  procedimiento.',
      'Es la diferencia entre el resultado obtenido y el  valor verdadero.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-277',
    statement: 'Señale la respuesta correcta respecto a los valores  críticos:',
    options: [
      'Cuando se realiza una comunicación vía telefónica  no es obligatorio confirmar la recepción de esa  información.',
      'No hace falta definir quién está autorizado a recibir  la información.',
      'La elaboración de la lista, el procedimiento de  comunicación no se tiene porque consensuar con los  clínicos.',
      'Se deben tener sistemas que evalúen y monitoricen  el procedimiento de comunicación de valores críticos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-279',
    statement: 'El intervalo de linealidad o de determinación de un  método es:',
    options: [
      'El intervalo de concentración más fiable de medida  para la determinación analítica del analito.',
      'La concentración mínima de un analito que puede  ser cuantificada en una matriz real.',
      'La dispersión de estos resultados alrededor de su  media.',
      'La diferencia (en porcentaje) entre la concentración  medida de un analito en una muestra fortificada (a la  que se le ha agregado una cantidad conocida de  estándar) y la concentración medida en la misma muestra sin fortificar, dividido por la concentración de  sustancia agregada.',
      'La concentración máxima de un analito que puede  ser cuantificada en una matriz real.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-280',
    statement:
      'La capacidad de un método analítico para determinar  exclusivamente el componente que se quiere medir  se denomina:',
    options: ['Especificidad', 'Sensibilidad', 'Linealidad', 'Límite de detección'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-281',
    statement: 'A que se denomina Exactitud:',
    options: [
      'Capacidad de determinar un analito en forma  eficaz.',
      'Igualdad de los resultados entre los diferentes  laboratorios.',
      'Concordancia de nuestro resultado con el valor  verdadero.',
      'Cantidad de variable analítica recuperada.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-282',
    statement:
      'Queremos diluir un suero a una dilución 1/5.  Teniendo en cuenta que el volumen final de muestra  es de 1 ml, ¿Qué cantidad de suero y diluyente son  necesarios?',
    options: [
      '250 ml de suero y 750 de diluyente',
      '200 ml de suero y 800 de diluyente',
      '150 ml de suero y 850 de diluyente',
      '210 ml de suero y 790 de diluyente',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-283',
    statement: 'Para un volumen final de 800 microlitros ¿Cómo se  realiza una dilución 1/40?:',
    options: [
      '100 microlitros de muestra en 700 microlitros de  diluyente.',
      '40 microlitros de muestra en 760 microlitros de  diluyente.',
      '10 microlitros de muestra en 790 microlitros de  diluyente.',
      '20 microlitros de muestra en 780 microlitros de  diluyente.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-284',
    statement:
      'Dependiendo de las determinaciones solicitadas, se  introducirá la muestra en tubos con diferentes  aditivos, y sabemos que:',
    options: [
      'El hemograma se hace siempre en tubo con EDTA  K7.',
      'El tubo para el estudio de coagulación lleva citrato  de sodio de aditivo.',
      'Todas las determinaciones del perfil bioquímico  sólo se pueden hacer en suero.',
      'El aditivo del tubo de tapón de color azul siempre  será heparina de sodio o de litio.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-285',
    statement:
      'Al conjunto de operaciones que se realiza de manera  periódica y programada sobre un instrumento  analítico, con el fin de prevenir fallos, deterioros,  averías o mal funcionamiento de los equipos, se  denomina:',
    options: ['Calibración.', 'Utilización.', 'Mantenimiento.', 'Verificación.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-286',
    statement:
      'Señale el criterio de rechazo de solicitud de pruebas,  al no garantizarse la identificación inequívoca del  paciente y sus muestras:',
    options: [
      'Solicitud con datos del paciente ilegibles.',
      'Solicitud sin datos mínimos del paciente.',
      'Solicitud sin número de muestra.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-287',
    statement:
      'La capacidad de un método analítico para determinar  exclusivamente el componente que se quiere medir  se denomina:',
    options: ['Especificidad.', 'Sensibilidad.', 'Límite de detección.', 'Precisión.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-288',
    statement:
      'La desviación estándar de un nivel de control de  calidad de sodio, en el que la media es 144 mEq/l y el  rango 129-159 mEq/l es:',
    options: ['7.5', '15', '30', '5'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-289',
    statement:
      'El transporte de las muestras desde Atención  Primaria al Laboratorio, debe cumplir unas normas.  ¿Cuál de las siguientes afirmaciones es FALSA?',
    options: [
      'El contenedor con las muestras debe ir  adecuadamente situado en el vehículo de transporte,  para que no pueda moverse.',
      'Debe evitarse que las muestras estén sometidas a  movimientos bruscos que las deterioren.',
      'Es necesario llevar en el vehículo soluciones  desinfectantes, para limpiar un posible derrame de las  muestras.',
      'Las muestras deben llegar al Laboratorio en el  menor tiempo posible para garantizar un análisis de  calidad, siendo el tope las 6 horas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-291',
    statement:
      'Varón de 39 años que acude a urgencias por fiebre  alta sin otra sintomatología acompañante. Sin  antecedentes personales de interés. Se solicita  analítica al Laboratorio de Urgencias, y se obtienen  los siguientes resultados: Glucosa: 85 mg/dL (70- 110), Urea: 26 mg/dL (10-50), Creatinina: 0.83 mg/dL  (0.73-1.3), Potasio: 7 mEq/L (3.5-5), Sodio: 135 mEq/L  (135-145). Hemograma con resultados dentro de la  normalidad. El resultado de Potasio obtenido está  considerado un Valor Crítico en su Laboratorio. ¿Cuál  debería ser la primera actuación del TEL de  Urgencias?',
    options: [
      'Se debe comunicar el resultado al profesional  sanitario al cargo de este paciente, con la mayor  inmediatez.',
      'Repetir siempre el resultado, independientemente  del tiempo que se vaya a invertir en hacerlo.',
      'Comprobar la calidad de la muestra y comprobar  que no hay hemólisis.',
      'Anular el resultado y solicitar nueva muestra.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-292',
    statement: 'El protocolo de comunicación de Valores Críticos  debe tener en cuenta:',
    options: [
      'El personal responsable de la comunicación, no  siendo necesario especificar el receptor con tal de que  llegue el mensaje.',
      'El personal responsable de la comunicación, el  receptor de la información, la vía de notificación  empleada, el registro y la evaluación periódica del  sistema.',
      'El personal responsable de la comunicación y la vía  de notificación, no siendo necesario registrar en el  caso de fracasar la comunicación.',
      'No es necesario elaborar un protocolo para los  resultados críticos, siempre que estos se comuniquen  de manera adecuada.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-293',
    statement:
      'En la implantación de un sistema de comunicación de  Valores Críticos en el Laboratorio, es FALSO que:',
    options: [
      'Sólo es necesario consensuar el protocolo con los  clínicos de Atención Primaria, ya que los de  Especializada pueden consultar con mayor precocidad  la evolución del paciente.',
      'El sistema de elaboración e implantación de un  procedimiento de valores críticos puede  confeccionarse a través de la información obtenida de  encuestas, cuestionarios, reuniones y/o creación de  comités responsables.',
      'Es el Laboratorio quién tiene la responsabilidad de  coordinar el proceso.',
      'Se debe tener en cuenta las características de la  institución a la que pertenece el laboratorio clínico.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-294',
    statement: 'En relación con los controles de calidad internos,  señale la afirmación correcta:',
    options: [
      'Los controles internos se utilizan para asegurar que  los valores obtenidos en las muestras sean fiables.',
      'Estos controles se realizan en la Fase Analítica del  proceso.',
      'Los controles internos se utilizan para evaluar de  forma continua la calidad analítica.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-296',
    statement:
      'Mientras tanto, en el laboratorio de urgencias, el  técnico especialista, siguiendo el programa de  control de calidad indicado, se dispone a introducir  en el autoanalizador el control de calidad interno.  ¿Qué características debe tener un material utilizado  como control de calidad interno (CCI)?',
    options: [
      'Que sea un material cuya matriz sea similar a las  muestras de los pacientes.',
      'Que sea monoconstituyente, de manera que no  pueda ser utilizado más que para controlar una prueba  cada vez.',
      'Que venga suministrado por el fabricante de los  equipos y reactivos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-297',
    statement:
      '¿Qué herramienta puede ser útil para una correcta,  clara y rápida visualización de la validez de un  resultado de un control de calidad?',
    options: [
      'El coeficiente de variación.',
      'El error sistemático.',
      'La gráfica de Levey-Jennings.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-298',
    statement:
      'De los siguientes procesos cuál NO forma parte de la  fase preanalítica del laboratorio:',
    options: [
      'Preparación del paciente.',
      'Transporte de muestras.',
      'Mantenimiento de equipos y autoanalizadores.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-299',
    statement: '¿Qué dato NO sería necesario para el análisis de la  muestra?',
    options: ['Tipo de muestra.', 'Perfil analítico.', 'Datos personales.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-300',
    statement: 'Señale la opción verdadera respecto a la norma UNE EN-ISO 15189:',
    options: [
      'Es una norma de acreditación específica para los  laboratorios clínicos. Incluye los requisitos de gestión  de la calidad y los requisitos que deben cumplir los  laboratorios clínicos para obtener el reconocimiento  externo de la competencia técnica para la realización  de análisis. AENOR es el organismo que acredita a los  laboratorios clínicos según esta norma.',
      'Es una norma de certificación específica para los laboratorios clínicos. Incluye los requisitos de gestión  de la calidad y los requisitos que deben cumplir los  laboratorios clínicos para obtener el reconocimiento  externo de la competencia técnica para la realización  de análisis. ENAC es el organismo que certifica a los  laboratorios clínicos según esta norma.',
      'Es una norma de acreditación específica para los  laboratorios clínicos. Incluye los requisitos de gestión  de la calidad y los requisitos que deben cumplir los  laboratorios clínicos para obtener el reconocimiento  externo de la competencia técnica para la realización  de análisis. ENAC es el organismo que acredita a los  laboratorios clínicos según esta norma.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-301',
    statement: 'Señale el enunciado correcto respecto a las normas  ISO:',
    options: [
      'UNE-EN ISO 9001:2008 sobre «Sistemas de Gestión  de Calidad. Fundamentos y vocabulario».',
      'UNE-EN ISO/IEC 17025:2005 sobre «Evaluación de  la conformidad. Requisitos generales para la  competencia de los laboratorios de ensayo y de  calibración».',
      'UNE-EN ISO 15001:2007 sobre «Laboratorios  clínicos. Requisitos particulares para la calidad y la  competencia».',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-302',
    statement: 'A la hora de registrar una muestra en el laboratorio:',
    options: [
      'Debe hacerlo personalmente el médico que lo  solicita.',
      'No se debe registrar la fecha de petición.',
      'Se le asigna siempre un número de entrada al  laboratorio.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-303',
    statement: '¿Qué indicador se obtiene en los programas de  control de calidad externo?',
    options: ['Coeficiente de variación.', 'Eficacia analítica.', 'Error total.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-304',
    statement:
      'El material cuya concentración es conocida y se  evalúa con una frecuencia, al menos, diaria y a partir  de cuyos resultados se toman decisiones inmediatas  sobre los resultados analíticos obtenidos en las  muestras de los pacientes se denomina:',
    options: ['Control de calidad interno.', 'Control de calidad externo.', 'Calibrador.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-305',
    statement: 'El área bajo la curva ROC nos da una idea:',
    options: [
      'La sensibilidad del test.',
      'La especificidad del test.',
      'El poder de discriminación de un test.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-306',
    statement: 'La sensibilidad de una prueba diagnóstica es:',
    options: [
      'El porcentaje de personas sin la enfermedad que  tienen un resultado negativo.',
      'El porcentaje de personas con la enfermedad que  tienen un resultado positivo.',
      'La proporción de falsos positivos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-307',
    statement: 'El factor que más interfiere en la determinación de  potasio sérico es:',
    options: ['Hemólisis.', 'Bilirrubina.', 'Lipemia.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-308',
    statement: 'La Fase Pre-analítica consiste:',
    options: [
      'En la solicitud de la analítica por parte del clínico  únicamente.',
      'Solamente en la recepción de la muestra por parte  del técnico.',
      'En la solicitud del análisis, recepción y distribución  de la muestra.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-309',
    statement:
      'Refiriéndonos a la calidad, los recursos humanos con  los que cuenta un laboratorio, estarían encuadrados  dentro de:',
    options: ['Estructura.', 'Proceso.', 'Resultado.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-311',
    statement:
      'El documento escrito que describe de forma  ordenada y detallada cómo se realiza una  determinada actividad rutinaria de carácter técnico,  facilitando una mayor uniformidad en la aplicación  de los métodos de ensayo y una mayor repetitividad  de los resultados, se denomina:',
    options: [
      'Registro de control de calidad.',
      'Procedimiento normalizado de trabajo.',
      'Manual de calidad.',
      'Formulario.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-312',
    statement:
      '¿Cómo se denomina el proceso por el que un  organismo autorizado evalúa, verifica y reconoce  formalmente que una entidad es competente para  realizar unas tareas perfectamente especificadas?:',
    options: ['Acreditación.', 'Auditoría.', 'Verificación.', 'Certificación.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-313',
    statement:
      'La fiabilidad de los análisis realizados en un  laboratorio de Análisis Clínicos y Microbiología  depende de:',
    options: [
      'La cantidad de muestras recibidas y procesadas.',
      'La realización en paralelo de diferentes técnicas  diagnósticas, empleadas para una misma prueba.',
      'Realizar determinaciones repetidas de una misma  prueba, en un periodo corto de tiempo.',
      'La selección apropiada de la muestra, recogida,  transporte y conservación de manera correcta.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-314',
    statement:
      '¿Cuál de las siguientes afirmaciones no es correcta  sobre el empleo de anticoagulantes?:',
    options: [
      'El ácido cítrico-(citrato)-dextrosa (ACD) se  recomienda para la realización de estudios  inmunofenotípicos leucocitarios y cultivos de médula  ósea.',
      'El citrato sódico es un anticoagulante fisiológico,  recomendable para la realización de la extensión  sanguínea.',
      'La heparina es un anticoagulante fisiológico,  recomendable para la realización de la extensión  sanguínea',
      'El oxalato sódico es un anticoagulante  recomendado para las pruebas de hemostasia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-315',
    statement:
      'En la elaboración de los Protocolos Normalizados de  Trabajo (PNT), se deben tener en cuenta varias  premisas. Indicar cuál de las siguientes respuestas es  incorrecta.',
    options: [
      'Preferiblemente los PNT deben ser redactados por  la misma persona que desarrolla habitualmente la  actividad que se describe.',
      'Las copias autorizadas no deben estar disponibles y  próximas al área de trabajo, ni distribuirse al personal.',
      'Cada PNT debe ser revisado por personal diferente  a su autor y aprobarlo por un supervisor.',
      'Debe utilizar un lenguaje claro y preciso.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-316',
    statement:
      '¿Qué nombre reciben los ejercicios interlaboratorios,  en los cuales un laboratorio se somete a unas  pruebas consistentes en el análisis de muestras de  referencia, para evaluar la calidad de los resultados  obtenido por los laboratorios participantes?:',
    options: [
      'Gráficos de control.',
      'Correlación de resultados.',
      'Ensayos de aptitud.',
      'Análisis de blancos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-317',
    statement:
      'Respecto a los gráficos de control de calidad CUSUM,  señala la respuesta incorrecta:',
    options: [
      'En su utilización se distinguen dos etapas:  preliminar y de control.',
      'Destaca mejor los errores sistemáticos que el  gráfico de Levey-Jennings.',
      'Para poner de manifiesto situaciones de falta de  control usa el “delimitador V”',
      'También se denominan gráficos de sumas  acumuladas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-318',
    statement:
      '¿Cuál de las siguientes funciones corresponde a la  dirección de calidad de un laboratorio?',
    options: [
      'Establecer la política de la calidad.',
      'Asegurarse de la disponibilidad de los recursos  adecuados para la realización de las actividades  preanalíticas, analíticas y postanalíticas.',
      'Definir las responsabilidades, autoridades e  interrelaciones de todo el personal.',
      'Asegurarse de que se establecen, implementan, y  mantienen los procesos necesarios para el sistema de  gestión de la calidad.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-319',
    statement:
      'Los resultados obtenidos al pesar un objeto de 5  gramos con 2 balanzas distintas se expresan en la  tabla adjunta. Indique cuál de las siguientes  afirmaciones es correcta: Balanza 1                 Balanza 2 Medición 1 1g         8g Medición 2 9g         7,7g Medición 3 7g         7,5g Medición 4 3g         8,1g',
    options: [
      'La balanza 1 es imprecisa y exacta.',
      'La balanza 2 es precisa pero inexacta.',
      'La balanza 1 es precisa e inexacta.',
      'La balanza 2 es imprecisa y exacta.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-320',
    statement: '¿Qué definición se corresponde con el término  \"Aseguramiento de la calidad\"?',
    options: [
      'Conjunto de las actividades necesarias para el  control y mejora de la calidad.',
      'Parte de la gestión de la calidad orientada a  examinar y conocer el grado de cumplimiento de los  requisitos establecidos en los procesos.',
      'Parte de la gestión de la calidad orientada a  proporcionar la confianza de que se cumplan los  requisitos de calidad exigidos.',
      'Conjunto de intenciones, fines, objetivos y  orientación de una organización, referentes a la  calidad.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-321',
    statement: 'Respecto al uso de heparina como anticoagulante es  incorrecto:',
    options: [
      'Actúa como anticoagulante, acelerando la acción  de la antitrombina III e inhibiendo -por tanto- el paso  de protrombina a trombina en la formación del  coágulo.',
      'Es quelante del Ca: No es apto para las  determinaciones enzimáticas que requieran calcio u  otro catión divalente como cofactor.',
      'Es el anticoagulante de elección en las muestras de  plasma que se usan para la medición de parámetros  bioquímicos.',
      'La heparina de litio no se debe utilizar para la  determinación del litio en sangre.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-323',
    statement: 'Para la obtención de una muestra, todas las  afirmaciones son correctas, excepto:',
    options: [
      'Se debe confirmar la identidad del paciente.',
      'Se debe confirmar que el paciente ha seguido las  instrucciones previas.',
      'Es necesario comprobar el cierre hermético de los  recipientes contenedores una vez obtenidas las  muestras.',
      'No todas las muestras deben considerarse  potencialmente contaminantes.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-324',
    statement:
      'Para evitar contaminación en la muestra, el orden  para llenar los tubos debe ser el siguiente:',
    options: [
      'Tubo rojo, tubo azul, tubo verde, tubo violeta, tubo  gris.',
      'Tubo rojo, tubo verde, tubo azul, tubo violeta, tubo  gris.',
      'Tubo rojo, tubo violeta, tubo gris, tubo verde, tubo  azul.',
      'Tubo rojo, tubo azul, tubo gris, tubo violeta, tubo  verde.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-326',
    statement:
      'Se define como indicador de calidad a las  características que debe cumplir una estructura, un  proceso o un resultado para que se pueda considerar  de calidad. Indique cuál de las siguientes  características debe reunir un indicador de calidad:',
    options: ['Exigente.', 'Subjetivo.', 'Específico.', 'Genérico.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-327',
    statement: 'Señala la respuesta correcta en relación con la  sensibilidad:',
    options: [
      'Es la proporción de individuos enfermos con prueba  positiva.',
      'Es la proporción de individuos sanos con prueba  negativa.',
      'Cuando un signo, síntoma o prueba diagnóstica  posee alta sensibilidad (mayor de 95%) la obtención  de un resultado negativo o normal descarta con  confianza el diagnóstico de enfermedad.',
      'A y C son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-328',
    statement:
      'La Norma ISO 15189 define los requisitos particulares  de calidad y competencia que deben cumplir los  laboratorios clínicos que analizan muestras  biológicas de origen humano, entre ellos se  encuentran:',
    options: [
      'Personal cualificado.',
      'Instalaciones, condiciones ambientales y equipos  adecuados.',
      'Control de procesos clave: preanalíticos, analíticos  y postanalíticos.',
      'Todas las respuestas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-330',
    statement: 'Entre las causas de hemólisis de una muestra no está:',
    options: [
      'Extracción dificultosa.',
      'Choque térmico (enfriamiento o calentamiento  excesivo).',
      'Problemas metabólicos.',
      'Permanencia prolongada de la sangre total sin  centrifugar.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-331',
    statement: 'Entre los errores en la fase preanalítica no tenemos:',
    options: [
      'Centrifugación insuficiente o excesiva y alicuotado  incorrecto.',
      'Toma de muestra cuando el paciente no ha seguido  las instrucciones previas.',
      'El uso de reactivos reconstituidos o conservados de  forma incorrecta.',
      'El registro de una petición que no coincide con las  muestras.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-332',
    statement: 'De las siguientes afirmaciones en la Norma ISO  15189 ¿Cuál es la INCORRECTA?',
    options: [
      'Valora la competencia técnica del laboratorio y de  los profesionales.',
      'Es una certificación.',
      'Es específica de los laboratorios clínicos.',
      'En España. la auditoría externa sólo la puede hacer  ENAC.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-333',
    statement:
      'De las siguientes afirmaciones sobre los errores  sistemáticos ¿Cuál es la INCORRECTA?',
    options: [
      'Se reproducen siempre al medir y en distintas  direcciones.',
      'Los errores instrumentales son debidos a aparatos  mal calibrados o mal reglados, o por las limitaciones  del propio aparato.',
      'Los errores teóricos son debidos a la introducción  de condiciones distintas a las idealmente supuestas  para la realización del experimento.',
      'Los errores personales son debidos a las  peculiaridades del observador.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-334',
    statement: '¿Cuál de las siguientes actividades se realizan en la  fase preanalítica?',
    options: [
      'Preparación de los reactivos.',
      'Recepción de las muestras.',
      'Procesamiento de las muestras.',
      'Calibración del aparato.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-335',
    statement: 'De las siguientes afirmaciones sobre diluciones,  ¿Cuál es la INCORRECTA?',
    options: [
      'Soluto es la sustancia que se disuelve.',
      'Disolvente es la sustancia en la que se disuelve el  soluto.',
      'Disolución es el conjunto formado por el disolvente  y el soluto.',
      'Disolución diluida es aquella en que la cantidad de  soluto es mayor que la de disolvente.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-336',
    statement: '¿A cuántos litros (L) equivale un femtolitro?',
    options: ['10ˉ¹² L.', '10ˉ¹⁵ L.', '10ˉ⁶ L.', '10ˉ¹⁸ L.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-337',
    statement: 'De las siguientes respuestas ¿Cuál es la CORRECTA?',
    options: [
      'El plasma no contiene factores de coagulación.',
      'El suero no contiene fibrinógeno.',
      'El suero contiene fibrinógeno.',
      'El plasma no contiene fibrinógeno',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-338',
    statement: '¿Qué parámetro relaciona el coeficiente de  variación?',
    options: [
      'Varianza y media.',
      'Desviación estándar y mediana.',
      'Varianza y mediana.',
      'Desviación estándar y media.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-339',
    statement:
      'Al terminar su jornada laboral, el técnico de  laboratorio ha de realizar un mantenimiento a un equipo que consiste en pasar  una dilución de hipoclorito de sodio al 2%, pero ya  tiene preparada una al 3% que desea utilizar. ¿Qué  volumen de esa solución al 3% necesita para preparar  90 ml de solución diluida al 2%?',
    options: ['120 ml.', '60 ml.', '110 ml.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-340',
    statement: 'En relación con el citrato sódico, señale la correcta:',
    options: [
      'Se utiliza como anticoagulante en pruebas de  hematimetría.',
      'Inhibe la acetil-CoA carboxilasa.',
      'Es un quelante del calcio.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-341',
    statement: 'Un sistema de gestión de calidad (SGC):',
    options: [
      'Es un conjunto de actividades planificadas y  controladas que se realizan sobre un conjunto de  elementos para lograr la calidad de los productos o  servicios que se ofrecen al cliente.',
      'Es un modelo dirigido que pone de manifiesto los  errores o desviaciones detectados en una organización.',
      'Es un conjunto de normas de obligado  cumplimiento para poder desarrollar una actividad.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-343',
    statement: 'Seleccione la definición correcta de “prevalencia de  una enfermedad”:',
    options: [
      'El porcentaje de resultados positivos en una  población.',
      'Los casos nuevos de la enfermedad en una  población en un año.',
      'La frecuencia de la enfermedad en una población  dada.',
      'La probabilidad de un resultado de prueba positivo  para la enfermedad.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-344',
    statement: 'Respecto a las curvas ROC:',
    options: [
      'Son índices de la especificidad diagnóstica de una  prueba.',
      'Se obtienen representando sensibilidad frente a  especificidad.',
      'Cuanto más próxima está una curva ROC de la  esquina superior izquierda, más alta es la exactitud  diagnóstica de la prueba.',
      'Dependen de la prevalencia de la enfermedad',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-346',
    statement:
      'El procedimiento por el que un organismo rector  reconoce formalmente que un organismo o una  persona es competente para llevar a cabo tareas  específicas se denomina:',
    options: ['Acreditación.', 'Certificación.', 'Licencia.', 'A y B son ciertas.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-348',
    statement: 'Cuál de las siguientes afirmaciones sobre el control  de calidad interno es FALSA:',
    options: [
      'Controla la calidad utilizando solamente los  resultados obtenidos por el propio laboratorio.',
      'Permite detectar errores sistemáticos que  producen inexactitud de los resultados, pero no  aleatorios.',
      'Se utiliza para aceptar o rechazar cada serie  analítica en la que se procesan los controles.',
      'Se realiza analizando materiales de control cuyas  características son conocidas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-349',
    statement: 'Señale el tipo de error menos frecuente en los  sistemas POCT:',
    options: [
      'Preanalítico.',
      'Analítico.',
      'Postanalítico.',
      'En ninguno de ellos se producen errores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-350',
    statement: 'Uno de los siguientes aspectos NO es un  inconveniente de los sistemas POCT:',
    options: [
      'La inexactitud.',
      'Formación del personal.',
      'Escaso almacenamiento de los resultados de las  pruebas en el lugar de asistencia al paciente en la historia clínica del paciente.',
      'La manipulación y el transporte de las muestras.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-351',
    statement:
      'Valorando la experiencia de los centros que han  puesto en marcha programas para realizar POCT, el  principal criterio para la implantación de este tipo de  mediciones suele ser:',
    options: ['Tiempo de respuesta.', 'Facilidad de manejo.', 'Coste económico.', 'Fiabilidad.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-352',
    statement:
      '¿Cuál es mayor inconveniente con respecto a las  pruebas de laboratorio en el lugar de atención al  paciente?',
    options: [
      'No suelen ser trazables con los del laboratorio  principal debido a las diferencias bioquímicas entre las  fuentes de obtención de las muestras.',
      'Coste.',
      'Se suele producir una contaminación significativa  de la muestra con alcohol u otros desinfectantes.',
      'Todas son verdaderas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-353',
    statement:
      'El grado en el que una intervención produce un  resultado beneficioso en las condiciones reales de la  práctica habitual, se conoce como:',
    options: ['Eficacia', 'Efectividad', 'Evidencia', 'Eficiencia'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-354',
    statement: 'Ante un resultado crítico:',
    options: [
      'El laboratorio debe informar solo si el paciente está  ingresado',
      'El Laboratorio debe comunicarlo rápido y  registrarlo en el SIL',
      'No es necesario registrarlo en la historia clínica del  paciente',
      'El procedimiento es el mismo que el laboratorio  siga con otros resultados',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-355',
    statement:
      'Si se realizan 10 determinaciones de Calcio en una  única muestra de suero, los resultados no serán  todos iguales debido a:',
    options: ['Inexactitud', 'Error sistemático', 'Interferencias', 'Error aleatorio'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-356',
    statement:
      'De los siguientes aspectos, indique cuál es un  indicador de la fase post-analítica:',
    options: [
      'Identificación incorrecta del paciente en las  muestras.',
      'Tiempo de respuesta inadecuado.',
      'Petición analítica ininteligible.',
      'Error en la transcripción de resultados analíticos',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-358',
    statement: 'Una de las siguientes afirmaciones es falsa:',
    options: [
      'Bajo ningún concepto se debe dejar de comunicar  un valor crítico.',
      'Se deben definir los límites de cada valor crítico.',
      'La lista debe ser estructurada en categorías según  el grado de riesgo crítico, y a cada categoría se le  asignará un tiempo de comunicación.',
      'La lista debe incluir: nombre de la prueba, límites,  unidades y tiempo para la notificación.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-359',
    statement:
      '¿Qué afirmación no es correcta con respecto a las  recomendaciones de orden de llenado de tubos de  extracción?:',
    options: [
      'Los tubos y frascos estériles para hemocultivo  deben extraerse en primer lugar.',
      'Los tubos con EDTA (tapón morado) deben  extraerse después de los tubos con heparina de litio  (tapón verde).',
      'Los tubos con citrato sódico (tapón azul) para  pruebas de coagulación deben extraerse antes de los  tubos con EDTA para hematología.',
      'Los tubos con gel separador con activador de la  coagulación para suero (tapón amarillo) deben extraerse después de los tubos con EDTA para  hematología.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-360',
    statement:
      'La sensibilidad de una prueba diagnóstica para una  enfermedad se obtiene multiplicando por 100 el  siguiente cociente:',
    options: [
      'Verdaderos negativos dividido entre la suma de  sujetos sanos.',
      'Verdaderos negativos dividido entre la suma de  sujetos con resultado negativo.',
      'Verdaderos positivos dividido entre la suma de  sujetos enfermos.',
      'Verdaderos positivos dividido entre la suma de  sujetos con resultado positivo.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-361',
    statement: 'Las diferencias entre certificación y acreditación  estriban en:',
    options: [
      'Una organización certificada ISO 9001 ha  demostrado que su sistema de gestión de calidad  cumple los requisitos establecidos en la norma ISO  9001 mientras que una organización acreditada ha  demostrado su competencia para llevar a cabo las  actividades de evaluación para las que esté  acreditado.',
      'Una organización certificada ISO 9001 ha  demostrado su competencia para llevar a cabo las  actividades de evaluación para las que esté  certificado, mientras que una organización acreditada  ha demostrado que su sistema de gestión de calidad  cumple los requisitos establecidos en la norma ISO  9001.',
      'Una organización certificada ISO 9001 tiene mayor  fiabilidad en sus procesos que una acreditada ISO  9001.',
      'Ambos procedimientos son equivalentes',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-362',
    statement:
      'La implementación de un sistema de gestión de  control de calidad basado en los Internacional  Estándar (ISO) constituye una herramienta para  evaluar y controlar los sistemas de POCT. Señale la  respuesta CORRECTA.',
    options: [
      'La norma internacional ISO 22870 proporciona  requerimientos específicos aplicables a los sistemas  de POCT, constituyendo un complemento a los  requisitos propuestos en la ISO 15189.',
      'La norma internacional ISO 22880 proporciona  requerimientos específicos aplicables a los sistemas  de POCT, constituyendo un complemento a los  requisitos propuestos en la ISO 15189.',
      'La norma internacional ISO 22890 proporciona  requerimientos específicos aplicables a los sistemas  de POCT, constituyendo un complemento a los  requisitos propuestos en la ISO 15189.',
      'La norma internacional ISO 22850 proporciona  requerimientos específicos aplicables a los sistemas  de POCT, constituyendo un complemento a los  requisitos propuestos en la ISO 15189.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-363',
    statement: 'Señale la respuesta FALSA en cuanto al archivo  muestras:',
    options: [
      'El tiempo y las condiciones del archivo temporal  vendrán reflejadas para cada muestra y/o prueba en  la cartera de servicios.',
      'En todos los laboratorios existirán archivos  indefinidos de muestras/especímenes.',
      'El tiempo y las condiciones del archivo indefinido  deberán ser los mismos para cada muestra y/o  prueba.',
      'Se guardarán las muestras/especímenes de  pacientes con interés clínico/epidemiológico y/o para  la investigación',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-364',
    statement: 'Se define “valor de referencia” como:',
    options: [
      'El conjunto de todos los posibles individuos de  referencia.',
      'Aquel valor de la distribución de referencia que  excluye, con una probabilidad determinada, una  fracción de dicha distribución.',
      'Valor obtenido por la medición de una magnitud en  el laboratorio en un individuo de referencia que forma  parte de la muestra de referencia.',
      'El intervalo de la distribución de referencia que  queda comprendido entre los límites de referencia,  incluyéndolos a ambos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-365',
    statement:
      'En la preparación de los sujetos para la  determinación de los valores de referencia hay que  tener en cuenta los siguientes factores:',
    options: [
      'Factores biológicos: metabólicos, hemodinámicas,  inducción enzimática, daño celular.',
      'Factores metodológicos: obtención de muestra,  transporte de muestra, manipulación de muestra.',
      'Preparación del individuo: dieta anterior, ayuno,  régimen de drogas, momento de la toma de muestra  en relación con los ritmos biológicos, actividad física,  encamado o no, estrés.',
      'Todos ellos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-366',
    statement:
      'La determinación de valores de referencia en un  laboratorio clínico se hace necesario  fundamentalmente:',
    options: [
      'Periódicamente.',
      'Al instaurar la medición de un nuevo constituyente.',
      'Al utilizar un método nuevo o diferente.',
      'Las respuestas B y C son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-367',
    statement:
      'Generalmente se suele definir el intervalo de  referencia como el intervalo de resultados que  comprenden:',
    options: [
      'Un 55% de la probabilidad total.',
      'Un 25% de la probabilidad total.',
      'Un 95% de la probabilidad total.',
      'Un 75% de la probabilidad total.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-368',
    statement: 'Las pruebas reflejas:',
    options: [
      'Son las incluidas en un mismo perfil.',
      'Son las que se generan rápidamente en urgencias  ante valores críticos.',
      'Requieren siempre y en cada caso la acción de un  facultativo para su realización.',
      'Son las generadas de manera automática utilizando  las herramientas del sistema informático del laboratorio',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-369',
    statement: 'En el proceso de revisión y validación, se denomina  “delta check” a:',
    options: [
      'Los valores de referencia (valores normales) en  función de la edad y el sexo.',
      'La diferencia critica entre dos resultados.',
      'Cambio de valor respecto a otro anterior en un  periodo de tiempo.',
      'Los valores de pánico (valores muy altos o muy  bajos).',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-370',
    statement:
      'El resultado aislado más pequeño que, con una  determinada probabilidad, se puede distinguir de un  blanco, se denomina:',
    options: ['Límite de detección.', 'Precisión.', 'Linealidad.', 'Sensibilidad.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-371',
    statement: 'La precisión de un resultado analítico es:',
    options: [
      'Reproducibilidad.',
      'Aproximación al valor verdadero.',
      'Capacidad de un método para determinar  únicamente el componente que se pretende medir.',
      'Resultado más pequeño que puede medirse.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-372',
    statement: 'Indica el número ONU que corresponde a «materia  biológica, clase B»',
    options: ['Núm. ONU 2814', 'Núm. ONU 3373', 'Núm. ONU 7737', 'Núm. ONU 1428'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-373',
    statement: 'Indica la frase verdadera respecto al transporte de  muestras biológicas:',
    options: [
      'El transporte de muestras biológicas en España lo  regula la normativa ADR.',
      'La normativa ADR no es de obligado cumplimiento  en nuestro país.',
      'La normativa exige que los contenedores  secundarios sean rojos.',
      'Los contenedores terciarios tienen que ser  obligatoriamente flexible',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-374',
    statement: 'En relación a la estabilidad de los analitos señale la  respuesta incorrecta:',
    options: [
      'El uso del gel separador disminuye la estabilidad de  los diferentes constituyentes de las muestras.',
      'La refrigeración a 4ºC prolonga la estabilidad de  numerosos analitos.',
      'Es conveniente separar el plasma o el suero de las  células lo antes posible y realizar las determinaciones  analíticas durante las 5 horas siguientes a la  extracción.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-375',
    statement: 'En el sistema básico de embalaje envasado/triple,  señale la respuesta falsa.',
    options: [
      'El recipiente primario el cual contiene la sustancia  infecciosa debe ser hermético e impermeable.',
      'El recipiente primario, si la sustancia está en forma  líquida o semilíquida debe estar envuelto de un  material absorbente en caso de rotura o fuga.',
      'El recipiente secundario debe estar debidamente  etiquetado en cuanto a su contenido.',
      'El recipiente secundario debe ser hermético e  impermeable a pruebas de derrames para proteger al  recipiente primario',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-376',
    statement:
      '¿Con qué indicador o parámetro estadístico debería  medirse un error constante y en un mismo sentido de  una determinada magnitud biológica medida en el  laboratorio?:',
    options: [
      'Desviación estándar y coeficiente de variación',
      'Error total',
      'Error sistemático',
      'Media aritmética',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-377',
    statement: '¿Qué se persigue con la eficiencia en el medio  sanitario?:',
    options: [
      'Conseguir los mejores resultados con los menores  costes posibles',
      'Atención sanitaria adecuada a las necesidades del  paciente.',
      'El grado de atención sanitaria percibido por el  paciente.',
      'Acceso eficaz de los recursos sanitarios al paciente.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-378',
    statement: '¿Qué es la eficacia?:',
    options: [
      'Relación existente entre los esfuerzos y los recursos  utilizados.',
      'Grado de consecución de los objetivos propuestos  sin tener en cuenta el coste empleado.',
      'Sistema que mide lo apropiado de los servicios que  se ofertan en relación a las necesidades de la  población que se atiende.',
      'Posibilidad real de disponer de personal o del  servicio en el momento preciso',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-379',
    statement:
      'La probabilidad de que una persona con un resultado  negativo en una prueba diagnóstica esté realmente  sano se denomina:',
    options: [
      'Valor predictivo positivo',
      'Valor predictivo negativo',
      'Sensibilidad',
      'Prevalencia',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-380',
    statement:
      'Las relaciones entre el coste de una actividad y el  efecto que produce sobre la salud se conoce como:',
    options: ['Productividad.', 'Ineficiencia.', 'Eficacia.', 'Eficiencia.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-381',
    statement: 'La eficiencia de un sistema:',
    options: [
      'Mide el grado de consecución de los objetivos  propuestos sin tener en cuenta el coste empleado.',
      'Se refiere a la posibilidad real de disponer del  personal que se precise en el momento que se precise.',
      'Mide el grado de consecución de los objetivos  propuestos.',
      'Mide el grado de consecución de los objetivos  propuestos al menor coste posible.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-382',
    statement:
      'En una prueba diagnóstica, a la proporción de  individuos sanos que tiene una prueba negativa se  denomina:',
    options: [
      'Sensibilidad',
      'Especificidad',
      'Valor predictivo positivo',
      'Valor predictivo negativo',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-383',
    statement: 'El modelo de calidad total o modelo EFQM:',
    options: [
      'No se puede aplicar a los laboratorios clínicos.',
      'Se basa en conceptos fundamentales de excelencia.',
      'Es certificable.',
      'Es acreditable.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-384',
    statement: '¿Cómo es también conocida la auditoría de tercera  parte?',
    options: [
      'Auditoría interna.',
      'Auditoría de certificación.',
      'Auditoría de seguridad del producto.',
      'Auditoría de seguridad del paciente.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-385',
    statement:
      'Formo parte de un equipo de trabajo en un  laboratorio clínico, hay diversos problemas que  debemos identificar y analizar. Para ello  emplearemos diversas técnicas, pero sólo una de las  siguientes será la idónea para ayudarnos a decidir  que problemas resolver primero y a identificarlos según el principio de \"pocos vitales, muchos  triviales\":',
    options: [
      'Diagrama de Grandal',
      'Diagrama de Pareto',
      'Diagrama de lshikawa',
      'Diagrama de las 6M',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-386',
    statement: 'Señale la respuesta correcta. El “ciclo de mejora  continua”:',
    options: [
      'Es una herramienta de control de calidad definida  por A. Donabedian en 1950.',
      'Es una herramienta de mejora de la calidad que  concluye con la comprobación de que las actividades  se han resuelto bien y que los resultados obtenidos se  corresponden con los objetivos.',
      'Es una herramienta de mejora continua de la  calidad para la gestión de una organización. Consta de  4 pasos sucesivos y cíclicos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-387',
    statement: 'Señale la respuesta correcta. La Joint Commission:',
    options: [
      'Es la Agencia Americana de Acreditación.',
      'Es una organización cuya misión es favorecer la  implantación de normas ISO de aplicación en el entorno sanitario.',
      'Establece estándares internacionales únicos que  permanecen fijos a lo largo del tiempo.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-388',
    statement: '¿Cómo se llama el modelo europeo de excelencia de  gestión de calidad?',
    options: ['Normas ISO', 'EFQM', 'AENOR', 'UNE-ISO/IEC'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-389',
    statement:
      'En ese mismo día, el laboratorio de Microbiología se  va a someter a una auditoría. Antes de que lleguen  los auditores, el jefe del servicio decide hacer una  comprobación de la documentación y le encarga a  usted que haga la tarea de auditor. Si quiere  comprobar la seguridad laboral, ¿qué documento de  los que se detallan a continuación le sería más útil?',
    options: [
      'La hoja de ruta, donde se reflejan las condiciones  de transporte de las muestras.',
      'Los PNT, o sea, los protocolos normalizados  técnicos, para comprobar las instrucciones técnicas de los equipos del laboratorio.',
      'Las fichas técnicas de algunos productos utilizados  en el laboratorio.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-390',
    statement:
      'El ciclo de mejora continua también conocido como  ciclo de Deming, está formado por 4 etapas:',
    options: [
      'Planificación, Hacer, Verificar y Actuar.',
      'Preparación, Hacer, Verificar y Activar.',
      'Planificación, Hacer, Verificar y Activar.',
      'Planificación, Hacer, Validar y Actuar.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-391',
    statement: 'El modelo EFQM de excelencia puede ser aplicado:',
    options: [
      'En organizaciones de servicios.',
      'A determinadas organizaciones, dependiendo de su  tamaño, sector o antigüedad.',
      'A cualquier organización.',
      'Ninguna de las anteriores es correcta.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-392',
    statement:
      'Según Donabedian, ¿cuál NO es un concepto a tener  en cuenta en la evaluación de la calidad de la  atención sanitaria?',
    options: ['Estructura.', 'Resultado.', 'Procedimiento.', 'Proceso.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-393',
    statement:
      'Señale la afirmación correcta respecto al enfoque  sistémico para la evaluación de la calidad asistencial,  según A. Donabedian:',
    options: [
      'La evaluación de los resultados se basa en  comprobar si se ha aplicado el conocimiento médico  del momento con la tecnología disponible.',
      'Tiene en cuenta 4 conceptos fundamentales: la  estructura, el proceso, la infraestructura y el  resultado.',
      'Es el punto de partida de todos los programas de  control de calidad en las organizaciones sanitarias.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-394',
    statement:
      'El ciclo de Deming consta de cuatro pasos que se han  de seguir de forma cíclica. ¿Cuál es el orden correcto?',
    options: [
      'Planificación, Intervención, Verificación, Actuación',
      'Planificación, Actuación, Intervención, Verificación',
      'Planificación, Actuación, Verificación, Intervención',
      'Planificación, Verificación, Actuación, Intervención',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-395',
    statement:
      'Teniendo en cuenta los métodos de evaluación de la  calidad: Criterios, indicadores y estándares, señale la  opción falsa:',
    options: [
      'El indicador se define como una unidad de medida  que compara lo que se ha hecho con lo que se debería  haber hecho',
      'El estándar comporta el nivel óptimo de aplicación  del criterio',
      'El indicador supone normas previamente establecidas como parámetros de buena calidad',
      'El criterio es el aspecto concreto del problema  detectado que se va a medir para conocer su grado de  cumplimiento',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-396',
    statement:
      'La estrategia para evaluar la calidad asistencial  desarrollada por Donabedian se basa en:',
    options: [
      'Análisis de la estructura, del proceso y de los  resultados.',
      'Gestión del riesgo y promoción de productos y  servicios.',
      'Sistematización de indicadores y estándares para la  evaluación de la calidad.',
      'Planificación, control y mejora de la calidad.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-397',
    statement: 'El principal motor de los programas instituciones de  mejora de la calidad es:',
    options: [
      'El alto nivel científico-técnico de los profesionales.',
      'La implicación de los usuarios y el feedback sobre la  percepción de la calidad.',
      'La motivación de los profesionales.',
      'El nivel de participación de los usuarios y  profesionales.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-398',
    statement:
      'Dentro de las características que deben tener los  indicadores de calidad de la asistencia sanitaria, se  incluye:',
    options: [
      'Normalmente los indicadores son de tipo  cualitativo.',
      'Se utilizan con poca frecuencia, como herramienta  de medida de calidad.',
      'Generalmente son de tipo cuantitativo.',
      'El indicador siempre debe medirse aplicando una  escala ordinal.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-399',
    statement:
      'Una de las metas de la OMS es reducir las  desigualdades sociales en salud. El término que hace  referencia a esta meta es:',
    options: ['Igualdad.', 'Eficiencia.', 'Equidad.', 'Accesibilidad.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-400',
    statement:
      'Un hombre de 80 años llega al servicio de urgencias  por dolor torácico, fiebre de 39,3ºC y desorientación.  Se obtienen muestreos de sangre en los tubos  siguientes anticoagulantes: EDTA, heparina de litio,  citrato sódico y un tubo con hielo separador para  suero. También se recoge una muestra de esputo.  Ante una posible contaminación en el momento de la  extracción sanguínea, ¿qué resultados se pueden  encontrar fuera de los valores de referencia?',
    options: [
      'El resultado de potasio se encuentra elevado  porque el tubo con EDTA se ha extraído antes de que  el tubo con heparina litio.',
      'El resultado de sodio se encuentra disminuido y la  glucosa aumentada porque el tubo con citrato sódico  se ha extraído antes de que el tubo con EDTA.',
      'El resultado de sodio se encuentra aumentado  porque se ha extraído sangre de una vía de suero  glucosado.',
      'El resultado de potasio se encuentra disminuido  porque el tubo con EDTA se ha extraído antes de que  el tubo con heparina litio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-401',
    statement: 'Respecto al Manual de la Calidad, señale la respuesta  incorrecta:',
    options: [
      'Debe incluir la política de la calidad o una referencia  de la misma.',
      'Es inaccesible al personal del laboratorio excepto  para el jefe del servicio y el jefe de calidad.',
      'Incluye una descripción de la estructura y relación  de la documentación del sistema de gestión de la  calidad.',
      'Figura la estructura y dirección del laboratorio.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-402',
    statement:
      '¿Cuál de estas afirmaciones es incorrecta en cuanto  a la obtención y recogida de muestras?:',
    options: [
      'No es necesario verificar que el paciente ha seguido  el protocolo de recogida de muestras.',
      'Recoger las muestras con las máximas condiciones  de asepsia y protocolos de actuación preestablecidos.',
      'Verificar la trazabilidad de la identificación con la  identificación de la muestra.',
      'Confirmar la identidad del paciente.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-403',
    statement: 'Señala la respuesta correcta respecto a los  marcadores tumorales:',
    options: [
      'Especificidad es la capacidad de la prueba para  detectar la enfermedad en sujetos enfermos',
      'Especificidad es la capacidad de la prueba para  detectar la ausencia de la enfermedad en sujetos  sanos.',
      'Especificidad plantea el problema de discriminar el  origen tumoral benigno o maligno ante la verificación  de un incremento en el marcador',
      'Todas son falsas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-404',
    statement:
      'Teniendo en cuenta los métodos de evaluación de la  calidad: Equidad, eficiencia, eficacia y efectividad,  señale la opción falsa:',
    options: [
      'La eficiencia es la relación entre el coste del  producto y su beneficio en términos de salud',
      'La eficacia es la capacidad real de mejorar el grado  de salud de los pacientes',
      'La equidad es que las personas pueden desarrollar  su máximo potencial de salud independientemente de  su posición social u otras circunstancias determinadas  por factores sociales',
      'La eficiencia es la capacidad de conseguir los  mejores resultados al menor coste posible',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-405',
    statement: '¿Cuál es el código de la ONU que corresponde a  materia biológica clase B?',
    options: ['2814', '2900', '3373', '7737'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-406',
    statement: 'Cómo se denomina un componente cuando es objeto  de análisis',
    options: ['Espécimen', 'Muestra', 'Analito', 'Fluido'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-407',
    statement:
      '¿Cuál de las siguientes afirmaciones es cierta en  relación con el error sistemático?',
    options: [
      'Se mide con el coeficiente de variación.',
      'Se mide con la desviación estándar.',
      'No se puede predecir.',
      'Puede ser constante y proporcional.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-408',
    statement: 'Respecto a la desviación estándar:',
    options: [
      'Es un estadístico que ayuda a la medida de la  imprecisión de un método de medida.',
      'Es un estadístico que expresa el error sistemático  de un procedimiento de medida.',
      'Está relacionada con una calibración incorrecta.',
      'No se utiliza para evaluar el error aleatorio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-409',
    statement:
      'Con carácter general, ¿cuál es el tiempo máximo  permitido entre la extracción de sangre y su  separación para la obtención de suero?',
    options: ['30 minutos', '120 minutos', '60 minutos', '45 minutos'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-410',
    statement: '¿De qué trata la norma ISO/IEC17025?',
    options: [
      'Un sistema de acreditación de calidad destinado a  cualquier organización',
      'Un estándar que establece los requerimientos para  la competencia de laboratorios de ensayo y  calibración',
      'Un sistema de certificación de calidad de los  laboratorios',
      'Todas ellas',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-411',
    statement: 'En los programas de garantía externa de la calidad se  evalúan los resultados del:',
    options: [
      'Control de calidad interno de gestión interna.',
      'Control de calidad interno de gestión externa.',
      'Control de calidad externo.',
      'Control de calidad de valor conocido.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-412',
    statement: 'El objetivo del mantenimiento correctivo es:',
    options: [
      'Programar los fallos o averías de los equipos.',
      'Realizar una intervención correctiva al detectar un  fallo o avería, deterioro o mal funcionamiento de los  equipos.',
      'Aquel que se desarrolla bajo distinto protocolo en  función de la cualificación del operario.',
      'Prevenir futuros fallos del equipo una vez ya se ha  producido la primera avería.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-413',
    statement: 'En cuanto al transporte de muestras, señale la  incorrecta.',
    options: [
      'Se recomienda que los recipientes primarios se  transporten en posición vertical, con el tapón en la  parte superior.',
      'Resguardar las muestras de la luz, ya que muchas  de las propiedades son fotosensibles.',
      'Se recomienda que las muestras estén en continua  agitación para evitar su coagulación.',
      'Registrar incidencias durante el transporte.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-414',
    statement: 'La hemólisis provoca alteración de algunos  parámetros, señala la incorrecta:',
    options: [
      'Lactato deshidrogenasa (LDH).',
      'Potasio.',
      'Aspartato aminotransferasa (AST).',
      'Proteína C reactiva (PCR).',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-415',
    statement: '¿Cuál de las siguientes afirmaciones es verdadera?',
    options: [
      'La filtración es un método básico para separar  sustancias sólidas en suspensión de un medio líquido.',
      'La diálisis se basa en la utilización de una membrana  semipermeable que permite el paso de moléculas  hasta un tamaño determinado y previene el paso de  moléculas mayores.',
      'La electroforesis es la separación de las moléculas  de una disolución a través de un material poroso.',
      'La centrifugación consiste en la migración de  moléculas cargadas a través de un medio, por la acción  de un campo eléctrico.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-416',
    statement: 'Cuando existe concordancia entre el valor medido y  el verdadero, hablamos de:',
    options: ['Precisión', 'Fiabilidad', 'Exactitud', 'Desviación estándar'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-417',
    statement:
      'Está descrito en la literatura que hasta un 60-70 % de  los errores de laboratorio se relacionan con la fase:',
    options: ['Analítica', 'Preanalítica', 'Postanalítica', 'Validación de resultados'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-418',
    statement: '¿Qué es una disolución 1 molar (M)?',
    options: [
      'Aquella que contiene 1 mol de disolución en 1 litro  de soluto',
      'Aquella que contiene 1 mol de soluto en 1 litro de  disolvente',
      'Aquella que contiene 1 mol de soluto en 1 mol de  disolvente',
      'Aquella que contiene 1 litro de soluto en 1 litro de  disolvente',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-419',
    statement: '¿Al número de moles de soluto por kilo de  disolvente, se le denomina?',
    options: ['Molalidad', 'Molaridad', 'Osmolaridad', 'Normalidad'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-420',
    statement:
      '¿Cuál de los siguientes errores no se considera un  error en la fase analítica de la muestra?',
    options: [
      'Un error en el pipeteo de la muestra',
      'Un error en el uso de un reactivo y/o calibradores  no adecuados',
      'Un error de trascripción en el resultado',
      'Un error en el suministro de energía del equipo',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-421',
    statement: 'La capacidad de una prueba de detectar una  enfermedad, se denomina:',
    options: ['Sensibilidad', 'Especificidad', 'Exactitud', 'Precisión'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-422',
    statement: 'Para construir una curva de calibrado. Indica la  pregunta incorrecta:',
    options: [
      'Se prepara un blanco con todos las componentes  de la muestra, pero sin la molécula de interés.',
      'Se realizan varias disoluciones patrón.',
      'Se mide la señal del blanco y todas las disoluciones  patrón, y se registra la señal.',
      'No hace falta registrar gráficamente las medidas  frente a los datos de concentración de la recta patrón.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-423',
    statement:
      'El parámetro capaz de diferenciar pequeñas  variaciones en la medida de un analito se le conoce  como:',
    options: ['Sensibilidad.', 'Selectividad.', 'Especificidad.', 'Robustez.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-424',
    statement: '¿Cuál de los siguientes objetivos no está incluido en  la fase postanalítica?',
    options: [
      'Aplicar protocolos para garantizar la calidad del  diseño y proceso analítico.',
      'Hacer uso de programas informáticos para el  tratamiento y la gestión de datos relacionados con los  resultados.',
      'Desarrollar técnicas de liderazgo para facilitar la  coordinación de equipos.',
      'Tener criterio suficiente para aceptar los riesgos y  la posibilidad de error y así resolver distintas  situaciones y/o problemas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-425',
    statement: 'Respecto al control de calidad externo, señale la  respuesta correcta:',
    options: [
      'Al realizar los controles de calidad internos, ya no  son necesarios los externos',
      'Una entidad o institución independiente distribuye material a los laboratorios participantes de forma simultánea',
      'Se conocerán por anticipado los resultados a obtener de las muestras de control externo',
      'No era necesario enviar resultados obtenidos a la entidad o institución o que los envían',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-426',
    statement:
      'En relación con la estandarización de los colores de los tubos para muestras sanguíneas:',
    options: [
      'Los tubos morados o de color malva contiene EDTA.',
      'Los tubos de color azul claro contienen citrato.',
      'Los tubos rojos no llevan anticoagulante.',
      'Todas son ciertas.',
    ],
    correctIndex: 3,
  },
];
