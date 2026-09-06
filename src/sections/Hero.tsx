import { Shield, Brain, Database, TrendingUp, ChevronDown } from "lucide-react";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const team = ["Jesús", "Jakelin", "Joseph", "Rose"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
      style={{ background: "linear-gradient(160deg, var(--bg-base) 0%, var(--bg-alt) 50%, var(--bg-base) 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 38%, rgba(109,40,217,0.11) 0%, transparent 70%)",
        }}
      />

      {/* Floating icons */}
      {[
        { Icon: Shield, pos: "top-20 left-14", delay: "0s", color: "text-purple-500" },
        { Icon: Brain, pos: "top-28 right-16", delay: "1.2s", color: "text-cyan-500" },
        { Icon: Database, pos: "bottom-36 left-20", delay: "0.7s", color: "text-purple-400" },
        { Icon: TrendingUp, pos: "bottom-28 right-24", delay: "1.8s", color: "text-emerald-500" },
      ].map(({ Icon, pos, delay, color }) => (
        <div key={pos} className={`absolute ${pos} opacity-15 animate-pulse-slow`} style={{ animationDelay: delay }}>
          <Icon size={52} className={color} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase"
          style={{ border: "1px solid rgba(116,35,132,0.22)", background: "rgba(116,35,132,0.06)", color: "#742384" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Ciencia de Datos · Machine Learning · Fintech
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-black leading-none mb-5 tracking-tight gradient-text"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Detección temprana
          <br />
          de fraude en Yape
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Aplicación de Machine Learning y Redes Neuronales para identificar operaciones
          con comportamiento asociado a fraude por ingeniería social.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { icon: "📋", value: "50,074", label: "transacciones" },
            { icon: "🚨", value: "6.44%", label: "tasa de fraude" },
            { icon: "🏆", value: "98.65%", label: "Accuracy ML" },
            { icon: "🤖", value: "6 modelos", label: "ML + Deep Learning" },
          ].map((s) => (
            <div
              key={s.label}
              className="px-4 py-3 rounded-xl text-center card-hover"
              style={{ background: "rgba(116,35,132,0.07)", border: "1px solid rgba(116,35,132,0.18)" }}
            >
              <div className="text-lg mb-0.5">{s.icon}</div>
              <div className="text-sm font-bold font-mono" style={{ color: "#742384" }}>{s.value}</div>
              <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
        </div>

        {/* Team */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">Equipo:</span>
          {team.map((name) => (
            <span
              key={name}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(116,35,132,0.08)", border: "1px solid rgba(116,35,132,0.22)", color: "#742384" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-xs text-gray-600 font-mono">scroll</span>
        <ChevronDown size={16} className="text-purple-400 animate-flow" />
      </div>
    </section>
  );
}
