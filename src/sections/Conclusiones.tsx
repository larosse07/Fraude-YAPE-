export default function Conclusiones() {
  const conclusiones = [
    {
      num: "01",
      text: "El análisis exploratorio permitió identificar comportamientos y variables relacionadas con operaciones sospechosas.",
      color: "#7c3aed",
    },
    {
      num: "02",
      text: "Se entrenaron diferentes modelos de Machine Learning y redes neuronales para comparar su desempeño en detección de fraude.",
      color: "#3b82f6",
    },
    {
      num: "03",
      text: "La evaluación mediante Precision, Recall y especialmente F1-Score permitió seleccionar el modelo más adecuado.",
      color: "#10b981",
    },
    {
      num: "04",
      text: "El sistema puede recibir una nueva transacción y generar una clasificación junto con una probabilidad de fraude.",
      color: "#f59e0b",
    },
  ];

  const recomendaciones = [
    "Utilizar datos reales anonimizados para mejorar la generalización.",
    "Incorporar más variables de comportamiento transaccional.",
    "Evaluar modelos adicionales como XGBoost o LightGBM.",
    "Implementar monitoreo continuo del desempeño del modelo.",
    "Incorporar técnicas de explicabilidad (SHAP, LIME).",
    "Integrar el sistema con mecanismos de alerta automática.",
  ];

  return (
    <section id="conclusiones" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>
            ✓
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Conclusiones</span>
        </div>

        <h2 className="text-4xl font-black mb-10 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Conclusiones
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {conclusiones.map(({ num, text, color }) => (
            <div key={num} className="p-6 rounded-2xl card-hover" style={{ background: `${color}0d`, border: `1px solid ${color}25` }}>
              <div className="text-3xl font-black mb-3 font-mono" style={{ color: `${color}50` }}>{num}</div>
              <p className="text-sm text-gray-200 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Work future */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <div
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(109,40,217,0.15), rgba(16,185,129,0.08))", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06), transparent)" }} />
              <div className="relative z-10 text-center">
                <p className="text-3xl font-black gradient-text mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                  "De los datos<br/>a la detección"
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
                  {["Dataset", "Análisis", "ML", "Deep Learning", "Predicción"].map((s, i, arr) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <span className="text-xs font-mono text-purple-300 px-2 py-0.5 rounded" style={{ background: "rgba(124,58,237,0.15)" }}>{s}</span>
                      {i < arr.length - 1 && <span className="text-purple-700 text-xs">→</span>}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed italic">
                  "La inteligencia artificial no reemplaza la decisión: ayuda a identificar señales
                  de riesgo antes de actuar."
                </p>
                <p className="text-lg font-bold text-white mt-5" style={{ fontFamily: "Outfit, sans-serif" }}>Gracias</p>
                <div className="flex justify-center gap-2 mt-2">
                  {["Jesús", "Jakelin", "Jhoshef", "Rose"].map((n) => (
                    <span key={n} className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ background: "rgba(124,58,237,0.15)", color: "#c4b5fd" }}>{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
