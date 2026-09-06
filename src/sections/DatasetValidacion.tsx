import { CodeBlock } from "@/components/CodeBlock";
import { PlaceholderZone } from "@/components/PlaceholderZone";
import tablaImg from "@/imports/image-4.png";

const code = `df = pd.read_csv(RUTA_DATASET)

print(f"Registros: {len(df):,}")
print(f"Columnas: {len(df.columns)}")

# Tipos de datos
print(df.dtypes)

# Valores nulos
nulos = df.isnull().sum()
print(nulos)

# Duplicados
duplicados = df.duplicated().sum()
print(f"Duplicados: {duplicados}")

# Estadísticas descriptivas
print(df.describe())`;

export default function DatasetValidacion() {
  const indicators = [
    { label: "Registros", value: "50,074", color: "#742384", icon: "📋" },
    { label: "Columnas", value: "24", color: "#3b82f6", icon: "📐" },
    { label: "Valores nulos", value: "0", color: "#10b981", icon: "✅" },
    { label: "Duplicados", value: "0", color: "#10b981", icon: "✅" },
    { label: "Variable objetivo", value: "fraude", color: "#f59e0b", icon: "🎯" },
    { label: "Valores objetivo", value: "0 / 1", color: "#f97316", icon: "🔲" },
  ];

  return (
    <section id="dataset-validacion" className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}>
            03
          </span>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Dataset — Validación</span>
        </div>

        <h2 className="text-4xl font-black mb-2 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
          Dataset de transacciones simuladas
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Generado con NumPy y Pandas. Variable objetivo: <span className="font-mono text-purple-300">fraude</span>{" "}
          (0 → Normal · 1 → Fraudulenta)
        </p>

        <div className="flex flex-col gap-6">
          {/* Top: code + indicators side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            <CodeBlock code={code} note="Carga del CSV y revisión inicial de estructura, tipos, nulos y duplicados." />

            <div className="grid grid-cols-3 gap-2 content-start">
              {indicators.map(({ label, value, color, icon }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl text-center"
                  style={{ background: `${color}0d`, border: `1px solid ${color}28` }}
                >
                  <div className="text-base mb-1">{icon}</div>
                  <div className="text-sm font-bold font-mono" style={{ color }}>{value}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width table image */}
          <div className="rounded-xl overflow-hidden w-full" style={{ border: "1px solid rgba(116,35,132,0.14)", boxShadow: "0 1px 4px rgba(116,35,132,0.06)" }}>
            <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(116,35,132,0.06)", borderBottom: "1px solid rgba(116,35,132,0.1)" }}>
              <span className="text-xs font-mono" style={{ color: "#742384" }}>📋</span>
              <span className="text-xs font-mono" style={{ color: "#7b7086" }}>Resumen Estadístico Paramétrico — 50,000 Transacciones</span>
            </div>
            <img src={tablaImg} alt="Resumen estadístico del dataset" className="w-full object-contain" style={{ display: "block", height: "auto" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
