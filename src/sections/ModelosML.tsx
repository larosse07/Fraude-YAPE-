import { Cpu, BarChart2, TrendingUp, GitBranch } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

// Placeholder data — replace with real CSV values
const modelData = [
  { modelo: "Reg. Logística", accuracy: null, precision: null, recall: null, f1: null },
  { modelo: "Árbol Decisión", accuracy: null, precision: null, recall: null, f1: null },
  { modelo: "Random Forest", accuracy: null, precision: null, recall: null, f1: null },
  { modelo: "Gradient Boosting", accuracy: null, precision: null, recall: null, f1: null },
];

const confusionMatrices = [
  { modelo: "Regresión Logística", tp: "—", tn: "—", fp: "—", fn: "—" },
  { modelo: "Árbol de Decisión", tp: "—", tn: "—", fp: "—", fn: "—" },
  { modelo: "Random Forest", tp: "—", tn: "—", fp: "—", fn: "—" },
  { modelo: "Gradient Boosting", tp: "—", tn: "—", fp: "—", fn: "—" },
];

const modelIcons = [TrendingUp, GitBranch, Cpu, BarChart2];
const modelColors = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b"];

const modelDescs = [
  "Modelo de clasificación lineal utilizado como línea base de referencia.",
  "Modelo basado en reglas de decisión jerárquicas sobre las variables.",
  "Ensemble de múltiples árboles de decisión para mayor robustez.",
  "Combinación progresiva de modelos débiles para mejorar la predicción.",
];

export default function ModelosML() {
  return (
    <section id="modelos" className="py-24 px-6" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6">
          <Cpu size={12} />
          SECCIÓN 05
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Modelos de Machine Learning
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Se entrenaron y compararon cuatro algoritmos de clasificación, evaluados con métricas
          estándar de detección de fraude.
        </p>

        {/* Model cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {["Regresión Logística", "Árbol de Decisión", "Random Forest", "Gradient Boosting"].map((name, i) => {
            const Icon = modelIcons[i];
            return (
              <div
                key={name}
                className="p-6 rounded-2xl card-hover"
                style={{
                  background: `rgba(${i === 0 ? "124,58,237" : i === 1 ? "59,130,246" : i === 2 ? "16,185,129" : "245,158,11"},0.07)`,
                  border: `1px solid ${modelColors[i]}33`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${modelColors[i]}20` }}
                  >
                    <Icon size={20} style={{ color: modelColors[i] }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-snug">{modelDescs[i]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics explanation */}
        <h3 className="text-xl font-bold mb-6 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          ¿Cómo evaluamos los modelos?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { name: "Accuracy", formula: "Predicciones correctas / Total", color: "#7c3aed" },
            { name: "Precision", formula: "TP / (TP + FP)", color: "#3b82f6" },
            { name: "Recall", formula: "TP / (TP + FN)", color: "#10b981" },
            { name: "F1-Score", formula: "2 × (P × R) / (P + R)", color: "#f59e0b" },
          ].map(({ name, formula, color }) => (
            <div
              key={name}
              className="p-4 rounded-xl text-center"
              style={{ background: `${color}10`, border: `1px solid ${color}30` }}
            >
              <div className="text-base font-bold mb-2" style={{ color, fontFamily: "Outfit, sans-serif" }}>
                {name}
              </div>
              <div className="text-xs font-mono text-gray-400">{formula}</div>
            </div>
          ))}
        </div>

        {/* F1-Score criterion */}
        <div
          className="p-6 rounded-2xl mb-14"
          style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(124,58,237,0.08))", border: "1px solid rgba(245,158,11,0.3)" }}
        >
          <h3 className="text-lg font-bold text-yellow-300 mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Criterio de Selección — F1-Score
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Para la detección de fraude no es suficiente obtener un Accuracy elevado. Es necesario encontrar
            un equilibrio entre detectar correctamente los casos fraudulentos y evitar clasificar
            operaciones normales como fraude.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <div className="text-sm font-mono font-bold text-blue-300">Precision</div>
              <div className="text-xs text-gray-500">No generar falsas alarmas</div>
            </div>
            <div className="text-2xl text-yellow-400">⟷</div>
            <div className="text-center">
              <div className="text-sm font-mono font-bold text-emerald-300">Recall</div>
              <div className="text-xs text-gray-500">No perder fraudes reales</div>
            </div>
            <div className="text-2xl text-gray-500">↓</div>
            <div
              className="px-5 py-2 rounded-lg text-center"
              style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.5)" }}
            >
              <div className="text-base font-bold text-yellow-300 font-mono">F1-Score</div>
              <div className="text-xs text-gray-400">Equilibrio óptimo</div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          Comparación de Modelos
        </h3>
        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "rgba(124,58,237,0.15)" }}>
                {["Modelo", "Accuracy", "Precision", "Recall", "F1-Score"].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-4 text-left font-mono text-xs text-purple-300 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modelData.map((row, i) => (
                <tr
                  key={row.modelo}
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    borderTop: "1px solid rgba(124,58,237,0.1)",
                  }}
                >
                  <td className="py-3 px-4 font-semibold text-white">{row.modelo}</td>
                  <td className="py-3 px-4 font-mono text-gray-400">—</td>
                  <td className="py-3 px-4 font-mono text-gray-400">—</td>
                  <td className="py-3 px-4 font-mono text-gray-400">—</td>
                  <td className="py-3 px-4 font-mono text-gray-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 italic mb-14">
          * Los valores se obtienen de resultados/comparacion_modelos.csv generado en el proyecto.
        </p>

        {/* Confusion matrices */}
        <h3 className="text-xl font-bold mb-6 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          Matrices de Confusión
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {confusionMatrices.map(({ modelo, tp, tn, fp, fn }) => (
            <div
              key={modelo}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <h4 className="text-sm font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                {modelo}
              </h4>
              <div className="grid grid-cols-2 gap-1 mb-3">
                <div className="cm-tp rounded-lg p-3 text-center">
                  <div className="text-lg font-bold font-mono">{tp}</div>
                  <div className="text-xs opacity-80 mt-1">True Positive</div>
                  <div className="text-xs opacity-60">Fraude detectado ✓</div>
                </div>
                <div className="cm-fp rounded-lg p-3 text-center">
                  <div className="text-lg font-bold font-mono">{fp}</div>
                  <div className="text-xs opacity-80 mt-1">False Positive</div>
                  <div className="text-xs opacity-60">Normal → Fraude ✗</div>
                </div>
                <div className="cm-fn rounded-lg p-3 text-center">
                  <div className="text-lg font-bold font-mono">{fn}</div>
                  <div className="text-xs opacity-80 mt-1">False Negative</div>
                  <div className="text-xs opacity-60">Fraude → Normal ✗</div>
                </div>
                <div className="cm-tn rounded-lg p-3 text-center">
                  <div className="text-lg font-bold font-mono">{tn}</div>
                  <div className="text-xs opacity-80 mt-1">True Negative</div>
                  <div className="text-xs opacity-60">Normal detectado ✓</div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 font-mono px-1">
                <span>Predicho: Fraude</span>
                <span>Predicho: Normal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
