IMPORTANTE: YA EXISTE UN DISEÑO BASE EN ESTE ARCHIVO DE FIGMA.

NO crear un diseño nuevo desde cero.
NO cambiar radicalmente la identidad visual.
NO reemplazar la estructura visual actual.

Mantener:

* colores actuales
* tipografías actuales
* estilo de tarjetas
* sidebar/lateral actual
* espaciados
* componentes
* iconografía
* estilo de dashboard
* proporción 16:9

El objetivo es ORGANIZAR Y COMPLETAR el diseño existente con el contenido del proyecto.

# PROYECTO

“Detección temprana de fraude por ingeniería social en Yape mediante Machine Learning”

La presentación debe sentirse como una presentación académica moderna de Ciencia de Datos / Machine Learning, con apariencia de dashboard de detección de fraude.

# IMPORTANTE SOBRE EL SIDEBAR

Actualmente existe un lateral con una ruta de navegación.

Mantenerlo, pero organizarlo por TEMAS y no por integrantes.

NO colocar:

* ROSE
* JESÚS
* JAKELIN
* JOSEPH

como elementos del menú.

Los integrantes solamente deben aparecer en la portada.

El sidebar debe organizarse aproximadamente así:

INICIO

01 PROBLEMÁTICA

02 OBJETIVOS

03 DATASET
├─ Validación
├─ Estructura
└─ Generación y riesgo

04 ANÁLISIS
├─ Distribución
├─ Señales de fraude
└─ Correlación

05 MACHINE LEARNING
├─ Preparación
├─ Modelos
├─ Escalamiento
├─ Métricas
└─ Matriz de confusión

06 REDES NEURONALES
├─ PyTorch
└─ TensorFlow / Keras

07 COMPARACIÓN
├─ Resultados
└─ Modelo ganador

08 PREDICCIÓN

09 DEMO FINAL

NO es necesario que todos los subapartados aparezcan visualmente en el sidebar si el diseño se vuelve demasiado cargado. Priorizar legibilidad.

# REGLA GENERAL PARA CADA DIAPOSITIVA

Cada diapositiva técnica debe tener una composición de aproximadamente:

IZQUIERDA:

* título
* explicación breve
* código puntual o concepto técnico importante

DERECHA:

* gráfico
* tabla
* diagrama
* flujo
* indicador
* arquitectura
* matriz
* resultado visual

NO colocar bloques enormes de código.

Mostrar únicamente el código que sirve para demostrar técnicamente cómo se realizó el proceso.

El resto del código se explica oralmente o queda en los archivos del proyecto.

NO inventar resultados numéricos.
Cuando todavía no exista un resultado real, utilizar:
XX
XX.XX%
o un placeholder claramente editable.

# ESTRUCTURA COMPLETA

## 1. PORTADA

Título:

“Detección temprana de fraude por ingeniería social en Yape mediante Machine Learning”

Subtítulo:

Aplicación de Machine Learning y Redes Neuronales para la detección de transacciones sospechosas.

Mostrar los integrantes:
Jesús
Jakelin
Joseph
Rose

Mantener esta diapositiva limpia y visual.

---

# 01 PROBLEMÁTICA

Crear las diapositivas correspondientes a problemática y contexto del fraude.

Utilizar:

* indicadores
* tarjetas
* datos relevantes
* elementos visuales relacionados con fraude digital

No saturar de texto.

---

# 02 OBJETIVOS

Mostrar:

* objetivo general
* objetivos específicos

Utilizar tarjetas o bloques visuales.

---

# 03 DATASET

## DIAPOSITIVA: DATASET Y VALIDACIÓN

Título:

“Dataset de transacciones simuladas”

Mostrar como indicadores grandes:

55,000 aprox.
TRANSACCIONES

Variable objetivo:
FRAUDE

0 → Operación normal
1 → Operación fraudulenta

A un lado colocar el código puntual:

df = pd.read_csv(RUTA_DATASET)

print(f"Registros: {len(df):,}")
print(f"Columnas: {len(df.columns)}")

print(df.dtypes)

nulos = df.isnull().sum()
print(nulos)

Al otro lado colocar una representación visual:

55,000 transacciones
↓
Columnas
↓
Tipos de datos
↓
Valores nulos
↓
Estructura validada

No mostrar todo el código.

---

## DIAPOSITIVA: ESTRUCTURA Y CONSISTENCIA

Mostrar visualmente:

REGISTROS
55,000 aprox.

COLUMNAS
XX

VALORES NULOS
0

VARIABLE OBJETIVO
fraude

A un lado colocar:

print(df.shape)
print(df.columns)
print(df.dtypes)
print(df.isnull().sum())
print(df.describe())

Al otro lado colocar tarjetas/indicadores.

La explicación detallada de cada variable NO debe ocupar espacio excesivo.

---

## DIAPOSITIVA: GENERACIÓN DEL DATASET

Explicar que los datos son simulados y diseñados para representar comportamientos relacionados con posibles fraudes.

Mostrar solamente las variables más importantes como chips/tags:

monto
destinatario_nuevo
llamada_reciente
cambio_dispositivo
ubicacion_inusual
hora_inusual
velocidad_operacion
operaciones_ultima_hora
alertas_ignoradas

NO mostrar una lista enorme.

Crear un flujo visual:

Características
↓
Puntaje de riesgo
↓
Nivel de riesgo
↓
Fraude

---

## DIAPOSITIVA: PUNTAJE Y NIVEL DE RIESGO

Crear una tabla visual:

BAJO → 🟢
MEDIO → 🟡
ALTO → 🟠
CRÍTICO → 🔴

Dejar una columna editable para los rangos reales de puntaje.

Al lado mostrar las principales señales:

Cambio de dispositivo
Destinatario nuevo
Ubicación inusual
Llamada reciente
Hora inusual
Velocidad elevada

No colocar código completo.

---

# 04 ANÁLISIS EXPLORATORIO

## DIAPOSITIVA: ANÁLISIS DEL DATASET

Mostrar indicadores:

55,000 aprox. registros
XX variables
XX productos
XX estadísticas

Código puntual:

df = pd.read_csv(RUTA_DATASET)

print(f"Registros: {len(df):,}")
print(f"Columnas: {len(df.columns)}")

estadisticas = df.describe().T

Al lado colocar un gráfico o resumen estadístico visual.

---

## DIAPOSITIVA: NORMAL VS FRAUDE

Crear un gráfico comparativo grande.

Mostrar:

OPERACIONES NORMALES
XX,XXX

OPERACIONES FRAUDULENTAS
X,XXX

FRAUDE
XX.XX%

Código puntual:

conteo_fraude = df["fraude"].value_counts()

normales = conteo_fraude.get(0, 0)
fraudes = conteo_fraude.get(1, 0)

porcentaje_fraude = (
fraudes / len(df) * 100
)

Al lado colocar el gráfico de distribución.

Destacar visualmente:

“Existe desbalance de clases”

---

## DIAPOSITIVA: SEÑALES DE FRAUDE

NO colocar 10 gráficos.

Seleccionar visualmente los 4 principales:

1. Cambio de dispositivo
2. Destinatario nuevo
3. Ubicación inusual
4. Llamada reciente

Opcional:
5. Hora inusual
6. Velocidad de operación

Código puntual:

fraude_dispositivo = pd.crosstab(
df["cambio_dispositivo"],
df["fraude"]
)

Indicar visualmente que el mismo análisis se aplica a las demás variables.

La parte derecha debe contener gráficos comparativos.

---

## DIAPOSITIVA: CORRELACIÓN

Título:

“Matriz de correlación”

Colocar la matriz de correlación como elemento visual PRINCIPAL.

Código puntual:

correlacion = (
columnas_numericas
.corr()
)

correlacion_fraude = (
correlacion["fraude"]
.sort_values(
ascending=False
)
)

La matriz debe ocupar la mayor parte de la diapositiva.

A un lado colocar una pequeña tarjeta:

“Variables con mayor relación con fraude”

Dejar los nombres y valores como elementos editables según los resultados reales.

---

# 05 MACHINE LEARNING

ESTA SECCIÓN DEBE SER UNA DE LAS PARTES TÉCNICAS MÁS IMPORTANTES DE LA PRESENTACIÓN.

## DIAPOSITIVA: PREPARACIÓN PARA MACHINE LEARNING

Dividir visualmente la diapositiva en dos.

IZQUIERDA:
Código puntual:

X = df.drop(
columns=COLUMNAS_EXCLUIR
)

y = df["fraude"]

X = pd.get_dummies(
X,
drop_first=True
)

X_train, X_test, y_train, y_test = train_test_split(
X,
y,
test_size=0.20,
random_state=42,
stratify=y
)

DERECHA:

Dataset
↓
X / y
↓
Encoding
↓
Train / Test
↓
StandardScaler
↓
Modelos

Utilizar un diagrama moderno.

---

## DIAPOSITIVA: MODELOS DE MACHINE LEARNING

Mostrar cuatro tarjetas:

LOGISTIC REGRESSION

DECISION TREE

RANDOM FOREST

GRADIENT BOOSTING

Debajo:

“4 algoritmos → mismas variables → mismas métricas → comparación”

Al lado puede aparecer una pequeña sección de código:

LogisticRegression()

DecisionTreeClassifier()

RandomForestClassifier()

GradientBoostingClassifier()

NO mostrar código de entrenamiento completo.

---

## DIAPOSITIVA: STANDARD SCALER Y DESBALANCE

Dividir en dos bloques.

BLOQUE 1:

STANDARD SCALER

Código:

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(
X_train
)

X_test_scaled = scaler.transform(
X_test
)

BLOQUE 2:

DESBALANCE

class_weight = "balanced"

Mostrar un gráfico simple:

CLASE MAYORITARIA
Normal

CLASE MINORITARIA
Fraude

Y una explicación breve:

“Se busca evitar que el modelo favorezca excesivamente a la clase mayoritaria.”

---

# 05.4 MÉTRICAS

Crear una diapositiva muy visual.

Cuatro tarjetas:

ACCURACY
Predicciones correctas

PRECISION
Confiabilidad de las predicciones de fraude

RECALL
Fraudes reales detectados

F1-SCORE
Equilibrio entre Precision y Recall

Destacar:

⭐ F1-SCORE

“Principal criterio para seleccionar el modelo.”

No colocar código innecesario aquí.

---

# 05.5 MATRIZ DE CONFUSIÓN

La matriz debe ser el elemento visual principal.

Mostrar:

```
             PREDICCIÓN
          NORMAL   FRAUDE
```

REAL NORMAL      TN       FP

REAL FRAUDE      FN       TP

Al lado colocar:

TP → Fraude detectado correctamente
TN → Normal detectado correctamente
FP → Falsa alarma
FN → Fraude no detectado

Destacar visualmente:

“Los falsos negativos son especialmente importantes en detección de fraude.”

Código pequeño:

matriz = confusion_matrix(
y_test,
predicciones
)

---

# 06 REDES NEURONALES

## DIAPOSITIVA: PYTORCH

Mostrar la arquitectura como un diagrama:

INPUT
↓
128
↓
64
↓
32
↓
16
↓
OUTPUT

Al lado mostrar solamente los elementos técnicos principales:

ReLU
Batch Normalization
Dropout
Adam
BCEWithLogitsLoss

Código puntual:

self.red = nn.Sequential(
nn.Linear(numero_variables, 128),
nn.ReLU(),
nn.BatchNorm1d(128),
nn.Dropout(0.30),

```
nn.Linear(128, 64),
nn.ReLU(),

nn.Linear(64, 32),
nn.ReLU(),

nn.Linear(32, 16),
nn.ReLU(),

nn.Linear(16, 1)
```

)

Agregar una zona editable para:

Accuracy: XX
Precision: XX
Recall: XX
F1: XX

Estos valores deben provenir de la ejecución real.

---

## DIAPOSITIVA: TENSORFLOW / KERAS

Mostrar:

INPUT
↓
128
↓
64
↓
32
↓
16
↓
SIGMOID
↓
NORMAL / FRAUDE

Al lado:

Sequential
Dense
BatchNormalization
Dropout
Sigmoid

Código puntual:

modelo = Sequential([
Input(shape=(numero_variables,)),
Dense(128, activation="relu"),
BatchNormalization(),
Dropout(0.30),

```
Dense(64, activation="relu"),
BatchNormalization(),
Dropout(0.25),

Dense(32, activation="relu"),
Dropout(0.20),

Dense(16, activation="relu"),

Dense(1, activation="sigmoid")
```

])

Agregar indicadores editables:

Accuracy: XX
Precision: XX
Recall: XX
F1: XX

---

# 07 COMPARACIÓN FINAL

## DIAPOSITIVA: COMPARACIÓN DE MODELOS

Crear una tabla profesional.

Columnas:

MODELO | ACCURACY | PRECISION | RECALL | F1-SCORE

Filas:

Regresión Logística
Árbol de Decisión
Random Forest
Gradient Boosting
TensorFlow/Keras
PyTorch

Todos los valores deben ser editables.

NO inventar valores.

Destacar visualmente la fila del modelo ganador.

Agregar una etiqueta:

🏆 MEJOR MODELO

---

## DIAPOSITIVA: ¿POR QUÉ GANÓ?

Mostrar visualmente:

MODELOS
↓
MISMAS MÉTRICAS
↓
COMPARACIÓN
↓
MAYOR F1-SCORE
↓
MODELO GANADOR

Código puntual:

comparacion = comparacion.sort_values(
by="F1-Score",
ascending=False
)

mejor_modelo = comparacion.iloc[0]

Agregar:

“Se seleccionó el modelo con mayor F1-Score para equilibrar Precision y Recall.”

---

# 08 PREDICCIÓN

## DIAPOSITIVA: PREDICCIÓN DE UNA NUEVA TRANSACCIÓN

Dividir la diapositiva.

IZQUIERDA:
Mostrar una tarjeta de entrada:

Nueva transacción

Monto: S/ XXX
Destinatario nuevo: Sí
Cambio de dispositivo: Sí
Ubicación inusual: Sí
Hora inusual: Sí

DERECHA:
Mostrar:

DataFrame
↓
get_dummies
↓
Mismas columnas
↓
StandardScaler
↓
Modelo
↓
Predicción
↓
Probabilidad

Código puntual:

datos = pd.get_dummies(
datos,
columns=["producto"],
dtype=float
)

datos = datos.reindex(
columns=columnas_modelo,
fill_value=0
)

datos_escalados = scaler.transform(
datos
)

prediccion = modelo.predict(
datos_escalados
)[0]

Y debajo:

probabilidades = modelo.predict_proba(
datos_escalados
)[0]

probabilidad_fraude = (
probabilidades[1] * 100
)

---

# 09 DEMO FINAL

## DIAPOSITIVA: INTEGRACIÓN APLICACIÓN + MODELO

Crear un flujo visual grande:

USUARIO
↓
APLICACIÓN
↓
DATOS DE TRANSACCIÓN
↓
PREPROCESAMIENTO
↓
MODELO ENTRENADO
↓
PREDICCIÓN
↓
PROBABILIDAD
↓
RESULTADO

Código pequeño:

modelo = joblib.load(RUTA_MODELO)
scaler = joblib.load(RUTA_SCALER)

datos_escalados = scaler.transform(datos)

prediccion = modelo.predict(
datos_escalados
)[0]

probabilidades = modelo.predict_proba(
datos_escalados
)[0]

Esta diapositiva debe explicar la integración entre Machine Learning y la aplicación.

---

## DIAPOSITIVA: DEMO FINAL

Esta debe sentirse como la culminación de todo el proyecto.

Mostrar una interfaz simulada de una transacción:

NUEVA TRANSACCIÓN

Monto: S/ XXX
Destinatario nuevo: Sí
Cambio de dispositivo: Sí
Ubicación inusual: Sí
Hora inusual: Sí

↓

MODELO DE DETECCIÓN

↓

🚨 POSIBLE FRAUDE

Probabilidad de fraude:
XX.XX%

Recomendación:
“Revisar la transacción antes de autorizarla.”

La diapositiva debe conectar visualmente:

Machine Learning
+
Aplicación
==========

Detección temprana

# REGLAS DE DISEÑO PARA TODO EL ARCHIVO

1. Mantener el diseño actual de Figma.
2. No crear una plantilla diferente.
3. No poner el nombre del integrante en el título de las diapositivas.
4. Los integrantes aparecen solamente en portada.
5. Los códigos deben ser pequeños, legibles y seleccionados.
6. Nunca mostrar archivos .py completos.
7. Cada diapositiva técnica debe combinar:
   CÓDIGO + VISUAL.
8. Los gráficos deben ocupar suficiente espacio para poder explicarlos durante la exposición.
9. Usar tarjetas, indicadores y diagramas en lugar de párrafos largos.
10. Las variables secundarias pueden omitirse del PPT y explicarse oralmente.
11. No inventar ningún resultado.
12. Todos los valores XX deben quedar como elementos editables.
13. Dejar espacios preparados para insertar posteriormente:

* gráficos reales
* matriz de confusión real
* tabla de métricas real
* resultados de PyTorch
* resultados de TensorFlow
* modelo ganador
* probabilidad de la demo

14. Mantener consistencia visual entre todas las diapositivas.
15. El resultado final debe poder editarse posteriormente y exportarse a PowerPoint.

OBJETIVO FINAL:

No quiero una presentación llena de texto.

Quiero que parezca una presentación profesional de un sistema de detección de fraude:

DATOS
→ ANÁLISIS
→ MACHINE LEARNING
→ REDES NEURONALES
→ COMPARACIÓN
→ PREDICCIÓN
→ DEMO

El código demuestra la implementación.
Los gráficos demuestran los resultados.
Los diagramas demuestran el flujo.
Las métricas demuestran el rendimiento.
La demo demuestra que el proyecto funciona.