import { Package } from "lucide-react";

const techGroups = [
  {
    title: "Manipulación de datos",
    color: "#3b82f6",
    items: ["Pandas", "NumPy"],
  },
  {
    title: "Visualización",
    color: "#f59e0b",
    items: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Machine Learning",
    color: "#7c3aed",
    items: ["Scikit-learn"],
  },
  {
    title: "Deep Learning",
    color: "#10b981",
    items: ["TensorFlow", "Keras"],
  },
  {
    title: "Modelo adicional",
    color: "#f97316",
    items: ["PyTorch"],
  },
  {
    title: "Interfaz / Dashboard",
    color: "#ec4899",
    items: ["Streamlit"],
  },
  {
    title: "Persistencia",
    color: "#6366f1",
    items: ["Pickle"],
  },
];

const artifacts = [
  { file: "modelo_fraude.pkl", desc: "Modelo ML entrenado serializado", icon: "🤖" },
  { file: "scaler_fraude.pkl", desc: "StandardScaler ajustado al dataset", icon: "📐" },
  { file: "modelo_red_neuronal.keras", desc: "Red neuronal TF/Keras guardada", icon: "🧠" },
  { file: "modelo_gradient_boosting.pkl", desc: "Modelo Gradient Boosting serializado", icon: "⚡" },
];

const folderStructure = [
  { folder: "datos/", desc: "Dataset CSV generado y procesado" },
  { folder: "notebooks/", desc: "Jupyter Notebooks del desarrollo" },
  { folder: "scripts/", desc: "Scripts de procesamiento y entrenamiento" },
  { folder: "modelos/", desc: "Modelos entrenados y artefactos pickle" },
  { folder: "graficos/", desc: "Visualizaciones generadas del EDA" },
  { folder: "resultados/", desc: "CSVs con métricas y comparaciones" },
  { folder: "interfaz/", desc: "Dashboard Streamlit" },
  { folder: "documentacion/", desc: "Documentación del proyecto" },
  { folder: "pruebas/", desc: "Scripts de prueba y validación" },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="py-24 px-6" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
          <Package size={12} />
          SECCIÓN 08
        </div>

        <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Tecnologías Utilizadas
        </h2>
        <p className="text-gray-400 mb-12">Ecosistema de herramientas del proyecto de ciencia de datos.</p>

        {/* Tech stack grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {techGroups.map(({ title, color, items }) => (
            <div
              key={title}
              className="p-4 rounded-xl card-hover"
              style={{ background: `${color}0d`, border: `1px solid ${color}25` }}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color }}>
                {title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tech-badge" style={{ borderColor: `${color}40`, background: `${color}15`, color: `${color}` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Artifacts */}
        <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          Artefactos del Sistema
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {artifacts.map(({ file, desc, icon }) => (
            <div
              key={file}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="font-mono text-sm text-purple-300 font-semibold">{file}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Folder structure */}
        <h3 className="text-xl font-bold mb-5 text-gray-300" style={{ fontFamily: "Outfit, sans-serif" }}>
          Arquitectura del Proyecto
        </h3>
        <div
          className="p-6 rounded-2xl font-mono text-sm"
          style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <div className="text-purple-300 mb-4 font-bold">PROYECTO_FRAUDE/</div>
          {folderStructure.map(({ folder, desc }) => (
            <div key={folder} className="flex items-baseline gap-3 py-1.5 border-b border-purple-900/20 last:border-0">
              <span className="text-emerald-400 flex-shrink-0">├── {folder}</span>
              <span className="text-gray-600 text-xs">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
