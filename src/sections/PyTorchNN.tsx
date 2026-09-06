import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
<img src="/img/image-6.png" alt="Arquitectura PT" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
const code = `class RedFraude(nn.Module):
  def __init__(self, numero_variables):
    super().__init__()
    self.red = nn.Sequential(
      nn.Linear(numero_variables, 128),
      nn.ReLU(),
      nn.BatchNorm1d(128),
      nn.Dropout(0.30),

      nn.Linear(128, 64),
      nn.ReLU(),

      nn.Linear(64, 32),
      nn.ReLU(),

      nn.Linear(32, 16),
      nn.ReLU(),

      nn.Linear(16, 1)
    )`;

const layers = [
  { label: "INPUT", note: "N variables", color: "#7c3aed" },
  { label: "Linear(128)", note: "ReLU · BatchNorm · Dropout 30%", color: "#6d28d9" },
  { label: "Linear(64)", note: "ReLU", color: "#5b21b6" },
  { label: "Linear(32)", note: "ReLU", color: "#4c1d95" },
  { label: "Linear(16)", note: "ReLU", color: "#3730a3" },
  { label: "Linear(1)", note: "BCEWithLogitsLoss", color: "#10b981" },
];

const components = ["ReLU", "BatchNorm1d", "Dropout", "Adam", "BCEWithLogitsLoss", "Class weighting"];

export default function PyTorchNN() {
  return (
    <section id="rna-pytorch" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(239,68,68,0.12)", color: "#f87171", border: "1px solid rgba(239,68,68,0.25)" }}>
            06
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Redes Neuronales — PyTorch</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Red Neuronal con PyTorch
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Arquitectura secuencial con capas densas, normalización por lotes y dropout para regularización.
          Entrenada con BCEWithLogitsLoss y optimizador Adam.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: code (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <CodeBlock code={code} title="red_neuronal_pytorch.py" note="Clase nn.Module con arquitectura secuencial." />

            {/* Component badges */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Componentes clave</p>
              <div className="flex flex-wrap gap-2">
                {components.map((c) => (
                  <span key={c} className="tech-badge" style={{ borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.1)", color: "#fca5a5" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Results placeholder */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { m: "Accuracy",  v: "96.12%" },
                { m: "Precision", v: "63.01%" },
                { m: "Recall",    v: "96.27%" },
                { m: "F1-Score",  v: "76.17%" },
              ].map(({ m, v }) => (
                <div key={m} className="p-3 rounded-xl text-center" style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.2)" }}>
                  <div className="text-base font-bold font-mono" style={{ color: "#dc2626" }}>{v}</div>
                  <div className="text-xs text-gray-500 mt-1">{m}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: architecture image */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(220,38,38,0.2)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(220,38,38,0.06)", borderBottom: "1px solid rgba(220,38,38,0.12)" }}>
                <span className="text-xs font-mono" style={{ color: "#dc2626" }}>🧠</span>
                <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Arquitectura de Red Neuronal — PyTorch</span>
              </div>
<img src="/img/image-6.png" alt="Arquitectura PyTorch" className="w-full object-contain" style={{ display: "block", height: "auto" }} />            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
