import { CodeBlock } from "@/components/CodeBlock";

const code = `X = df.drop(columns=COLUMNAS_EXCLUIR)
y = df["fraude"]

X = pd.get_dummies(X, drop_first=True)

X_train, X_test, y_train, y_test = (
    train_test_split(
        X, y,
        test_size=0.20,
        random_state=42,
        stratify=y
    )
)`;

const codeScaler = `scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(
    X_train
)
X_test_scaled = scaler.transform(
    X_test
)

# Fórmula: X_scaled = (X - μ) / σ`;

const flow = [
  { label: "Datos originales", color: "#7c3aed" },
  { label: "Selección de variables", color: "#6d28d9" },
  { label: "One-Hot Encoding", color: "#5b21b6" },
  { label: "Train / Test  80/20", color: "#4c1d95" },
  { label: "StandardScaler", color: "#3730a3" },
  { label: "Entrenamiento", color: "#10b981" },
];

export default function MLPreparacion() {
  return (
    <section id="ml-preparacion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            05
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Machine Learning — Preparación</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Preparación de los datos
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Separación de variables, codificación, partición train/test y escalamiento para asegurar
          que todos los modelos reciban los datos en el mismo formato.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: code blocks */}
          <div className="flex flex-col gap-5">
            <CodeBlock code={code} title="entrenar_modelo.py" />
            <CodeBlock code={codeScaler} title="entrenar_modelo.py — Scaler" note="Normalización estándar: resta la media y divide por la desviación estándar." />
          </div>

          {/* Right: flow diagram */}
          <div className="flex flex-col justify-center gap-3">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Flujo de preprocesamiento</p>
            {flow.map(({ label, color }, i) => (
              <div key={label} className="flex flex-col items-start">
                <div
                  className="w-full px-4 py-3 rounded-xl flex items-center gap-3"
                  style={{ background: `${color}14`, border: `1px solid ${color}32` }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0" style={{ background: `${color}28`, color }}>
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold" style={{ color, fontFamily: "Outfit, sans-serif" }}>{label}</span>
                </div>
                {i < flow.length - 1 && (
                  <div className="w-px h-3 ml-7" style={{ background: `${color}40` }} />
                )}
              </div>
            ))}

            {/* Desbalance note */}
            <div className="mt-4 p-4 rounded-xl flex items-start gap-3" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <span className="text-red-400 text-lg">⚖️</span>
              <div>
                <p className="text-xs font-semibold text-red-300 mb-1">Desbalance de clases</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Se busca evitar que el modelo favorezca excesivamente a la clase mayoritaria.
                  Por ello se usó <span className="font-mono text-purple-300">class_weight = "balanced"</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
