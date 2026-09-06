import { CodeBlock } from "@/components/CodeBlock";
<img src="/img/12_correlacion.png" alt="Correlación" />

const code = `columnas_numericas = df.select_dtypes(
    include=["float64", "int64"]
)

correlacion = columnas_numericas.corr()

correlacion_fraude = (
    correlacion["fraude"]
    .sort_values(ascending=False)
)

print(correlacion_fraude)`;

export default function AnalisisCorrelacion() {
  return (
    <section id="analisis-correlacion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.25)" }}>
            04
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Análisis — Correlación</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Matriz de correlación
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Relación entre variables numéricas, con foco en la correlación con la variable objetivo{" "}
          <span className="font-mono text-purple-300">fraude</span>.
        </p>

        {/* Top row: code + variables side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <CodeBlock code={code} note="Correlación de Pearson entre variables numéricas. Se ordenan por relación con fraude." />

          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Variables con mayor relación con fraude</p>
            <div className="space-y-2">
              {["0.64 — puntaje_riesgo", "0.42 — cambio_dispositivo", "0.40 — ubicacion_inusual", "0.35 — monto_promedio_usuario", "0.27 — llamada_reciente"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(116,35,132,0.07)", border: "1px solid rgba(116,35,132,0.15)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#742384" }} />
                  <span className="text-xs font-mono italic" style={{ color: "#7b7086" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width matrix image */}
        <div className="rounded-xl overflow-hidden w-full" style={{ border: "1px solid rgba(180,83,9,0.2)", boxShadow: "0 2px 8px rgba(116,35,132,0.08)", background: "#ffffff" }}>
          <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(180,83,9,0.06)", borderBottom: "1px solid rgba(180,83,9,0.12)" }}>
            <span className="text-xs font-mono" style={{ color: "#b45309" }}>🔥</span>
            <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Matriz de correlación con variable fraude</span>
          </div>
          <img src={graficoCorr} alt="Matriz de correlación" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
        </div>
      </div>
    </section>
  );
}
