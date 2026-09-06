export default function DatasetVariables() {
  const groups = [
    {
      label: "TRANSACCIÓN",
      color: "#7c3aed",
      vars: ["monto", "monto_promedio_usuario", "saldo_anterior", "saldo_posterior"],
    },
    {
      label: "SEÑALES SOSPECHOSAS",
      color: "#ef4444",
      vars: ["destinatario_nuevo", "hora_inusual", "llamada_reciente", "cambio_dispositivo", "ubicacion_inusual"],
    },
    {
      label: "USUARIO",
      color: "#3b82f6",
      vars: ["edad", "usuario_nuevo", "dias_desde_registro"],
    },
    {
      label: "COMPORTAMIENTO",
      color: "#f59e0b",
      vars: ["operaciones_dia", "operaciones_ultima_hora", "velocidad_operacion", "alertas_ignoradas", "distancia_ubicacion"],
    },
    {
      label: "RIESGO",
      color: "#f97316",
      vars: ["puntaje_riesgo", "nivel_riesgo"],
    },
    {
      label: "OBJETIVO",
      color: "#10b981",
      vars: ["fraude"],
    },
  ];

  return (
    <section id="dataset-variables" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}>
            03
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Dataset — Variables</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Estructura del dataset
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Variables agrupadas por categoría. Cada señal binaria activa suma al puntaje de riesgo que determina la variable objetivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(({ label, color, vars }) => (
            <div
              key={label}
              className="p-5 rounded-xl"
              style={{ background: `${color}0d`, border: `1px solid ${color}28` }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 font-mono" style={{ color }}>
                {label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {vars.map((v) => (
                  <span
                    key={v}
                    className="px-2 py-1 rounded text-xs font-mono"
                    style={{ background: `${color}18`, color: `${color}cc`, border: `1px solid ${color}28` }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual note */}
        <div
          className="mt-8 p-4 rounded-xl flex items-center gap-4"
          style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}
        >
          <span className="text-2xl">🔑</span>
          <div>
            <p className="text-sm font-semibold text-emerald-300">Variable objetivo: <span className="font-mono">fraude</span></p>
            <p className="text-xs text-gray-400 mt-0.5">
              <span className="font-mono text-purple-300">0</span> → Operación normal ·{" "}
              <span className="font-mono text-red-400">1</span> → Operación fraudulenta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
