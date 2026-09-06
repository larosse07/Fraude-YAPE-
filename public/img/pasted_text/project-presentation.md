
Quiero que la presentación conserve el mismo lenguaje visual de la referencia de Figma.

Estética
Fondo principal: negro / azul muy oscuro, casi negro.
Color principal: morado/violeta.
Colores secundarios:
azul eléctrico
cyan
verde/turquesa
pequeños acentos naranja/amarillo para alertas
rojo únicamente para fraude, errores o riesgo.
Gradientes sutiles morado → azul → cyan.
Tarjetas oscuras con bordes muy sutiles.
Bordes redondeados.
Sombras suaves.
Diseño moderno tipo dashboard fintech / inteligencia artificial / ciberseguridad.
Tipografía moderna, limpia y profesional.
Títulos grandes y contundentes.
Textos cortos.
Utilizar iconos relacionados con:
seguridad
fraude
IA
datos
transacciones
redes neuronales
gráficos
programación.
IMPORTANTE

NO hacer una presentación empresarial genérica.

Debe parecer una presentación de un proyecto real de Data Science + Machine Learning + Deep Learning + Fintech.

Mantener una estética similar a:

dashboard tecnológico
dark mode
fintech
inteligencia artificial
cybersecurity
analítica de datos.
2. ESTRUCTURA VISUAL

La referencia visual tiene un menú lateral.

Mantener ese concepto de navegación visual en las diapositivas.

En el lado izquierdo puede aparecer una barra lateral pequeña con:

Fraude Yape
ML Detection

Y debajo:

Inicio
Problemática
Objetivos
Dataset
Análisis
Modelos ML
Red Neuronal
Predicción
Tecnologías
Equipo
Conclusiones

La sección activa debe resaltarse con un fondo morado.

NO es necesario que la barra lateral ocupe demasiado espacio.

3. REGLA PRINCIPAL DE TODA LA PRESENTACIÓN

Esta presentación NO debe limitarse a explicar conceptos.

Cada sección técnica debe demostrar qué se hizo realmente en Python.

Para las diapositivas técnicas utilizar esta composición:

OPCIÓN PRINCIPAL

IZQUIERDA → código puntual

DERECHA → gráfico / tabla / matriz / resultado

Ejemplo:

┌─────────────────────┬──────────────────────────┐
│ │ │
│ CÓDIGO PYTHON │ GRÁFICO / TABLA │
│ │ │
│ 8–15 líneas │ evidencia obtenida │
│ │ del código │
│ │ │
└─────────────────────┴──────────────────────────┘

No colocar bloques enormes de código.

Mostrar solamente las líneas más importantes y representativas.

Debajo del código colocar una pequeña explicación de 1–2 líneas:

¿Qué demuestra este código?

4. REGLA PARA LOS GRÁFICOS

No llenar una diapositiva con demasiados gráficos.

Seleccionar únicamente los gráficos que realmente ayudan a explicar el proyecto.

Los gráficos serán colocados/reemplazados posteriormente por el usuario.

Por eso utilizar placeholders elegantes como:

[INSERTAR GRÁFICO AQUÍ]

[INSERTAR MATRIZ DE CONFUSIÓN AQUÍ]

[INSERTAR TABLA DE MÉTRICAS AQUÍ]

NO inventar resultados numéricos.

Si un valor real no está disponible, colocar:

“Valor obtenido experimentalmente”

o

“Insertar resultado real del modelo”

Nunca inventar Accuracy, Precision, Recall, F1, cantidad de registros o porcentajes.

5. DIAPOSITIVA 1 — PORTADA

Título grande:

Detección temprana de fraude en Yape

Subtítulo:

Aplicación de Machine Learning y Redes Neuronales para identificar operaciones con comportamiento asociado a fraude por ingeniería social

Agregar pequeñas etiquetas:

Ciencia de Datos · Machine Learning · Fintech

Agregar tarjetas inferiores:

4 modelos ML
TensorFlow / Keras
18+ variables
4 integrantes

Utilizar iconos de:

🛡️ seguridad
🧠 inteligencia artificial
📊 datos
💳 transacciones

Diseño muy parecido a la portada de Figma.

6. DIAPOSITIVA 2 — PROBLEMÁTICA

Título:

Problemática

Explicar brevemente:

Las transacciones digitales permiten realizar operaciones rápidas, pero también pueden ser utilizadas en esquemas de fraude mediante ingeniería social.

El sistema busca detectar comportamientos asociados a operaciones sospechosas antes de que generen un impacto.

Mostrar 6 tarjetas:

Contactos o llamadas sospechosas
Destinatarios nuevos
Cambio repentino de dispositivo
Ubicaciones inusuales
Horarios poco habituales
Comportamientos transaccionales atípicos

Abajo colocar una tarjeta grande:

PROBLEMA CENTRAL

¿Cómo identificar una transacción potencialmente fraudulenta antes de que genere un impacto?

7. DIAPOSITIVA 3 — OBJETIVOS

Título:

Objetivos
Objetivo general

Desarrollar un sistema basado en Machine Learning y redes neuronales capaz de identificar transacciones con comportamiento asociado a fraude.

Objetivos específicos

Crear y validar un dataset simulado.

Analizar las principales variables relacionadas con el fraude.

Entrenar diferentes algoritmos de Machine Learning.

Construir redes neuronales con TensorFlow/Keras y PyTorch.

Comparar modelos mediante Accuracy, Precision, Recall y F1-Score.

Implementar una predicción para una nueva transacción.

8. DIAPOSITIVA 4 — FLUJO GENERAL DEL PROYECTO

Crear un diagrama horizontal:

Dataset

↓

Validación

↓

Análisis exploratorio

↓

Machine Learning

↓

Redes neuronales

↓

Evaluación

↓

Comparación

↓

Predicción

↓

Aplicación

Utilizar nodos conectados visualmente.

9. DIAPOSITIVA 5 — DATASET SIMULADO

Título:

Dataset Simulado

Texto:

Dataset generado mediante Python utilizando NumPy y Pandas, con lógica basada en señales de comportamiento sospechoso, puntaje de riesgo y una variable objetivo de fraude.

Mostrar 4 tarjetas:

Registros
Variables
Señales binarias
Objetivo: fraude

Los valores deben obtenerse del dataset real.

NO inventar la cantidad de registros.

10. DIAPOSITIVA 6 — VARIABLES DEL DATASET

Mostrar las variables agrupadas visualmente.

TRANSACCIÓN
monto
monto_promedio_usuario
saldo_anterior
saldo_posterior
SEÑALES SOSPECHOSAS
destinatario_nuevo
hora_inusual
llamada_reciente
cambio_dispositivo
ubicacion_inusual
USUARIO
edad
usuario_nuevo
dias_desde_registro
COMPORTAMIENTO
operaciones_dia
operaciones_ultima_hora
velocidad_operacion
alertas_ignoradas
distancia_ubicacion
RIESGO
puntaje_riesgo
nivel_riesgo
OBJETIVO
fraude

Usar tarjetas de diferentes tonalidades, manteniendo el estilo Figma.

11. DIAPOSITIVA 7 — VALIDACIÓN DEL DATASET

Responsable:

JESÚS — Dataset + Aplicación/Demo

Título:

Validación y estructura del dataset

Mostrar una tabla:

Validación	Resultado
Registros	[VALOR REAL]
Columnas	[VALOR REAL]
Valores nulos	[VALOR REAL]
Variables numéricas	[VALOR REAL]
Variables categóricas	[VALOR REAL]
Variable objetivo	fraude
Valores objetivo	0 / 1

A la izquierda colocar código puntual correspondiente a la revisión del dataset:

carga del CSV
shape
dtypes
isnull
estructura general.
Código:

[PEGAR AQUÍ EL BLOQUE PUNTUAL DE VALIDACIÓN DEL DATASET]

A la derecha:

[INSERTAR TABLA REAL DE VALIDACIÓN]

12. DIAPOSITIVA 8 — ANÁLISIS DE FRAUDE

Responsable:

JHOSHEF — Análisis Exploratorio

Título:

Distribución de operaciones

Mostrar:

[INSERTAR GRÁFICO NORMAL VS FRAUDE]

Y al lado una pequeña tabla:

Tipo	Cantidad	Porcentaje
Normal	[REAL]	[REAL]
Fraude	[REAL]	[REAL]

Código puntual:

conteo_fraude = df["fraude"].value_counts()

porcentaje_fraude = (
    df["fraude"].value_counts(normalize=True) * 100
)

No inventar los valores.

13. DIAPOSITIVA 9 — VARIABLES ASOCIADAS AL FRAUDE

Título:

¿Qué comportamientos aparecen con mayor relación al fraude?

Mostrar un gráfico de comparación agrupada.

Priorizar variables:

destinatario nuevo
llamada reciente
cambio de dispositivo
ubicación inusual
hora inusual

Visual:

[INSERTAR GRÁFICO REAL DE VARIABLES VS FRAUDE]

Al lado:

Hallazgo

Las variables de comportamiento permiten identificar patrones que pueden diferenciar operaciones normales de operaciones asociadas al fraude.

Código puntual:

[INSERTAR BLOQUE REAL DE ANÁLISIS DE VARIABLES]

14. DIAPOSITIVA 10 — VELOCIDAD Y MONTO

Título:

Comportamiento transaccional

Dividir la diapositiva en dos:

Izquierda

[INSERTAR BOXPLOT DE VELOCIDAD DE OPERACIÓN]

Derecha

[INSERTAR DISTRIBUCIÓN DE MONTOS]

Abajo colocar dos hallazgos breves:

Comparación de comportamiento transaccional entre clases.
Análisis de diferencias en montos y velocidad.

Código puntual del análisis:

[INSERTAR CÓDIGO REAL CORRESPONDIENTE]

15. DIAPOSITIVA 11 — MACHINE LEARNING

Responsable:

ROSE — Machine Learning

Título:

Modelos de Machine Learning

Explicar:

Se entrenaron cuatro algoritmos utilizando Scikit-learn:

01 — Regresión Logística

Modelo base de clasificación binaria.

02 — Árbol de Decisión

Permite representar decisiones mediante reglas.

03 — Random Forest

Combina múltiples árboles para mejorar la generalización.

04 — Gradient Boosting

Construye modelos secuencialmente para reducir errores.

Usar 4 tarjetas.

16. DIAPOSITIVA 12 — PREPROCESAMIENTO Y ENTRENAMIENTO

Título:

Preparación de los datos

Mostrar flujo:

Datos originales

→

Selección de variables

→

Variables categóricas → One-Hot Encoding

→

Train / Test 80 / 20

→

StandardScaler

→

Entrenamiento

A la izquierda:

CÓDIGO PUNTUAL

Mostrar solamente las líneas reales utilizadas para:

separar X e y
train_test_split
StandardScaler
transformación de datos.

[PEGAR CÓDIGO REAL DE entrenar_modelo.py]

A la derecha:

[INSERTAR DIAGRAMA DEL FLUJO DE PREPROCESAMIENTO]

17. DIAPOSITIVA 13 — COMPARACIÓN DE LOS 4 MODELOS

Título:

Comparación de modelos — Scikit-learn

Crear tabla:

Modelo	Accuracy	Precision	Recall	F1-Score
Regresión Logística	REAL	REAL	REAL	REAL
Árbol de Decisión	REAL	REAL	REAL	REAL
Random Forest	REAL	REAL	REAL	REAL
Gradient Boosting	REAL	REAL	REAL	REAL

Al lado:

[INSERTAR GRÁFICO DE F1-SCORE]

Destacar visualmente el modelo que tenga el mejor F1 real.

Mensaje clave:

La selección prioriza F1-Score porque permite equilibrar Precision y Recall en un problema de detección de fraude.

18. DIAPOSITIVA 14 — MATRIZ DE CONFUSIÓN

Título:

Evaluación del modelo

Mostrar grande:

[INSERTAR MATRIZ DE CONFUSIÓN DEL MEJOR MODELO]

Debajo explicar:

Verdadero Negativo: operación normal correctamente identificada.
Falso Positivo: operación normal clasificada como fraude.
Falso Negativo: fraude no detectado.
Verdadero Positivo: fraude correctamente detectado.

Resaltar especialmente:

Falso Negativo

Porque representa un fraude que el sistema no logró detectar.

19. DIAPOSITIVA 15 — RED NEURONAL TENSORFLOW

Responsable:

ROSE — TensorFlow / Keras

Título:

Red Neuronal con TensorFlow / Keras

Mostrar arquitectura:

Input
  ↓
Dense 128 + ReLU
  ↓
Batch Normalization
  ↓
Dropout 30%
  ↓
Dense 64 + ReLU
  ↓
Batch Normalization
  ↓
Dropout 25%
  ↓
Dense 32 + ReLU
  ↓
Dropout 20%
  ↓
Dense 16 + ReLU
  ↓
Dense 1 + Sigmoid

A la derecha:

[INSERTAR DIAGRAMA DE ARQUITECTURA]

Código puntual:

[PEGAR BLOQUE REAL DE CONSTRUCCIÓN DEL MODELO KERAS]

20. DIAPOSITIVA 16 — ENTRENAMIENTO DE TENSORFLOW

Título:

Entrenamiento y regularización

Mostrar 3 tarjetas:

Early Stopping

Evita continuar entrenando cuando la validación deja de mejorar.

ReduceLROnPlateau

Reduce la tasa de aprendizaje cuando el modelo deja de mejorar.

Class Weight

Ayuda a compensar el desbalance entre operaciones normales y fraudulentas.

Código puntual:

[PEGAR BLOQUE REAL DE CALLBACKS + CLASS WEIGHT + FIT]

Al lado:

[INSERTAR CURVA REAL DE ENTRENAMIENTO / VALIDACIÓN]

21. DIAPOSITIVA 17 — RESULTADOS TENSORFLOW

Título:

Evaluación de la Red Neuronal

Tabla:

Métrica	Resultado
Accuracy	REAL
Precision	REAL
Recall	REAL
F1-Score	REAL

Al lado:

[INSERTAR GRÁFICO DE MÉTRICAS TENSORFLOW]

Debajo:

F1-Score = métrica principal para comparar el desempeño frente al fraude.

22. DIAPOSITIVA 18 — PYTORCH

Responsable:

JAKELIN — PyTorch

Título:

Red Neuronal con PyTorch

Mostrar arquitectura resumida:

Input
 ↓
128
 ↓
64
 ↓
32
 ↓
16
 ↓
Output

Indicar componentes principales:

ReLU
Batch Normalization
Dropout
Adam
BCEWithLogitsLoss
Class weighting

A la derecha:

[INSERTAR DIAGRAMA REAL DE ARQUITECTURA PYTORCH]

Código:

[PEGAR BLOQUE REAL DE LA CLASE DE LA RED]

23. DIAPOSITIVA 19 — COMPARACIÓN FINAL

Título grande:

Comparación global de modelos

Comparar:

Machine Learning
Regresión Logística
Árbol de Decisión
Random Forest
Gradient Boosting
Deep Learning
PyTorch
TensorFlow / Keras

Crear tabla:

Modelo	Accuracy	Precision	Recall	F1
Regresión Logística	REAL	REAL	REAL	REAL
Árbol de Decisión	REAL	REAL	REAL	REAL
Random Forest	REAL	REAL	REAL	REAL
Gradient Boosting	REAL	REAL	REAL	REAL
PyTorch	REAL	REAL	REAL	REAL
TensorFlow	REAL	REAL	REAL	REAL

Al lado:

[INSERTAR GRÁFICO COMPARATIVO DE F1-SCORE]

Destacar el ganador.

24. DIAPOSITIVA 20 — ¿POR QUÉ SE ELIGE EL MEJOR MODELO?

Título:

Selección del modelo final

Crear una tarjeta grande:

MODELO SELECCIONADO

[NOMBRE DEL MODELO GANADOR]

¿Por qué?
Mejor F1-Score.
Buen equilibrio entre Precision y Recall.
Capacidad para identificar operaciones fraudulentas.
Resultado obtenido sobre datos de prueba.
Adecuado para el objetivo de detección.

Agregar:

[INSERTAR RESULTADOS REALES DEL MODELO GANADOR]

No inventar números.

25. DIAPOSITIVA 21 — PREDICCIÓN DE UNA NUEVA TRANSACCIÓN

Título:

Predicción de una nueva transacción

Mostrar visualmente el flujo:

Entrada de datos
      ↓
Preprocesamiento
      ↓
Scaler
      ↓
Modelo entrenado
      ↓
Probabilidad
      ↓
Fraude / Normal

A la izquierda:

[INSERTAR CÓDIGO PUNTUAL DE predecir_fraude.py]

El código debe mostrar solamente:

creación de los datos
transformación
scaler.transform
modelo.predict
modelo.predict_proba

A la derecha:

[INSERTAR CAPTURA DE LA PREDICCIÓN REAL]

26. DIAPOSITIVA 22 — RESULTADO DE LA PREDICCIÓN

Título:

Resultado de una operación

Crear una interfaz visual tipo dashboard.

Estado:

🟢 OPERACIÓN NORMAL

o

🔴 TRANSACCIÓN SOSPECHOSA

Mostrar:

Probabilidad de operación normal
Probabilidad de fraude
Resultado final
Recomendación

No inventar porcentajes.

Utilizar:

[INSERTAR CAPTURA REAL DE LA APP]

27. DIAPOSITIVA 23 — APLICACIÓN / DEMO

Responsable:

JESÚS — Aplicación/Demo

Título:

Aplicación de detección

Mostrar una captura grande de la aplicación.

Alrededor colocar pequeñas etiquetas:

Entrada de datos

↓

Procesamiento

↓

Modelo

↓

Predicción

↓

Resultado

La explicación debe ser muy breve.

Objetivo de la demo

Demostrar que una nueva transacción puede ser procesada y clasificada mediante el modelo entrenado.

28. DIAPOSITIVA 24 — TECNOLOGÍAS

Título:

Tecnologías utilizadas

Crear tarjetas:

Python

Procesamiento y desarrollo.

Pandas

Manipulación de datos.

NumPy

Operaciones numéricas.

Scikit-learn

Machine Learning y evaluación.

TensorFlow / Keras

Red neuronal.

PyTorch

Red neuronal alternativa.

Matplotlib / Seaborn

Visualización.

Streamlit

Aplicación y demostración.

Diseño de iconos tecnológicos.

29. DIAPOSITIVA 25 — EQUIPO

Título:

Equipo

Mostrar cuatro tarjetas:

JESÚS

Dataset + Aplicación/Demo

JAKELIN

Generación Dataset + PyTorch

JHOSHEF

Análisis Exploratorio + Gráficos

ROSE

Machine Learning + TensorFlow + Predicción + Comparación

Cada tarjeta debe mostrar:

nombre
responsabilidad
tecnologías utilizadas
pequeña descripción.
30. DIAPOSITIVA 26 — CONCLUSIONES

Título:

Conclusiones

Utilizar máximo 4 conclusiones.

01

El análisis exploratorio permitió identificar comportamientos y variables relacionadas con operaciones sospechosas.

02

Se entrenaron diferentes modelos de Machine Learning y redes neuronales para comparar su desempeño.

03

La evaluación mediante Precision, Recall y especialmente F1-Score permitió seleccionar el modelo más adecuado.

04

El sistema puede recibir una nueva transacción y generar una clasificación junto con una probabilidad de fraude.

31. DIAPOSITIVA 27 — CIERRE

Diseño similar a la portada.

Título:

De los datos a la detección

Mostrar:

Dataset → Análisis → Machine Learning → Deep Learning → Predicción

Texto final:

“La inteligencia artificial no reemplaza la decisión: ayuda a identificar señales de riesgo antes de actuar.”

Abajo:

Gracias

REGLAS ESPECÍFICAS PARA LOS BLOQUES DE CÓDIGO

En las diapositivas técnicas:

No colocar código completo.
No colocar más de aproximadamente 8–15 líneas por bloque.
Utilizar fuente monoespaciada.
Fondo del bloque de código ligeramente más claro que el fondo principal.
Resaltar visualmente las líneas importantes.
Mantener sintaxis tipo Python.
No modificar la lógica del código.
No inventar código.
Utilizar los fragmentos reales proporcionados para:
generar_dataset.py
analisis_dataset.py
entrenar_modelo.py
red_neuronal_pytorch.py
red_neuronal_tensorflow.py
predecir_fraude.py
comparacion_modelos.py

Los fragmentos deben corresponder al código realmente utilizado en el proyecto.

REGLA ESPECIAL PARA ROSE

La sección de ROSE debe tener especial importancia porque corresponde al desarrollo de:

Machine Learning + TensorFlow/Keras + Predicción + Comparación

Mostrar claramente:

Preprocesamiento.
Entrenamiento de los 4 modelos Scikit-learn.
Métricas.
Comparación.
Matriz de confusión.
Red neuronal TensorFlow.
Métricas TensorFlow.
Comparación final con PyTorch.
Selección del mejor modelo.
Predicción de una nueva transacción.

La presentación debe dejar claro que no solamente se entrenó un modelo, sino que se probaron diferentes alternativas y se seleccionó la mejor según los resultados.

REGLA ESPECIAL PARA TABLAS Y GRÁFICOS

Cada gráfico debe tener un propósito.

Priorizar:

Dataset
Tabla de validación.
Tabla de variables.
Análisis
Normal vs fraude.
Distribución de montos.
Variables de comportamiento vs fraude.
Velocidad de operación.
Correlación/relación de variables.
Machine Learning
Tabla de métricas de los 4 modelos.
Gráfico F1 de los 4 modelos.
Matriz de confusión.
TensorFlow
Arquitectura.
Curvas de entrenamiento.
Tabla de métricas.
Matriz de confusión.
Comparación final
Tabla de 6 modelos.
Gráfico comparativo de F1.
Modelo ganador.
Demo
Captura de entrada.
Captura del resultado de predicción.
REGLA FINAL — MUY IMPORTANTE

NO llenar las diapositivas de texto.

Cada diapositiva debe responder rápidamente:

¿Qué hicimos?
¿Cómo lo hicimos?
¿Qué resultado obtuvimos?

La presentación debe verse como un proyecto técnico real, no como una exposición teórica.

Mantener el mismo estilo visual de las referencias proporcionadas:

Dark UI + Purple Gradient + Cyan/Green accents + tarjetas + dashboard fintech + IA + código + gráficos.

Los gráficos, tablas, matrices y capturas serán reemplazados posteriormente por imágenes reales por el usuario.

No inventar ningún resultado experimental.

No cambiar los nombres de las variables del código.

No cambiar los nombres de los modelos.

No eliminar la comparación entre Scikit-learn, PyTorch y TensorFlow.

No convertir la presentación en una simple presentación de conceptos.

El resultado final debe parecer un PPT de defensa de proyecto de Machine Learning, visualmente moderno y profesional, pero con evidencia técnica concreta en cada etapa.