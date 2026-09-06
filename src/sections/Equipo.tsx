import { Users } from "lucide-react";

const members = [
  {
    name: "JESÚS",
    role: "Preparación y revisión del dataset",
    color: "#7c3aed",
    gradient: "from-purple-900/40 to-purple-900/10",
    tags: ["Pandas", "Validación", "Nulos", "Duplicados", "Estadísticas", "Distribución"],
    initial: "J",
  },
  {
    name: "JAKELIN",
    role: "Generación y preparación del dataset",
    color: "#3b82f6",
    gradient: "from-blue-900/40 to-blue-900/10",
    tags: ["NumPy", "Pandas", "CSV", "Puntaje riesgo", "Nivel riesgo", "PyTorch"],
    initial: "K",
  },
  {
    name: "JHOSHEF",
    role: "Análisis exploratorio y visualización",
    color: "#f59e0b",
    gradient: "from-yellow-900/40 to-yellow-900/10",
    tags: ["Matplotlib", "Seaborn", "Gráficos", "Correlaciones", "Análisis visual"],
    initial: "P",
  },
  {
    name: "ROSE",
    role: "Machine Learning, red neuronal y demostración",
    color: "#10b981",
    gradient: "from-emerald-900/40 to-emerald-900/10",
    tags: [
      "Scikit-learn", "Train/Test", "Scaling", "Class Weight",
      "Reg. Logística", "Árbol Decisión", "Random Forest", "Gradient Boosting",
      "Accuracy", "Precision", "Recall", "F1-Score",
      "Matrices confusión", "TensorFlow/Keras", "Guardado", "Predicción"
    ],
    initial: "R",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono mb-6">
          <Users size={12} />
          EQUIPO
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Equipo de Desarrollo
        </h2>
        <p className="text-gray-400 mb-12">
          Cuatro integrantes con roles diferenciados a lo largo del pipeline de ciencia de datos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {members.map(({ name, role, color, tags, initial }) => (
            <div
              key={name}
              className="p-6 rounded-2xl card-hover relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${color}25` }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${color}, transparent)`, transform: "translate(30%,-30%)" }}
              />
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black"
                  style={{ background: `${color}25`, color, fontFamily: "Outfit, sans-serif" }}
                >
                  {initial}
                </div>
                <div>
                  <h3 className="font-black text-lg text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {name}
                  </h3>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{ background: `${color}12`, color: `${color}cc`, border: `1px solid ${color}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team effort card */}
        <div
          className="p-6 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(16,185,129,0.08))",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
            Trabajo en Equipo
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            La interfaz / dashboard y la integración del sistema fueron desarrolladas en conjunto,
            combinando las contribuciones individuales en una solución cohesiva.
          </p>
        </div>
      </div>
    </section>
  );
}
