import { Database, FileText, GitBranch, CheckCircle2 } from "lucide-react";

export default function Dataset() {
  const variableGroups = [
    {
      title: "Transacción",
      color: "purple",
      vars: ["monto", "monto_promedio", "saldo_anterior", "saldo_posterior"],
    },
    {
      title: "Señales sospechosas",
      color: "red",
      vars: ["destinatario_nuevo", "hora_inusual", "llamada_reciente", "cambio_dispositivo", "ubicacion_inusual"],
    },
    {
      title: "Usuario",
      color: "blue",
      vars: ["edad", "usuario_nuevo", "dias_desde_registro"],
    },
    {
      title: "Comportamiento",
      color: "yellow",
      vars: ["operaciones_por_dia", "operaciones_ultima_hora", "alertas_ignoradas", "distancia_entre_operaciones"],
    },
    {
      title: "Riesgo",
      color: "orange",
      vars: ["puntaje_riesgo", "nivel_riesgo"],
    },
    {
      title: "Objetivo",
      color: "emerald",
      vars: ["fraude"],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    purple: { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.25)", text: "#a78bfa", badge: "rgba(124,58,237,0.2)" },
    red: { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.25)", text: "#f87171", badge: "rgba(239,68,68,0.15)" },
    blue: { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)", text: "#93c5fd", badge: "rgba(59,130,246,0.15)" },
    yellow: { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)", text: "#fbbf24", badge: "rgba(245,158,11,0.15)" },
    orange: { bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.25)", text: "#fb923c", badge: "rgba(249,115,22,0.15)" },
    emerald: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", text: "#34d399", badge: "rgba(16,185,129,0.15)" },
  };

  const validations = [
    "Cantidad de filas y columnas",
    "Nombres de variables",
    "Tipos de datos",
    "Valores nulos",
    "Registros duplicados",
    "Estadísticas descriptivas",
    "Distribución de la variable fraude",
    "Valores de variables binarias",
  ];

  return (
    <section id="dataset" className="py-24 px-6" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
          <Database size={12} />
          SECCIÓN 03
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Dataset Simulado
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Dataset generado con NumPy y Pandas, con semilla aleatoria para reproducibilidad,
          basado en lógica de señales sospechosas, puntaje de riesgo y variable objetivo de fraude.
        </p>

        {/* Dataset KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Registros", value: "—", sub: "del CSV real", icon: "📋" },
            { label: "Variables", value: "18+", sub: "características", icon: "📊" },
            { label: "Binarias", value: "5+", sub: "señales sospechosas", icon: "🔲" },
            { label: "Objetivo", value: "fraude", sub: "0 / 1", icon: "🎯" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="p-5 rounded-xl text-center card-hover"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <div className="text-2xl mb-2">{kpi.icon}</div>
              <div className="text-2xl font-bold font-mono text-purple-300 mb-1">{kpi.value}</div>
              <div className="text-sm font-semibold text-white">{kpi.label}</div>
              <div className="text-xs text-gray-500 mt-1">{kpi.sub}</div>
            </div>
          ))}
        </div>

        {/* Variable groups */}
        <h3 className="text-xl font-bold mb-6 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          Variables del Dataset
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {variableGroups.map(({ title, color, vars }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="p-5 rounded-xl"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: c.text }}>
                  {title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vars.map((v) => (
                    <span
                      key={v}
                      className="px-2 py-1 rounded text-xs font-mono"
                      style={{ background: c.badge, color: c.text }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Generation flow */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Flujo de Generación
            </h3>
            <div className="space-y-2">
              {[
                { step: "GENERACIÓN", desc: "NumPy · Pandas · Semilla aleatoria" },
                { step: "LIMPIEZA", desc: "Nulos · Duplicados · Tipos" },
                { step: "VALIDACIÓN", desc: "Estadísticas · Distribuciones" },
                { step: "PUNTAJE_RIESGO", desc: "Suma de señales sospechosas" },
                { step: "NIVEL_RIESGO", desc: "Bajo / Medio / Alto / Crítico" },
                { step: "FRAUDE / NORMAL", desc: "Variable objetivo binaria", highlight: true },
              ].map(({ step, desc, highlight }) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: highlight ? "#10b981" : "#7c3aed" }}
                    />
                    {step !== "FRAUDE / NORMAL" && (
                      <div className="w-px h-6 bg-purple-800/50" />
                    )}
                  </div>
                  <div className="flex-1 py-1">
                    <span className="text-xs font-mono font-semibold" style={{ color: highlight ? "#34d399" : "#a78bfa" }}>
                      {step}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Revisión Inicial
            </h3>
            <div className="space-y-2">
              {validations.map((v) => (
                <div key={v} className="flex items-center gap-3 py-1">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
