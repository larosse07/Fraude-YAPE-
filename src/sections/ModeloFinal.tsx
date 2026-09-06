import { PlaceholderZone } from "@/components/PlaceholderZone";
import { Trophy } from "lucide-react";
<img src="/img/image-10.png" alt="Métricas del modelo" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
export default function ModeloFinal() {
  return (
    <section id="comparacion-ganador" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}>
            07
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Comparación — Modelo Ganador</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Selección del modelo final
        </h2>
        <p className="text-gray-400 mb-10 text-sm max-w-xl">
          El modelo ganador fue seleccionado por obtener el mayor F1-Score entre los seis modelos evaluados.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: winner card */}
          <div className="flex flex-col gap-5">
            <div
              className="relative rounded-2xl p-8 overflow-hidden text-center"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(124,58,237,0.1))",
                border: "1px solid rgba(245,158,11,0.4)",
                boxShadow: "0 0 40px rgba(245,158,11,0.12)",
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.08), transparent)"
              }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-yellow-500/40 bg-yellow-500/12 text-yellow-300 text-xs font-mono">
                  <Trophy size={12} />
                  MODELO SELECCIONADO
                </div>

                <h3 className="text-4xl font-black mb-2" style={{ fontFamily: "Outfit, sans-serif", color: "#742384" }}>
                  Gradient Boosting
                </h3>
                <p className="text-xs mb-6" style={{ color: "#9b7db0" }}>Mejor F1-Score — Seleccionado para producción</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "F1-Score",  v: "88.47%", color: "#d97706" },
                    { label: "Accuracy",  v: "98.65%", color: "#742384" },
                    { label: "Precision", v: "98.29%", color: "#2563eb" },
                    { label: "Recall",    v: "80.43%", color: "#059669" },
                  ].map(({ label, v, color }) => (
                    <div key={label} className="p-3 rounded-xl" style={{ background: `${color}0f`, border: `1px solid ${color}28` }}>
                      <div className="text-xl font-bold font-mono" style={{ color }}>{v}</div>
                      <div className="text-xs mt-1" style={{ color: "#7b7086" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why selected */}
            <div className="p-5 rounded-xl" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">¿Por qué fue seleccionado?</p>
              <ul className="space-y-1.5">
                {[
                  "Mejor F1-Score obtenido en la comparación.",
                  "Buen equilibrio entre Precision y Recall.",
                  "Capacidad para identificar operaciones fraudulentas.",
                  "Resultado obtenido sobre datos de prueba.",
                  "Adecuado para el objetivo de detección temprana.",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: flow + placeholder */}
          <div className="flex flex-col gap-5">
            {/* Selection flow */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Proceso de selección</p>
              {["MODELOS EVALUADOS", "MISMAS MÉTRICAS", "COMPARACIÓN", "MAYOR F1-SCORE", "MODELO GANADOR"].map((step, i, arr) => (
                <div key={step} className="flex flex-col items-start">
                  <div
                    className="w-full px-4 py-2.5 rounded-lg"
                    style={{
                      background: i === arr.length - 1 ? "rgba(245,158,11,0.18)" : "rgba(124,58,237,0.1)",
                      border: `1px solid ${i === arr.length - 1 ? "rgba(245,158,11,0.4)" : "rgba(124,58,237,0.22)"}`,
                    }}
                  >
                    <span className="text-xs font-mono font-semibold" style={{ color: i === arr.length - 1 ? "#fbbf24" : "#a78bfa" }}>
                      {step}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-3 ml-5" style={{ background: i === arr.length - 2 ? "rgba(245,158,11,0.4)" : "rgba(124,58,237,0.3)" }} />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Full-width metrics chart */}
        <div className="mt-8 rounded-xl overflow-hidden w-full" style={{ border: "1px solid rgba(116,35,132,0.18)", boxShadow: "0 2px 8px rgba(116,35,132,0.08)", background: "#ffffff" }}>
          <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(116,35,132,0.06)", borderBottom: "1px solid rgba(116,35,132,0.12)" }}>
            <span className="text-xs font-mono" style={{ color: "#742384" }}>📊</span>
            <span className="text-xs font-mono font-semibold" style={{ color: "#742384" }}>Métricas del modelo seleccionado</span>
          </div>
<img src="/img/image-10.png" alt="Gráfico de métricas del modelo seleccionado" className="w-full object-contain" style={{ display: "block", height: "auto" }} />        </div>
      </div>
    </section>
  );
}
