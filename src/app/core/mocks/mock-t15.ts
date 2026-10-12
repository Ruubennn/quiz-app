import { Question } from '../models/question.model';

export const QUESTIONS_TEMA_15: Question[] = [
  {
    id: 'tema-1-1',
    statement:
      'Con respecto a las condiciones necesarias para el  análisis de Lactato en sangre señale la afirmación  incorrecta:',
    options: [
      'Se recomienda en sangre arterial, aunque  también se puede realizar en sangre venosa.',
      'Se utilizará un torniquete para la extracción de la  muestra.',
      'Es necesario que el paciente se encuentre en  reposo previamente a la extracción de la muestra.',
      'La muestra se conservará en frío y se analizará lo  antes posible.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-2',
    statement: 'Indica el valor normal de PH en sangre arterial',
    options: ['7.45 a 7.55', '7.25 a 7.35', '7.35 a 7.45', '7.15 a 7.25'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-3',
    statement: 'La arteria donde habitualmente se suele realizar la  gasometría es:',
    options: ['La femoral.', 'La axila.', 'La radial.', 'La carótida.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-4',
    statement: 'Hablamos de alcalosis cuando el PH arterial supera  un valor de:',
    options: ['6,8.', '7,45.', '7,65.', '7,77.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-5',
    statement: 'Es falso que la acidosis metabólica:',
    options: [
      'Se genere por un exceso de ácidos.',
      'Se puede producir por una pérdida de bicarbonato.',
      'Produzca debilidad.',
      'No puede aparecer con un GAP normal.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-6',
    statement: 'Un anión es:',
    options: [
      'Una sustancia que es atraída por el polo  negativo.',
      'Una sustancia que es atraído por el polo positivo.',
      'Una sustancia que es atraída por el cátodo.',
      'Una sustancia neutra.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-7',
    statement: 'No es un sistema regulador del PH:',
    options: ['Pulmón.', 'Hígado.', 'Médula ósea.', 'Riñón.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-8',
    statement:
      'Un aumento de la concentración de hidrogeniones  y una PCO2 inicialmente elevada corresponde a:',
    options: [
      'Acidosis metabólica.',
      'Alcalosis respiratoria.',
      'Acidosis respiratoria.',
      'Alcalosis metabólica.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-9',
    statement: 'En el laboratorio la expresión anión gap (vacío  aniónico) hace referencia a:',
    options: [
      'Una hipocloremia severa.',
      'Una incapacidad de la mucosa gástrica para producir clorhídrico.',
      'Una pérdida severa de bicarbonato.',
      'El conjunto de aniones no medido habitualmente  en el laboratorio clínico (sulfatos, fosfatos, etc).',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-10',
    statement:
      'Para el mantenimiento del pH fisiológico en el  plasma (7,35 – 7,45), el organismo dispone de una  serie de sistemas tampón o amortiguadores. ¿Cuál  de ellos presenta una mayor capacidad  amortiguadora?:',
    options: [
      'Tampón bicarbonato-ácido carbónico.',
      'Hemoglobina.',
      'Proteínas del plasma.',
      'Tampón fosfato.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-11',
    statement: 'En la alcalosis metabólica hay:',
    options: [
      'Una carencia primaria de bicarbonato.',
      'Un exceso primario de bicarbonato.',
      'Una carencia primaria de ácido carbónico.',
      'Un exceso primario de ácido carbónico.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-12',
    statement: 'La capacidad de la hemoglobina para enlazar O2  depende de:',
    options: ['pCO2 y pH.', 'pO2 y pCO2.', 'pH y PO2.', 'pO2, pCO2 y pH.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-13',
    statement: 'El pH de una muestra se ve afectado por:',
    options: [
      'El tiempo transcurrido hasta que se realiza.',
      'El anticoagulante empleado.',
      'La manera en que ha sido transportada la  muestra.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-14',
    statement: 'Para la determinación de gases en sangre, la muestra de elección será:',
    options: ['Sangre venosa', 'Sangre arterial', 'Sangre capilar', 'Es indiferente'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-15',
    statement: 'La acidosis respiratoria en un paciente de 80 años con bronconeumonía refleja:',
    options: [
      'Un pH elevado.',
      'Una PCO2 elevada.',
      'Un bicarbonato disminuido.',
      'Las respuestas a y c son correctas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-16',
    statement: 'Si se reduce la capacidad de los pulmones de  eliminar CO2, se producirá:',
    options: [
      'Acidosis respiratoria.',
      'Alcalosis respiratoria.',
      'Acidosis metabólica.',
      'Alcalosis metabólica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-17',
    statement:
      '¿Cuál de las siguientes NO es una causa de acidosis  metabólica, con anión GAP aumentado?',
    options: [
      'Rabdomiólisis.',
      'Acidosis láctica.',
      'Ingestión de tolueno.',
      'Perfusión renal reducida.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-18',
    statement:
      '¿Cuál de las interpretaciones siguientes sobre el  equilibrio ácido-base de la gasometría en sangre es  correcta?',
    options: [
      'Un pH superior a 7’45 indica alcalosis.',
      'Un pH inferior a 7’35 indica acidosis.',
      'Hay que tener presente que puede haber un desequilibrio ácido-base aún con un pH plasmático  dentro de lo normal.',
      'Las tres respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-19',
    statement:
      '¿Cuál de los siguientes elementos no forman parte  del electrodo de oxígeno de CLARK para  determinar los valores de la presión parcial de  oxígeno?',
    options: [
      'Cátodo de platino.',
      'Electrodo de referencia (ánodo).',
      'Solución de bicarbonato.',
      'Membrana de separación.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-20',
    statement: 'El pH de la muestra se ve afectado por:',
    options: [
      'El tiempo transcurrido hasta que se analiza',
      'La actividad anhidrasa carbónica de los glóbulos  rojos',
      'El anticoagulante empleado',
      'Todas son correctas',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-23',
    statement:
      'Se reciben en el laboratorio las muestras que a  continuación se relacionan, ¿cuál de ellas es la que  debemos procesar en primer lugar?',
    options: [
      'Orina',
      'Sangre en jeringa para gasometría',
      'Sangre en tubo con gelosa',
      'Sangre en tubo con EDTA 3K',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-24',
    statement:
      'Después de centrifugar la sangre en el tubo con  gelosa, observamos que el suero está hemolizado.  ¿Con cuáles de las siguientes pruebas puede  interferir este hecho?',
    options: ['Potasio y Sodio', 'Urea y Creatinina', 'Potasio y LDH', 'Glucosa y LDH'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-26',
    statement: 'Un pH neutro será un pH igual a:',
    options: ['6.', '7.', '8.', '5,3.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-27',
    statement: 'Podemos considerar la acidosis como:',
    options: [
      'Un exceso de hidrogeniones.',
      'Un déficit de hidrogeniones.',
      'La compensación de una acidosis.',
      'La aparición de bases negativas.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-28',
    statement: 'Para compensar una acidosis metabólica se  produce una:',
    options: [
      'Hiperventilación pulmonar.',
      'Hipoventilación pulmonar.',
      'Aumento en la eliminación de bases.',
      'Aumento en la retención de ácidos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-29',
    statement: 'El método del fosfomolibdato se basa en técnicas:',
    options: [
      'De contraste.',
      'De recuento celular.',
      'De control iónico.',
      'De espectrofotometría directa.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-30',
    statement:
      'De los siguientes señale cuál es cuantitativamente  el cuarto catión del organismo y el segundo  intracelular:',
    options: ['(Cinc) Zn.', 'Potasio.', 'Magnesio.', 'Litio.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-32',
    statement:
      'Ante la proximidad del parto, Lola pasa a  realizarse el preoperatorio en una de sus últimas  revisiones, no debiendo realizarse la extracción de  sangre con citrato sódico para:',
    options: [
      'Estudio de la coagulación.',
      'Estudio de la VSG.',
      'Estudio de la función plaquetaria.',
      'Determinación de sodio y potasio.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-33',
    statement: 'Los niveles plasmáticos normales de sodio son de:',
    options: ['74 mEq/Kg', '274 mEq/Kg', '4 mEq/Kg', '140 mEq/Kg'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-34',
    statement:
      '¿Qué factores pueden causar una interferencia en  la medición de fosfato dando lugar a una  pseudohiperfosfatemia?',
    options: [
      'Índices séricos alterados',
      'Algunos fármacos',
      'Paraproteínas',
      'Todas las anteriores son correctas',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-35',
    statement: 'El rango normal en una determinación de sodio en  suero es:',
    options: [
      'De 3 a 6.5 mmol/dl',
      'De 135 a 145 Eq/L',
      'De 135 a 145 mEq/L',
      'De 135 a 145 mEq/dL',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-36',
    statement: 'La hipocalciuria en la orina puede originarse por:',
    options: ['Raquitismo.', 'Hiperparatiroidismo.', 'Hipertiroidismo.', 'Mieloma múltiple.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-37',
    statement: 'En general, la determinación de gases en sangre,  puede ser:',
    options: [
      'De tipo basal (en reposo).',
      'De esfuerzo (tras realizar un esfuerzo físico).',
      'Respirando mezcla de gases, ricos en oxígeno.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-38',
    statement:
      'Para la investigación precisa del equilibrio ácido base será necesario determinar al menos, los  siguientes parámetros:',
    options: [
      'La concentración de hidrogeniones.',
      'La concentración de bicarbonato.',
      'La presión parcial de dióxido de carbono.',
      'Todas son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-39',
    statement: '¿Cuál de los siguientes iones es el más abundante  del organismo?',
    options: ['Magnesio.', 'Potasio.', 'Cloro.', 'Calcio.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-40',
    statement: 'La Hipernatremia es:',
    options: [
      'Aumento del calcio sérico',
      'Aumento del sodio sérico',
      'Aumento del potasio sérico',
      'Aumento del hierro sérico',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-41',
    statement:
      'Para regular fisiológicamente el pH se utilizan  sistemas amortiguadores denominados tampones.  ¿Cuál no es un tampón?:',
    options: ['Tampón Bicarbonato', 'Tampón Fosfato', 'Tampón Hemoglobina', 'Tampón Hemoxiglobina'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-43',
    statement: 'Ácidos son sustancias que en disolución aportan al  medio:',
    options: ['Hidroxilos', 'Hidrogeniones', 'Oxigeno', 'Nitrógeno'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-44',
    statement:
      'Señale lo CORRECTO sobre la determinación de  gases en sangre mediante el electrodo de Clark:',
    options: [
      'La membrana es permeable a las moléculas de  oxígeno y los iones.',
      'Se trata de un método potencio métrico.',
      'Su cátodo y ánodo no están sumergidos en  solución electrolítica.',
      'En el electrodo tiene lugar una reducción del  oxígeno.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-45',
    statement:
      'Señale lo correcto respecto a los sistemas tampón  de pH y su acción en el organismo:',
    options: [
      'Son una mezcla de un ácido aceptor de protones  y su base conjugada.',
      'El mayor efecto amortiguador corresponde a las  proteínas.',
      'No actúan en el líquido intracelular.',
      'El ácido carbónico se convierte en dióxido de  carbono y agua mediante una reacción enzimática.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-46',
    statement: 'Un anión gap bajo puede ser causado por:',
    options: [
      'Aumento de proteínas plasmáticas.',
      'Hiponatremia.',
      'Disminución de los cationes no medidos.',
      'Todas las anteriores son falsas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-47',
    statement: 'Señale cuál de los siguientes no es un  amortiguador fisiológico:',
    options: ['Potasio', 'Bicarbonato', 'Fosfato', 'Hemoglobina'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-50',
    statement:
      'Los siguientes resultados de una gasometría: pH  por debajo del valor de referencia, un bicarbonato  también por debajo del valor de referencia, unas  presiones parciales de oxígeno y dióxido de  carbono dentro de los valores de referencia, nos  indican la presencia de:',
    options: [
      'Alcalosis metabólica',
      'Acidosis metabólica',
      'Alcalosis respiratoria',
      'Acidosis respiratoria',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-51',
    statement:
      '¿Cuál es la fracción de oxígeno inspirado del aire a  una presión atmosférica de 760mm Hg?',
    options: ['21%', '28%', '31%', '50%'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-52',
    statement: 'Todos son componentes habituales de un  analizador de gases, excepto:',
    options: [
      'Sistema de aspiración de muestra',
      'Electrodo de medida de pCO2',
      'Electrodo de medida de exceso de base',
      'Electrodo de medida de pO2',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-53',
    statement: 'No es un síntoma de la Acidosis Metabólica:',
    options: [
      'Aliento con olor a frutas.',
      'Cansancio.',
      'Cefalea.',
      'Respiración lenta y superficial.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-54',
    statement: 'Las soluciones que contienen una elevada  concentración de hidrogeniones:',
    options: [
      'Son ácidas y su pH es mayor de 7.',
      'Son básicas y su pH es inferior a 7.',
      'Son básicas y su pH es superior a 7.',
      'Son ácidas y su pH es inferior a 7.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-56',
    statement:
      'En una gasometría arterial, obtenemos los  siguientes valores: pH aumentado y HCO3  aumentado, ¿de qué trastorno se trata?',
    options: [
      'Acidosis respiratoria',
      'Acidosis metabólica',
      'Alcalosis metabólica',
      'Alcalosis respiratoria',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-57',
    statement: 'En una muestra de sangre hemolizada, ¿cuál de los  iones se eleva?:',
    options: ['Sodio.', 'Potasio.', 'Cloro.', 'Todos.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-58',
    statement: 'Para la determinación de gases en sangre se  utiliza:',
    options: ['Plasma.', 'Suero.', 'Sangre total heparinizada.', 'Sangre total citratada.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-60',
    statement:
      'En la acidosis metabólica los valores del pH  sanguíneo y del bicarbonato se encuentran:',
    options: [
      'pH aumentado y C03H- aumentado',
      'pH disminuido y C03H- aumentado',
      'pH aumentado y C03H- disminuido',
      'pH disminuido y C03H- disminuido',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-61',
    statement: 'El electrodo de Severinghaus se usa para:',
    options: ['Medida de pCO2', 'Medida de pO2', 'Medida de pH', 'Medida de H+'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-62',
    statement:
      'Todos los siguientes parámetros del equilibrio  ácido-base se miden directamente con electrodos excepto:',
    options: ['pH', 'Bicarbonato', 'pCO2', 'pO2'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-63',
    statement: 'En lo que respecta al pH, señale la respuesta  correcta:',
    options: [
      'Las disoluciones con pH mayor a 7 son ácidas.',
      'Las disoluciones con pH menor a 7 son alcalinas.',
      'pH= log [H+].',
      'A elevado pH, baja concentración de protones.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-64',
    statement: '¿Cuál de las siguientes muestras puede utilizarse  para medir el pH en sangre?',
    options: [
      'Plasma.',
      'Sangre venosa.',
      'Sangre arterial.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-65',
    statement: 'En relación al fósforo, señale la respuesta  incorrecta:',
    options: [
      'Los niños en período de desarrollo tienen niveles  de P más bajos.',
      'Su absorción está favorecida por la acción de la  vitamina D y la hormona del crecimiento.',
      'En la homeostasia del P intervienen tres órganos:  intestino delgado, riñones y esqueleto.',
      'Sus valores son más bajos de lo normal durante  la menstruación.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-66',
    statement:
      'La vitamina D es activa en su forma 1,25  dihidroxicolecalciferol. ¿En qué órgano se produce  la segunda hidroxilación?',
    options: ['Médula ósea', 'Hueso', 'Paratiroides', 'Riñón'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-67',
    statement:
      '¿Cuál de los siguientes iones contribuye de  manera más importante a la osmolalidad?',
    options: ['Sodio.', 'Potasio.', 'Cloruro.', 'Calcio.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-69',
    statement: 'El anión gap es útil para el diagnóstico diferencial  de:',
    options: [
      'Alcalosis metabólica.',
      'Alcalosis respiratoria.',
      'Acidosis metabólica.',
      'Acidosis respiratoria.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-70',
    statement: 'Señale la afirmación correcta, respecto a los  niveles de calcio plasmático:',
    options: [
      'El calcio total debe valorarse conjuntamente con  la concentración de proteínas.',
      'El hipoparatiroidismo es causa de hipercalcemia.',
      'En situación de acidosis, disminuye el calcio  iónico.',
      'La calcitonina produce elevación de los niveles  de calcio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-71',
    statement: 'La acidosis respiratoria:',
    options: [
      'Se produce cuando la pO2 es baja.',
      'Se produce cuando la pCO2 es elevada.',
      'Se produce cuando el bicarbonato es bajo.',
      'Se produce cuando el pH es mayor de 7,45',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-72',
    statement: 'La concentración de potasio en suero se ve  falsamente elevada:',
    options: [
      'por retraso en su medición, siendo más acusado  cuando la muestra se conserva a 25 grados que  cuando se conserva a 4 grados de temperatura.',
      'por retraso en su medición, siendo más acusado  cuando la muestra se conserva a 4 grados que  cuando se conserva a 25 grados de temperatura.',
      'en pacientes con enfermedad renal crónica  avanzada.',
      'cuando el contenedor no se llena lo suficiente',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-73',
    statement: 'Cuando la hemoglobina va cargada de monóxido  de carbono (CO) se denomina:',
    options: [
      'Desoxihemoglobina.',
      'Carboxihemoglobina.',
      'Metahemoglobina.',
      'Carbaminohemoglobina.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-74',
    statement: '¿Cuál es el catión más importante del líquido  intracelular?',
    options: ['Sodio.', 'Cloro.', 'Potasio.', 'Magnesio.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-75',
    statement: 'Valores normales de pCO2',
    options: ['15-25mmHg', '23-35mmHg', '35-45mmHg', '45-55mmHg'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-76',
    statement: 'En acidosis respiratorio',
    options: ['PCO2 disminuye.', 'PH aumenta', 'Hay hipoventilación alveolar.', 'Todas son falsas'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-77',
    statement: 'Para regular el pH del medio, el riñón:',
    options: [
      'Acidifica las sales de fosfato.',
      'Segrega amonio.',
      'Reabsorbe bicarbonato.',
      'Todas son ciertas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-78',
    statement: '¿Con qué tipo de electrodos se mide el pH?',
    options: [
      'Con el electrodo de Severinghaus',
      'Con el electrodo de vidrio',
      'Con el electrodo de Clark',
      'Con el electrodo selectivo',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-79',
    statement: '¿Cuál de las siguientes afirmaciones es  INCORRECTA?',
    options: [
      'El procesamiento de una jeringa venosa/arterial  ha de realizarse antes de los 30 minutos posteriores  a su extracción.',
      'Se recomienda despreciar la primera parte la  muestra de una jeringa antes de su análisis, para  evidenciar la presencia de coágulos en la misma.',
      'El anión gap es la diferencia entre las  concentraciones de cationes y los aniones medidos  en una muestra.',
      'Como causa de una hiperventilación profunda,  suele aparecer acidosis respiratoria.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-80',
    statement: '¿Por qué se caracteriza la alcalosis respiratoria?',
    options: [
      'pH disminuido, pCO2 aumentado, HCO3- aumentado.',
      'pH aumentado, pCO2 aumentado, HCO3- aumentado.',
      'pH aumentado, pCO2 disminuido, HCO3- disminuido.',
      'pH disminuido, pCO2 disminuido, HCO3- aumentado',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-82',
    statement:
      'Si un aumento del pH de la sangre va acompañado  de un aumento de la concentración de HCO3 y una  pCO2 normal, se trata de ...',
    options: [
      'Acidosis metabólica',
      'Acidosis respiratoria',
      'Alcalosis metabólica',
      'Alcalosis respiratoria',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-83',
    statement: 'Indique cuál es el principal catión extracelular:',
    options: ['Cl', 'Na+', 'K+', 'HCO3'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-84',
    statement: 'Indique una causa de hipopotasemia:',
    options: ['alcalosis metabólica', 'insuficiencia renal', 'hemólisis', 'déficit de insulina'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-85',
    statement: '¿Qué es el anión gap?',
    options: [
      'Es un ácido orgánico capaz de regular el pH.',
      'Es un tampón que convierte bases fuertes en  sales neutras y agua, manteniendo alteraciones  mínimas de los niveles, actuando de igual forma  con los ácidos.',
      'Es la cantidad que representa a la suma de los  iones que no se suelen determinar por ser múltiples  y encontrarse en proporciones muy bajas.',
      'Es la suma de todos los aniones del plasma.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-86',
    statement: 'El tampón bicarbonato actúa:',
    options: [
      'En el exterior de la célula.',
      'En el sistema amortiguador pulmonar.',
      'A nivel de la membrana celular.',
      'Dentro de la célula.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-87',
    statement: 'En gasometrías, las muestras de sangre venosa se  recomiendan para:',
    options: [
      'Conocer el estado de oxigenación del paciente.',
      'Evaluar la efectividad de la oxigenoterapia.',
      'Valorar el estado del equilibrio ácido-base.',
      'Medir la cooximetría.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-88',
    statement: '¿Qué es la saturación de oxígeno en sangre?',
    options: [
      'Es la cantidad total de oxígeno: el unido a la  hemoglobina más el disuelto en el plasma.',
      'Es la relación entre la cantidad de oxígeno  combinado con la hemoglobina presente en el  medio y la cantidad máxima de dióxido de carbono  que podría estar combinado con la hemoglobina en  ese mismo medio.',
      'Es la relación entre la cantidad de oxígeno  combinado con la hemoglobina presente en el  medio y la cantidad máxima de oxígeno que podría  estar combinado con la hemoglobina en ese mismo  medio.',
      'Es la relación entre la cantidad de oxígeno  combinado con la hemoglobina presente en el  medio y la cantidad mínima de oxígeno que podría  estar combinado con la hemoglobina en ese mismo  medio.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-89',
    statement:
      'Si nos encontramos un aumento de dióxido de  carbono y un pH de 7.1, estamos hablando de:',
    options: [
      'Acidosis metabólica.',
      'Alcalosis respiratoria.',
      'Acidosis respiratoria.',
      'Alcalosis metabólica.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-90',
    statement: 'Las sustancias que al disociarse aportan al medio  hidrogeniones, se denominan:',
    options: ['Bases.', 'Grupos hidroxilos.', 'Ácidos.', 'Protones.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-91',
    statement: 'La constante de disociación se denomina:',
    options: ['K.', 'l.', 'p.', 'r.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-92',
    statement: 'El agua se comporta como una sustancia:',
    options: ['Anfolita.', 'Básica.', 'Ácida.', 'Todas son ciertas.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-93',
    statement: 'Es falso que el tampón bicarbonato:',
    options: [
      'Es un tampón extracelular cuya principal función  se realiza en la sangre.',
      'Es un tampón con una elevada concentración.',
      'Actúa como sal neutra.',
      'Cuando interaccione con una base el  bicarbonato neutralizará a la misma impidiendo el  cambio de pH.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-94',
    statement: 'Para realizar el hueco aniónico medimos de los  aniones el:',
    options: ['Sulfato.', 'Sodio.', 'Bicarbonato.', 'Ácidos orgánicos.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-95',
    statement: 'El anión gap suele oscilar entre:',
    options: ['0-0.5.', '5-7.', '10-12.', '15-17.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-96',
    statement: 'El primer tampón que se va a activar en una  acidosis metabólica, es:',
    options: [
      'El riñón.',
      'El bicarbonato.',
      'La alteración de la respiración.',
      'La frecuencia cardiaca.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-97',
    statement:
      'El principal amortiguador de una acidosis  respiratoria lo constituyen los tampones:',
    options: ['Tisulares.', 'Sanguíneos.', 'Celulares.', 'Renales.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-98',
    statement: 'Para determinar el pH de una muestra sanguínea,  buscamos:',
    options: [
      'La saturación de oxígeno.',
      'La diferencia de potencial entre dos electrodos.',
      'La saturación de la hemoglobina.',
      'Cualquiera de los anteriores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-99',
    statement:
      'Las tiras reactivas para la determinación de pH en  orina presentan como indicador:',
    options: ['Azul B.', 'Verde jano.', 'Ocre pouch.', 'Rojo metilo.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-100',
    statement: 'En un estudio de gases no es necesario buscar:',
    options: ['ph.', 'PCO2', 'PO2', 'Saturación de la transferrina.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-101',
    statement: 'El test de Allen nos informa sobre:',
    options: [
      'La saturación de oxígeno.',
      'El pulso del paciente.',
      'La correcta circulación de ambas arterias de la  muñeca.',
      'El correcto estado de la circulación del paciente.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-102',
    statement: 'Los valores normales de PO2 en sangre es:',
    options: ['90.', '60.', '50.', '40.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-103',
    statement: 'Consideraremos normales unos valores de PCO2  en sangre de:',
    options: ['100.', '70.', '50.', '40.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-104',
    statement:
      'Las características bioquímicas que no son  compatibles con los estadios clínicos de acidosis  metabólica son',
    options: [
      'Disminución del pH.',
      'Descenso del bicarbonato plasmático.',
      'Reducción compensadora de la pCO2.',
      'Hipopotasemia.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-105',
    statement:
      '¿Cuál es la causa por la que el dióxido de carbono  difunde a través de la membrana respiratoria 20  veces más rápido que el oxígeno?',
    options: [
      'El peso molecular del dióxido de carbono es  mayor que el del oxígeno.',
      'El gradiente de presión parcial para el dióxido de  carbono a través de la membrana respiratoria es  mucho mayor que para el oxígeno.',
      'La permeabilidad del endotelio de los capilares  pulmonares para el dióxido de carbono es mucho  mayor que para el oxígeno.',
      'La solubilidad del dióxido de carbono es mucho  mayor que la del oxígeno.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-106',
    statement: 'Para preparar una disolución tampón de la  máxima capacidad amortiguadora:',
    options: [
      'El pH de la disolución debe ser igual que el pKa.',
      'El pH de la disolución debe ser igual que el pKb.',
      'El pH de la disolución debe ser igual que el pKa  +2.',
      'El pH de la disolución debe ser igual que pKb +2.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-108',
    statement:
      '¿Cuál de las siguientes sustancias contribuye más  significativamente en la determinación de la  osmolalidad plasmática?',
    options: ['Glucosa', 'Proteínas', 'Sodio', 'Urea'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-109',
    statement:
      'Desde el punto de vista fisiológico, ¿cuál de los  siguientes No es un buffer importante para  mantener el pH sanguíneo?',
    options: ['Bicarbonato', 'Proteínas', 'Lactato', 'Fosfato'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-110',
    statement:
      '¿Qué fracción de hemoglobina se forma cuando el  ion ferroso del grupo hemo se oxida a férrico y es  incapaz de combinarse con el oxígeno?',
    options: ['Metahemoglobina', 'Carboxihemoglobina', 'Desoxihemoglobina', 'Oxihemoglobina'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-112',
    statement: 'Si una partícula está cargada positivamente:',
    options: ['Se denomina anión', 'Se denomina ánodo', 'Se denomina catión', 'Se denomina cátodo'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-114',
    statement:
      '¿La determinación de qué electrolito debe  valorarse conjuntamente con la concentración de  proteínas plasmáticas?',
    options: ['Cloro', 'Calcio', 'Potasio', 'Sodio'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-115',
    statement: 'Respecto a la utilización de un pH-metro, ¿cuál es  la respuesta incorrecta?',
    options: [
      'Se ha de calibrar con disoluciones patrón antes  de medir',
      'Entre cada medida hay que lavar el electrodo con  agua destilada',
      'No es necesario tener en cuenta la temperatura',
      'El electrodo se guarda en una solución  conservadora de KCI',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-117',
    statement: 'Respecto al análisis de gasometrías en el  laboratorio:',
    options: [
      'Deben implantarse los medios precisos para que  sean analizadas antes de 90 minutos',
      'Las muestras con grandes burbujas de aire o con  muchas pequeñas no deben ser analizadas ya que  pH, pO2 y pCO2 no serán valorables por la  contaminación con aire',
      'No hay valores críticos que deban ser notificados  inmediatamente',
      'La fracción de inspiración de oxígeno no es  necesario ponerla ya que no afecta a ningún  cálculo. Lo mismo ocurre con la temperatura en  pacientes con fiebre',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-118',
    statement:
      '¿Cuál de las siguientes determinaciones es más útil  en el diagnóstico de la intoxicación por monóxido  de carbono?:',
    options: [
      'Determinación pCO2.',
      'Determinación de la pO2.',
      'Determinación de la carboxihemoglobina',
      'Determinación de la saturación de oxígeno.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-119',
    statement:
      'De las siguientes respuestas, señale cuál no está  entre los principales mecanismos amortiguadores  del pH que posee el organismo:',
    options: [
      'Sistema amortiguador del fosfato.',
      'Sistema amortiguador del carbonato.',
      'Sistema amortiguador de la amilasa',
      'Sistema amortiguador de las proteínas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-120',
    statement: 'Una de las siguientes respuestas es verdadera,  indíquela:',
    options: [
      'Acidosis metabólica: el pH aumenta como  consecuencia de un descenso de la concentración  de bicarbonato.',
      'Alcalosis metabólica: el pH disminuye como  consecuencia de un incremento de los niveles de  bicarbonato.',
      'Acidosis respiratoria: el pH disminuye como  consecuencia de un incremento en los niveles de la  pCO2.',
      'Alcalosis respiratoria: el pH disminuye como  consecuencia de un descenso en los niveles de  pCO2.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-121',
    statement: '¿Qué es el hiato aniónico?:',
    options: [
      'Concentración de cationes no medidos.',
      'Concentración de aniones no medidos.',
      'Aproximación matemática de la diferencia  existente entre aniones y cationes determinados  sistemáticamente en suero.',
      'Es el anión principal extracelular.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-122',
    statement: 'Con respecto a la definición de Ph señala la  correcta',
    options: [
      'Ácidos: sustancias que en disolución aportan al  medio grupos hidroxilos.',
      'Bases: sustancias que al disociarse aportan al  medio grupos hidronoines o captan hidroxilos.',
      'Bases: sustancias que al disociarse aportan al  medio grupos hidroxilos o que captan  hidrogeniones.',
      'Las diferentes moléculas serán disociadas  formando iones. Si estos iones son atraídos por un  polo negativo (ánodo) se denomina catión.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-123',
    statement: 'Señala la afirmación incorrecta en referencia a la  regulación fisiológica del pH',
    options: [
      'El equilibrio ácido-básico es aquella situación en  la que se establece un equilibrio en el balance entre  sustancias de carácter ácido y de carácter básico en  el torrente sanguíneo.',
      'Las alteraciones del equilibrio ácido-básico  pueden ser de dos tipos: metabólicas y  respiratorias.',
      'La alteración metabólica es causada  principalmente por una alteración en la  concentración de dióxido de carbono en la sangre.',
      'La alteración respiratoria es causada por una  alteración en la concentración de dióxido de  carbono en la sangre.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-124',
    statement:
      'Para determinar el pH de una muestra sanguínea  buscamos la diferencia de potencial entre dos  electrodos denominados electrodo de referencia y  electrodo indicador. El electrodo de referencia  puede ser',
    options: [
      'Electrodo de cobre.',
      'Electrodo de magnesio.',
      'Electrodo de hidrógeno.',
      'Electrodo de calomel saturado',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-125',
    statement: 'Los parámetros que buscamos en unos gases  sanguíneos son',
    options: [
      'pH, PCO2, PO2.',
      'Amilasa y O2 calculado l/100l.',
      'Proteínas y HCO3 calculado en mol/l.',
      'Grasas totales, PO2 calculado en mm de Hg.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-126',
    statement: 'El plasma está formado por',
    options: [
      'Agua en su 90% y otras sustancias como  nutrientes, sales, azúcares, minerales hormonas,  proteínas.',
      'Suero con altas cantidades de fibrinógeno.',
      'Suero anaranjado, viscoso, pobre en cloruro de  sodio.',
      'Un 20% de proteínas y un 10% de sales.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-127',
    statement: 'Señale la opción verdadera con respecto a las  muestras sanguíneas arteriales',
    options: [
      'Los sitios más comunes de punción arterial son  las arterias femoral, braquial o radial.',
      'La punción arterial es necesaria  fundamentalmente para la realización de  gasometrías.',
      'La sangre obtenida por punción arterial debería  procesarse inmediatamente después de extraída,  por lo que, lo ideal, es contar con equipos de  gasometría en la propia sala donde se realiza la  extracción.',
      'Todas las opciones son verdaderas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-128',
    statement: '¿Cuál de las siguientes afirmaciones es incorrecta?',
    options: [
      'El procesamiento de una jeringa venosa/arterial  ha de realizarse antes de los 30 minutos posteriores  a su extracción.',
      'Se recomienda despreciar la primera parte de la  muestra de una jeringa antes del análisis, para  evidenciar la presencia de coágulos.',
      'El anión gap es la diferencia entre las  concentraciones de cationes y los aniones medidos  en una muestra.',
      'Como causa de una hiperventilación profunda  suele aparecer acidosis respiratoria.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-130',
    statement: 'Con respecto a la compensación del equilibrio  ácido-base de tipo pulmonar:',
    options: [
      'Es rápida, comienza en minutos y se estabiliza en  24 horas.',
      'Ante un aumento de pH (alcalosis), se tiende a  hipoventilar para elevar la pCO2.',
      'Ante un descenso de pH (acidosis), se tiende a  hiperventilar para disminuir la pCO2.',
      'Todas las respuestas anteriores son correctas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-131',
    statement:
      '¿Cuál de los siguientes parámetros muestra  mayores diferencias entre sangre venosa y  arterial?:',
    options: ['CO2 total.', 'pO2.', 'pCO2.', 'pH.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-133',
    statement: 'El vaso arterial que lleva sangre desoxigenada es:',
    options: ['Arteria hepática.', 'Arteria pedia.', 'Arteria pulmonar.', 'Aorta.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-134',
    statement: 'Solicitan iones de un suero. ¿Cuál de estos iones es  un anión?:',
    options: ['Cloro.', 'Potasio.', 'Sodio.', 'Calcio.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-135',
    statement:
      '¿En cuál de las siguientes NO está indicada la  medida de la concentración de magnesio?',
    options: [
      'Arritmias cardíacas refractarias',
      'Diarreas prolongadas o graves',
      'Hiperpotasemia',
      'Alcoholismo.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-136',
    statement: '¿Cuál de las siguientes enfermedades no produce  hipercalcemia?',
    options: [
      'Hiperparatiroidismo primario.',
      'Hiperfosfatemia.',
      'Mieloma múltiple.',
      'Cáncer de mama y de pulmón.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-137',
    statement: '¿Cuál de las siguientes enfermedades no produce  hipocalcemia?',
    options: [
      'Insuficiencia renal.',
      'Pancreatitis aguda.',
      'Hipoparatiroidismo.',
      'Cáncer de mama.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-138',
    statement:
      '¿Cuál de las siguientes moléculas contribuye en  mayor medida al hiato aniónico o anión GAP?:',
    options: ['Albúmina.', 'Anión lactato.', 'Anión fosfato.', 'Anión sulfato.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-139',
    statement:
      'Una vez obtenidos los valores observamos: sodio  de 135 mEq/L; potasio de 3 mEq/L, calcio 9,5  mg/dL y cloro 100 mEq/L. ¿Cuál está alterado?:',
    options: ['Sodio.', 'Potasio.', 'Cloro.', 'Calcio.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-140',
    statement: 'Señale la sentencia correcta en relación a la  medida de lactato en sangre:',
    options: [
      'Un nivel de lactato inferior a 5 mmol/L es  indicador de mal pronóstico.',
      'Se encuentra como resultado de la glucólisis  aeróbica durante el ejercicio intenso.',
      'No es necesario su análisis urgente.',
      'Ha demostrado ser un predictor de la gravedad  de la enfermedad.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-141',
    statement: 'La muestra de líquido pleural para la  determinación de pH debe:',
    options: [
      'Ser transportada en frío.',
      'Ser atemperada antes de la toma de muestra.',
      'Ser transportada protegida de la luz.',
      'No se determina pH en el líquido pleural.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-142',
    statement: 'Para realizar una gasometría en la arteria radial  debemos hacer antes el test:',
    options: ['Benedit.', 'Allen.', 'Crussó.', 'Mario.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-143',
    statement: 'La recogida de sangre de una gasometría se  realiza:',
    options: [
      'En jeringa especial sin anticoagulante.',
      'En jeringa con EDTA.',
      'En jeringa con heparina.',
      'En jeringa con citrato.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-145',
    statement:
      'Entre los resultados de una gasometría arterial  podemos observar: PH=7,6 HCO-3 = 30mEq/L  pCO2= 50 mmHg. Dichos resultados nos indicarán:',
    options: [
      'Acidosis respiratoria.',
      'Alcalosis respiratoria.',
      'Acidosis metabólica.',
      'Alcalosis metabólica.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-146',
    statement: '¿Cuál de los siguientes electrodos se utiliza para  medir PO2?:',
    options: [
      'Electrodo de vidrio.',
      'Electrodo Clark.',
      'Electrodo selectivo.',
      'Electrodo Stow-Severinghaus',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-147',
    statement: '¿Cuándo puede estar disminuida la osmolalidad  plasmática?',
    options: [
      'Con hiperglucemia.',
      'Con hipernatremia.',
      'Con hiponatremia.',
      'En la Diabetes mellitus.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-149',
    statement: '¿Cuál es un mecanismo compensador en una  alcalosis metabólica?:',
    options: [
      'Eliminación de CO2 (hiperventilando).',
      'Retención de CO2 (hipoventilando).',
      'Eliminación CO2 (hipoventilando).',
      'Retención de Bicarbonato.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-150',
    statement: '¿Qué tampón químico sanguíneo resulta de  especial interés a nivel tisular?',
    options: [
      'Tampón de Hemoglobina.',
      'Tampón fosfato.',
      'Tampón Bicarbonato.',
      'Tampón de las proteínas plasmáticas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-151',
    statement:
      '¿Qué porcentaje del calcio presente en nuestro  organismo se encuentra en los huesos?',
    options: ['Menos del 75 %.', 'Entre 75 % - 85 %.', 'Entre 85 % - 95%.', 'Más del 95 %.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-152',
    statement:
      '¿Qué magnitud bioquímica se puede encontrar  disminuida por debajo de los valores normales en  caso de acidosis respiratoria?',
    options: [
      'pH en orina.',
      'pH sanguíneo.',
      'Presión parcial de dióxido de carbono en sangre.',
      'Concentración de ácido carbónico en sangre.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-153',
    statement: '¿Cuáles son los valores normales en sangre arterial  de pO2 en un adulto?',
    options: ['80-100 mmHg.', '35-45 mmHg.', '50-70 mmHg.', '7,35-7,45.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-154',
    statement: 'Hay hiperkalemia en:',
    options: [
      'Una concentración de sodio en sangre por  encima de 150 mEq/L.',
      'Una concentración de sodio en sangre por  debajo de 130 mEq/L.',
      'Una concentración de potasio en sangre de 6,5  mEq/L.',
      'Una concentración de calcio en sangre por  encima de 10,5 mg/dL.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-156',
    statement:
      'La fuerza de un ácido o una base vendrá definida  por su constante de disociación. Señale la  respuesta correcta.',
    options: [
      'Cuanto mayor sea el valor de Ka, más débil es el  ácido.',
      'Cuanto mayor sea el valor de Kb, la base será  más débil.',
      'Cuanto menor sea el valor de Ka, más débil es el  ácido.',
      'Cuanto menor sea el valor de Kb, la base será  más fuerte.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-157',
    statement: 'En la determinación de gases sanguíneos, la Pco2  informa acerca del:',
    options: [
      'Estado de ventilación.',
      'Estado de oxigenación.',
      'Grado de compensación renal.',
      'Grado de compensación para contrarrestar un  aumento de la Pco2.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-161',
    statement:
      'La determinación fundamental para estudiar el  equilibrio ácido-base, de un paciente, desde el  laboratorio es:',
    options: ['Medida de la osmolaridad.', 'Una gasometría.', 'Recuento de basófilos.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-162',
    statement: '¿Qué muestra no debe emplearse para determinar  el calcio?',
    options: ['Suero (con gel).', 'Suero (sin gel).', 'Plasma (EDTA).', 'Plasma (heparina).'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-163',
    statement:
      'A un paciente que ha sufrido un accidente de  automóvil y que se le está administrando oxígeno  a través de una cánula nasal, se le determinan los gases sanguíneos arteriales, y se obtienen los  siguientes resultados: pH = 7.29, pO2 =90, pCO2=  55, HCO3¯= 27.5, % Saturación Hb= 95%. ¿Cuál es  el diagnóstico más probable?:',
    options: [
      'Acidosis respiratoria.',
      'Alcalosis respiratoria.',
      'Acidosis metabólica.',
      'Alcalosis metabólica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-164',
    statement: '¿Qué aditivo es el más específico para la  determinación de una gasometría?',
    options: [
      'Heparina de litio-Ca2+.',
      'Fluoruro de oxalato.',
      'Citrato sódico.',
      'Depende si es venosa o arterial.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-165',
    statement:
      'La gasometría es una técnica que no solo  proporciona el pH y las presiones de oxígeno y dióxido de carbono en sangre, sino también la  concentración de bicarbonato, pero ¿de qué forma  es posible obtener dicha concentración?',
    options: [
      'Mediante un electrodo de calomelanos.',
      'Mediante un electrodo de platino y cloruro de  plata.',
      'Mediante un detector fotoeléctrico específico.',
      'Se obtiene indirectamente a partir de otras  medidas proporcionadas por la gasometría.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-166',
    statement:
      'La anhidrasa carbónica (AC) o carbonato  deshidratasa es una metaloenzima implicada ¿en  qué importante función orgánica?',
    options: [
      'Antioxidante.',
      'Degradación intracelular de carbohidratos.',
      'Regulación del balance osmótico en sangre y  orina.',
      'Mantenimiento del equilibrio ácido-base.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-168',
    statement:
      '¿Cuál de las siguientes técnicas analíticas se  emplea para la determinación de los niveles de  manganeso en sangre?',
    options: [
      'Cromatografía Líquida - Espectrometría de  Masas.',
      'Espectrofotometría de absorción atómica con  atomización electrotérmica.',
      'Cromatografía de Gases - Espectrometría de  Masas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-171',
    statement: '¿Entre qué límites se encuentran los valores de pH  de la sangre?',
    options: ['7.25 a 7.45.', '7.35 a 7.45.', '7.35 a 7.55.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-172',
    statement: 'Con los valores de una gasometría arterial, marque  la opción verdadera:',
    options: [
      'Un valor de pH de 6,9 determina directamente  que existe acidosis metabólica.',
      'La relación de las bases 1:1 indica una  insuficiencia respiratoria.',
      'Un aumento de PaCO₂ por encima de los límites  normales indica hipoxemia.',
      'Si el valor de PaO₂ está por encima de 60 mmHg,  la saturación arterial de la hemoglobina será  superior al 90%.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-174',
    statement: 'Respecto a una solución amortiguadora o tampón,  señale la opción falsa:',
    options: [
      'Es una solución que puede absorber cantidades  moderadas de ácidos o bases sin que se produzca  un cambio significativo en su pH.',
      'La ecuación pH = pKa + log [sal/ácido] es muy útil  para la preparación de las soluciones tampón  porque permite calcular el pH de la solución  resultante.',
      'El pH más adecuado para el correcto  funcionamiento de una solución tampón es cuando  se encuentra en un rango de pH igual a su pKa ± 10.',
      'Las soluciones tampón pueden estar formadas  por un ácido débil y su base conjugada.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-176',
    statement: 'Respecto al análisis de gasometrías en el  laboratorio:',
    options: [
      'Las muestras que presenten burbujas de aire no  deben procesarse puesto que los valores de pH,  pCO2 y pO2 obtenidos no serán valorables',
      'Una vez recibidas en el laboratorio pueden  procesarse durante las 24 horas siguientes',
      'Se recomienda que las jeringas de plástico se  conserven en frío hasta su procesamiento',
      'La hemólisis no es un problema preanalítico en  las muestras de gasometría',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-177',
    statement: 'En la acidosis respiratoria no compensada:',
    options: [
      'El pH disminuye con aumento en los niveles de  pCO2',
      'El pH disminuye con reducción en los niveles de  bicarbonato (HCO3-)',
      'El pH disminuye con reducción en los niveles de  pCO2',
      'El pH aumenta con aumento en los niveles de  pCO2',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-178',
    statement: 'El anión GAP:',
    options: [
      'Su rango de normalidad es inferior a 10 mEq/L',
      'Su resultado es más bajo cuando existe acúmulo  de hidrogeniones que desplazan el bicarbonato',
      'Representa el valor de los aniones que no son  habitualmente determinados (proteínas  plasmáticas, fosfatos, sulfatos y lactatos)',
      'Es la diferencia entre la suma la concentración  de aniones, representada por el cloro y el  bicarbonato, menos la suma de la concentración de  los cationes sodio y potasio',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-181',
    statement: 'Se produce alcalosis metabólica cuando:',
    options: [
      'Aumenta pH, aumenta HCOˉ₃ y normal o  aumenta pCO₂.',
      'Disminuye pH, disminuye HCOˉ₃ y normal o  disminuye pCO₂.',
      'Disminuye pH, aumenta HCOˉ₃ y normal o  disminuye pCO₂.',
      'Aumenta pH normal o disminuye HCOˉ₃ y  disminuye pCO₂.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-182',
    statement: 'El parámetro denominado presión parcial de  oxígeno se obtiene de la muestra:',
    options: ['Sangre arterial.', 'Orina.', 'Heces.', 'Líquido cefalorraquídeo.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-183',
    statement: 'En la alcalosis respiratoria nos encontramos con:',
    options: [
      'CO2 disminuido y pH aumentado.',
      'CO2 aumentado y pH disminuido.',
      'CO2 aumentado y pH aumentado.',
      'CO2 disminuido y pH disminuido.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-184',
    statement: 'Los resultados de una gasometría de un EPOC se  caracterizan por:',
    options: [
      'La PO2 arterial se encuentra alrededor de 70  mmHg y la PCO2 suele ser elevada, la CPT y el VR se  encuentran aumentados, la CV y el FEV están  disminuidos.',
      'La PO2 arterial se encuentra alrededor de 70  mmHg y la PCO2 suele ser baja o normal, la CPT y el  VR se encuentran aumentados, la CV y el FEV están  disminuidos.',
      'La PO2 arterial se encuentra inferior de 70 mmHg  y la PCO2 suele ser elevada, la CPT y el VR se  encuentran aumentados, la CV y el FEV están  disminuidos.',
      'La PO2 arterial se encuentra alrededor de 70  mmHg y la PCO2 suele ser elevada, la CPT y el VR se  encuentran aumentados, la CV y el FEV están  aumentados',
      'Ninguna es correcta.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-185',
    statement:
      'Para realizar una determinación de calcio en qué  contenedor NO se debe extraer la muestra:',
    options: ['Tubo EDTA.', 'Tubo seco.', 'Tubo heparina de litio.'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-187',
    statement:
      'Entre las siguientes opciones, señale cuál no es  una de las principales causas de hipocalcemia.',
    options: [
      'Hipofunción de la glándula pineal.',
      'Formación deficiente de Vitamina D.',
      'Hipofunción o ausencia de la glándula  paratiroides.',
      'Malabsorción intestinal.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-188',
    statement:
      'La alteración de los parámetros del equilibrio  ácido-básico que encontramos en la alcalosis  respiratoria no compensada, serán:',
    options: [
      'pH disminuido, HCO₃ aumentado y pCO₂  aumentado.',
      'pH aumentado, HCO₃ aumentado y pCO₂  aumentado.',
      'pH aumentado, HCO₃ disminuido y pCO₂  disminuido.',
      'pH disminuido, HCO₃ disminuido y pCO₂  disminuido.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-189',
    statement:
      'Para mantener el pH constante se utilizan los  amortiguadores ¿Qué otro nombre recibe?',
    options: ['Acido débil.', 'Buffers.', 'Master-mix.', 'Todas son correctas.'],
    correctIndex: 1,
  },
  {
    id: 'tema-1-191',
    statement:
      '¿En qué contenedor se deben extraer las muestras  para la determinación de gases en sangre?',
    options: ['Jeringa heparinizada.', 'Tubo de EDTA hielo.', 'Tubo heparina de litio'],
    correctIndex: 0,
  },
  {
    id: 'tema-1-192',
    statement:
      'Se solicita al paciente una gasometría arterial,  pero, cuando se realiza la extracción, llaman al  enfermero urgentemente para atender a otro  paciente que ha sufrido un paro respiratorio y la  muestra se queda en la mesa de nuestro paciente  durante al menos dos horas, tras las cuales un  auxiliar la ve y la lleva al laboratorio. ¿Qué se  observa en los resultados de la gasometría, puesto  que la muestra ha estado mucho tiempo sin la  necesaria conservación en hielo?',
    options: [
      'Una disminución de la pCO2.',
      'Un gran aumento del pH.',
      'Un incremento de la pCO2.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-194',
    statement: '¿Cuál de los siguientes parámetros NO se incluye  en una gasometría?',
    options: ['PCO2.', 'PO2.', 'HCO3.', 'Calcio.'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-195',
    statement:
      'Un potasio normal o alto en un sujeto con  bicarbonato plasmático alto, sugiere  compensación de:',
    options: [
      'Una acidosis respiratoria.',
      'Una acidosis metabólica.',
      'Una alcalosis respiratoria.',
      'Una alcalosis metabólica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-196',
    statement: 'La alcalosis respiratoria se da la siguiente  situación:',
    options: [
      'pH plasma menor de 7,35 y disminución de la  pCO2.',
      'pH plasma menor de 7,35 y aumento de la pCO2.',
      'pH plasma mayor de 7,45 y disminución de la  pCO2.',
      'pH plasma mayor de 7,45 y aumento de la pCO2',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-197',
    statement: 'Un descenso de pH:',
    options: [
      'Aumenta la afinidad del oxígeno por la  hemoglobina.',
      'Disminuye la afinidad del oxígeno por la  hemoglobina.',
      'Aumenta, al menos, el 30% del porcentaje total  de saturación de la hemoglobina.',
      'No tiene efecto en la saturación de oxígeno por  la hemoglobina.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-198',
    statement: 'La intoxicación por salicilatos, etanol, metanol o  etilenglicol da lugar a una:',
    options: [
      'Acidosis metabólica.',
      'Alcalosis metabólica.',
      'Acidosis respiratoria.',
      'Alcalosis respiratoria.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-201',
    statement: '¿Qué situación, de entre las siguientes, NO  produce hipercalcemia?:',
    options: [
      'Mieloma múltiple.',
      'Tratamiento con diuréticos del asa.',
      'Metástasis óseas de tumores sólidos.',
      'Hiperparatiroidismo.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-202',
    statement: '¿Qué grupo de resultados es consistente con  acidosis metabólica descompensada?:',
    options: [
      'pH 7.34, HCO3 18 mmol/L, pCO2 40 mm Hg.',
      'pH 7.25, HCO3 15 mmol/L, pCO2 35 mm Hg .',
      'pH 7.30, HCO3 16 mmol/L, pCO2 28 mm Hg.',
      'pH 7.45, HCO3 22 mmol/L, pCO2 40 mm Hg.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-203',
    statement:
      '¿Cuál es el mejor método para la determinación de  la concentración de sodio sérico en un paciente  con hipoproteinemia o hiperlipidemia?',
    options: [
      'La potenciometría directa.',
      'La potenciometría indirecta.',
      'La fotometría de llama.',
      'Cualquiera de los anteriores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-205',
    statement:
      'En una segunda petición, llega al laboratorio la  jeringa de gases arteriales con la sangre  sedimentada y se confirma que la extracción se ha  hecho una hora antes. ¿Cómo debemos proceder?',
    options: [
      'Homogeneizamos y procesas la muestra.',
      'No homogeneizamos y procesamos la muestra.',
      'Rechazamos la muestra por falta de estabilidad.',
      'Procesamos la muestra y añadimos un  comentario.',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-206',
    statement:
      'Cuál de las siguientes condiciones de transporte  debe cumplir un espécimen para la determinación  de lactato y piruvato',
    options: [
      'Se debe mantener a temperatura ambiente.',
      'Se debe mantener refrigerado en hielo.',
      'Debe mantenerse a 37 °C.',
      'Se debe mantener congelado.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-208',
    statement:
      'Los analizadores automáticos de pH y gases  sanguíneos miden mediante electrodos específicos  los siguientes parámetros:',
    options: [
      'pH, saturación de O2, concentración de  hidrogenocarbanato plasmático',
      'pH, pCO2, pO2',
      'pH, HCO3, CO total',
      'pH, HCO3, pCO2, pO2, exceso de base',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-209',
    statement: 'El pH se mide con el electrodo de:',
    options: ['Severignhaus.', 'Clark.', 'Vidrio.', 'Selectivo.'],
    correctIndex: 2,
  },
  {
    id: 'tema-1-210',
    statement:
      'Señala a qué caso se refiere. Antonio se encuentra  desorientado y con visión borrosa. Acude a  urgencias, donde se le realiza una analítica, con los  siguientes resultados: pH: 7,3, pCO2: 30 mm Hg,  [HCO3 ¯]: 15 mmol/L',
    options: [
      'Acidosis metabólica.',
      'Alcalosis metabólica.',
      'Acidosis respiratoria.',
      'Alcalosis respiratoria.',
    ],
    correctIndex: 0,
  },
  {
    id: 'tema-1-211',
    statement: '¿Qué indica la concentración de lactato?',
    options: [
      'Las concentraciones de la hemoglobina no unida  al oxígeno',
      'La capacidad potencial de transporte de oxígeno',
      'La disponibilidad de oxígeno por los tejidos',
      'La afinidad de la hemoglobina por el oxígeno  (cesión de oxígeno a los tejidos)',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-212',
    statement:
      'Señala a qué caso se refiere. Juan ha sufrido una  bronquitis agravada por su hábito tabáquico. Al  efectuar un análisis de gases en sangre se  observan los siguientes resultados: pH: 7,36, pCO2:  70 mm Hg, [HCO3 ¯]: 39 mmol/L',
    options: [
      'Acidosis metabólica parcialmente compensada.',
      'Acidosis respiratoria compensada.',
      'Alcalosis metabólica compensada.',
      'Se necesitan más datos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-214',
    statement: '¿Cuándo se dice que una molécula es anfótera?',
    options: [
      'Cuando su pH es superior a 7.',
      'Cuando su pH es inferior a 7.',
      'Cuando su pH es igual a 7.',
      'Cuando pueden actuar como ácidos o como  bases en una disolución.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-215',
    statement:
      'Para mantener constante el pH, el ion bicarbonato y la pCO2, en el medio interno, el organismo  emplea varios mecanismos',
    options: [
      'Solo emplea buffers para mantener constante  pH, pCO2 e ion bicarbonato',
      'Emplea buffers y se ayuda con la ventilación  alveolar, solo para mantener constante el pH',
      'Emplea buffers, se ayuda de la ventilación  alveolar y del riñón para mantener constante pH,  pCO2 e ion bicarbonato',
      'Emplea mecanismos de osmosis para  intercambiar los H+ y así mantener constante el pH',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-216',
    statement:
      '¿Qué electrolitos son los más importantes en el  equilibrio hidroeléctrico de nuestro organismo?',
    options: ['Na+, Ca+ y Mg', 'Mg, Cl-, P', 'Na+, Cl-, Ca+', 'Na+, Cl-, K+'],
    correctIndex: 3,
  },
  {
    id: 'tema-1-217',
    statement:
      'Incluimos como mecanismos de regulación del  equilibrio hidroelectrolítico en los líquidos  corporales',
    options: [
      'El aparato respiratorio, el aparato renal y el  aparato circulatorio',
      'El único mecanismo regulador, es el aparato  renal',
      'La permeabilidad selectiva de membranas',
      'El único mecanismo regulador es el aparato  respiratorio',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-219',
    statement: '¿Cómo definimos una solución tampón?:',
    options: [
      'Un ácido fuerte con una base débil.',
      'Un ácido débil en solución con su base conjugada  en forma de sal.',
      'Una sal de ácido fuerte con una sal de ácido  débil.',
      'Ninguna es correcta.',
    ],
    correctIndex: 1,
  },
  {
    id: 'tema-1-220',
    statement:
      'Las sustancias que se comportan como ácido y  como base indistintamente se denominan:',
    options: [
      'Sustancias conjugadas.',
      'Sustancias neutras.',
      'Sustancias anfitrópicas.',
      'No existen estas sustancias',
    ],
    correctIndex: 2,
  },
  {
    id: 'tema-1-221',
    statement: 'Señale la respuesta correcta respecto al lactato:',
    options: [
      'Se produce en condiciones aeróbicas.',
      'La acidosis láctica tipo A es una manifestación de  neoplasias hematológicas, particularmente los  linfomas.',
      'La acidosis tipo B es causada por la hipoxia de los  tejidos.',
      'Es un buen indicador pronóstico en pacientes  con sepsis y shock séptico.',
    ],
    correctIndex: 3,
  },
  {
    id: 'tema-1-222',
    statement:
      'El organismo en condiciones normales produce una determinada cantidad de ácidos fijos:',
    options: [
      'Son consecuencia de la actividad metabólica.',
      'Provienen del metabolismo de proteínas.',
      'Provienen de la oxidación incompleta de grasas e hidratos de carbono.',
      'Todas las anteriores son correctas.',
    ],
    correctIndex: 3,
  },
];
