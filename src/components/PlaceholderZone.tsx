interface PlaceholderZoneProps {
  label: string;
  icon?: string;
  minHeight?: number;
  accent?: "purple" | "emerald" | "red" | "yellow" | "blue";
}

const accentMap = {
  purple: { border: "rgba(124,58,237,0.25)", bg: "rgba(124,58,237,0.04)", text: "#7c3aed" },
  emerald: { border: "rgba(16,185,129,0.25)", bg: "rgba(16,185,129,0.04)", text: "#10b981" },
  red: { border: "rgba(239,68,68,0.25)", bg: "rgba(239,68,68,0.04)", text: "#ef4444" },
  yellow: { border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.04)", text: "#f59e0b" },
  blue: { border: "rgba(59,130,246,0.25)", bg: "rgba(59,130,246,0.04)", text: "#3b82f6" },
};

export function PlaceholderZone({
  label,
  icon = "📊",
  minHeight = 280,
  accent = "purple",
}: PlaceholderZoneProps) {
  const c = accentMap[accent];
  return (
    <div
      className="rounded-xl flex flex-col items-center justify-center gap-4 text-center p-6 w-full h-full"
      style={{
        minHeight,
        border: `1.5px dashed ${c.border}`,
        background: c.bg,
      }}
    >
      <span className="text-4xl opacity-25">{icon}</span>
      <p
        className="text-xs font-mono leading-relaxed max-w-[200px] tracking-wide uppercase"
        style={{ color: c.text, opacity: 0.5 }}
      >
        {label}
      </p>
    </div>
  );
}
