import { useState, useEffect, useRef } from "react";
import {
  Shield, AlertTriangle, Target, Database, BarChart2,
  Cpu, Brain, Zap, Play, CheckCircle2, Menu, X,
  ChevronDown, ChevronRight,
} from "lucide-react";

import Hero from "./sections/Hero";
import Problematica from "./sections/Problematica";
import Objetivos from "./sections/Objetivos";
import DatasetValidacion from "./sections/DatasetValidacion";
import DatasetVariables from "./sections/DatasetVariables";
import DatasetGeneracion from "./sections/DatasetGeneracion";
import AnalisisDistrib from "./sections/AnalisisDistrib";
import AnalisisSeñales from "./sections/AnalisisSeñales";
import AnalisisCorrelacion from "./sections/AnalisisCorrelacion";
import MLPreparacion from "./sections/MLPreparacion";
import MLModelos from "./sections/MLModelos";
import MLMetricas from "./sections/MLMetricas";
import MLMatriz from "./sections/MLMatriz";
import PyTorchNN from "./sections/PyTorchNN";
import TensorFlowNN from "./sections/TensorFlowNN";
import Comparacion from "./sections/Comparacion";
import ModeloFinal from "./sections/ModeloFinal";
import Demo from "./sections/Demo";
import Conclusiones from "./sections/Conclusiones";

interface NavChild { id: string; label: string }
interface NavGroup {
  id: string; label: string; icon: React.ElementType;
  children?: NavChild[];
}

const nav: NavGroup[] = [
  { id: "hero", label: "Inicio", icon: Shield },
  { id: "problematica", label: "01 Problemática", icon: AlertTriangle },
  { id: "objetivos", label: "02 Objetivos", icon: Target },
  {
    id: "dataset", label: "03 Dataset", icon: Database,
    children: [
      { id: "dataset-validacion", label: "Validación" },
      { id: "dataset-variables", label: "Variables" },
      { id: "dataset-generacion", label: "Generación y Riesgo" },
    ],
  },
  {
    id: "analisis", label: "04 Análisis", icon: BarChart2,
    children: [
      { id: "analisis-distribucion", label: "Distribución" },
      { id: "analisis-senales", label: "Señales de fraude" },
      { id: "analisis-correlacion", label: "Correlación" },
    ],
  },
  {
    id: "ml", label: "05 Machine Learning", icon: Cpu,
    children: [
      { id: "ml-preparacion", label: "Preparación" },
      { id: "ml-modelos", label: "Modelos" },
      { id: "ml-metricas", label: "Métricas" },
      { id: "ml-matriz", label: "Matriz de confusión" },
    ],
  },
  {
    id: "rna", label: "06 Redes Neuronales", icon: Brain,
    children: [
      { id: "rna-pytorch", label: "PyTorch" },
      { id: "rna-tensorflow", label: "TensorFlow / Keras" },
    ],
  },
  {
    id: "comparacion", label: "07 Comparación", icon: BarChart2,
    children: [
      { id: "comparacion-resultados", label: "Resultados" },
      { id: "comparacion-ganador", label: "Modelo ganador" },
    ],
  },
  { id: "demo", label: "08 Demo Final", icon: Play },
  { id: "conclusiones", label: "Conclusiones", icon: CheckCircle2 },
];

const allIds = nav.flatMap(g => g.children ? [g.id, ...g.children.map(c => c.id)] : [g.id]);

export default function App() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState<Record<string, boolean>>({
    dataset: true, analisis: true, ml: true, rna: true, comparacion: true,
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const isGroupActive = (g: NavGroup) => {
    if (active === g.id) return true;
    return g.children?.some(c => c.id === active) ?? false;
  };

  const SidebarContent = () => (
    <>
      {/* Logo — yape.ia style */}
      <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #742384, #00b894)" }}>
            <Shield size={15} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-black leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span className="text-white">yape</span>
              <span style={{ color: "#00b894" }}>.ml</span>
            </div>
            <div className="text-xs font-mono" style={{ color: "#6b5ea8", fontSize: 10 }}>Detección de Fraude</div>
          </div>
        </div>
        {/* Status badge */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(0,184,148,0.12)", border: "1px solid rgba(0,184,148,0.28)" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" style={{ background: "#00d4aa" }} />
          <span className="text-xs font-mono font-semibold" style={{ color: "#00b894", fontSize: 10 }}>Sistema Activo</span>
        </div>
      </div>

      {/* Nav items */}
      <div className="py-3 px-2 space-y-0.5 flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* Section label */}
        <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-widest" style={{ color: "#4a3d7a", fontSize: 9 }}>
          Navegación
        </p>

        {nav.map(group => {
          const Icon = group.icon;
          const isActive = isGroupActive(group);
          const isExpanded = open[group.id];

          if (!group.children) {
            return (
              <button key={group.id} onClick={() => scrollTo(group.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all text-xs ${
                  active === group.id ? "nav-active font-semibold" : "hover:bg-white/5"
                }`}
                style={{ color: active === group.id ? "#c4b5fd" : "#7b6daa" }}
              >
                <Icon size={13} style={{ color: active === group.id ? "#a78bfa" : "#5a4d8a" }} />
                {group.label}
                {active === group.id && <ChevronRight size={10} className="ml-auto" style={{ color: "#a78bfa" }} />}
              </button>
            );
          }

          return (
            <div key={group.id}>
              <button
                onClick={() => setOpen(p => ({ ...p, [group.id]: !p[group.id] }))}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all text-xs hover:bg-white/5 ${isActive ? "font-semibold" : ""}`}
                style={{ color: isActive ? "#c4b5fd" : "#7b6daa" }}
              >
                <Icon size={13} style={{ color: isActive ? "#a78bfa" : "#5a4d8a" }} />
                <span className="flex-1">{group.label}</span>
                <ChevronDown size={10} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  style={{ color: isActive ? "#a78bfa" : "#5a4d8a" }} />
              </button>

              {isExpanded && (
                <div className="ml-5 mt-0.5 space-y-0.5 border-l pl-3" style={{ borderColor: "rgba(124,58,237,0.22)" }}>
                  {group.children.map(child => (
                    <button key={child.id} onClick={() => scrollTo(child.id)}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-all ${
                        active === child.id ? "font-semibold" : "hover:bg-white/5"
                      }`}
                      style={{ fontSize: 11, color: active === child.id ? "#c4b5fd" : "#6b5ea8",
                        background: active === child.id ? "rgba(124,58,237,0.18)" : "transparent" }}>
                      {active === child.id && <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00d4aa" }} />}
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(124,58,237,0.15)" }}>
        <p className="text-center font-mono" style={{ color: "#4a3d7a", fontSize: 10 }}>
          Ciencia de Datos · ML · 2024
        </p>
      </div>
    </>
  );

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      {/* Desktop sidebar */}
      <nav className="sidebar hidden lg:flex flex-col">
        <SidebarContent />
      </nav>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{ background: "var(--bg-sidebar)", borderBottom: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7c3aed, #10b981)" }}>
            <Shield size={12} className="text-white" />
          </div>
          <span className="text-xs font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>Fraude Yape ML</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-400">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40" onClick={() => setMobileOpen(false)}>
          <div className="w-64 h-full flex flex-col pt-14" onClick={e => e.stopPropagation()}
            style={{ background: "var(--bg-sidebar)", borderRight: "1px solid rgba(124,58,237,0.22)" }}>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="lg:ml-[220px]">
        <Hero onNavigate={scrollTo} />
        <Problematica />
        <Objetivos />
        <DatasetValidacion />
        <DatasetVariables />
        <DatasetGeneracion />
        <AnalisisDistrib />
        <AnalisisSeñales />
        <AnalisisCorrelacion />
        <MLPreparacion />
        <MLModelos />
        <MLMetricas />
        <MLMatriz />
        <PyTorchNN />
        <TensorFlowNN />
        <Comparacion />
        <ModeloFinal />
        <Demo />
        <Conclusiones />

        <footer className="py-6 text-center" style={{ borderTop: "1px solid rgba(124,58,237,0.18)", background: "var(--bg-sidebar)" }}>
          <p className="text-xs text-gray-700 font-mono">Detección de Fraude en Yape · Machine Learning · Jesús · Jakelin · Jhoshef · Rose</p>
        </footer>
      </main>
    </div>
  );
}
