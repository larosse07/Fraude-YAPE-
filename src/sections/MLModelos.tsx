import { CodeBlock } from "@/components/CodeBlock";

const code = `from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import (
    RandomForestClassifier,
    GradientBoostingClassifier,
)

modelos = {
    "Logistic Regression": LogisticRegression(),
    "Decision Tree":       DecisionTreeClassifier(),
    "Random Forest":       RandomForestClassifier(),
    "Gradient Boosting":   GradientBoostingClassifier(),
}`;

const modelos = [
  {
    num: "01",
    name: "Logistic Regression",
    desc: "Modelo base de clasificación binaria. Permite establecer una línea de referencia para comparar.",
    color: "#7c3aed",
  },
  {
    num: "02",
    name: "Decision Tree",
    desc: "Permite representar decisiones mediante reglas jerárquicas basadas en las variables.",
    color: "#3b82f6",
  },
  {
    num: "03",
    name: "Random Forest",
    desc: "Combina múltiples árboles de decisión para mejorar la generalización y reducir sobreajuste.",
    color: "#10b981",
  },
  {
    num: "04",
    name: "Gradient Boosting",
    desc: "Construye modelos secuencialmente, donde cada uno corrige los errores del anterior.",
    color: "#f59e0b",
  },
];

export default function MLModelos() {
  return (
    <section id="ml-modelos" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            05
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Machine Learning — Modelos</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Modelos de Machine Learning
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Se entrenaron cuatro algoritmos utilizando Scikit-learn bajo las mismas condiciones,
          variables y métricas de evaluación.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: model cards */}
          <div className="flex flex-col gap-4">
            {modelos.map(({ num, name, desc, color }) => (
              <div
                key={name}
                className="flex items-start gap-4 p-4 rounded-xl card-hover"
                style={{ background: `${color}0d`, border: `1px solid ${color}25` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black font-mono flex-shrink-0"
                  style={{ background: `${color}25`, color }}
                >
                  {num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            <div
              className="p-3 rounded-xl text-center"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <p className="text-xs text-gray-400">
                <span className="text-purple-300 font-semibold">4 algoritmos</span> → mismas variables → mismas métricas → comparación
              </p>
            </div>
          </div>

          {/* Right: code */}
          <div>
            <CodeBlock code={code} title="entrenar_modelo.py" note="Los cuatro modelos se instancian con parámetros por defecto para una comparación justa." />
          </div>
        </div>
      </div>
    </section>
  );
}
