import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";

const code = `modelo = joblib.load(RUTA_MODELO)
scaler = joblib.load(RUTA_SCALER)

datos_escalados = scaler.transform(datos)

prediccion = modelo.predict(
    datos_escalados
)[0]

probabilidades = modelo.predict_proba(
    datos_escalados
)[0]

resultado = "FRAUDE" if prediccion == 1 else "NORMAL"
prob_fraude = probabilidades[1] * 100

print(f"Resultado: {resultado}")
print(f"Probabilidad de fraude: {prob_fraude:.2f}%")`;

const flowSteps = [
  { label: "USUARIO", icon: "👤", color: "#7c3aed" },
  { label: "APLICACIÓN", icon: "📱", color: "#6d28d9" },
  { label: "DATOS DE TRANSACCIÓN", icon: "📋", color: "#5b21b6" },
  { label: "PREPROCESAMIENTO", icon: "⚙️", color: "#4c1d95" },
  { label: "MODELO ENTRENADO", icon: "🤖", color: "#3730a3" },
  { label: "PREDICCIÓN", icon: "⚡", color: "#1d4ed8" },
  { label: "PROBABILIDAD", icon: "📊", color: "#0891b2" },
  { label: "RESULTADO", icon: "🎯", color: "#10b981" },
];

export default function Demo() {
  return (
    <section id="demo" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            09
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Demo Final — Integración</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Aplicación de detección
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Integración entre Machine Learning y la aplicación Streamlit. Una nueva transacción
          es procesada y clasificada mediante el modelo entrenado.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: code (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <CodeBlock code={code} title="predecir_fraude.py — Integración" note="Carga del modelo y scaler serializados para predicción en producción." />

            {/* Integration flow horizontal */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Flujo de integración</p>
              <div className="flex items-center gap-2 flex-wrap">
                {["Machine Learning", "+", "Aplicación", "=", "Detección temprana"].map((item, i) => (
                  <div key={i}>
                    {item === "+" || item === "=" ? (
                      <span className="text-gray-600 font-bold text-lg">{item}</span>
                    ) : (
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
                        style={{
                          background: item === "Detección temprana" ? "rgba(16,185,129,0.18)" : "rgba(124,58,237,0.14)",
                          border: `1px solid ${item === "Detección temprana" ? "rgba(16,185,129,0.38)" : "rgba(124,58,237,0.28)"}`,
                          color: item === "Detección temprana" ? "#34d399" : "#a78bfa",
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: vertical flow */}
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Pipeline completo</p>
            <div className="space-y-1">
              {flowSteps.map(({ label, icon, color }, i) => (
                <div key={label} className="flex flex-col items-start">
                  <div
                    className="w-full px-4 py-2.5 rounded-lg flex items-center gap-3"
                    style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                  >
                    <span className="text-sm">{icon}</span>
                    <span className="text-xs font-mono font-semibold" style={{ color }}>{label}</span>
                  </div>
                  {i < flowSteps.length - 1 && <div className="w-px h-2 ml-6" style={{ background: `${color}40` }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
