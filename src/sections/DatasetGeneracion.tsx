export default function DatasetGeneracion() {
  const signals = [
    "monto", "destinatario_nuevo", "llamada_reciente", "cambio_dispositivo",
    "ubicacion_inusual", "hora_inusual", "velocidad_operacion",
    "operaciones_ultima_hora", "alertas_ignoradas",
  ];

  const riskLevels = [
    { nivel: "BAJO", icon: "🟢", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", rango: "0 – 1" },
    { nivel: "MEDIO", icon: "🟡", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", rango: "2 – 3" },
    { nivel: "ALTO", icon: "🟠", color: "#f97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)", rango: "4 – 5" },
    { nivel: "CRÍTICO", icon: "🔴", color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", rango: "6+" },
  ];

  const flowSteps = [
    { step: "Características", color: "#7c3aed" },
    { step: "Puntaje de riesgo", color: "#6d28d9" },
    { step: "Nivel de riesgo", color: "#5b21b6" },
    { step: "fraude = 1 / 0", color: "#10b981" },
  ];

  return (
    <section id="dataset-generacion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}>
            03
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Dataset — Generación y Riesgo</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Generación y puntaje de riesgo
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Dataset simulado diseñado para representar comportamientos relacionados con posibles fraudes.
          La variable objetivo se construye a partir del puntaje acumulado de señales sospechosas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Variable chips */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Variables clave</p>
              <div className="flex flex-wrap gap-2">
                {signals.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono"
                    style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", color: "#c4b5fd" }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Flow */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Flujo de generación</p>
              <div className="space-y-1">
                {flowSteps.map(({ step, color }, i) => (
                  <div key={step} className="flex flex-col items-start">
                    <div
                      className="px-4 py-2 rounded-lg text-xs font-mono font-semibold"
                      style={{ background: `${color}15`, border: `1px solid ${color}35`, color }}
                    >
                      {step}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="w-px h-4 ml-6 mt-0.5" style={{ background: `${color}40` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: risk levels */}
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Niveles de riesgo</p>
            <div className="space-y-2 mb-6">
              {riskLevels.map(({ nivel, icon, color, bg, border, rango }) => (
                <div
                  key={nivel}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{icon}</span>
                    <span className="font-bold font-mono text-sm" style={{ color }}>{nivel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-mono">Puntaje: {rango}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.18)" }}
            >
              <p className="text-xs text-gray-400 leading-relaxed">
                El puntaje de riesgo se construye sumando las señales sospechosas activas.
                Cuando supera un umbral, la variable <span className="font-mono text-purple-300">fraude</span>{" "}
                toma el valor 1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
