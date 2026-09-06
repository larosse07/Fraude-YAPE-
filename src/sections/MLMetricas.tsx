export default function MLMetricas() {
  const metricas = [
    {
      name: "Accuracy",
      desc: "Proporción total de predicciones correctas.",
      formula: "Correctas / Total",
      color: "#7c3aed",
      icon: "🎯",
    },
    {
      name: "Precision",
      desc: "De todos los que predijo como fraude, ¿cuántos realmente lo eran?",
      formula: "TP / (TP + FP)",
      color: "#3b82f6",
      icon: "🔍",
    },
    {
      name: "Recall",
      desc: "De todos los fraudes reales, ¿cuántos logró detectar el modelo?",
      formula: "TP / (TP + FN)",
      color: "#10b981",
      icon: "📡",
    },
    {
      name: "F1-Score",
      desc: "Media armónica de Precision y Recall. Criterio principal de selección.",
      formula: "2 × (P × R) / (P + R)",
      color: "#f59e0b",
      icon: "⭐",
      highlight: true,
    },
  ];

  return (
    <section id="ml-metricas" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            05
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Machine Learning — Métricas</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          ¿Cómo evaluamos los modelos?
        </h2>
        <p className="text-gray-400 mb-10 text-sm max-w-xl">
          Cuatro métricas complementarias para evaluar el desempeño en detección de fraude.
          El F1-Score actúa como criterio principal de selección del modelo ganador.
        </p>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {metricas.map(({ name, desc, formula, color, icon, highlight }) => (
            <div
              key={name}
              className="p-6 rounded-2xl relative overflow-hidden card-hover"
              style={{
                background: `${color}0d`,
                border: `1px solid ${highlight ? color + "60" : color + "28"}`,
                boxShadow: highlight ? `0 0 28px ${color}22` : "none",
              }}
            >
              {highlight && (
                <div className="absolute top-3 right-3 text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ background: `${color}28`, color }}>
                  CRITERIO PRINCIPAL
                </div>
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-black" style={{ color, fontFamily: "Outfit, sans-serif" }}>{name}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{desc}</p>
              <div
                className="px-4 py-2 rounded-lg text-center font-mono text-sm font-semibold"
                style={{ background: `${color}18`, color }}
              >
                {formula}
              </div>
            </div>
          ))}
        </div>

        {/* F1 explanation */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(124,58,237,0.08))", border: "1px solid rgba(245,158,11,0.3)" }}
        >
          <p className="text-xs font-mono text-yellow-500 uppercase tracking-widest mb-3">¿Por qué F1-Score?</p>
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#1a1229" }}>
            "Para la detección de fraude no es suficiente obtener un Accuracy elevado. Es necesario encontrar
            un equilibrio entre detectar correctamente los casos fraudulentos y evitar clasificar operaciones
            normales como fraude."
          </p>
          <div className="flex items-center gap-4 mt-5 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="text-xs text-blue-300 font-mono">Precision: no generar falsas alarmas</span>
            </div>
            <span className="text-gray-600">+</span>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-emerald-300 font-mono">Recall: no perder fraudes reales</span>
            </div>
            <span className="text-gray-600">=</span>
            <div className="flex items-center gap-2 px-3 py-1 rounded" style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)" }}>
              <span className="text-sm font-bold text-yellow-300 font-mono">F1-Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
