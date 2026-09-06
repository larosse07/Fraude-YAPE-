import { BarChart2, Info } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const riskData = [
  { nivel: "Bajo", cantidad: 420 },
  { nivel: "Medio", cantidad: 310 },
  { nivel: "Alto", cantidad: 180 },
  { nivel: "Crítico", cantidad: 90 },
];

const riskColors = ["#10b981", "#f59e0b", "#f97316", "#ef4444"];

const fraudBySignal = [
  { signal: "Dest. nuevo", fraude: 78, normal: 22 },
  { signal: "Llamada rec.", fraude: 72, normal: 28 },
  { signal: "Hora inusual", fraude: 65, normal: 35 },
  { signal: "Cambio disp.", fraude: 80, normal: 20 },
  { signal: "Ubic. inusual", fraude: 69, normal: 31 },
];

const classDist = [
  { name: "Normal", value: 800 },
  { name: "Fraude", value: 200 },
];
const classColors = ["#7c3aed", "#ef4444"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-3 text-xs">
        <p className="text-gray-300 mb-1 font-semibold">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EDA() {
  return (
    <section id="eda" className="py-24 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-mono mb-6">
          <BarChart2 size={12} />
          SECCIÓN 04
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Análisis Exploratorio de Datos
        </h2>
        <div
          className="inline-flex items-center gap-2 mb-10 px-3 py-2 rounded-lg text-xs text-yellow-400"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <Info size={12} />
          Los gráficos muestran distribuciones ilustrativas. Los valores reales provienen del dataset generado.
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Distribution of classes */}
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            <h3 className="text-base font-bold mb-1 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Distribución de Clases
            </h3>
            <p className="text-xs text-gray-500 mb-4">Operaciones normales vs fraudulentas</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={classDist} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" paddingAngle={3}>
                  {classDist.map((_, i) => (
                    <Cell key={i} fill={classColors[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Legend
                  formatter={(v) => <span style={{ color: "#9ca3af", fontSize: 12 }}>{v}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-3 italic">
              Se observa un desbalance entre operaciones normales y fraudulentas, lo que justifica el uso de class_weight.
            </p>
          </div>

          {/* Risk level distribution */}
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            <h3 className="text-base font-bold mb-1 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Distribución de Niveles de Riesgo
            </h3>
            <p className="text-xs text-gray-500 mb-4">Cantidad de operaciones por nivel</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={riskData} barSize={32}>
                <XAxis dataKey="nivel" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 8, fontSize: 12 }}
                />
                <Bar dataKey="cantidad" radius={[4, 4, 0, 0]}>
                  {riskData.map((_, i) => (
                    <Cell key={i} fill={riskColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-3 italic">
              La mayoría de operaciones corresponde a niveles bajo y medio de riesgo.
            </p>
          </div>
        </div>

        {/* Fraud by signal chart */}
        <div
          className="p-6 rounded-2xl mb-10"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <h3 className="text-base font-bold mb-1 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
            Fraude por Señal Sospechosa (%)
          </h3>
          <p className="text-xs text-gray-500 mb-4">Porcentaje de operaciones fraudulentas cuando la señal está presente</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={fraudBySignal} barSize={24}>
              <XAxis dataKey="signal" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="fraude" name="Fraude %" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="normal" name="Normal %" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              <Legend formatter={(v) => <span style={{ color: "#9ca3af", fontSize: 12 }}>{v}</span>} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-3 italic">
            Las señales como cambio de dispositivo y destinatario nuevo presentan mayor correlación con fraude.
          </p>
        </div>

        {/* Risk & Preprocessing */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Risk evaluation */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Evaluación del Riesgo
            </h3>
            <div className="space-y-3">
              {[
                { nivel: "BAJO", desc: "Pocas señales activas", clase: "risk-bajo" },
                { nivel: "MEDIO", desc: "Algunas señales activas", clase: "risk-medio" },
                { nivel: "ALTO", desc: "Varias señales activas", clase: "risk-alto" },
                { nivel: "CRÍTICO", desc: "Mayoría de señales activas", clase: "risk-critico" },
              ].map(({ nivel, desc, clase }) => (
                <div
                  key={nivel}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg border font-mono text-sm ${clase}`}
                >
                  <span className="font-bold">{nivel}</span>
                  <span className="text-xs opacity-80">{desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              El puntaje se construye sumando las señales sospechosas presentes en cada transacción.
            </p>
          </div>

          {/* Preprocessing */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
              Preparación para ML
            </h3>
            <div className="space-y-2">
              {[
                { step: "DATASET", icon: "📊" },
                { step: "X / Y (Features / Target)", icon: "🔀" },
                { step: "TRAIN / TEST SPLIT (80/20)", icon: "✂️" },
                { step: "SCALING → StandardScaler", icon: "📐" },
                { step: "CLASS WEIGHT = balanced", icon: "⚖️" },
                { step: "ENTRENAMIENTO", icon: "🚀", highlight: true },
              ].map(({ step, icon, highlight }) => (
                <div
                  key={step}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{
                    background: highlight ? "rgba(16,185,129,0.1)" : "rgba(124,58,237,0.07)",
                    border: `1px solid ${highlight ? "rgba(16,185,129,0.3)" : "rgba(124,58,237,0.15)"}`,
                  }}
                >
                  <span>{icon}</span>
                  <span className="text-xs font-mono" style={{ color: highlight ? "#34d399" : "#c4b5fd" }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            {/* StandardScaler formula */}
            <div
              className="mt-4 p-4 rounded-lg text-center font-mono"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <p className="text-purple-300 text-sm">X_scaled = (X − μ) / σ</p>
              <p className="text-gray-500 text-xs mt-1">Normaliza la escala de las variables numéricas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
