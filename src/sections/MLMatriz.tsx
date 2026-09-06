import { CodeBlock } from "@/components/CodeBlock";
import regresionLogistica from "@/imports/regresion logistica.jpeg";
import arbolDecision from "@/imports/arbol de decision.jpeg";

const code = `from sklearn.metrics import (
    confusion_matrix,
    classification_report
)

predicciones = modelo.predict(
    X_test_scaled
)

matriz = confusion_matrix(
    y_test,
    predicciones
)

print(classification_report(
    y_test, predicciones
))`;

export default function MLMatriz() {
  const cells = [
    {
      label: "Verdadero Negativo (TN)",
      desc: "Operación normal correctamente identificada.",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.12)",
      border: "rgba(124,58,237,0.3)",
      pos: "top-left",
    },
    {
      label: "Falso Positivo (FP)",
      desc: "Operación normal clasificada como fraude. Genera falsa alarma.",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.12)",
      border: "rgba(245,158,11,0.3)",
      pos: "top-right",
    },
    {
      label: "Falso Negativo (FN) ⚠️",
      desc: "Fraude no detectado. El más crítico en detección de fraude.",
      color: "#ef4444",
      bg: "rgba(239,68,68,0.15)",
      border: "rgba(239,68,68,0.4)",
      pos: "bottom-left",
    },
    {
      label: "Verdadero Positivo (TP)",
      desc: "Fraude correctamente detectado.",
      color: "#10b981",
      bg: "rgba(16,185,129,0.12)",
      border: "rgba(16,185,129,0.3)",
      pos: "bottom-right",
    },
  ];

  return (
    <section
      id="ml-matriz"
      className="min-h-screen py-20 px-6 flex flex-col justify-center"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* ENCABEZADO */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="text-xs font-mono px-2 py-1 rounded"
            style={{
              background: "rgba(16,185,129,0.12)",
              color: "#34d399",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            05
          </span>

          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            Machine Learning — Matriz de Confusión
          </span>
        </div>

        <h2
          className="text-4xl font-black mb-2 leading-tight"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Matriz de confusión
        </h2>

        <p className="text-gray-400 mb-8 text-sm max-w-xl">
          Evalúa el desempeño del modelo mostrando la distribución entre
          predicciones correctas e incorrectas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col gap-5">

            {/* ESTRUCTURA DE MATRIZ */}
            <div>
              <div className="flex justify-end mb-1">
                <span className="text-xs font-mono text-gray-500 mr-2">
                  PREDICCIÓN
                </span>
              </div>

              <div className="flex justify-end gap-2 mb-1">
                <span className="text-xs font-mono text-gray-600 w-20 text-center">
                  NORMAL
                </span>

                <span className="text-xs font-mono text-gray-600 w-20 text-center">
                  FRAUDE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {cells.map(
                  ({ label, desc, color, bg, border }) => (
                    <div
                      key={label}
                      className="p-3 rounded-xl"
                      style={{
                        background: bg,
                        border: `1px solid ${border}`,
                      }}
                    >
                      <div
                        className="text-xs font-bold font-mono mb-1"
                        style={{ color }}
                      >
                        {label.split(" ")[0]} {label.split(" ")[1]}
                      </div>

                      <div className="text-xs text-gray-400 leading-snug">
                        {desc}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ALERTA FALSOS NEGATIVOS */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
            >
              <span className="text-red-400">⚠️</span>

              <p className="text-xs text-red-300 leading-relaxed">
                <span className="font-bold">
                  Los Falsos Negativos son especialmente críticos:
                </span>{" "}
                representan fraudes que el sistema no logró detectar.
              </p>
            </div>

            {/* CÓDIGO */}
            <CodeBlock
              code={code}
              note="La misma lógica se aplica a cada uno de los cuatro modelos entrenados."
            />
          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex flex-col gap-4">

            {/* GRADIENT BOOSTING */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "#fff",
                border: "1px solid rgba(116,35,132,0.14)",
                boxShadow: "0 1px 4px rgba(116,35,132,0.06)",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    color: "#1a1229",
                  }}
                >
                  Gradient Boosting
                </span>

                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: "#74238412",
                    color: "#742384",
                    border: "1px solid #74238428",
                  }}
                >
                  MEJOR F1-SCORE
                </span>
              </div>

              <div
                className="text-xs font-mono text-center mb-1"
                style={{ color: "#7b7086" }}
              >
                PRED: NORMAL / PRED: FRAUDE
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-3">
                <div className="cm-tn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">9,347</div>
                  <div className="text-xs opacity-70">VN</div>
                </div>

                <div className="cm-fp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">9</div>
                  <div className="text-xs opacity-70">FP</div>
                </div>

                <div className="cm-fn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">126</div>
                  <div className="text-xs opacity-70">FN</div>
                </div>

                <div className="cm-tp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">518</div>
                  <div className="text-xs opacity-70">VP</div>
                </div>
              </div>

              <div
                className="flex justify-between text-xs font-mono"
                style={{ color: "#7b7086" }}
              >
                <span>
                  Acc: <b style={{ color: "#1a1229" }}>98.65%</b>
                </span>

                <span>
                  Prec: <b style={{ color: "#1a1229" }}>98.29%</b>
                </span>

                <span>
                  Rec: <b style={{ color: "#1a1229" }}>80.43%</b>
                </span>
              </div>
            </div>

            {/* PYTORCH */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "#fff",
                border: "1px solid rgba(116,35,132,0.14)",
                boxShadow: "0 1px 4px rgba(116,35,132,0.06)",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    color: "#1a1229",
                  }}
                >
                  PyTorch
                </span>

                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: "#dc262612",
                    color: "#dc2626",
                    border: "1px solid #dc262628",
                  }}
                >
                  ALTO RECALL
                </span>
              </div>

              <div
                className="text-xs font-mono text-center mb-1"
                style={{ color: "#7b7086" }}
              >
                PRED: NORMAL / PRED: FRAUDE
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-3">
                <div className="cm-tn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">8,992</div>
                  <div className="text-xs opacity-70">VN</div>
                </div>

                <div className="cm-fp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">364</div>
                  <div className="text-xs opacity-70">FP</div>
                </div>

                <div className="cm-fn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">24</div>
                  <div className="text-xs opacity-70">FN</div>
                </div>

                <div className="cm-tp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">620</div>
                  <div className="text-xs opacity-70">VP</div>
                </div>
              </div>

              <div
                className="flex justify-between text-xs font-mono"
                style={{ color: "#7b7086" }}
              >
                <span>
                  Acc: <b style={{ color: "#1a1229" }}>96.12%</b>
                </span>

                <span>
                  Prec: <b style={{ color: "#1a1229" }}>63.01%</b>
                </span>

                <span>
                  Rec: <b style={{ color: "#1a1229" }}>96.27%</b>
                </span>
              </div>
            </div>

            {/* TENSORFLOW */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "#fff",
                border: "1px solid rgba(116,35,132,0.14)",
                boxShadow: "0 1px 4px rgba(116,35,132,0.06)",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    color: "#1a1229",
                  }}
                >
                  TensorFlow / Keras
                </span>

                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: "#ea580c12",
                    color: "#ea580c",
                    border: "1px solid #ea580c28",
                  }}
                >
                  DEEP LEARNING
                </span>
              </div>

              <div
                className="text-xs font-mono text-center mb-1"
                style={{ color: "#7b7086" }}
              >
                PRED: NORMAL / PRED: FRAUDE
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-3">
                <div className="cm-tn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">8,912</div>
                  <div className="text-xs opacity-70">VN</div>
                </div>

                <div className="cm-fp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">444</div>
                  <div className="text-xs opacity-70">FP</div>
                </div>

                <div className="cm-fn rounded-lg p-2 text-center">
                  <div className="text-lg font-black">29</div>
                  <div className="text-xs opacity-70">FN</div>
                </div>

                <div className="cm-tp rounded-lg p-2 text-center">
                  <div className="text-lg font-black">615</div>
                  <div className="text-xs opacity-70">VP</div>
                </div>
              </div>

              <div
                className="flex justify-between text-xs font-mono"
                style={{ color: "#7b7086" }}
              >
                <span>
                  Acc: <b style={{ color: "#1a1229" }}>95.27%</b>
                </span>

                <span>
                  Prec: <b style={{ color: "#1a1229" }}>58.07%</b>
                </span>

                <span>
                  Rec: <b style={{ color: "#1a1229" }}>95.50%</b>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* SECCIÓN AMPLIADA PARA LAS MATRICES REALES (AHORA GRANDE Y ABAJO) */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {/* REGRESIÓN LOGÍSTICA */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center bg-white"
            style={{
              border: "1px solid rgba(116,35,132,0.18)",
              boxShadow: "0 4px 12px rgba(116,35,132,0.08)",
            }}
          >
            <h3
              className="text-lg font-bold mb-4 self-start"
              style={{ color: "#1a1229", fontFamily: "Outfit, sans-serif" }}
            >
              Regresión Logística
            </h3>

            <div className="w-full h-[420px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-2">
              <img
                src={regresionLogistica}
                alt="Matriz de confusión - Regresión Logística"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* ÁRBOL DE DECISIÓN */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center bg-white"
            style={{
              border: "1px solid rgba(116,35,132,0.18)",
              boxShadow: "0 4px 12px rgba(116,35,132,0.08)",
            }}
          >
            <h3
              className="text-lg font-bold mb-4 self-start"
              style={{ color: "#1a1229", fontFamily: "Outfit, sans-serif" }}
            >
              Árbol de Decisión
            </h3>

            <div className="w-full h-[420px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-2">
              <img
                src={arbolDecision}
                alt="Matriz de confusión - Árbol de Decisión"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}