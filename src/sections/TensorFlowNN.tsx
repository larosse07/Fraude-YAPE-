import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
export function TuComponente() {
  return (
    <>
      <img src="/img/image-7.png" alt="Arquitectura Keras" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
      <img src="/img/image-8.png" alt="Curva de entrenamiento" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
    </>
  );
}
const codeModel = `modelo = Sequential([
  Input(shape=(numero_variables,)),
  Dense(128, activation="relu"),
  BatchNormalization(),
  Dropout(0.30),

  Dense(64, activation="relu"),
  BatchNormalization(),
  Dropout(0.25),

  Dense(32, activation="relu"),
  Dropout(0.20),

  Dense(16, activation="relu"),

  Dense(1, activation="sigmoid")
])`;

const codeCallbacks = `callbacks = [
  EarlyStopping(
    monitor="val_loss",
    patience=10,
    restore_best_weights=True
  ),
  ReduceLROnPlateau(
    monitor="val_loss",
    factor=0.5,
    patience=5
  ),
]

modelo.fit(
  X_train_scaled, y_train,
  class_weight=class_weight,
  callbacks=callbacks,
  epochs=XX, batch_size=XX,
  validation_split=0.2
)`;

const layers = [
  { label: "Input", note: "N variables", color: "#7c3aed" },
  { label: "Dense(128)", note: "ReLU · BatchNorm · Dropout 30%", color: "#6d28d9" },
  { label: "Dense(64)", note: "ReLU · BatchNorm · Dropout 25%", color: "#5b21b6" },
  { label: "Dense(32)", note: "ReLU · Dropout 20%", color: "#4c1d95" },
  { label: "Dense(16)", note: "ReLU", color: "#3730a3" },
  { label: "Dense(1)", note: "Sigmoid → P(fraude)", color: "#10b981" },
];

const callbacks = [
  { name: "Early Stopping", desc: "Detiene el entrenamiento cuando val_loss deja de mejorar.", icon: "⏹️" },
  { name: "ReduceLROnPlateau", desc: "Reduce la tasa de aprendizaje si no hay mejora.", icon: "📉" },
  { name: "Class Weight", desc: "Compensa el desbalance entre clases.", icon: "⚖️" },
];

export default function TensorFlowNN() {
  return (
    <section id="rna-tensorflow" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(239,68,68,0.12)", color: "#f87171", border: "1px solid rgba(239,68,68,0.25)" }}>
            06
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Redes Neuronales — TensorFlow / Keras</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Red Neuronal con TensorFlow / Keras
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Arquitectura Sequential con regularización mediante Dropout, BatchNormalization,
          EarlyStopping y compensación del desbalance de clases.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: code (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <CodeBlock code={codeModel} title="red_neuronal_tensorflow.py" note="Modelo Sequential con 5 capas densas y activación Sigmoid en la salida." />
            <CodeBlock code={codeCallbacks} title="red_neuronal_tensorflow.py — Entrenamiento" note="Callbacks para regularización y class_weight para el desbalance." />


            {/* Metric cards */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { m: "Accuracy",  v: "95.27%" },
                { m: "Precision", v: "58.07%" },
                { m: "Recall",    v: "95.50%" },
                { m: "F1-Score",  v: "72.23%" },
              ].map(({ m, v }) => (
                <div key={m} className="p-3 rounded-xl text-center" style={{ background: "rgba(5,150,105,0.07)", border: "1px solid rgba(5,150,105,0.2)" }}>
                  <div className="text-sm font-bold font-mono" style={{ color: "#059669" }}>{v}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{m}</div>
                </div>
              ))}
            </div>

            {/* Full-width training curve */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(5,150,105,0.22)", boxShadow: "0 2px 8px rgba(5,150,105,0.08)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center justify-between" style={{ background: "rgba(5,150,105,0.06)", borderBottom: "1px solid rgba(5,150,105,0.12)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono" style={{ color: "#059669" }}>📈</span>
                  <span className="text-xs font-mono font-semibold" style={{ color: "#059669" }}>Curva de entrenamiento / validación</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: "rgba(5,150,105,0.12)", color: "#059669", border: "1px solid rgba(5,150,105,0.25)" }}>Loss</span>
              </div>
<img src="/img/image-8.png" alt="Curva de entrenamiento y validación" className="w-full object-contain" style={{ display: "block", height: "auto" }} />            </div>
          </div>

          {/* Right: architecture image */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(5,150,105,0.2)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(5,150,105,0.06)", borderBottom: "1px solid rgba(5,150,105,0.12)" }}>
                <span className="text-xs font-mono" style={{ color: "#059669" }}>🧠</span>
                <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Arquitectura — TensorFlow / Keras</span>
              </div>
<img src="/img/image-7.png" alt="Arquitectura Keras" className="w-full object-contain" style={{ display: "block", height: "auto" }} />            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
