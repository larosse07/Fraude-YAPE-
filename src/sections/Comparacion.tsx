import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
import graficof1 from "@/imports/image-9.png";

const code = `comparacion = comparacion.sort_values(
    by="F1-Score",
    ascending=False
)

mejor_modelo = comparacion.iloc[0]

print("MEJOR MODELO:")
print(mejor_modelo)`;

const modelos = [
  { name: "Gradient Boosting", type: "ML", color: "#742384", acc: "98.65%", prec: "98.29%", rec: "80.43%", f1: "88.47%", winner: true },
  { name: "PyTorch",           type: "DL", color: "#dc2626", acc: "96.12%", prec: "63.01%", rec: "96.27%", f1: "76.17%" },
  { name: "TensorFlow/Keras",  type: "DL", color: "#ea580c", acc: "95.27%", prec: "58.07%", rec: "95.50%", f1: "72.23%" },
  { name: "Random Forest",     type: "ML", color: "#059669", acc: "95.46%",  prec: "59.71%",  rec: "90.68%",  f1: "72.01" },
  { name: "Árbol de Decisión", type: "ML", color: "#2563eb", acc: "92.22%",  prec: "44.73%",  rec: "88.35%",  f1: "59.39%" },
  { name: "Regresión Logística",type:"ML", color: "#9b3ab5", acc: "91.55%",  prec: "42.74%",  rec: "91.93%",  f1: "58.35%" },
];

export default function Comparacion() {
  return (
    <section id="comparacion-resultados" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}>
            07
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Comparación — Resultados</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Comparación global de modelos
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Los seis modelos — cuatro clásicos y dos redes neuronales — se comparan bajo las mismas métricas
          para seleccionar el de mejor desempeño.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: table */}
          <div className="flex flex-col gap-5">
            {/* Table */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
              <div className="grid grid-cols-6 px-4 py-2.5 text-xs font-mono" style={{ background: "rgba(116,35,132,0.08)", borderBottom: "1px solid rgba(116,35,132,0.15)" }}>
                <div className="col-span-2 font-semibold" style={{ color: "#742384" }}>Modelo</div>
                <div className="text-center" style={{ color: "#7b7086" }}>Acc.</div>
                <div className="text-center" style={{ color: "#7b7086" }}>Prec.</div>
                <div className="text-center" style={{ color: "#7b7086" }}>Rec.</div>
                <div className="text-center font-bold" style={{ color: "#b45309" }}>F1</div>
              </div>
              {modelos.map(({ name, type, color, acc, prec, rec, f1, winner }, i) => (
                <div
                  key={name}
                  className="grid grid-cols-6 px-4 py-2.5 items-center"
                  style={{
                    background: winner ? "rgba(116,35,132,0.06)" : i % 2 === 0 ? "rgba(116,35,132,0.02)" : "transparent",
                    borderBottom: i < modelos.length - 1 ? "1px solid rgba(116,35,132,0.08)" : "none",
                  }}
                >
                  <div className="col-span-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                    <div>
                      <div className="text-xs leading-tight font-medium" style={{ color: "#1a1229" }}>{name}</div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: type === "DL" ? "#dc2626" : "#742384", fontSize: 9 }}>{type}{winner ? " ★" : ""}</div>
                    </div>
                  </div>
                  <div className="text-center text-xs font-mono" style={{ color: acc !== "—" ? "#1a1229" : "#c4b5fd88" }}>{acc}</div>
                  <div className="text-center text-xs font-mono" style={{ color: prec !== "—" ? "#1a1229" : "#c4b5fd88" }}>{prec}</div>
                  <div className="text-center text-xs font-mono" style={{ color: rec !== "—" ? "#1a1229" : "#c4b5fd88" }}>{rec}</div>
                  <div className="text-center text-xs font-mono font-bold" style={{ color: winner ? "#742384" : f1 !== "—" ? "#1a1229" : "#c4b5fd88" }}>{f1}</div>
                </div>
              ))}
            </div>

            {/* Code */}
            <CodeBlock code={code} title="comparacion_modelos.py" note="Se selecciona el modelo con mayor F1-Score de la tabla comparativa." />
          </div>

          {/* Right: chart placeholder + explanation */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl overflow-hidden w-full" style={{ border: "1px solid rgba(116,35,132,0.18)", boxShadow: "0 2px 8px rgba(116,35,132,0.08)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(116,35,132,0.06)", borderBottom: "1px solid rgba(116,35,132,0.12)" }}>
                <span className="text-xs font-mono" style={{ color: "#742384" }}>📊</span>
                <span className="text-xs font-mono font-semibold" style={{ color: "#742384" }}>Comparación de F1-Score — 6 modelos</span>
              </div>
              <img src={graficof1} alt="Gráfico comparativo de F1-Score entre modelos" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
            </div>

            <div className="p-5 rounded-xl" style={{ background: "rgba(180,83,9,0.06)", border: "1px solid rgba(180,83,9,0.2)" }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#b45309" }}>Criterio de selección</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1229" }}>
                "Se seleccionó el modelo con mayor F1-Score para equilibrar Precision y Recall
                en un problema de detección de fraude."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
