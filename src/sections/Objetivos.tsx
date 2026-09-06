import { Target } from "lucide-react";

export default function Objetivos() {
  const especificos = [
    "Crear y validar un dataset simulado de transacciones.",
    "Analizar las principales variables relacionadas con el fraude.",
    "Aplicar preprocesamiento y tratar el desbalance de clases.",
    "Entrenar diferentes algoritmos de Machine Learning.",
    "Construir redes neuronales con TensorFlow/Keras y PyTorch.",
    "Comparar modelos mediante Accuracy, Precision, Recall y F1-Score.",
    "Implementar una predicción para una nueva transacción.",
  ];

  const flowSteps = [
    "Dataset", "Validación", "Análisis", "Machine Learning",
    "Redes Neuronales", "Evaluación", "Comparación", "Predicción", "Aplicación",
  ];

  return (
    <section id="objetivos" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.25)" }}>
            02
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Objetivos</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Objetivos del proyecto
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General */}
          <div
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(116,35,132,0.08) 0%, rgba(116,35,132,0.04) 100%)",
              border: "1px solid rgba(124,58,237,0.4)",
              boxShadow: "0 0 40px rgba(124,58,237,0.1)",
            }}
          >
            <div className="absolute top-4 right-4 opacity-8">
              <Target size={72} className="text-purple-400" />
            </div>
            <span className="inline-block text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 px-2 py-1 rounded" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
              Objetivo General
            </span>
            <p className="text-base text-white leading-relaxed font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
              Desarrollar un sistema basado en Machine Learning y redes neuronales capaz de identificar
              transacciones con características asociadas a fraude por ingeniería social, evaluando
              diferentes modelos de clasificación.
            </p>
          </div>

          {/* Specific */}
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Objetivos Específicos</p>
            <div className="space-y-2">
              {especificos.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold font-mono mt-0.5"
                    style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flow diagram */}
        <div
          className="p-5 rounded-2xl"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
        >
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5 text-center">Flujo general del proyecto</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
                  style={{
                    background: i === flowSteps.length - 1 ? "rgba(16,185,129,0.18)" : "rgba(124,58,237,0.14)",
                    border: `1px solid ${i === flowSteps.length - 1 ? "rgba(16,185,129,0.38)" : "rgba(124,58,237,0.28)"}`,
                    color: i === flowSteps.length - 1 ? "#34d399" : "#a78bfa",
                  }}
                >
                  {step}
                </div>
                {i < flowSteps.length - 1 && <span className="text-purple-700 text-xs">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
