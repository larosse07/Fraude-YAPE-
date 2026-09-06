import { CodeBlock } from "@/components/CodeBlock";
import graficoPie from "@/imports/02_operaciones_fraude.png";
import graficoDist from "@/imports/image-5.png";

const code = `df = pd.read_csv(RUTA_DATASET)

conteo_fraude = df["fraude"].value_counts()
normales = conteo_fraude.get(0, 0)
fraudes  = conteo_fraude.get(1, 0)

porcentaje_fraude = (
    df["fraude"]
    .value_counts(normalize=True) * 100
)

estadisticas = df.describe().T

print(f"Normales: {normales:,}")
print(f"Fraudes:  {fraudes:,}")
print(porcentaje_fraude)`;

export default function AnalisisDistrib() {
  return (
    <section id="analisis-distribucion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.25)" }}>
            04
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Análisis — Distribución</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Distribución de operaciones
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Análisis de la proporción entre operaciones normales y fraudulentas.
          Se identificó desbalance de clases, lo que influye en el enfoque de modelado.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <CodeBlock code={code} note="Conteo y porcentaje de operaciones normales vs. fraudulentas sobre el dataset completo." />

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl text-center" style={{ background: "rgba(116,35,132,0.08)", border: "1px solid rgba(116,35,132,0.22)" }}>
                <div className="text-lg font-bold font-mono" style={{ color: "#742384" }}>46,778</div>
                <div className="text-xs text-gray-500 mt-1">Operaciones normales</div>
              </div>
              <div className="p-4 rounded-xl text-center" style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)" }}>
                <div className="text-lg font-bold font-mono text-red-400">3,245</div>
                <div className="text-xs text-gray-500 mt-1">Operaciones fraude</div>
              </div>
              <div className="p-4 rounded-xl text-center" style={{ background: "rgba(180,83,9,0.08)", border: "1px solid rgba(180,83,9,0.25)" }}>
                <div className="text-lg font-bold font-mono text-yellow-500">6.44%</div>
                <div className="text-xs text-gray-500 mt-1">% de fraude</div>
              </div>
            </div>

            {/* Desbalance warning */}
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.22)" }}>
              <span className="text-red-400 text-xl">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-red-300">Existe desbalance de clases</p>
                <p className="text-xs text-gray-500 mt-0.5">Justifica el uso de <span className="font-mono text-purple-300">class_weight = "balanced"</span></p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(180,83,9,0.2)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)" }}>
              <img src={graficoPie} alt="Gráfico Normal vs Fraude" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(116,35,132,0.14)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)" }}>
              <img src={graficoDist} alt="Distribución de montos" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
