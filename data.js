/* =========================================================================
   BASE DE DATOS DE ARTÍCULOS
   Estancia intersemestral: "Reproducción, maternidad y cuidado infantil
   en monos aulladores de manto de Los Tuxtlas"
   Todos los campos provienen de la lectura directa de los PDF proporcionados
   (resúmenes/abstracts, secciones de métodos y resultados). Donde un dato
   no se pudo confirmar textualmente en el artículo se marca como
   "No especificado" o "Requiere verificación".
   ========================================================================= */

const articles = [
  {
    id: 1,
    referenciaCompleta: "Rangel Negrín, A., Coyohua Fuentes, A., de la Torre Herrera, A., Cano Huertes, B., Reynoso Cruz, E., Ceccarelli, E., Gómez Espinosa, E. E., Chavira Ramírez, D. R., Moreno Espinoza, D. E., Canales-Espinosa, D., Maya Lastra, N., Cruz Miros, P., Cañadas Santiago, S., Garau, S., & Dias, P. A. D. (2021). Female reproductive energetics in mantled howler monkeys (Alouatta palliata): A follow-up study. American Journal of Physical Anthropology, 174(3), 396–406.",
    autores: "Rangel Negrín, A., Coyohua Fuentes, A., de la Torre Herrera, A., Cano Huertes, B., y colaboradores; Dias, P. A. D.",
    anio: 2021,
    titulo: "Female reproductive energetics in mantled howler monkeys (Alouatta palliata): A follow-up study",
    revista: "American Journal of Physical Anthropology",
    doi: "10.1002/ajpa.24222",
    especie: "Alouatta palliata",
    sitioEstudio: "Los Tuxtlas, Veracruz, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Costos energéticos de la reproducción",
    temasSecundarios: ["costos-energeticos", "lactancia"],
    objetivo: "Realizar un estudio de seguimiento sobre la variación en la energética reproductiva femenina, ampliando el tamaño de muestra respecto a estudios previos de la misma población, para evaluar si el balance energético se mantiene constante o varía entre los distintos estados reproductivos.",
    muestra: "48 hembras adultas de vida libre en Los Tuxtlas, México.",
    metodosPrincipales: "Determinación del balance energético mediante concentraciones de C-péptido urinario (2717 muestras de orina); registro conductual de ingesta y gasto energético (5728 horas de muestreo); gasto energético fisiológico mediante metabolitos fecales de triyodotironina (fT3; 3138 muestras fecales).",
    variablesAnalizadas: "Concentración de C-péptido urinario, presupuesto de actividades (ingesta y gasto energético conductual), metabolitos fecales de hormona tiroidea (fT3), estado reproductivo (ciclando, gestación, lactancia temprana y media/tardía).",
    resultadosPrincipales: [
      "El balance energético varió entre los estados reproductivos: el ciclo estral mostró concentraciones bajas de C-péptido.",
      "Las concentraciones más altas de C-péptido ocurrieron durante la gestación.",
      "El inicio de la lactancia marcó una disminución notable en el balance energético, que mejoró en la lactancia media y volvió a disminuir hacia el final de la lactancia.",
      "Estas variaciones no se asociaron con cambios en la adquisición de energía, sino que se reflejaron en los niveles de actividad y en fT3 durante la lactancia."
    ],
    interpretacion: "El balance energético no se mantiene constante a lo largo del ciclo reproductivo, lo que respalda la idea de que el desempeño reproductivo de las hembras de mono aullador de manto puede estar energéticamente restringido, en contraste con estudios previos de la misma población que sugerían lo contrario.",
    implicaciones: "Refuerza la importancia de la lactancia como la etapa reproductiva energéticamente más demandante y muestra que la flexibilidad conductual por sí sola no basta para evitar los costos energéticos de la reproducción.",
    usoDivulgacion: "Explicar por qué la lactancia es la etapa más costosa energéticamente para una madre aulladora, usando la analogía de un 'presupuesto de energía' que se agota y se recupera.",
    archivoPdf: "pdfs/Rangel-Negrin_et_al_2021.pdf"
  },
  {
    id: 2,
    referenciaCompleta: "de la Torre, A., Coyohua Fuentes, A., Rangel Negrín, A., Velarde Garcéz, D. A., Canales Espinosa, D., Cervantes Acosta, P., & Dias, P. A. D. (2021). Maternal care according to offspring sex and maternal physical condition in mantled howler monkeys (Alouatta palliata). Primates, 62, 379–388.",
    autores: "de la Torre, A., Coyohua Fuentes, A., Rangel Negrín, A., Velarde Garcéz, D. A., Canales Espinosa, D., Cervantes Acosta, P., & Dias, P. A. D.",
    anio: 2021,
    titulo: "Maternal care according to offspring sex and maternal physical condition in mantled howler monkeys (Alouatta palliata)",
    revista: "Primates",
    doi: "10.1007/s10329-020-00883-6",
    especie: "Alouatta palliata",
    sitioEstudio: "Los Tuxtlas, Veracruz, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Cuidado materno y sexo de la cría",
    temasSecundarios: ["cuidado-materno"],
    objetivo: "Examinar la hipótesis de Trivers-Willard (TWH) en monos aulladores de manto: se esperaba que las hembras en mejor condición física sesgaran el cuidado materno hacia hijos varones, y las hembras en peor condición hacia hijas.",
    muestra: "20 díadas madre-cría; determinación genética del sexo de la cría (7 hijas y 13 hijos); 46 muestras de orina para medir C-péptido materno.",
    metodosPrincipales: "Muestreo focal continuo de interacciones madre-cría (204 horas, entre diciembre 2017 y marzo 2019); análisis genético para determinar el sexo de la cría; medición de C-péptido urinario como indicador de condición física materna.",
    variablesAnalizadas: "Sexo de la cría, condición física materna (C-péptido), tiempo en contacto, tiempo en proximidad, transporte, vigilancia.",
    resultadosPrincipales: [
      "Las madres en mejor condición física pasaron menos tiempo en contacto con sus hijos varones y más tiempo en contacto con sus hijas.",
      "En proximidad, las madres en mejor condición estuvieron más cerca de los hijos varones y menos cerca de las hijas.",
      "Los resultados sugieren un sesgo de cuidado materno hacia las hijas, contrario a lo predicho por la hipótesis de Trivers-Willard."
    ],
    interpretacion: "A la luz de los modelos actuales de inversión materna, los resultados apoyan que las madres obtienen mayores beneficios de adecuación (fitness) a través de las hijas, no de los hijos, contradiciendo la predicción original de la TWH para esta especie.",
    implicaciones: "Aporta evidencia de que el cuidado materno puede variar de forma medible según el sexo de la cría y la condición física de la madre, lo cual es relevante para entender la flexibilidad de las estrategias maternas.",
    usoDivulgacion: "Ejemplo claro y contraintuitivo (predicción no confirmada) para explicar cómo se pone a prueba una hipótesis evolutiva clásica con datos de campo.",
    archivoPdf: "pdfs/DeLaTorre_et_al_2021.pdf"
  },
  {
    id: 3,
    referenciaCompleta: "Dias, P. A. D., Cano-Huertes, B., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Rangel-Negrín, A. (2018). Maternal condition and maternal investment during lactation in mantled howler monkeys. American Journal of Physical Anthropology, 167(1), 178–184.",
    autores: "Dias, P. A. D., Cano-Huertes, B., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Rangel-Negrín, A.",
    anio: 2018,
    titulo: "Maternal condition and maternal investment during lactation in mantled howler monkeys",
    revista: "American Journal of Physical Anthropology",
    doi: "10.1002/ajpa.23626",
    especie: "Alouatta palliata",
    sitioEstudio: "Los Tuxtlas, Veracruz, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Lactancia e inversión materna",
    temasSecundarios: ["lactancia", "cuidado-materno"],
    objetivo: "Determinar (1) si la condición física materna varía en función de la disponibilidad de alimento, los niveles de actividad y el esfuerzo de alimentación durante la lactancia, y (2) si la inversión materna es afectada por la condición materna y la edad de la cría.",
    muestra: "6 hembras adultas mientras criaban a sus crías inmaduras.",
    metodosPrincipales: "Determinación semanal de disponibilidad de alimento; medición de C-péptido en muestras de orina (306 muestras) como indicador de balance energético; registro de presupuestos de tiempo, tasas de alimentación, tiempo en vigilancia y tiempo cargando a la cría durante dos años (600 horas de observación).",
    variablesAnalizadas: "C-péptido urinario, disponibilidad de alimento, presupuesto de tiempo materno, tasa de alimentación, tiempo de vigilancia, tiempo de transporte (carga) de la cría, edad de la cría.",
    resultadosPrincipales: [
      "Los niveles de C-péptido se relacionaron positivamente con la disponibilidad de alimento.",
      "La vigilancia y el transporte de la cría alcanzaron su punto máximo en la lactancia temprana y disminuyeron progresivamente conforme la cría creció.",
      "El transporte se relacionó positivamente con los niveles de C-péptido y también fue influido por la variación en la condición materna a lo largo de la lactancia."
    ],
    interpretacion: "Estos resultados convergen con estudios teóricos y empíricos previos, y contribuyen a la evidencia de que las madres de primates no humanos ajustan su inversión de cuidado según su condición física actual, con el fin de maximizar su éxito reproductivo a lo largo de la vida.",
    implicaciones: "Muestra que la lactancia no es un periodo de inversión constante, sino que la madre ajusta transporte y vigilancia según su propia condición energética y la edad de la cría.",
    usoDivulgacion: "Explicar por qué una madre 'carga menos' a su cría conforme esta crece y cómo esto se relaciona con la energía disponible de la madre.",
    archivoPdf: "pdfs/Dias_et_al_2018.pdf"
  },
  {
    id: 4,
    referenciaCompleta: "Cano-Huertes, B., Rangel-Negrín, A., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Dias, P. A. D. (2017). Reproductive energetics of female mantled howlers (Alouatta palliata). International Journal of Primatology, 38(5), 942–961.",
    autores: "Cano-Huertes, B., Rangel-Negrín, A., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Dias, P. A. D.",
    anio: 2017,
    titulo: "Reproductive Energetics of Female Mantled Howlers (Alouatta palliata)",
    revista: "International Journal of Primatology",
    doi: "10.1007/s10764-017-9990-9",
    especie: "Alouatta palliata",
    sitioEstudio: "Los Tuxtlas, Veracruz, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Costos energéticos de la reproducción",
    temasSecundarios: ["costos-energeticos"],
    objetivo: "Evaluar cómo la estacionalidad reproductiva afecta a las hembras de mono aullador de manto, y si estas modifican su comportamiento para hacer frente a las demandas energéticas de la reproducción.",
    muestra: "7 hembras adultas; 397 árboles de alimentación en muestreo fenológico semanal.",
    metodosPrincipales: "Registro del estado reproductivo, comportamiento (1100 horas de observación focal) y condición energética (312 muestras de orina para análisis de C-péptido) entre agosto de 2013 y julio de 2015; evaluación semanal de la disponibilidad de alimento.",
    variablesAnalizadas: "Estado reproductivo (ciclando, gestante, lactante), comportamiento (alimentación, descanso), C-péptido urinario, disponibilidad de alimento, estacionalidad reproductiva.",
    resultadosPrincipales: [
      "El comportamiento femenino no varió de forma general según el estado reproductivo ni la estacionalidad reproductiva.",
      "Hubo diferencias en cómo las hembras respondieron a la variación en disponibilidad de alimento según su estado reproductivo: las hembras ciclando y gestantes pasaron más tiempo alimentándose que las lactantes, y las hembras ciclando descansaron menos que las de otros estados cuando había más alimento disponible.",
      "Las concentraciones de C-péptido no se vieron afectadas por la variación individual o general del estado reproductivo, excepto en hembras ciclando, cuyas concentraciones aumentaron en periodos de alta disponibilidad de alimento."
    ],
    interpretacion: "La condición energética de las hembras de mono aullador de manto se mantiene, en términos generales, estable a través de las distintas etapas reproductivas, pero es sensible a la variación en la disponibilidad de alimento.",
    implicaciones: "Aporta evidencia de estrategias conductuales y fisiológicas que permiten a las hembras enfrentar los costos energéticos de la reproducción sin grandes cambios conductuales generalizados.",
    usoDivulgacion: "Contrastar con los hallazgos posteriores (Rangel-Negrín et al. 2021) que sí encontraron variación energética, mostrando cómo la ciencia se construye con estudios de seguimiento.",
    archivoPdf: "pdfs/Cano-Huertes_et_al_2017.pdf"
  },
  {
    id: 5,
    referenciaCompleta: "Rangel-Negrín, A., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Dias, P. A. D. (2018). Energetic constraints on the reproduction of female mantled howlers. American Journal of Primatology, 81(1), e22925.",
    autores: "Rangel-Negrín, A., Coyohua-Fuentes, A., Chavira-Ramírez, D. R., Canales-Espinosa, D., & Dias, P. A. D.",
    anio: 2018,
    titulo: "Energetic constraints on the reproduction of female mantled howlers",
    revista: "American Journal of Primatology",
    doi: "10.1002/ajp.22925",
    especie: "Alouatta palliata",
    sitioEstudio: "La Flor de Catemaco, Los Tuxtlas, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Costos energéticos de la reproducción",
    temasSecundarios: ["costos-energeticos"],
    objetivo: "Examinar cómo la condición física femenina afecta la ocurrencia de la concepción y los intervalos entre nacimientos (IBI) en hembras de mono aullador de manto, especie en la que las hembras experimentan periodos largos sin concepción.",
    muestra: "7 hembras seguidas durante 6 años en La Flor de Catemaco.",
    metodosPrincipales: "Registro de la presencia de crías dependientes; recolección de muestras fecales (N = 1460) analizadas para metabolitos de hormona tiroidea y de glucocorticoides.",
    variablesAnalizadas: "Ocurrencia de concepción, intervalo entre nacimientos (IBI), metabolitos fecales de hormona tiroidea, metabolitos fecales de glucocorticoides, estado de lactancia, muerte de la cría previa.",
    resultadosPrincipales: [
      "La concepción fue más probable en meses en que las hembras no estaban lactando y presentaban niveles más altos de hormona tiroidea y más bajos de glucocorticoides.",
      "Los intervalos entre nacimientos fueron más cortos cuando las hembras tenían niveles más altos de hormona tiroidea y más bajos de glucocorticoides, y cuando la cría al inicio del intervalo había muerto."
    ],
    interpretacion: "Se demuestra que las tasas reproductivas de las hembras de mono aullador de manto están energéticamente restringidas: tanto la ocurrencia de la concepción como el IBI se ven afectados positivamente por la condición energética femenina.",
    implicaciones: "Relaciona directamente la condición energética con la fecundidad, la fertilidad y los intervalos reproductivos, destacando que la etapa de ciclo estral (no solo gestación y lactancia) también está sujeta a restricciones energéticas.",
    usoDivulgacion: "Explicar de forma sencilla el concepto de 'intervalo entre nacimientos' y por qué una madre puede tardar más o menos en volver a reproducirse según su condición física.",
    archivoPdf: "pdfs/Rangel-Negrin_et_al_2018.pdf"
  },
  {
    id: 6,
    referenciaCompleta: "Czerwinski, M. C. M., Rangel Negrín, A., & Dias, P. A. D. (2025). Preliminary evidence of maternal care styles in mantled howler monkeys (Alouatta palliata). International Journal of Primatology.",
    autores: "Czerwinski, M. C. M., Rangel Negrín, A., & Dias, P. A. D.",
    anio: 2025,
    titulo: "Preliminary Evidence of Maternal Care Styles in Mantled Howler Monkeys (Alouatta palliata)",
    revista: "International Journal of Primatology",
    doi: "10.1007/s10764-025-00501-6",
    especie: "Alouatta palliata",
    sitioEstudio: "Tres sitios en Los Tuxtlas, México",
    centralidad: "Central fuerte",
    temaPrincipal: "Cuidado materno",
    temasSecundarios: ["cuidado-materno"],
    objetivo: "Investigar si los monos aulladores de manto silvestres presentan estilos de cuidado materno distintos (patrones conductuales consistentes que varían entre individuos) y si estos cambian a lo largo del desarrollo del infante (infancia temprana, media y tardía).",
    muestra: "16 díadas madre-cría en cuatro grupos, en tres sitios de Los Tuxtlas.",
    metodosPrincipales: "743 horas de observación focal durante 2 años; análisis robusto de componentes principales y análisis de conglomerados (cluster) validado por bootstrap, aplicado de forma específica para cada etapa de desarrollo del infante.",
    variablesAnalizadas: "Comportamientos maternos de protección, rechazo y proximidad; edad del infante (temprana, media, tardía); identidad materna.",
    resultadosPrincipales: [
      "Se identificaron tres estilos maternos distintos durante la infancia temprana (Inversión mínima, Alta inversión y Centrado en la proximidad).",
      "Se identificaron tres estilos durante la infancia media (Inversión mínima, Alto apoyo e Inversión mixta) y dos estilos durante la infancia tardía (Inversión mínima y Apoyo selectivo).",
      "Se encontró consistencia mínima en los estilos maternos individuales a través de las etapas de desarrollo: la edad del infante explicó significativamente la variación conductual, mientras que la identidad materna no lo hizo."
    ],
    interpretacion: "Las madres de mono aullador de manto ajustan estratégicamente sus patrones de cuidado en respuesta a las necesidades de desarrollo del infante, en lugar de mantener un estilo materno individual fijo y consistente.",
    implicaciones: "Aporta evidencia preliminar sobre cómo el ajuste dinámico del cuidado materno podría permitir equilibrar la supervivencia de la cría actual con la capacidad reproductiva futura de la madre.",
    usoDivulgacion: "Ilustrar que 'no hay un solo tipo de madre aulladora', sino estilos que cambian según la edad de la cría, útil para explicar la flexibilidad materna al público general.",
    archivoPdf: "pdfs/Czerwinski_et_al_2025_estilos.pdf"
  },
  {
    id: 7,
    referenciaCompleta: "Czerwinski, M. C. M., Rangel-Negrín, A., & Dias, P. A. D. (2025). Infant handling in mantled howler monkeys. American Journal of Biological Anthropology, 186, e70006.",
    autores: "Czerwinski, M. C. M., Rangel-Negrín, A., & Dias, P. A. D.",
    anio: 2025,
    titulo: "Infant Handling in Mantled Howler Monkeys",
    revista: "American Journal of Biological Anthropology",
    doi: "10.1002/ajpa.70006",
    especie: "Alouatta palliata",
    sitioEstudio: "Cuatro grupos en el sur de México (Los Tuxtlas)",
    centralidad: "Central fuerte",
    temaPrincipal: "Manejo infantil por otros individuos",
    temasSecundarios: ["manejo-infantil"],
    objetivo: "Estudiar el manejo de infantes por individuos que no son la madre (non-mothers) en monos aulladores de manto, especie sobre la que existe muy poca información al respecto.",
    muestra: "14 infantes (de 1 a 12 meses de edad) que viven en cuatro grupos.",
    metodosPrincipales: "Muestreo focal-animal durante 743 horas; registro de 218 eventos de interés y 232 eventos de manejo hacia los infantes.",
    variablesAnalizadas: "Interés hacia el infante, manejo (handling), contacto y toques amistosos, comportamientos agresivos (acoso, secuestro/kidnapping), edad del infante, tipo de individuo manejador (adulto, juvenil, lactante o no lactante).",
    resultadosPrincipales: [
      "El interés y el manejo ocurrieron a tasas similares (0.3 eventos por hora).",
      "La mayoría del manejo fue positivo (contacto y toques amistosos); los comportamientos agresivos como el acoso y el secuestro fueron poco frecuentes.",
      "Las hembras adultas, especialmente cuando estaban lactando, fueron las manejadoras principales, en contraste con lo reportado en otras especies de primates donde suelen ser más frecuentes los juveniles o hembras no lactantes.",
      "El manejo comenzó dentro de la primera semana de vida y fue más frecuente durante los primeros tres meses; las madres rara vez intervinieron, principalmente durante los infrecuentes eventos de secuestro."
    ],
    interpretacion: "Estos hallazgos contribuyen a la comprensión del comportamiento social de los primates, en particular en especies con bajos niveles de actividad social, y sientan una base para investigar las implicaciones del manejo infantil sobre la dinámica de grupo y el desarrollo del infante.",
    implicaciones: "Amplía el análisis del cuidado infantil más allá de la madre, mostrando que las interacciones sociales tempranas con otros individuos (particularmente hembras lactantes) son parte relevante del cuidado infantil temprano.",
    usoDivulgacion: "Explicar el concepto de 'alomaternidad' o cuidado por individuos que no son la madre, con datos concretos sobre qué tan frecuente y positivo es este manejo.",
    archivoPdf: "pdfs/Czerwinski_et_al_2025_manejo.pdf"
  },
  {
    id: 8,
    referenciaCompleta: "Czerwinski, M. C. M., Rangel-Negrín, A., & Dias, P. A. D. (2026). Activity budgets shape parent–offspring conflict expression: Evidence from mantled howler monkeys. Behavioral Ecology and Sociobiology, 80, 47.",
    autores: "Czerwinski, M. C. M., Rangel-Negrín, A., & Dias, P. A. D.",
    anio: 2026,
    titulo: "Activity budgets shape parent–offspring conflict expression: Evidence from mantled howler monkeys",
    revista: "Behavioral Ecology and Sociobiology",
    doi: "10.1007/s00265-026-03724-6",
    especie: "Alouatta palliata",
    sitioEstudio: "Los Tuxtlas, México (cuatro grupos)",
    centralidad: "Central fuerte",
    temaPrincipal: "Conflicto madre-cría",
    temasSecundarios: ["conflicto-madre-cria", "lactancia"],
    objetivo: "Caracterizar la dinámica conductual del conflicto padres-descendencia (POC) en monos aulladores de manto, y probar si las predicciones derivadas de especies que maximizan energía se generalizan a especies que minimizan tiempo, como esta.",
    muestra: "16 díadas madre-infante en cuatro grupos en Los Tuxtlas.",
    metodosPrincipales: "Registro de rechazo materno, solicitud de la cría y relaciones espaciales a lo largo de las etapas de lactancia y distintas actividades maternas.",
    variablesAnalizadas: "Rechazo materno, solicitud del infante (persecución y seguimiento), proximidad y contacto madre-cría, actividad materna (forrajeo, inactividad), etapa de lactancia (temprana, media, tardía).",
    resultadosPrincipales: [
      "El rechazo materno aumentó significativamente entre la lactancia temprana y media durante el forrajeo y la inactividad, pero fue más alto durante la inactividad en la lactancia tardía, contrario a la predicción de que el forrajeo sería el principal contexto de conflicto.",
      "Los comportamientos de solicitud del infante (perseguir y seguir) aumentaron entre la lactancia temprana y media, pero luego se estabilizaron en vez de seguir incrementando.",
      "La responsabilidad de mantener la proximidad recayó principalmente en los infantes a lo largo del desarrollo, reflejando el estilo materno permisivo característico de la especie.",
      "El tiempo en contacto disminuyó mientras que la distancia aumentó a lo largo de las etapas de lactancia, independientemente de la actividad materna."
    ],
    interpretacion: "El conflicto se concentra en la actividad que representa el mayor costo de oportunidad para la madre —la inactividad, más que el forrajeo, en esta especie que minimiza tiempo— lo que refina la hipótesis de tiempo del conflicto padres-descendencia para su aplicación en estrategias de forrajeo diversas.",
    implicaciones: "Extiende la investigación sobre el conflicto padres-descendencia a una especie de platirrino poco estudiada y subraya la necesidad de incorporar la ecología específica de cada especie en las predicciones de la teoría evolutiva del comportamiento.",
    usoDivulgacion: "Explicar el concepto de 'conflicto madre-cría' con un ejemplo cotidiano: la madre necesita descansar/ahorrar energía y la cría insiste en mantenerse cerca, generando pequeños desacuerdos conductuales.",
    archivoPdf: "pdfs/Czerwinski_et_al_2026.pdf"
  },
  {
    id: 9,
    referenciaCompleta: "Dias, P. A. D. (2005). Observation of parturition in the Mexican mantled howler monkeys (Alouatta palliata) on the Island of Agaltepec, Veracruz State, Mexico. American Journal of Primatology, 65(1), 93–98.",
    autores: "Dias, P. A. D.",
    anio: 2005,
    titulo: "Observation of Parturition in the Mexican Mantled Howler Monkeys (Alouatta palliata) on the Island of Agaltepec, Veracruz State, Mexico",
    revista: "American Journal of Primatology",
    doi: "10.1002/ajp.20100",
    especie: "Alouatta palliata",
    sitioEstudio: "Isla de Agaltepec, Catemaco, Veracruz, México (condiciones semi-libres)",
    centralidad: "Apoyo / contexto histórico-descriptivo",
    temaPrincipal: "Contexto reproductivo descriptivo (parto)",
    temasSecundarios: ["contexto-demografico"],
    objetivo: "Reportar la observación directa de un parto en monos aulladores de manto mexicanos que viven en condiciones semi-libres, describiendo la secuencia completa de eventos y el comportamiento de los demás miembros del grupo.",
    muestra: "1 evento de parto observado en un grupo de monos aulladores de manto en condiciones semi-libres.",
    metodosPrincipales: "Observación directa y descripción cualitativa del evento de parto y de la conducta grupal circundante; no se cuantificaron las contracciones.",
    variablesAnalizadas: "Secuencia y duración de las fases del parto, comportamiento de la madre, comportamiento de los demás individuos del grupo antes y después del nacimiento.",
    resultadosPrincipales: [
      "Pasaron nueve minutos desde la liberación del líquido amniótico hasta la emergencia total del infante.",
      "Aunque todos los miembros del grupo estaban descansando relativamente cerca de la hembra durante el parto, ninguno se acercó a ella hasta el periodo posparto.",
      "Solo después del parto, varios individuos inspeccionaron brevemente al recién nacido y luego retomaron sus actividades de forrajeo."
    ],
    interpretacion: "El reporte documenta, por primera vez de forma detallada para esta subespecie/población, la secuencia conductual de un parto y la ausencia de interferencia social durante el proceso, aportando una descripción de referencia poco común en primates arborícolas silvestres.",
    implicaciones: "Sirve como antecedente descriptivo e histórico sobre el comportamiento reproductivo en la especie; tiene menor peso metodológico que los estudios longitudinales cuantitativos de Los Tuxtlas / La Flor de Catemaco, pero es útil como contexto y para divulgación.",
    usoDivulgacion: "Muy útil para divulgación: narrar de forma accesible cómo ocurre un nacimiento de mono aullador y cómo reacciona (o no reacciona) el resto del grupo.",
    archivoPdf: "pdfs/Dias_2005.pdf"
  },
  {
    id: 10,
    referenciaCompleta: "Dias, P. A. D., Coyohua-Fuentes, A., Canales-Espinosa, D., & Rangel-Negrín, A. (2022). Demography and life-history parameters of mantled howler monkeys at La Flor de Catemaco: 20 years post-translocation. Primates, 64, 143–153.",
    autores: "Dias, P. A. D., Coyohua-Fuentes, A., Canales-Espinosa, D., & Rangel-Negrín, A.",
    anio: 2022,
    titulo: "Demography and life-history parameters of mantled howler monkeys at La Flor de Catemaco: 20 years post-translocation",
    revista: "Primates",
    doi: "10.1007/s10329-022-01030-z",
    especie: "Alouatta palliata",
    sitioEstudio: "La Flor de Catemaco, Los Tuxtlas, México",
    centralidad: "Central contextual",
    temaPrincipal: "Contexto demográfico",
    temasSecundarios: ["contexto-demografico"],
    objetivo: "Reportar los parámetros demográficos y de historia de vida de monos aulladores de manto translocados a La Flor de Catemaco, para determinar el éxito del proceso de translocación 20 años después.",
    muestra: "9 individuos fundadores (translocados entre 2002 y 2004, pertenecientes a dos grupos sociales); seguimiento poblacional completo hasta 35 individuos.",
    metodosPrincipales: "Registro de nacimientos, muertes, migraciones y formación de grupos entre enero de 2012 y diciembre de 2021 (1535 días de muestreo).",
    variablesAnalizadas: "Nacimientos, muertes, migraciones (emigración e inmigración), formación de nuevos grupos, edad al primer parto, intervalo entre nacimientos, tasa de natalidad.",
    resultadosPrincipales: [
      "La población creció hasta alcanzar 35 monos aulladores de manto; se fundaron dos grupos nuevos con individuos nacidos en el sitio y migrantes.",
      "El tamaño de grupo promedio fue de 8.1 ± 1.1 individuos.",
      "Se registraron 42 nacimientos y 14 muertes, principalmente de infantes menores de 6 meses de edad.",
      "La edad promedio de las hembras al primer nacimiento fue de 57.8 ± 18.5 meses; el intervalo entre nacimientos fue de 23.3 ± 11.3 meses, y la tasa de natalidad fue de 0.5 ± 0.2 nacimientos por hembra por año."
    ],
    interpretacion: "El crecimiento y la persistencia de los grupos en el sitio, junto con la similitud de los parámetros demográficos y de historia de vida con los de poblaciones no manejadas, sugieren que la población de La Flor de Catemaco es estable y que la translocación fue exitosa.",
    implicaciones: "Ubica la reproducción, la maternidad y el cuidado infantil dentro de una población real, estable y relevante para la conservación de la especie, sirviendo como marco demográfico para los estudios conductuales y fisiológicos del mismo sitio.",
    usoDivulgacion: "Aportar contexto poblacional y de conservación: mostrar que los estudios de maternidad ocurren en una población fundada por translocación y que ha crecido con éxito durante 20 años.",
    archivoPdf: "pdfs/Dias_et_al_2022.pdf"
  }
];

/* =========================================================================
   SÍNTESIS TEMÁTICA
   Agrupa los artículos por eje temático para la sección de síntesis.
   ========================================================================= */

const temas = [
  {
    id: "costos-energeticos",
    nombre: "Costos energéticos de la reproducción",
    pubs: [1, 4, 5],
    hallazgos: [
      "El balance energético (medido vía C-péptido) varía entre estados reproductivos, siendo la lactancia la etapa más demandante.",
      "La condición energética femenina se mantiene relativamente estable entre etapas, pero es sensible a la disponibilidad de alimento.",
      "La concepción y los intervalos entre nacimientos dependen de la condición energética (hormona tiroidea y glucocorticoides)."
    ],
    interpretacionBreve: "Los costos energéticos de la reproducción no son uniformes a lo largo del ciclo reproductivo: se concentran en la lactancia y modulan tanto la fisiología como la fecundidad de las hembras.",
    usoDivulgacion: "Explicar la reproducción como un 'presupuesto energético' que la hembra administra de forma distinta según la etapa reproductiva."
  },
  {
    id: "lactancia",
    nombre: "Lactancia e inversión materna",
    pubs: [3, 1, 8],
    hallazgos: [
      "La vigilancia y el transporte de la cría son mayores al inicio de la lactancia y disminuyen conforme la cría crece.",
      "La inversión materna en transporte se relaciona con la condición energética (C-péptido) de la madre.",
      "El conflicto madre-cría también varía a lo largo de las etapas de la lactancia, con cambios en el rechazo materno y en la proximidad."
    ],
    interpretacionBreve: "La lactancia funciona como una etapa de inversión materna dinámica: el nivel de cuidado se ajusta tanto a la condición física de la madre como a la edad y demandas de la cría.",
    usoDivulgacion: "Explicar la lactancia no como un periodo fijo de cuidado, sino como una negociación continua entre las necesidades de la madre y las de la cría."
  },
  {
    id: "cuidado-materno",
    nombre: "Cuidado materno y sexo de la cría",
    pubs: [2, 6],
    hallazgos: [
      "El cuidado materno (contacto y proximidad) varía según el sexo de la cría y la condición física materna, con un sesgo observado hacia las hijas.",
      "Existen distintos 'estilos maternos' (p. ej. inversión mínima, alta inversión, centrado en la proximidad) que cambian a lo largo del desarrollo del infante.",
      "La edad del infante explica más la variación conductual materna que la identidad individual de la madre."
    ],
    interpretacionBreve: "El cuidado materno en esta especie es flexible: no responde a un patrón fijo por madre, sino que se ajusta tanto al sexo de la cría como a su etapa de desarrollo.",
    usoDivulgacion: "Mostrar que 'ser madre' entre los monos aulladores no es un comportamiento único, sino un conjunto de estilos que cambian según las circunstancias."
  },
  {
    id: "manejo-infantil",
    nombre: "Manejo infantil por otros individuos",
    pubs: [7],
    hallazgos: [
      "Se registraron 218 eventos de interés y 232 de manejo hacia 14 infantes.",
      "La mayoría del manejo fue positivo (contacto, toques amistosos); el acoso y el secuestro fueron poco frecuentes.",
      "Las hembras adultas lactantes fueron las principales manejadoras, un patrón distinto al de otras especies de primates."
    ],
    interpretacionBreve: "El cuidado infantil no depende únicamente de la madre: otros individuos, sobre todo hembras lactantes, participan de forma mayormente positiva desde la primera semana de vida del infante.",
    usoDivulgacion: "Introducir el concepto de 'alomaternidad' con datos concretos sobre qué tan común y benigno es el manejo por parte de individuos que no son la madre."
  },
  {
    id: "conflicto-madre-cria",
    nombre: "Conflicto madre-cría",
    pubs: [8],
    hallazgos: [
      "El rechazo materno aumenta entre la lactancia temprana y media, y se concentra en la inactividad durante la lactancia tardía.",
      "El conflicto se concentra en la actividad materna de mayor costo de oportunidad (la inactividad, no el forrajeo, en esta especie).",
      "Los infantes son quienes asumen la mayor responsabilidad de mantener la proximidad con la madre."
    ],
    interpretacionBreve: "El conflicto madre-cría en monos aulladores refleja un estilo materno permisivo, donde el desacuerdo entre madre e infante se concentra en los momentos de mayor costo energético para la madre.",
    usoDivulgacion: "Explicar el conflicto padres-descendencia como una teoría evolutiva clásica, usando el ejemplo cotidiano del 'tira y afloja' entre el descanso materno y la demanda de proximidad del infante."
  },
  {
    id: "contexto-demografico",
    nombre: "Contexto demográfico",
    pubs: [10, 9],
    hallazgos: [
      "La población de La Flor de Catemaco creció hasta 35 individuos, con 42 nacimientos y 14 muertes registradas en 10 años de seguimiento.",
      "La edad al primer parto (57.8 meses) y el intervalo entre nacimientos (23.3 meses) son similares a los de poblaciones no manejadas.",
      "El reporte de un parto observado en Isla Agaltepec aporta una descripción cualitativa de referencia sobre el comportamiento reproductivo de la especie."
    ],
    interpretacionBreve: "Los datos demográficos permiten ubicar los estudios de reproducción y maternidad dentro de una población real, estable y exitosamente conservada.",
    usoDivulgacion: "Aportar el marco poblacional y de conservación en el que ocurren los procesos de maternidad y cuidado infantil descritos en los demás artículos."
  }
];

/* Etiquetas legibles para las categorías temáticas (usadas en botones y filtros) */
const temaLabels = {
  "costos-energeticos": "Costos energéticos",
  "lactancia": "Lactancia e inversión materna",
  "cuidado-materno": "Cuidado materno y sexo de la cría",
  "manejo-infantil": "Manejo infantil",
  "conflicto-madre-cria": "Conflicto madre-cría",
  "contexto-demografico": "Contexto demográfico"
};
