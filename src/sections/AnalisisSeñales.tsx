import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
<>
  <img src="/img/06_cambio_dispositivo.png" alt="Cambio de dispositivo" />
  <img src="/img/07_ubicacion_inusual.png" alt="Ubicación inusual" />
</>

const code = `# Análisis de señales vs fraude
fraude_dispositivo = pd.crosstab(
    df["cambio_dispositivo"],
    df["fraude"]
)

fraude_destinatario = pd.crosstab(
    df["destinatario_nuevo"],
    df["fraude"]
)

# El mismo análisis se aplica a:
# ubicacion_inusual, llamada_reciente, hora_inusual
# velocidad_operacion, alertas_ignoradas`;

const señales = [
  { name: "Cambio de dispositivo", icon: "📱", priority: 1, color: "#ef4444" },
  { name: "Destinatario nuevo", icon: "👤", priority: 2, color: "#f97316" },
  { name: "Ubicación inusual", icon: "📍", priority: 3, color: "#f59e0b" },
  { name: "Llamada reciente", icon: "📞", priority: 4, color: "#a78bfa" },
  { name: "Hora inusual", icon: "🕐", priority: 5, color: "#60a5fa" },
  { name: "Velocidad de operación", icon: "⚡", priority: 6, color: "#34d399" },
];

export default function AnalisisSeñales() {
  return (
    <section id="analisis-senales" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.25)" }}>
            04
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Análisis — Señales de fraude</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          ¿Qué comportamientos se asocian al fraude?
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Las variables de comportamiento permiten identificar patrones que diferencian operaciones normales
          de operaciones asociadas al fraude.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <CodeBlock code={code} note="Análisis de relación entre señales binarias y la variable fraude mediante tabla de contingencia." />

            {/* Signal priority list */}
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Señales analizadas</p>
              <div className="space-y-2">
                {señales.map(({ name, icon, priority, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-2.5 rounded-lg"
                    style={{ background: `${color}0d`, border: `1px solid ${color}22` }}
                  >
                    <span className="text-xs font-mono font-bold w-4" style={{ color: `${color}90` }}>{priority}</span>
                    <span className="text-base">{icon}</span>
                    <span className="text-sm text-gray-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(180,83,9,0.2)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(180,83,9,0.06)", borderBottom: "1px solid rgba(180,83,9,0.12)" }}>
                <span className="text-xs font-mono" style={{ color: "#b45309" }}>📊</span>
                <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Fraude según cambio de dispositivo</span>
              </div>
<img src="/img/06_cambio_dispositivo.png" alt="Gráfico señales vs fraude" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
            </div>

            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(180,83,9,0.2)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)", background: "#ffffff" }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(180,83,9,0.06)", borderBottom: "1px solid rgba(180,83,9,0.12)" }}>
                <span className="text-xs font-mono" style={{ color: "#b45309" }}>📊</span>
                <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Fraude según ubicación inusual</span>
              </div>
<img src="/img/07_ubicacion_inusual.png" alt="Gráfico ubicación inusual vs fraude" className="w-full object-contain" style={{ display: "block", height: "auto" }} />            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.18)" }}
            >
              <p className="text-xs font-mono text-purple-400 mb-1">HALLAZGO</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Las variables de comportamiento permiten identificar patrones que pueden diferenciar
                operaciones normales de operaciones asociadas al fraude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
