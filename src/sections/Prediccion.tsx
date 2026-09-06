import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
import { Zap, RotateCcw, ShieldAlert, ShieldCheck } from "lucide-react";

const codePredict = `datos = pd.get_dummies(
    datos,
    columns=["producto"],
    dtype=float
)

datos = datos.reindex(
    columns=columnas_modelo,
    fill_value=0
)

datos_escalados = scaler.transform(datos)

prediccion = modelo.predict(
    datos_escalados
)[0]

probabilidades = modelo.predict_proba(
    datos_escalados
)[0]

probabilidad_fraude = (
    probabilidades[1] * 100
)`;

interface FormData {
  monto: string;
  monto_promedio: string;
  destinatario_nuevo: boolean;
  llamada_reciente: boolean;
  cambio_dispositivo: boolean;
  ubicacion_inusual: boolean;
  hora_inusual: boolean;
  operaciones_ultima_hora: string;
  alertas_ignoradas: string;
}

const initial: FormData = {
  monto: "",
  monto_promedio: "",
  destinatario_nuevo: false,
  llamada_reciente: false,
  cambio_dispositivo: false,
  ubicacion_inusual: false,
  hora_inusual: false,
  operaciones_ultima_hora: "",
  alertas_ignoradas: "",
};

function heuristic(f: FormData) {
  let score = 0;
  if (f.destinatario_nuevo) score += 2;
  if (f.llamada_reciente) score += 2;
  if (f.cambio_dispositivo) score += 2;
  if (f.ubicacion_inusual) score += 1;
  if (f.hora_inusual) score += 1;
  const monto = parseFloat(f.monto) || 0;
  const prom = parseFloat(f.monto_promedio) || 1;
  if (monto > prom * 3) score += 2;
  const alertas = parseInt(f.alertas_ignoradas) || 0;
  if (alertas > 0) score += 1;
  const ops = parseInt(f.operaciones_ultima_hora) || 0;
  if (ops > 3) score += 1;
  const prob = Math.min(0.05 + score * 0.09, 0.97);
  const nivel = score >= 7 ? "CRÍTICO" : score >= 5 ? "ALTO" : score >= 3 ? "MEDIO" : "BAJO";
  return { fraud: prob >= 0.5, prob, nivel };
}

const riskColor: Record<string, string> = {
  BAJO: "#10b981", MEDIO: "#f59e0b", ALTO: "#f97316", CRÍTICO: "#ef4444",
};

export default function Prediccion() {
  const [form, setForm] = useState<FormData>(initial);
  const [result, setResult] = useState<ReturnType<typeof heuristic> | null>(null);

  const toggle = (k: keyof FormData) => { setForm(p => ({ ...p, [k]: !p[k] })); setResult(null); };
  const change = (k: keyof FormData, v: string) => { setForm(p => ({ ...p, [k]: v })); setResult(null); };

  return (
    <section id="prediccion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            08
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Predicción de nueva transacción</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Predicción de nueva transacción
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          El modelo recibe datos de una nueva transacción, los preprocesa y genera una predicción
          con la probabilidad de que sea fraudulenta.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: code + flow */}
          <div className="flex flex-col gap-5">
            <CodeBlock code={codePredict} title="predecir_fraude.py" note="Preprocesamiento, escalamiento y predicción sobre una nueva transacción." />

            {/* Flow */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Flujo de predicción</p>
              <div className="flex flex-wrap gap-1.5 items-center">
                {["Entrada", "get_dummies", "reindex", "scaler.transform", "predict", "predict_proba", "Probabilidad"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.22)", color: "#c4b5fd" }}>
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-purple-700 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <PlaceholderZone label="Insertar captura real de la predicción ejecutada" icon="🖥️" minHeight={140} accent="emerald" />
          </div>

          {/* Right: interactive demo */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Demo interactiva</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {([
                  { k: "monto", l: "Monto (S/)", ph: "500" },
                  { k: "monto_promedio", l: "Monto promedio", ph: "150" },
                  { k: "operaciones_ultima_hora", l: "Ops. última hora", ph: "1" },
                  { k: "alertas_ignoradas", l: "Alertas ignoradas", ph: "0" },
                ] as { k: keyof FormData; l: string; ph: string }[]).map(({ k, l, ph }) => (
                  <div key={k}>
                    <label className="block text-xs text-gray-600 mb-1 font-mono">{l}</label>
                    <input type="number" placeholder={ph} value={(form as any)[k]} onChange={e => change(k, e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg text-xs font-mono text-white placeholder-gray-700 outline-none focus:ring-1 focus:ring-purple-500"
                      style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }} />
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-600 font-mono mb-2">SEÑALES SOSPECHOSAS</p>
              <div className="space-y-1.5 mb-4">
                {([
                  { k: "destinatario_nuevo", l: "Destinatario nuevo" },
                  { k: "llamada_reciente", l: "Llamada reciente" },
                  { k: "cambio_dispositivo", l: "Cambio de dispositivo" },
                  { k: "ubicacion_inusual", l: "Ubicación inusual" },
                  { k: "hora_inusual", l: "Hora inusual" },
                ] as { k: keyof FormData; l: string }[]).map(({ k, l }) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{l}</span>
                    <button onClick={() => toggle(k)}
                      className={`w-10 h-5 rounded-full transition-all relative ${(form as any)[k] ? "bg-purple-600" : "bg-gray-700"}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${(form as any)[k] ? "left-5" : "left-0.5"}`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button onClick={() => setResult(heuristic(form))}
                  className="flex-1 py-2.5 rounded-xl font-bold text-white text-xs flex items-center justify-center gap-2 transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)", boxShadow: "0 4px 16px rgba(124,58,237,0.3)" }}>
                  <Zap size={13} /> ANALIZAR TRANSACCIÓN
                </button>
                <button onClick={() => { setForm(initial); setResult(null); }}
                  className="p-2.5 rounded-xl text-gray-500 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            {/* Result */}
            {result ? (
              <div className="rounded-xl p-5" style={{
                background: result.fraud ? "rgba(239,68,68,0.1)" : "rgba(16,185,129,0.1)",
                border: `1px solid ${result.fraud ? "rgba(239,68,68,0.35)" : "rgba(16,185,129,0.35)"}`,
              }}>
                <div className="flex items-center gap-3 mb-3">
                  {result.fraud ? <ShieldAlert size={24} className="text-red-400" /> : <ShieldCheck size={24} className="text-emerald-400" />}
                  <div>
                    <p className="font-bold text-sm" style={{ color: result.fraud ? "#f87171" : "#34d399", fontFamily: "Outfit, sans-serif" }}>
                      {result.fraud ? "Posible fraude detectado" : "Transacción aparentemente segura"}
                    </p>
                    <p className="text-xs text-gray-500">Demo heurística basada en señales activas</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-lg text-center" style={{ background: "rgba(0,0,0,0.25)" }}>
                    <div className="text-lg font-bold font-mono text-white">{(result.prob * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-500 mt-0.5">P(fraude)</div>
                  </div>
                  <div className="p-2.5 rounded-lg text-center" style={{ background: "rgba(0,0,0,0.25)", border: `1px solid ${riskColor[result.nivel]}30` }}>
                    <div className="text-lg font-bold font-mono" style={{ color: riskColor[result.nivel] }}>{result.nivel}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Nivel de riesgo</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl flex items-center justify-center gap-2 py-5"
                style={{ background: "rgba(255,255,255,0.01)", border: "1px dashed rgba(124,58,237,0.18)" }}>
                <span className="text-gray-700 text-xs font-mono">Ingresa datos y presiona ANALIZAR</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
