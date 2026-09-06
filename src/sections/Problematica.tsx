import { AlertTriangle, PhoneCall, UserX, Smartphone, MapPin, Clock, Activity } from "lucide-react";

export default function Problematica() {
  const signals = [
    { icon: PhoneCall, label: "Contactos o llamadas sospechosas", color: "#ef4444" },
    { icon: UserX, label: "Destinatarios nuevos o desconocidos", color: "#f97316" },
    { icon: Smartphone, label: "Cambio repentino de dispositivo", color: "#f59e0b" },
    { icon: MapPin, label: "Ubicaciones inusuales", color: "#a78bfa" },
    { icon: Clock, label: "Horarios poco habituales", color: "#60a5fa" },
    { icon: Activity, label: "Comportamientos transaccionales atípicos", color: "#34d399" },
  ];

  return (
    <section id="problematica" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(239,68,68,0.12)", color: "#f87171", border: "1px solid rgba(239,68,68,0.25)" }}>
            01
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Problemática</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          El reto del fraude digital
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Las transacciones digitales permiten pagos rápidos, pero también pueden ser utilizadas para ejecutar fraudes
          mediante ingeniería social. El sistema busca detectar señales antes de que generen impacto.
        </p>

        {/* Signal cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {signals.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-4 rounded-xl card-hover"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "0 1px 3px rgba(116,35,132,0.06)" }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                <Icon size={17} style={{ color }} />
              </div>
              <span className="text-sm text-gray-300 leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Central problem */}
        <div
          className="relative rounded-2xl p-8 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(109,40,217,0.14) 0%, rgba(239,68,68,0.07) 100%)",
            border: "1px solid rgba(109,40,217,0.35)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none opacity-15"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
          />
          <div className="relative z-10">
            <span className="inline-block text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 px-2 py-1 rounded" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
              Problema central
            </span>
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug" style={{ fontFamily: "Outfit, sans-serif" }}>
              "¿Cómo identificar una transacción potencialmente fraudulenta
              <span className="text-purple-300"> antes</span> de que genere un impacto?"
            </p>
          </div>
        </div>

        {/* Justification row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Identificar patrones sospechosos",
            "Priorizar operaciones de riesgo",
            "Reducir el tiempo de respuesta",
            "Apoyar mecanismos preventivos",
            "Complementar la seguridad tradicional",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}
            >
              <span className="text-emerald-400 text-base">✓</span>
              <span className="text-xs text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
