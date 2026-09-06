import { Brain, Layers, Zap } from "lucide-react";

export default function RedNeuronal() {
  const layers = [
    { name: "Entrada", neurons: "N features", color: "#7c3aed", desc: "Variables de la transacción" },
    { name: "Dense 1", neurons: "—", color: "#6d28d9", desc: "ReLU · Batch Norm" },
    { name: "Dense 2", neurons: "—", color: "#5b21b6", desc: "ReLU · Dropout" },
    { name: "Salida", neurons: "1", color: "#10b981", desc: "Sigmoid → P(fraude)" },
  ];

  return (
    <section id="red-neuronal" className="py-24 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono mb-6">
          <Brain size={12} />
          SECCIÓN 06
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Deep Learning — TensorFlow / Keras
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Se desarrolló una red neuronal como alternativa al Machine Learning clásico,
          evaluada bajo las mismas métricas para una comparación directa.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          {/* Architecture diagram */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Arquitectura de la Red
            </h3>
            <div className="space-y-1">
              {layers.map(({ name, neurons, color, desc }, i) => (
                <div key={name} className="flex flex-col items-center">
                  <div
                    className="w-full rounded-xl p-4 flex items-center justify-between"
                    style={{ background: `${color}18`, border: `1px solid ${color}40` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                        style={{ background: `${color}30`, color }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{name}</div>
                        <div className="text-xs text-gray-500">{desc}</div>
                      </div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-lg font-mono text-xs font-bold"
                      style={{ background: `${color}25`, color }}
                    >
                      {neurons}
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="w-px h-4 animate-flow" style={{ background: `${color}60` }} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 italic mt-4">
              * El número de neuronas por capa se obtiene del notebook real del proyecto.
            </p>
          </div>

          {/* Config */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Configuración del Entrenamiento
            </h3>
            <div className="space-y-3">
              {[
                { key: "Función de pérdida", value: "binary_crossentropy", icon: "📉" },
                { key: "Optimizador", value: "Adam", icon: "⚡" },
                { key: "Épocas", value: "—", icon: "🔄" },
                { key: "Batch size", value: "—", icon: "📦" },
                { key: "Activación oculta", value: "ReLU", icon: "🔋" },
                { key: "Activación salida", value: "Sigmoid", icon: "🎯" },
                { key: "Métricas", value: "accuracy, precision, recall", icon: "📊" },
              ].map(({ key, value, icon }) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.15)" }}
                >
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <span>{icon}</span>
                    {key}
                  </span>
                  <span className="font-mono text-xs text-purple-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Result cards */}
            <div className="mt-8">
              <h4 className="text-sm font-bold text-gray-400 mb-3">Resultados de la Red Neuronal</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Accuracy", value: "—", color: "#7c3aed" },
                  { label: "Precision", value: "—", color: "#3b82f6" },
                  { label: "Recall", value: "—", color: "#10b981" },
                  { label: "F1-Score", value: "—", color: "#f59e0b" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl text-center"
                    style={{ background: `${color}10`, border: `1px solid ${color}30` }}
                  >
                    <div className="text-xl font-bold font-mono" style={{ color }}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 italic mt-3">
                * Valores extraídos de los resultados reales del entrenamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Classic vs Neural */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
            Modelos Clásicos vs Red Neuronal
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers size={16} className="text-purple-400" />
                <span className="font-bold text-purple-300">Modelos Clásicos ML</span>
              </div>
              {["Regresión Logística", "Árbol de Decisión", "Random Forest", "Gradient Boosting"].map((m) => (
                <div key={m} className="flex items-center justify-between py-2 border-b border-purple-800/30 last:border-0">
                  <span className="text-sm text-gray-300">{m}</span>
                  <span className="font-mono text-xs text-purple-400">F1: —</span>
                </div>
              ))}
            </div>
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain size={16} className="text-emerald-400" />
                <span className="font-bold text-emerald-300">Red Neuronal (TF/Keras)</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-300">Red Neuronal</span>
                <span className="font-mono text-xs text-emerald-400">F1: —</span>
              </div>
              <div className="mt-4 p-3 rounded-lg text-center" style={{ background: "rgba(16,185,129,0.1)" }}>
                <p className="text-xs text-gray-400">Permite capturar relaciones no lineales complejas entre las variables</p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Model */}
        <div
          className="mt-10 p-8 rounded-2xl text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(16,185,129,0.12))",
            border: "1px solid rgba(124,58,237,0.4)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(124,58,237,0.15), transparent)"
          }} />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-mono">
              <Zap size={12} />
              MODELO SELECCIONADO
            </div>
            <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              —
            </h3>
            <p className="text-gray-400 text-sm mb-6">Modelo con mejor F1-Score. Extraído de resultados reales.</p>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { label: "F1-Score", value: "—", color: "#f59e0b" },
                { label: "Accuracy", value: "—", color: "#7c3aed" },
                { label: "Precision", value: "—", color: "#3b82f6" },
                { label: "Recall", value: "—", color: "#10b981" },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold font-mono" style={{ color }}>{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
